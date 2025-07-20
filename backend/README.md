# Fake News Detection Backend API

A Node.js + Express backend service for the TruthGuard fake news detection platform. This API serves as a gateway to Python-based AI microservices for analyzing text, images, and videos.

## 🚀 Features

- **REST API** with three main detection endpoints
- **Microservice Architecture** - Forwards requests to specialized Python services
- **Input Validation** - Comprehensive request validation and sanitization
- **Error Handling** - Robust error handling with detailed error responses
- **Rate Limiting** - Protection against abuse with configurable limits
- **CORS Support** - Cross-origin resource sharing for frontend integration
- **Security** - Helmet.js for security headers and best practices
- **Logging** - Request logging with Morgan
- **Health Checks** - Service status monitoring and health endpoints

## 📋 API Endpoints

### Detection Endpoints

#### Text Detection
```http
POST /api/detect/text
Content-Type: application/json

{
  "text": "Your text content to analyze"
}
```

#### Image Detection
```http
POST /api/detect/image
Content-Type: application/json

{
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
}
```

#### Video Detection
```http
POST /api/detect/video
Content-Type: application/json

{
  "video": "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28y..."
}
```
or
```http
POST /api/detect/video
Content-Type: application/json

{
  "video": "https://example.com/video.mp4"
}
```

### Utility Endpoints

#### Health Check
```http
GET /health
```

#### Service Status
```http
GET /api/detect/status
```

#### API Information
```http
GET /api/detect
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16.0.0 or higher
- npm or yarn
- Python microservices running on ports 6001, 6002, 6003

### Installation

1. **Clone and navigate to backend directory**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start the server**
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` |
| `CORS_ORIGIN` | Allowed CORS origin | `http://localhost:3000` |
| `TEXT_SERVICE_URL` | Text detection service URL | `http://localhost:6001` |
| `IMAGE_SERVICE_URL` | Image detection service URL | `http://localhost:6002` |
| `VIDEO_SERVICE_URL` | Video detection service URL | `http://localhost:6003` |
| `API_TIMEOUT` | Request timeout in ms | `30000` |
| `RATE_LIMIT_WINDOW_MS` | Rate limit window | `900000` |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window | `100` |

### Microservice Requirements

The backend expects Python microservices to be running with the following specifications:

#### Text Service (Port 6001)
- **Endpoint**: `POST /predict`
- **Input**: `{ "text": "content", "request_id": "id", "timestamp": "iso_date" }`
- **Output**: `{ "prediction": "fake|real", "confidence": 0.95, "processing_time": "1.2s" }`

#### Image Service (Port 6002)
- **Endpoint**: `POST /predict`
- **Input**: `{ "image": "base64_string", "request_id": "id", "timestamp": "iso_date" }`
- **Output**: `{ "prediction": "fake|real", "confidence": 0.87, "processing_time": "2.1s" }`

#### Video Service (Port 6003)
- **Endpoint**: `POST /predict`
- **Input**: `{ "video": "base64_string", "video_url": "url", "request_id": "id", "timestamp": "iso_date" }`
- **Output**: `{ "prediction": "fake|real", "confidence": 0.92, "processing_time": "5.3s" }`

## 📁 Project Structure

```
backend/
├── app.js                 # Main server application
├── routes/
│   └── detect.js         # Detection route definitions
├── controllers/
│   └── detectController.js # Detection logic and microservice communication
├── package.json          # Dependencies and scripts
├── .env                  # Environment configuration
└── README.md            # This file
```

## 🔒 Security Features

- **Helmet.js** - Security headers
- **Rate Limiting** - Prevents API abuse
- **Input Validation** - Validates all request data
- **CORS Configuration** - Controlled cross-origin access
- **Error Sanitization** - Prevents information leakage

## 📊 Response Format

### Success Response
```json
{
  "success": true,
  "contentType": "text|image|video",
  "result": {
    "prediction": "fake|real",
    "confidence": 0.95,
    "isFakeNews": false,
    "label": "real"
  },
  "analysis": {
    "processingTime": "1.2s",
    "modelVersion": "v2.1.0",
    "features": {...},
    "explanation": "Analysis details..."
  },
  "metadata": {
    "timestamp": "2024-01-15T10:30:00.000Z",
    "serviceVersion": "1.0.0",
    "requestId": "req_1705312200000_abc123def"
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Service unavailable",
  "message": "Text detection service is currently unavailable. Please try again later.",
  "details": {
    "service": "Text",
    "status": "offline",
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
}
```

## 🚦 Status Codes

- `200` - Success
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `413` - Payload Too Large
- `429` - Too Many Requests
- `500` - Internal Server Error
- `503` - Service Unavailable

## 🧪 Testing

Test the API endpoints using curl or any HTTP client:

```bash
# Test text detection
curl -X POST http://localhost:5000/api/detect/text \
  -H "Content-Type: application/json" \
  -d '{"text": "Breaking news: Scientists discover new planet!"}'

# Check service status
curl http://localhost:5000/api/detect/status

# Health check
curl http://localhost:5000/health
```

## 📝 Logging

The application uses Morgan for HTTP request logging:
- **Development**: Detailed colored logs
- **Production**: Combined format logs

## 🔧 Troubleshooting

### Common Issues

1. **Microservice Connection Errors**
   - Ensure Python services are running on correct ports
   - Check firewall settings
   - Verify service URLs in `.env`

2. **Large File Upload Issues**
   - Increase `API_TIMEOUT` for large files
   - Check file size limits (default 50MB)

3. **CORS Issues**
   - Verify `CORS_ORIGIN` matches your frontend URL
   - Check allowed headers configuration

## 📄 License

MIT License - see LICENSE file for details.