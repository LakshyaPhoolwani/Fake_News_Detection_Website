/**
 * Detection routes for handling fake news detection requests
 * Defines endpoints for text, image, and video detection
 */

const express = require('express');
const router = express.Router();
const detectController = require('../controllers/detectController');

// Validation middleware for request bodies
const validateTextRequest = (req, res, next) => {
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({
      success: false,
      error: 'Missing required field',
      message: 'Text field is required in request body'
    });
  }
  
  if (typeof text !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Invalid data type',
      message: 'Text field must be a string'
    });
  }
  
  if (text.trim().length === 0) {
    return res.status(400).json({
      success: false,
      error: 'Empty text',
      message: 'Text field cannot be empty'
    });
  }
  
  if (text.length > 10000) {
    return res.status(400).json({
      success: false,
      error: 'Text too long',
      message: 'Text field cannot exceed 10,000 characters'
    });
  }
  
  next();
};

const validateImageRequest = (req, res, next) => {
  const { image } = req.body;
  
  if (!image) {
    return res.status(400).json({
      success: false,
      error: 'Missing required field',
      message: 'Image field is required in request body'
    });
  }
  
  if (typeof image !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Invalid data type',
      message: 'Image field must be a base64-encoded string'
    });
  }
  
  // Basic base64 validation
  const base64Regex = /^data:image\/(jpeg|jpg|png|gif|webp);base64,/;
  if (!base64Regex.test(image)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid image format',
      message: 'Image must be a valid base64-encoded image with proper data URI format'
    });
  }
  
  next();
};

const validateVideoRequest = (req, res, next) => {
  const { video } = req.body;
  
  if (!video) {
    return res.status(400).json({
      success: false,
      error: 'Missing required field',
      message: 'Video field is required in request body'
    });
  }
  
  if (typeof video !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Invalid data type',
      message: 'Video field must be a base64-encoded string or URL'
    });
  }
  
  // Check if it's a URL or base64
  const urlRegex = /^https?:\/\/.+/;
  const base64Regex = /^data:video\/(mp4|avi|mov|wmv|flv|webm);base64,/;
  
  if (!urlRegex.test(video) && !base64Regex.test(video)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid video format',
      message: 'Video must be either a valid URL or base64-encoded video with proper data URI format'
    });
  }
  
  next();
};

/**
 * @route   POST /api/detect/text
 * @desc    Detect fake news in text content
 * @access  Public
 * @body    { text: string }
 */
router.post('/text', validateTextRequest, detectController.detectText);

/**
 * @route   POST /api/detect/image
 * @desc    Detect fake news in image content
 * @access  Public
 * @body    { image: string } - Base64-encoded image
 */
router.post('/image', validateImageRequest, detectController.detectImage);

/**
 * @route   POST /api/detect/video
 * @desc    Detect fake news in video content
 * @access  Public
 * @body    { video: string } - Base64-encoded video or URL
 */
router.post('/video', validateVideoRequest, detectController.detectVideo);

/**
 * @route   GET /api/detect/status
 * @desc    Check the status of all detection services
 * @access  Public
 */
router.get('/status', detectController.getServiceStatus);

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
        description: 'Analyze text content for fake news detection',
        bodyFormat: {
          text: 'string (required, max 10,000 characters)'
        }
      },
      imageDetection: {
        method: 'POST',
        path: '/api/detect/image',
        description: 'Analyze image content for fake news detection',
        bodyFormat: {
          image: 'string (required, base64-encoded image with data URI)'
        }
      },
      videoDetection: {
        method: 'POST',
        path: '/api/detect/video',
        description: 'Analyze video content for fake news detection',
        bodyFormat: {
          video: 'string (required, base64-encoded video with data URI or URL)'
        }
      },
      serviceStatus: {
        method: 'GET',
        path: '/api/detect/status',
        description: 'Check the health status of all detection microservices'
      }
    },
    supportedFormats: {
      images: ['JPEG', 'PNG', 'GIF', 'WebP'],
      videos: ['MP4', 'AVI', 'MOV', 'WMV', 'FLV', 'WebM']
    }
  });
});

module.exports = router;