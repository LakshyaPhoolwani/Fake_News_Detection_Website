import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, FileText, Image, Video, Zap, Shield, Brain, Target, Users, Award, Lightbulb, CheckCircle, TrendingUp, Globe, Clock, Star } from 'lucide-react';
import Charts from '../components/Charts';

const Home = () => {
  const features = [
    {
      icon: FileText,
      title: 'Advanced Text Analysis',
      description: 'State-of-the-art NLP algorithms analyze linguistic patterns, fact-check claims against verified databases, and detect bias with 99.2% accuracy.',
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-cyan-500',
      stats: '50M+ articles analyzed',
      capabilities: ['Sentiment Analysis', 'Fact Verification', 'Source Credibility', 'Bias Detection']
    },
    {
      icon: Image,
      title: 'Image Forensics & Deepfake Detection',
      description: 'Comprehensive image analysis using computer vision to detect manipulated photos, deepfakes, and AI-generated content with pixel-level precision.',
      color: 'text-green-400',
      gradient: 'from-green-500 to-emerald-500',
      stats: '25M+ images verified',
      capabilities: ['Deepfake Detection', 'Metadata Analysis', 'Reverse Image Search', 'Manipulation Detection']
    },
    {
      icon: Video,
      title: 'Video & Audio Verification',
      description: 'Multi-modal analysis combining visual, audio, and metadata examination to identify deepfake videos, audio manipulation, and synthetic media.',
      color: 'text-purple-400',
      gradient: 'from-purple-500 to-pink-500',
      stats: '5M+ videos processed',
      capabilities: ['Lip-sync Analysis', 'Audio Forensics', 'Frame Consistency', 'Temporal Analysis']
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast analysis with results in under 3 seconds',
      color: 'text-yellow-400',
      metric: '< 3s response time'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Zero-storage policy with end-to-end encryption',
      color: 'text-red-400',
      metric: '100% privacy guaranteed'
    },
    {
      icon: Brain,
      title: 'Continuously Learning',
      description: 'AI models updated daily with latest misinformation patterns',
      color: 'text-indigo-400',
      metric: 'Daily model updates'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Supporting 50+ languages and regional contexts',
      color: 'text-cyan-400',
      metric: '50+ languages'
    },
    {
      icon: Target,
      title: 'Enterprise Ready',
      description: 'Scalable API with 99.9% uptime guarantee',
      color: 'text-orange-400',
      metric: '99.9% uptime'
    },
    {
      icon: Users,
      title: 'Trusted by Millions',
      description: 'Used by journalists, researchers, and fact-checkers worldwide',
      color: 'text-pink-400',
      metric: '2M+ active users'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Journalist, Reuters',
      content: 'TruthGuard has revolutionized our fact-checking process. The accuracy and speed are unmatched.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Research Director, Stanford AI Lab',
      content: 'The most sophisticated misinformation detection platform I\'ve encountered. Truly impressive technology.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Watson',
      role: 'Fact-Checker, Associated Press',
      content: 'An essential tool in our newsroom. The detailed explanations help us understand the \'why\' behind each result.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const useCases = [
    {
      title: 'Newsrooms & Media',
      description: 'Verify breaking news, fact-check sources, and maintain editorial integrity',
      icon: '📰',
      users: '500+ newsrooms'
    },
    {
      title: 'Social Media Platforms',
      description: 'Automatically flag suspicious content and reduce misinformation spread',
      icon: '📱',
      users: '10+ platforms'
    },
    {
      title: 'Educational Institutions',
      description: 'Teach media literacy and help students identify reliable sources',
      icon: '🎓',
      users: '200+ universities'
    },
    {
      title: 'Government Agencies',
      description: 'Combat disinformation campaigns and protect democratic processes',
      icon: '🏛️',
      users: '25+ agencies'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 text-blue-400 font-medium"
              >
                <Star className="h-4 w-4" />
                <span>Trusted by 2M+ users worldwide</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Combat <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Misinformation</span>
                <br />
                with AI Precision
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Advanced artificial intelligence technology to identify fake news, manipulated images, and deepfake videos. 
                Protect yourself and your audience from false information with real-time analysis and detailed explanations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/detect"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
              >
                <span>Start Detection</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 flex items-center space-x-2"
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>See How It Works</span>
              </button>
            </div>

            {/* Enhanced Statistics */}
            <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: '99.2%', label: 'Detection Accuracy', icon: Target, color: 'text-blue-400' },
                { value: '80M+', label: 'Content Analyzed', icon: TrendingUp, color: 'text-green-400' },
                { value: '< 3s', label: 'Average Response', icon: Clock, color: 'text-purple-400' },
                { value: '50+', label: 'Languages Supported', icon: Globe, color: 'text-cyan-400' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center space-y-3 group hover:scale-105 transition-transform duration-300"
                >
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Comprehensive Detection <span className="text-blue-400">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform analyzes multiple content types with cutting-edge technology and unmatched precision
            </p>
          </motion.div>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 ${feature.color}`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      <p className={`text-sm ${feature.color} font-medium`}>{feature.stats}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">{feature.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {feature.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${feature.color}`} />
                        <span className="text-gray-300 text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/detect"
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${feature.gradient} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105`}
                  >
                    <span>Try {feature.title.split(' ')[0]} Detection</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <feature.icon className={`h-16 w-16 mx-auto ${feature.color}`} />
                        <div className="space-y-2">
                          <div className={`text-2xl font-bold ${feature.color}`}>Live Demo</div>
                          <div className="text-gray-400">Interactive {feature.title} showcase</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features Grid */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 ${feature.color} group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    <div className={`text-xs font-medium ${feature.color}`}>{feature.metric}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Platform <span className="text-blue-400">Analytics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time insights into our detection performance and global impact
            </p>
          </motion.div>

          <Charts />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Trusted Across <span className="text-blue-400">Industries</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From newsrooms to classrooms, our technology serves diverse communities fighting misinformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{useCase.description}</p>
                <div className="text-blue-400 font-medium text-sm">{useCase.users}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What Experts <span className="text-blue-400">Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading journalists, researchers, and fact-checkers worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Fight <span className="text-blue-400">Misinformation?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join millions of users who trust TruthGuard to verify their content and protect against false information
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/detect"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Start Free Detection</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 inline-flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>

            <div className="pt-8 text-center">
              <p className="text-gray-400 text-sm">
                No registration required • Free to use • Privacy guaranteed
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;