/**
 * Controller functions for fake news detection endpoints
 * Handles communication with RapidAPI's Fake News Detection service
 */

const axios = require('axios');

/**
 * RapidAPI configuration
 * Sets up the base URL and headers for API requests
 */
const RAPIDAPI_CONFIG = {
  baseURL: 'https://fake-news-detection.p.rapidapi.com',
  timeout: 30000, // 30 second timeout
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'fake-news-detection.p.rapidapi.com'
  }
};

/**
 * Create axios instance with RapidAPI configuration
 */
const rapidAPIClient = axios.create(RAPIDAPI_CONFIG);

/**
 * Generate a unique request ID for logging and tracking
 * @returns {string} Unique request identifier
 */
const generateRequestId = () => {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Detect fake news in text content using RapidAPI
 * @route POST /api/detect/text
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const detectText = async (req, res) => {
  const requestId = generateRequestId();
  
  try {
    const { text } = req.body;
    
    console.log(`[${requestId}] Processing fake news detection request`);
    console.log(`[${requestId}] Text length: ${text.length} characters`);
    
    // Check if RapidAPI key is configured
    if (!process.env.RAPIDAPI_KEY) {
      console.error(`[${requestId}] RapidAPI key not configured`);
      return res.status(500).json({
        error: 'Fake news detection service unavailable',
        message: 'API key not configured'
      });
    }
    
    // Prepare request payload for RapidAPI
    const payload = {
      text: text.trim()
    };
    
    console.log(`[${requestId}] Sending request to RapidAPI...`);
    
    // Send request to RapidAPI's Fake News Detection service
    const response = await rapidAPIClient.post('/fakenews', payload);
    
    console.log(`[${requestId}] RapidAPI request successful`);
    console.log(`[${requestId}] Response status: ${response.status}`);
    
    // Return the response from RapidAPI directly to the frontend
    res.status(200).json(response.data);
    
  } catch (error) {
    console.error(`[${requestId}] Error occurred:`, error.message);
    
    // Handle different types of errors
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      console.error(`[${requestId}] Network connection error`);
      return res.status(503).json({
        error: 'Fake news detection service unavailable',
        message: 'Unable to connect to detection service'
      });
    }
    
    if (error.code === 'ETIMEDOUT') {
      console.error(`[${requestId}] Request timeout`);
      return res.status(504).json({
        error: 'Fake news detection service unavailable',
        message: 'Detection service request timed out'
      });
    }
    
    if (error.response) {
      // RapidAPI returned an error response
      console.error(`[${requestId}] RapidAPI error response:`, {
        status: error.response.status,
        data: error.response.data
      });
      
      // Handle specific RapidAPI error codes
      if (error.response.status === 401) {
        return res.status(500).json({
          error: 'Fake news detection service unavailable',
          message: 'API authentication failed'
        });
      }
      
      if (error.response.status === 403) {
        return res.status(500).json({
          error: 'Fake news detection service unavailable',
          message: 'API access forbidden'
        });
      }
      
      if (error.response.status === 429) {
        return res.status(429).json({
          error: 'Fake news detection service unavailable',
          message: 'API rate limit exceeded'
        });
      }
      
      // Generic API error
      return res.status(500).json({
        error: 'Fake news detection service unavailable',
        message: 'Detection service returned an error'
      });
    }
    
    // Generic error fallback
    console.error(`[${requestId}] Unexpected error:`, error);
    res.status(500).json({
      error: 'Fake news detection service unavailable',
      message: 'An unexpected error occurred'
    });
  }
};

/**
 * Health check for RapidAPI service
 * This function can be used to verify if the RapidAPI service is accessible
 * @returns {Promise<boolean>} True if service is accessible, false otherwise
 */
const checkRapidAPIHealth = async () => {
  try {
    // Simple test request to check if the service is accessible
    await rapidAPIClient.post('/fakenews', { text: 'test' });
    return true;
  } catch (error) {
    console.error('RapidAPI health check failed:', error.message);
    return false;
  }
};

module.exports = {
  detectText,
  checkRapidAPIHealth
};