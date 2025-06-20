import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Image, Video, Upload, AlertTriangle, CheckCircle, XCircle, Send, Loader, Link as LinkIcon } from 'lucide-react';

const Detect = ({ darkMode }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('text');
  const [textInput, setTextInput] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const tabs = [
    { id: 'text', label: 'Text Detection', icon: FileText, color: 'blue' },
    { id: 'image', label: 'Image Detection', icon: Image, color: 'green' },
    { id: 'video', label: 'Video Detection', icon: Video, color: 'purple' }
  ];

  const simulateAnalysis = async (content, type) => {
    setIsAnalyzing(true);

    // Simulate API call with realistic delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    setIsAnalyzing(false);
    
    // Navigate to results page with analysis data
    navigate('/news-analysis', {
      state: {
        content: content || 'Uploaded content',
        contentType: type,
        timestamp: new Date().toISOString()
      }
    });
  };

  const getTabColor = (tabColor) => {
    const colors = {
      blue: 'from-blue-500 to-cyan-500',
      green: 'from-green-500 to-emerald-500',
      purple: 'from-purple-500 to-pink-500'
    };
    return colors[tabColor] || colors.blue;
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            AI-Powered <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Detection Tool</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Upload your content and get instant analysis with detailed explanations and confidence scores
          </p>
        </motion.div>

        <div className={`rounded-2xl p-8 ${
          darkMode 
            ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700' 
            : 'bg-white border border-gray-200 shadow-lg'
        }`}>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            <div className={`p-1 rounded-xl flex space-x-1 ${
              darkMode ? 'bg-gray-700/50' : 'bg-gray-100'
            }`}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setUploadedFile(null);
                    setTextInput('');
                    setVideoUrl('');
                  }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? darkMode 
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                        : 'bg-blue-500 text-white shadow-lg transform scale-105'
                      : darkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-600/50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:block">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {activeTab === 'text' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <label className={`block text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Enter text content to analyze
                </label>
                <textarea
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Paste news article, social media post, or any text content here..."
                  rows={8}
                  className={`w-full rounded-xl px-4 py-3 transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  }`}
                />
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => simulateAnalysis(textInput, 'text')}
                    disabled={!textInput.trim() || isAnalyzing}
                    className={`flex-1 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2 ${
                      darkMode
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 disabled:from-gray-400 disabled:to-gray-500 text-white'
                    }`}
                  >
                    {isAnalyzing ? <Loader className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                    <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Text'}</span>
                  </button>
                  <button
                    onClick={() => setTextInput('')}
                    className={`px-6 py-4 rounded-xl font-medium transition-colors ${
                      darkMode 
                        ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                        : 'bg-gray-300 hover:bg-gray-400 text-gray-900'
                    }`}
                  >
                    Clear
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'image' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <label className={`block text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Upload image for verification
                </label>
                <div className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors duration-300 ${
                  darkMode 
                    ? 'border-gray-600 hover:border-green-500' 
                    : 'border-gray-300 hover:border-green-400'
                }`}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className={`h-12 w-12 mx-auto mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {uploadedFile ? uploadedFile.name : 'Drag and drop an image, or click to browse'}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      Supports JPG, PNG, WebP (Max 10MB)
                    </p>
                  </label>
                </div>
                <button
                  onClick={() => simulateAnalysis('', 'image')}
                  disabled={!uploadedFile || isAnalyzing}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2 ${
                    darkMode
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white'
                      : 'bg-gradient-to-r from-green-600 to-blue-700 hover:from-green-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white'
                  }`}
                >
                  {isAnalyzing ? <Loader className="h-5 w-5 animate-spin" /> : <Image className="h-5 w-5" />}
                  <span>{isAnalyzing ? 'Analyzing...' : 'Verify Image'}</span>
                </button>
              </motion.div>
            )}

            {activeTab === 'video' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <label className={`block text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Upload video or paste YouTube link
                </label>
                
                <div className="space-y-4">
                  <div className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors duration-300 ${
                    darkMode 
                      ? 'border-gray-600 hover:border-purple-500' 
                      : 'border-gray-300 hover:border-purple-400'
                  }`}>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="video-upload"
                    />
                    <label htmlFor="video-upload" className="cursor-pointer">
                      <Video className={`h-12 w-12 mx-auto mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {uploadedFile ? uploadedFile.name : 'Drag and drop a video, or click to browse'}
                      </p>
                      <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        Supports MP4, MOV, AVI (Max 100MB)
                      </p>
                    </label>
                  </div>
                  
                  <div className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>OR</div>
                  
                  <div className="space-y-2">
                    <label className={`block font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      YouTube URL
                    </label>
                    <div className="flex space-x-2">
                      <div className="flex-1 relative">
                        <LinkIcon className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`} />
                        <input
                          type="url"
                          value={videoUrl}
                          onChange={(e) => setVideoUrl(e.target.value)}
                          placeholder="https://youtube.com/watch?v=..."
                          className={`w-full pl-10 rounded-xl px-4 py-3 transition-all duration-300 ${
                            darkMode 
                              ? 'bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent' 
                              : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => simulateAnalysis(videoUrl || 'uploaded video', 'video')}
                  disabled={(!uploadedFile && !videoUrl.trim()) || isAnalyzing}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2 ${
                    darkMode
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 disabled:from-gray-400 disabled:to-gray-500 text-white'
                  }`}
                >
                  {isAnalyzing ? <Loader className="h-5 w-5 animate-spin" /> : <Video className="h-5 w-5" />}
                  <span>{isAnalyzing ? 'Analyzing...' : 'Detect Deepfakes'}</span>
                </button>
              </motion.div>
            )}
          </div>

          {/* Loading Animation */}
          {isAnalyzing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-center space-y-4"
            >
              <div className="inline-flex items-center space-x-2">
                <div className={`animate-spin rounded-full h-6 w-6 border-b-2 ${
                  darkMode ? 'border-blue-400' : 'border-blue-600'
                }`}></div>
                <span className={`font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Processing with AI models...
                </span>
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Analyzing content across multiple detection algorithms
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Detect;