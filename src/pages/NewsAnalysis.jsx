import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  ArrowLeft, 
  Share2, 
  Download, 
  Flag, 
  ExternalLink,
  Clock,
  User,
  Globe,
  TrendingUp,
  Eye,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  BarChart3,
  Shield,
  AlertCircle
} from 'lucide-react';

const NewsAnalysis = ({ darkMode }) => {
  const location = useLocation();
  const [analysisData, setAnalysisData] = useState(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);

  // Mock analysis data - in real app, this would come from props or API
  useEffect(() => {
    // Simulate receiving analysis data
    const mockData = {
      content: location.state?.content || "Breaking: Scientists discover new method to detect deepfakes with 99.9% accuracy using quantum computing algorithms. The breakthrough could revolutionize digital security and combat misinformation at unprecedented scale.",
      contentType: location.state?.contentType || 'text',
      result: {
        status: Math.random() > 0.6 ? 'real' : Math.random() > 0.3 ? 'fake' : 'suspicious',
        confidence: 0.87 + Math.random() * 0.12,
        timestamp: new Date().toISOString(),
        processingTime: '2.3s'
      },
      analysis: {
        factCheck: {
          score: 0.92,
          verifiedClaims: 3,
          unverifiedClaims: 1,
          sources: [
            { name: 'Nature Journal', credibility: 0.95, url: 'https://nature.com' },
            { name: 'MIT Technology Review', credibility: 0.91, url: 'https://technologyreview.com' },
            { name: 'IEEE Spectrum', credibility: 0.88, url: 'https://spectrum.ieee.org' }
          ]
        },
        linguisticAnalysis: {
          sentimentScore: 0.15,
          biasScore: 0.23,
          emotionalLanguage: 0.31,
          clickbaitScore: 0.45
        },
        sourceCredibility: {
          authorCredibility: 0.89,
          publicationCredibility: 0.94,
          domainAge: '15 years',
          sslCertified: true
        },
        socialSignals: {
          shares: 1247,
          likes: 892,
          comments: 156,
          viralityScore: 0.67
        }
      },
      explanation: "This content demonstrates high factual accuracy with claims that can be verified through multiple credible scientific sources. The language is professional and objective, typical of legitimate scientific reporting. However, some technical claims require expert verification.",
      recommendations: [
        "Cross-reference with additional scientific publications",
        "Verify specific technical claims with domain experts",
        "Check for peer-reviewed research supporting the claims",
        "Monitor for updates or corrections from original sources"
      ],
      riskFactors: [
        "Emerging technology claims may be preliminary",
        "Technical complexity makes verification challenging",
        "Limited independent confirmation available"
      ]
    };

    setAnalysisData(mockData);
  }, [location.state]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'real': return darkMode ? 'text-green-400 bg-green-400/10 border-green-400/20' : 'text-green-600 bg-green-50 border-green-200';
      case 'fake': return darkMode ? 'text-red-400 bg-red-400/10 border-red-400/20' : 'text-red-600 bg-red-50 border-red-200';
      case 'suspicious': return darkMode ? 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' : 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return darkMode ? 'text-gray-400 bg-gray-400/10 border-gray-400/20' : 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'real': return <CheckCircle className="h-5 w-5" />;
      case 'fake': return <XCircle className="h-5 w-5" />;
      case 'suspicious': return <AlertTriangle className="h-5 w-5" />;
      default: return <AlertTriangle className="h-5 w-5" />;
    }
  };

  const handleReport = async () => {
    if (!reportReason) return;
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setReportSubmitted(true);
    
    setTimeout(() => {
      setShowReportModal(false);
      setReportSubmitted(false);
      setReportReason('');
    }, 2000);
  };

  const shareAnalysis = () => {
    if (navigator.share) {
      navigator.share({
        title: 'TruthGuard Analysis Results',
        text: `Content analyzed with ${Math.round(analysisData.result.confidence * 100)}% confidence`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!analysisData) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <Link
            to="/detect"
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode 
                ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Detection</span>
          </Link>

          <div className="flex items-center space-x-3">
            <button
              onClick={shareAnalysis}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}
            >
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
            
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}
            >
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </motion.div>

        {/* Main Analysis Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`rounded-2xl p-8 mb-8 ${
            darkMode 
              ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700' 
              : 'bg-white border border-gray-200 shadow-lg'
          }`}
        >
          {/* Status Header */}
          <div className="flex items-center justify-between mb-6">
            <div className={`flex items-center space-x-3 px-4 py-2 rounded-full border ${getStatusColor(analysisData.result.status)}`}>
              {getStatusIcon(analysisData.result.status)}
              <span className="font-semibold capitalize">{analysisData.result.status}</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Clock className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                  {analysisData.result.processingTime}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                  Verified Analysis
                </span>
              </div>
            </div>
          </div>

          {/* Content Preview */}
          <div className={`rounded-xl p-6 mb-6 ${
            darkMode ? 'bg-gray-700/30' : 'bg-gray-50'
          }`}>
            <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Analyzed Content
            </h3>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              "{analysisData.content}"
            </p>
          </div>

          {/* Confidence Score */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Confidence Score
              </h3>
              <span className={`text-2xl font-bold ${
                analysisData.result.confidence > 0.8 ? 'text-green-400' : 
                analysisData.result.confidence > 0.6 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {Math.round(analysisData.result.confidence * 100)}%
              </span>
            </div>
            <div className={`w-full rounded-full h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${analysisData.result.confidence * 100}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-4 rounded-full ${
                  analysisData.result.confidence > 0.8 ? 'bg-green-400' : 
                  analysisData.result.confidence > 0.6 ? 'bg-yellow-400' : 'bg-red-400'
                }`}
              ></motion.div>
            </div>
          </div>

          {/* Explanation */}
          <div className="mb-6">
            <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Analysis Explanation
            </h3>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {analysisData.explanation}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowReportModal(true)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-medium transition-colors ${
                darkMode
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
            >
              <Flag className="h-4 w-4" />
              <span>Report as Incorrect</span>
            </button>
            
            <Link
              to="/detect"
              className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-medium transition-colors ${
                darkMode
                  ? 'bg-gray-600 hover:bg-gray-500 text-white'
                  : 'bg-gray-500 hover:bg-gray-600 text-white'
              }`}
            >
              <span>Analyze New Content</span>
            </Link>
          </div>
        </motion.div>

        {/* Detailed Analysis Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Fact Check Analysis */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`rounded-2xl p-6 ${
              darkMode 
                ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Fact Check Analysis
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Overall Score</span>
                <span className="text-green-400 font-bold">
                  {Math.round(analysisData.analysis.factCheck.score * 100)}%
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Verified Claims</span>
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                  {analysisData.analysis.factCheck.verifiedClaims}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Unverified Claims</span>
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                  {analysisData.analysis.factCheck.unverifiedClaims}
                </span>
              </div>
              
              <div className="pt-4 border-t border-gray-600">
                <h4 className={`font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Verified Sources
                </h4>
                <div className="space-y-2">
                  {analysisData.analysis.factCheck.sources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="h-3 w-3 text-blue-400" />
                        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {source.name}
                        </span>
                      </div>
                      <span className="text-xs text-green-400">
                        {Math.round(source.credibility * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Linguistic Analysis */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`rounded-2xl p-6 ${
              darkMode 
                ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="h-6 w-6 text-purple-400" />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Linguistic Analysis
              </h3>
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Sentiment Score', value: analysisData.analysis.linguisticAnalysis.sentimentScore, color: 'blue' },
                { label: 'Bias Detection', value: analysisData.analysis.linguisticAnalysis.biasScore, color: 'yellow' },
                { label: 'Emotional Language', value: analysisData.analysis.linguisticAnalysis.emotionalLanguage, color: 'red' },
                { label: 'Clickbait Score', value: analysisData.analysis.linguisticAnalysis.clickbaitScore, color: 'orange' }
              ].map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{metric.label}</span>
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                      {Math.round(metric.value * 100)}%
                    </span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className={`h-2 rounded-full bg-${metric.color}-400`}
                      style={{ width: `${metric.value * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Source Credibility */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`rounded-2xl p-6 ${
              darkMode 
                ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <User className="h-6 w-6 text-blue-400" />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Source Credibility
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Author Credibility</span>
                <span className="text-blue-400 font-bold">
                  {Math.round(analysisData.analysis.sourceCredibility.authorCredibility * 100)}%
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Publication Credibility</span>
                <span className="text-blue-400 font-bold">
                  {Math.round(analysisData.analysis.sourceCredibility.publicationCredibility * 100)}%
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Domain Age</span>
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                  {analysisData.analysis.sourceCredibility.domainAge}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>SSL Certified</span>
                <span className="text-green-400">
                  {analysisData.analysis.sourceCredibility.sslCertified ? '✓ Yes' : '✗ No'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Signals */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`rounded-2xl p-6 ${
              darkMode 
                ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="h-6 w-6 text-green-400" />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Social Signals
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Share2 className="h-4 w-4 text-blue-400" />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Shares</span>
                </div>
                <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {analysisData.analysis.socialSignals.shares.toLocaleString()}
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <ThumbsUp className="h-4 w-4 text-green-400" />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Likes</span>
                </div>
                <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {analysisData.analysis.socialSignals.likes.toLocaleString()}
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <MessageSquare className="h-4 w-4 text-purple-400" />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Comments</span>
                </div>
                <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {analysisData.analysis.socialSignals.comments.toLocaleString()}
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Eye className="h-4 w-4 text-yellow-400" />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Virality</span>
                </div>
                <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {Math.round(analysisData.analysis.socialSignals.viralityScore * 100)}%
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recommendations and Risk Factors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recommendations */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`rounded-2xl p-6 ${
              darkMode 
                ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Recommendations
              </h3>
            </div>
            
            <div className="space-y-3">
              {analysisData.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {rec}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Risk Factors */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={`rounded-2xl p-6 ${
              darkMode 
                ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <AlertCircle className="h-6 w-6 text-yellow-400" />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Risk Factors
              </h3>
            </div>
            
            <div className="space-y-3">
              {analysisData.riskFactors.map((risk, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {risk}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`max-w-md w-full rounded-2xl p-6 ${
              darkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}
          >
            {reportSubmitted ? (
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Report Submitted
                </h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Thank you for your feedback. We'll review this analysis.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center space-x-3 mb-6">
                  <Flag className="h-6 w-6 text-red-400" />
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Report Analysis
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Why is this analysis incorrect?
                    </label>
                    <select
                      value={reportReason}
                      onChange={(e) => setReportReason(e.target.value)}
                      className={`w-full rounded-lg px-3 py-2 border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select a reason</option>
                      <option value="wrong_classification">Wrong classification (Real/Fake/Suspicious)</option>
                      <option value="incorrect_confidence">Confidence score is inaccurate</option>
                      <option value="missing_context">Missing important context</option>
                      <option value="source_error">Source verification error</option>
                      <option value="technical_issue">Technical analysis issue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={handleReport}
                      disabled={!reportReason}
                      className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white py-2 rounded-lg font-medium transition-colors"
                    >
                      Submit Report
                    </button>
                    <button
                      onClick={() => setShowReportModal(false)}
                      className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                      }`}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default NewsAnalysis;