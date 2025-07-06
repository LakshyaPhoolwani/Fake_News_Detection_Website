import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb, Upload, Brain, Shield, Zap, CheckCircle, Globe, Clock, TrendingUp, Star, Briefcase, GraduationCap, Heart, Code, Database, Cpu, Network, Lock, Eye, Microscope } from 'lucide-react';
import { useEffect } from 'react';
const About = ({ darkMode }) => {
  const stats = [
    { icon: Target, label: 'Accuracy Rate', value: '99.2%', color: 'text-blue-400', description: 'Across all content types' },
    { icon: Users, label: 'Active Users', value: '2.1M+', color: 'text-green-400', description: 'Worldwide community' },
    { icon: Award, label: 'Awards Won', value: '15+', color: 'text-purple-400', description: 'Industry recognition' },
    { icon: Globe, label: 'Languages', value: '50+', color: 'text-cyan-400', description: 'Global coverage' },
    { icon: Clock, label: 'Response Time', value: '< 3s', color: 'text-yellow-400', description: 'Lightning fast' },
    { icon: TrendingUp, label: 'Content Analyzed', value: '80M+', color: 'text-pink-400', description: 'And growing daily' }
  ];

  const timeline = [
    {
      step: '1',
      title: 'Upload Content',
      description: 'Submit text, images, or videos through our secure, encrypted platform with zero-storage policy',
      icon: Upload,
      color: 'blue',
      details: ['Drag & drop interface', 'Multiple file formats', 'Batch processing', 'URL analysis']
    },
    {
      step: '2',
      title: 'AI Analysis',
      description: 'Our advanced algorithms analyze content across 50+ dimensions using ensemble learning',
      icon: Brain,
      color: 'purple',
      details: ['NLP processing', 'Computer vision', 'Audio forensics', 'Metadata analysis']
    },
    {
      step: '3',
      title: 'Get Results',
      description: 'Receive detailed results with confidence scores, explanations, and actionable insights',
      icon: CheckCircle,
      color: 'green',
      details: ['Confidence scoring', 'Detailed explanations', 'Source verification', 'Report generation']
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer & Co-Founder',
      bio: 'Former Google Research scientist with 15+ years in machine learning and NLP. PhD from Stanford, published 50+ papers on AI ethics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Machine Learning', 'Natural Language Processing', 'AI Ethics'],
      education: 'PhD Computer Science, Stanford University'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Engineering & Co-Founder',
      bio: 'Ex-Facebook engineer specializing in large-scale distributed systems. Built infrastructure serving billions of users.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Distributed Systems', 'Cloud Architecture', 'DevOps'],
      education: 'MS Computer Engineering, MIT'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      bio: 'PhD in Computer Vision from MIT, expert in deepfake detection and image forensics. Former DARPA researcher.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Computer Vision', 'Deepfake Detection', 'Image Forensics'],
      education: 'PhD Computer Vision, MIT'
    },
    {
      name: 'David Kim',
      role: 'Product Lead & Former Journalist',
      bio: 'Former investigative journalist turned product manager. 10+ years covering misinformation and digital media.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Product Strategy', 'Journalism', 'Media Analysis'],
      education: 'MA Journalism, Columbia University'
    },
    {
      name: 'Dr. Raj Patel',
      role: 'Chief Security Officer',
      bio: 'Cybersecurity expert with 12+ years protecting critical infrastructure. Former NSA cybersecurity analyst.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Cybersecurity', 'Privacy Engineering', 'Threat Analysis'],
      education: 'PhD Cybersecurity, Carnegie Mellon'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Data Science',
      bio: 'Data scientist with expertise in statistical modeling and machine learning. Former Netflix recommendation systems lead.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Data Science', 'Statistical Modeling', 'ML Engineering'],
      education: 'PhD Statistics, UC Berkeley'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data is processed securely with end-to-end encryption and never stored or shared with third parties.',
      details: ['Zero-storage policy', 'End-to-end encryption', 'GDPR compliant', 'Regular security audits']
    },
    {
      icon: Zap,
      title: 'Real-time Results',
      description: 'Get instant analysis with results delivered in milliseconds, not minutes, powered by edge computing.',
      details: ['Sub-3 second response', 'Edge computing', '99.9% uptime', 'Global CDN']
    },
    {
      icon: Brain,
      title: 'Continuous Learning',
      description: 'Our AI models are constantly updated with the latest misinformation patterns and emerging threats.',
      details: ['Daily model updates', 'Federated learning', 'Human-in-the-loop', 'Adversarial training']
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We provide clear explanations for every decision and maintain open research practices.',
      details: ['Explainable AI', 'Open research', 'Public datasets', 'Algorithm audits']
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'Committed to democratizing fact-checking and supporting journalism worldwide.',
      details: ['Free tier available', 'Journalist discounts', 'Educational programs', 'NGO partnerships']
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Supporting 50+ languages and cultural contexts to fight misinformation worldwide.',
      details: ['50+ languages', 'Cultural adaptation', 'Regional expertise', 'Local partnerships']
    }
  ];

  const technology = [
    {
      icon: Code,
      title: 'Advanced NLP',
      description: 'State-of-the-art natural language processing with transformer models and attention mechanisms.',
      metrics: '99.2% accuracy on text analysis'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Deep learning models for image and video analysis, including deepfake detection.',
      metrics: '95.8% deepfake detection rate'
    },
    {
      icon: Database,
      title: 'Knowledge Graphs',
      description: 'Massive knowledge bases for fact verification and source credibility assessment.',
      metrics: '500M+ verified facts'
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Distributed processing for real-time analysis with minimal latency.',
      metrics: '< 3s global response time'
    },
    {
      icon: Network,
      title: 'Ensemble Learning',
      description: 'Multiple AI models working together for improved accuracy and robustness.',
      metrics: '50+ specialized models'
    },
    {
      icon: Lock,
      title: 'Privacy Engineering',
      description: 'Built-in privacy protection with differential privacy and secure computation.',
      metrics: '100% privacy guaranteed'
    }
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Founded TruthGuard',
      description: 'Launched with $10M seed funding from leading VCs',
      icon: '🚀'
    },
    {
      year: '2023',
      title: 'First Million Users',
      description: 'Reached 1M users within 6 months of launch',
      icon: '👥'
    },
    {
      year: '2024',
      title: 'AI Excellence Award',
      description: 'Won "Best AI Application" at TechCrunch Disrupt',
      icon: '🏆'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded to 50+ countries with localized models',
      icon: '🌍'
    },
    {
      year: '2024',
      title: 'Research Partnership',
      description: 'Partnered with Stanford AI Lab for advanced research',
      icon: '🔬'
    },
    {
      year: '2025',
      title: 'Series A Funding',
      description: 'Raised $25M Series A led by Andreessen Horowitz',
      icon: '💰'
    }
  ];

  const partnerships = [
    {
      name: 'Reuters',
      type: 'Media Partner',
      description: 'Fact-checking integration for breaking news',
      logo: '📰'
    },
    {
      name: 'Stanford AI Lab',
      type: 'Research Partner',
      description: 'Joint research on AI safety and ethics',
      logo: '🎓'
    },
    {
      name: 'Facebook',
      type: 'Technology Partner',
      description: 'Content moderation and fact-checking tools',
      logo: '📱'
    },
    {
      name: 'UNESCO',
      type: 'NGO Partner',
      description: 'Media literacy and education programs',
      logo: '🏛️'
    }
  ];

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className={`py-20 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`inline-flex items-center space-x-2 px-6 py-2 rounded-full font-medium ${
                  darkMode 
                    ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' 
                    : 'bg-blue-100 border border-blue-200 text-blue-600'
                }`}
              >
                <Star className="h-4 w-4" />
                <span>Trusted by 2M+ users worldwide</span>
              </motion.div>
              
              <h1 className={`text-5xl md:text-6xl font-bold leading-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                About <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>TruthGuard</span>
              </h1>
              
              <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We use cutting-edge artificial intelligence to fight misinformation in all its forms. 
                Our mission is to empower individuals and organizations with the tools they need to 
                distinguish truth from falsehood in our digital age.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Statistics */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Platform <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Statistics</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Real-time metrics showcasing our global impact and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center space-y-4 p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-900/50 backdrop-blur-md border border-gray-700 hover:bg-gray-800/50' 
                    : 'bg-white border border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center ${stat.color} ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-700' 
                    : 'bg-gradient-to-br from-gray-100 to-gray-200'
                }`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {stat.label}
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Our Mission & Story
                </h2>
                <div className="space-y-4">
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    In an era where misinformation spreads faster than truth, we believe technology should be part of the solution. 
                    TruthGuard was founded in 2023 by a team of AI researchers, former journalists, and tech veterans who witnessed 
                    firsthand the devastating impact of fake news on society.
                  </p>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Our platform combines cutting-edge artificial intelligence with human expertise to create the most accurate 
                    and comprehensive misinformation detection system available today. We process over 100,000 pieces of content 
                    daily, helping users make informed decisions about the information they consume and share.
                  </p>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    From newsrooms to classrooms, from social media platforms to government agencies, TruthGuard serves as a 
                    critical tool in the fight against misinformation, supporting democracy and informed discourse worldwide.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className={`rounded-2xl p-8 ${
                darkMode 
                  ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700' 
                  : 'bg-gray-50 border border-gray-200'
              }`}>
                <h3 className={`text-2xl font-semibold mb-6 text-center ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Company Timeline
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            {achievement.year}
                          </span>
                          <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {achievement.title}
                          </span>
                        </div>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {achievement.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              How <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>It Works</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our three-step process makes fact-checking simple, fast, and accessible to everyone
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`rounded-2xl p-8 text-center transition-all duration-300 transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-900/50 backdrop-blur-md border border-gray-700 hover:bg-gray-800/70' 
                    : 'bg-white border border-gray-200 hover:shadow-lg'
                }`}>
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                    item.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                    item.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                    'bg-gradient-to-br from-green-500 to-emerald-500'
                  }`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-3xl font-bold mb-4 ${
                    item.color === 'blue' ? (darkMode ? 'text-blue-400' : 'text-blue-600') :
                    item.color === 'purple' ? (darkMode ? 'text-purple-400' : 'text-purple-600') :
                    (darkMode ? 'text-green-400' : 'text-green-600')
                  }`}>
                    {item.step}
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2 text-sm">
                        <div className={`w-2 h-2 rounded-full ${
                          item.color === 'blue' ? 'bg-blue-400' :
                          item.color === 'purple' ? 'bg-purple-400' : 'bg-green-400'
                        }`}></div>
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {index < timeline.length - 1 && (
                  <div className={`hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 ${
                    darkMode ? 'bg-gradient-to-r from-gray-600 to-transparent' : 'bg-gradient-to-r from-gray-300 to-transparent'
                  }`}></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Technology</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Cutting-edge AI and engineering powering the most advanced misinformation detection platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technology.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700 hover:bg-gray-800/70' 
                    : 'bg-gray-50 border border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-700 text-blue-400' 
                    : 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600'
                }`}>
                  <tech.icon className="h-6 w-6" />
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {tech.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {tech.description}
                </p>
                <div className={`text-xs font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {tech.metrics}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Meet Our <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Team</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              World-class experts in AI, journalism, and technology working together to combat misinformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-900/50 backdrop-blur-md border border-gray-700 hover:bg-gray-800/50' 
                    : 'bg-white border border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {member.name}
                </h3>
                <p className={`font-medium mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {member.role}
                </p>
                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {member.bio}
                </p>
                <div className="space-y-2">
                  <div className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {member.education}
                  </div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={`px-2 py-1 text-xs rounded-full ${
                          darkMode 
                            ? 'bg-blue-500/10 text-blue-400' 
                            : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Values</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700 hover:bg-gray-800/70' 
                    : 'bg-gray-50 border border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-700 text-blue-400' 
                    : 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600'
                }`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {value.title}
                </h3>
                <p className={`leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {value.description}
                </p>
                <div className="space-y-2">
                  {value.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Our <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Partners</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Collaborating with leading organizations to amplify our impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-900/50 backdrop-blur-md border border-gray-700 hover:bg-gray-800/50' 
                    : 'bg-white border border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {partner.name}
                </h3>
                <p className={`text-sm font-medium mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {partner.type}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-20 ${
        darkMode 
          ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' 
          : 'bg-gradient-to-br from-blue-50 to-purple-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to Fight Misinformation?
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Join millions of users who trust TruthGuard to verify their content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/detect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-block ${
                  darkMode
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white'
                }`}
              >
                Try Detection Tool
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-block ${
                  darkMode
                    ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                    : 'bg-gray-100 border border-gray-300 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;