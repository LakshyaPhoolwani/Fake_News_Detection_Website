/**
 * Controller functions for fake news detection endpoints
 * Handles communication with Python microservices
 */

const axios = require('axios');

// Configure axios defaults
const axiosConfig = {
  timeout: parseInt(process.env.API_TIMEOUT) || 30000,
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'TruthGuard-API/1.0'
  }
};

// Create axios instances for each microservice
const textServiceAPI = axios.create({
  baseURL: process.env.TEXT_SERVICE_URL || 'http://localhost:6001',
  ...axiosConfig
});

const imageServiceAPI = axios.create({
  baseURL: process.env.IMAGE_SERVICE_URL || 'http://localhost:6002',
  ...axiosConfig
});

const videoServiceAPI = axios.create({
  baseURL: process.env.VIDEO_SERVICE_URL || 'http://localhost:6003',
  ...axiosConfig
});

/**
 * Helper function to format detection response
 * @param {Object} serviceResponse - Response from Python microservice
 * @param {string} contentType - Type of content analyzed
 * @returns {Object} Formatted response
 */
const formatDetectionResponse = (serviceResponse, contentType) => {
  const { data } = serviceResponse;
  
  return {
    success: true,
    contentType,
    result: {
      prediction: data.prediction || data.result || 'unknown',
      confidence: data.confidence || data.score || 0,
      isFakeNews: data.is_fake || data.isFake || (data.prediction === 'fake'),
      label: data.label || data.prediction || 'unknown'
    },
    analysis: {
      processingTime: data.processing_time || data.processingTime || null,
      modelVersion: data.model_version || data.modelVersion || null,
      features: data.features || null,
      explanation: data.explanation || null
    },
    metadata: {
      timestamp: new Date().toISOString(),
      serviceVersion: data.version || '1.0.0',
      requestId: data.request_id || generateRequestId()
    }
  };
};

/**
 * Helper function to handle microservice errors
 * @param {Error} error - Axios error object
 * @param {string} serviceName - Name of the microservice
 * @returns {Object} Error response
 */
const handleServiceError = (error, serviceName) => {
  console.error(`${serviceName} Service Error:`, error.message);
  
  if (error.code === 'ECONNREFUSED') {
    return {
      success: false,
      error: 'Service unavailable',
      message: `${serviceName} detection service is currently unavailable. Please try again later.`,
      details: {
        service: serviceName,
        status: 'offline',
        timestamp: new Date().toISOString()
      }
    };
  }
  
  if (error.code === 'ETIMEDOUT') {
    return {
      success: false,
      error: 'Request timeout',
      message: `${serviceName} detection service timed out. The content may be too large or complex.`,
      details: {
        service: serviceName,
        timeout: axiosConfig.timeout,
        timestamp: new Date().toISOString()
      }
    };
  }
  
  if (error.response) {
    return {
      success: false,
      error: 'Service error',
      message: error.response.data?.message || `${serviceName} service returned an error`,
      details: {
        service: serviceName,
        statusCode: error.response.status,
        serviceError: error.response.data,
        timestamp: new Date().toISOString()
      }
    };
  }
  
  return {
    success: false,
    error: 'Unknown error',
    message: `An unexpected error occurred while processing your request with ${serviceName} service`,
    details: {
      service: serviceName,
      error: error.message,
      timestamp: new Date().toISOString()
    }
  };
};

/**
 * Generate a unique request ID
 * @returns {string} Unique request identifier
 */
const generateRequestId = () => {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Detect fake news in text content
 * @route POST /api/detect/text
 */
const detectText = async (req, res) => {
  try {
    const { text } = req.body;
    const requestId = generateRequestId();
    
    console.log(`[${requestId}] Processing text detection request`);
    
    // Prepare request payload for Python microservice
    const payload = {
      text: text.trim(),
      request_id: requestId,
      timestamp: new Date().toISOString()
    };
    
    // Send request to text detection microservice
    const response = await textServiceAPI.post('/predict', payload);
    
    console.log(`[${requestId}] Text detection completed successfully`);
    
    // Format and send response
    const formattedResponse = formatDetectionResponse(response, 'text');
    res.status(200).json(formattedResponse);
    
  } catch (error) {
    const errorResponse = handleServiceError(error, 'Text');
    res.status(error.response?.status || 500).json(errorResponse);
  }
};

/**
 * Detect fake news in image content
 * @route POST /api/detect/image
 */
const detectImage = async (req, res) => {
  try {
    const { image } = req.body;
    const requestId = generateRequestId();
    
    console.log(`[${requestId}] Processing image detection request`);
    
    // Prepare request payload for Python microservice
    const payload = {
      image: image,
      request_id: requestId,
      timestamp: new Date().toISOString()
    };
    
    // Send request to image detection microservice
    const response = await imageServiceAPI.post('/predict', payload);
    
    console.log(`[${requestId}] Image detection completed successfully`);
    
    // Format and send response
    const formattedResponse = formatDetectionResponse(response, 'image');
    res.status(200).json(formattedResponse);
    
  } catch (error) {
    const errorResponse = handleServiceError(error, 'Image');
    res.status(error.response?.status || 500).json(errorResponse);
  }
};

/**
 * Detect fake news in video content
 * @route POST /api/detect/video
 */
const detectVideo = async (req, res) => {
  try {
    const { video } = req.body;
    const requestId = generateRequestId();
    
    console.log(`[${requestId}] Processing video detection request`);
    
    // Determine if video is URL or base64
    const isUrl = video.startsWith('http');
    
    // Prepare request payload for Python microservice
    const payload = {
      [isUrl ? 'video_url' : 'video']: video,
      request_id: requestId,
      timestamp: new Date().toISOString(),
      input_type: isUrl ? 'url' : 'base64'
    };
    
    // Send request to video detection microservice
    const response = await videoServiceAPI.post('/predict', payload);
    
    console.log(`[${requestId}] Video detection completed successfully`);
    
    // Format and send response
    const formattedResponse = formatDetectionResponse(response, 'video');
    res.status(200).json(formattedResponse);
    
  } catch (error) {
    const errorResponse = handleServiceError(error, 'Video');
    res.status(error.response?.status || 500).json(errorResponse);
  }
};

/**
 * Check the status of all detection microservices
 * @route GET /api/detect/status
 */
const getServiceStatus = async (req, res) => {
  const services = [
    { name: 'Text', api: textServiceAPI, url: process.env.TEXT_SERVICE_URL },
    { name: 'Image', api: imageServiceAPI, url: process.env.IMAGE_SERVICE_URL },
    { name: 'Video', api: videoServiceAPI, url: process.env.VIDEO_SERVICE_URL }
  ];
  
  const statusChecks = services.map(async (service) => {
    try {
      const startTime = Date.now();
      await service.api.get('/health', { timeout: 5000 });
      const responseTime = Date.now() - startTime;
      
      return {
        name: service.name,
        status: 'online',
        url: service.url,
        responseTime: `${responseTime}ms`,
        lastChecked: new Date().toISOString()
      };
    } catch (error) {
      return {
        name: service.name,
        status: 'offline',
        url: service.url,
        error: error.message,
        lastChecked: new Date().toISOString()
      };
    }
  });
  
  try {
    const results = await Promise.all(statusChecks);
    const allOnline = results.every(service => service.status === 'online');
    
    res.status(allOnline ? 200 : 503).json({
      success: true,
      overallStatus: allOnline ? 'healthy' : 'degraded',
      services: results,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Status check failed',
      message: 'Unable to check service status',
      timestamp: new Date().toISOString()
    });
  }
};

module.exports = {
  detectText,
  detectImage,
  detectVideo,
  getServiceStatus
};