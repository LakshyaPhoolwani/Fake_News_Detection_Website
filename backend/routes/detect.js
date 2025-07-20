/**
 * Detection routes for handling fake news detection requests
 * Defines the POST /text endpoint that integrates with RapidAPI
 */

const express = require('express');
const router = express.Router();
const detectController = require('../controllers/detectController');

/**
 * Validation middleware for text detection requests
 * Ensures the request body contains valid text data
 */
const validateTextRequest = (req, res, next) => {
  const { text } = req.body;
  
  // Check if text field exists
  if (!text) {
    return res.status(400).json({
      success: false,
      error: 'Missing required field',
      message: 'Text field is required in request body'
    });
  }
  
  // Check if text is a string
  if (typeof text !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Invalid data type',
      message: 'Text field must be a string'
    });
  }
  
  // Check if text is not empty
  if (text.trim().length === 0) {
    return res.status(400).json({
      success: false,
      error: 'Empty text',
      message: 'Text field cannot be empty'
    });
  }
  
  // Check text length (reasonable limit)
  if (text.length > 50000) {
    return res.status(400).json({
      success: false,
      error: 'Text too long',
      message: 'Text field cannot exceed 50,000 characters'
    });
  }
  
  next();
};

/**
 * @route   POST /api/detect/text
 * @desc    Detect fake news in text content using RapidAPI
 * @access  Public
 * @body    { text: string }
 * @returns JSON response from RapidAPI or error message
 */
router.post('/text', validateTextRequest, detectController.detectText);

/**
 * @route   GET /api/detect
 * @desc    Get information about available detection endpoints
 * @access  Public
 */
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Fake News Detection API Endpoints',
    endpoints: {
      textDetection: {
        method: 'POST',
        path: '/api/detect/text',
        description: 'Analyze text content for fake news detection using RapidAPI',
        bodyFormat: {
          text: 'string (required, max 50,000 characters)'
        },
        example: {
          text: "Breaking news: Scientists discover new planet in our solar system"
        }
      }
    },
    integration: {
      service: 'RapidAPI Fake News Detection',
      url: 'https://fake-news-detection.p.rapidapi.com/fakenews'
    }
  });
});

module.exports = router;