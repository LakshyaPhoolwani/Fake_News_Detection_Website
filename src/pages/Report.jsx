import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Upload, Send, CheckCircle, FileText, Image, Video, Flag } from 'lucide-react';

const Report = () => {
  const [formData, setFormData] = useState({
    reportType: '',
    contentType: '',
    description: '',
    originalUrl: '',
    detectionResult: '',
    additionalInfo: ''
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reportTypes = [
    { value: 'incorrect_detection', label: 'Incorrect Detection Result', description: 'Our AI gave a wrong result' },
    { value: 'offensive_content', label: 'Offensive Content', description: 'Content contains harmful material' },
    { value: 'spam', label: 'Spam or Irrelevant', description: 'Content is spam or not relevant' },
    { value: 'copyright', label: 'Copyright Violation', description: 'Content violates copyright' },
    { value: 'privacy', label: 'Privacy Concern', description: 'Content violates privacy' },
    { value: 'technical_issue', label: 'Technical Issue', description: 'Platform bug or error' },
    { value: 'other', label: 'Other', description: 'Something else not listed above' }
  ];

  const contentTypes = [
    { value: 'text', label: 'Text Content', icon: FileText },
    { value: 'image', label: 'Image Content', icon: Image },
    { value: 'video', label: 'Video Content', icon: Video }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        reportType: '',
        contentType: '',
        description: '',
        originalUrl: '',
        detectionResult: '',
        additionalInfo: ''
      });
      setUploadedFile(null);
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const getReportTypeColor = (type) => {
    const colors = {
      incorrect_detection: 'border-yellow-500/20 bg-yellow-500/10',
      offensive_content: 'border-red-500/20 bg-red-500/10',
      spam: 'border-orange-500/20 bg-orange-500/10',
      copyright: 'border-purple-500/20 bg-purple-500/10',
      privacy: 'border-blue-500/20 bg-blue-500/10',
      technical_issue: 'border-green-500/20 bg-green-500/10',
      other: 'border-gray-500/20 bg-gray-500/10'
    };
    return colors[type] || 'border-gray-500/20 bg-gray-500/10';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Flag className="h-12 w-12 text-red-400" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Report <span className="text-red-400">Misinformation</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Help us improve our detection accuracy by reporting incorrect results, harmful content, 
              or technical issues. Your feedback makes our AI smarter and more reliable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Report Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-12 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Report Submitted Successfully!</h2>
              <p className="text-xl text-gray-300 mb-6">
                Thank you for helping us improve TruthGuard. Our team will review your report within 24-48 hours.
              </p>
              <div className="bg-green-900/20 border border-green-500/20 rounded-xl p-4 mb-6">
                <p className="text-green-400 font-medium">Report ID: #TG-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                <p className="text-gray-300 text-sm mt-1">Save this ID for future reference</p>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    reportType: '',
                    contentType: '',
                    description: '',
                    originalUrl: '',
                    detectionResult: '',
                    additionalInfo: ''
                  });
                  setUploadedFile(null);
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                Submit Another Report
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-8">
                <AlertTriangle className="h-6 w-6 text-red-400" />
                <h2 className="text-3xl font-bold text-white">Submit a Report</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Report Type */}
                <div>
                  <label className="block text-white text-lg font-medium mb-4">
                    What type of issue are you reporting? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {reportTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`cursor-pointer border-2 rounded-xl p-4 transition-all duration-300 hover:scale-105 ${
                          formData.reportType === type.value
                            ? `${getReportTypeColor(type.value)} border-opacity-100`
                            : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
                        }`}
                      >
                        <input
                          type="radio"
                          name="reportType"
                          value={type.value}
                          checked={formData.reportType === type.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="space-y-2">
                          <h3 className="text-white font-semibold">{type.label}</h3>
                          <p className="text-gray-300 text-sm">{type.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Content Type */}
                <div>
                  <label className="block text-white text-lg font-medium mb-4">
                    What type of content is this about? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {contentTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`cursor-pointer border-2 rounded-xl p-4 transition-all duration-300 hover:scale-105 ${
                          formData.contentType === type.value
                            ? 'border-blue-500/50 bg-blue-500/10'
                            : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
                        }`}
                      >
                        <input
                          type="radio"
                          name="contentType"
                          value={type.value}
                          checked={formData.contentType === type.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="text-center space-y-2">
                          <type.icon className={`h-8 w-8 mx-auto ${
                            formData.contentType === type.value ? 'text-blue-400' : 'text-gray-400'
                          }`} />
                          <h3 className="text-white font-medium">{type.label}</h3>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-white text-lg font-medium mb-2">
                    Detailed Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Please provide as much detail as possible about the issue you're reporting..."
                  />
                </div>

                {/* Additional Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="originalUrl" className="block text-white font-medium mb-2">
                      Original Content URL (if applicable)
                    </label>
                    <input
                      type="url"
                      id="originalUrl"
                      name="originalUrl"
                      value={formData.originalUrl}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="https://example.com/content"
                    />
                  </div>
                  <div>
                    <label htmlFor="detectionResult" className="block text-white font-medium mb-2">
                      Our Detection Result (if reporting incorrect detection)
                    </label>
                    <select
                      id="detectionResult"
                      name="detectionResult"
                      value={formData.detectionResult}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select result</option>
                      <option value="real">Marked as Real (but it's fake)</option>
                      <option value="fake">Marked as Fake (but it's real)</option>
                      <option value="suspicious">Marked as Suspicious (but it's clear)</option>
                    </select>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-white text-lg font-medium mb-4">
                    Upload Evidence (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-red-500 transition-colors duration-300">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="evidence-upload"
                      accept="image/*,video/*,.pdf,.doc,.docx"
                    />
                    <label htmlFor="evidence-upload" className="cursor-pointer">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-300 mb-2">
                        {uploadedFile ? uploadedFile.name : 'Click to upload supporting evidence'}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Supports images, videos, PDFs, and documents (Max 50MB)
                      </p>
                    </label>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="additionalInfo" className="block text-white font-medium mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Any other relevant information that might help us understand the issue..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={!formData.reportType || !formData.contentType || !formData.description || isSubmitting}
                    className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Submitting Report...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Submit Report</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-4xl font-bold text-white">
              Reporting <span className="text-red-400">Guidelines</span>
            </h2>
            <p className="text-xl text-gray-300">
              Help us help you by following these guidelines when submitting reports
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Be Specific',
                description: 'Provide detailed information about what went wrong and what you expected to happen.',
                icon: '🎯'
              },
              {
                title: 'Include Evidence',
                description: 'Upload screenshots, links, or files that support your report when possible.',
                icon: '📋'
              },
              {
                title: 'Stay Objective',
                description: 'Focus on facts rather than opinions. Describe what happened without bias.',
                icon: '⚖️'
              },
              {
                title: 'Check Duplicates',
                description: 'Search existing reports to avoid submitting duplicate issues.',
                icon: '🔍'
              },
              {
                title: 'Follow Up',
                description: 'Keep your report ID safe and check back for updates on your submission.',
                icon: '📞'
              },
              {
                title: 'Be Patient',
                description: 'Our team reviews all reports carefully. Complex issues may take longer to resolve.',
                icon: '⏰'
              }
            ].map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{guideline.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{guideline.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{guideline.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-4xl font-bold text-white">
              Frequently Asked <span className="text-red-400">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How long does it take to review a report?",
                answer: "Most reports are reviewed within 24-48 hours. Complex technical issues may take up to 5 business days."
              },
              {
                question: "Will I be notified about the status of my report?",
                answer: "Yes, we'll send updates to your email address as we investigate and resolve your report."
              },
              {
                question: "Can I report content anonymously?",
                answer: "Yes, you can submit reports without creating an account, though registered users get better tracking and updates."
              },
              {
                question: "What happens to reported content?",
                answer: "Reported content is reviewed by our team and may be used to improve our AI models while maintaining privacy."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Report;