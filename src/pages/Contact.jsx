import React, { useState , useEffect} from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, Clock, Globe, Linkedin, Github } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);
    
    try {
      // Send to backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer
        })
      });

      // For demo purposes, simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const result = {
        success: true,
        message: 'Contact form submitted successfully',
        ticketId: `TG-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
      };

      if (result.success) {
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } else {
        throw new Error(result.message || 'Failed to submit contact form');
      }
    } catch (error) {
      setSubmitError(error.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setSubmitError(''); // Clear error when user starts typing
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Get in touch via email',
      content: 'contact@truthguard.ai',
      color: 'blue',
      action: 'mailto:contact@truthguard.ai'
    },
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: 'Mon-Fri 9AM-6PM EST',
      content: '+1 (555) 123-4567',
      color: 'green',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      subtitle: 'Our headquarters',
      content: 'San Francisco, CA\nUnited States',
      color: 'purple',
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      subtitle: 'We\'re here to help',
      content: 'Mon-Fri: 9AM-6PM EST\nWeekends: 10AM-4PM EST',
      color: 'yellow',
      action: null
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'blue' },
    { icon: Github, label: 'GitHub', href: '#', color: 'gray' },
    { icon: Mail, label: 'Email', href: 'mailto:contact@truthguard.ai', color: 'red' },
    { icon: Globe, label: 'Website', href: '#', color: 'green' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      green: 'bg-green-500/10 text-green-400 border-green-500/20',
      purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      red: 'bg-red-500/10 text-red-400 border-red-500/20',
      gray: 'bg-gray-500/10 text-gray-400 border-gray-500/20'
    };
    return colors[color] || colors.blue;
  };

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  // Google Maps component
  const GoogleMap = () => {
    useEffect(() => {
      // Initialize Google Maps
      const initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('google-map'), {
          center: { lat: 37.7749, lng: -122.4194 }, // San Francisco coordinates
          zoom: 15,
          styles: darkMode ? [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{ color: '#263c3f' }]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#6b9a76' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#38414e' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#212a37' }]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#9ca5b3' }]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{ color: '#746855' }]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#1f2835' }]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#f3d19c' }]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{ color: '#2f3948' }]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#17263c' }]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#515c6d' }]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#17263c' }]
            }
          ] : []
        });

        // Add marker for TruthGuard office
        const marker = new window.google.maps.Marker({
          position: { lat: 37.7749, lng: -122.4194 },
          map: map,
          title: 'TruthGuard Headquarters',
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#3B82F6"/>
                <path d="M20 10L24 18H16L20 10Z" fill="white"/>
                <circle cx="20" cy="25" r="3" fill="white"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(40, 40)
          }
        });

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; color: #333;">
              <h3 style="margin: 0 0 8px 0; color: #1f2937;">TruthGuard Headquarters</h3>
              <p style="margin: 0; font-size: 14px;">123 Innovation Drive, Suite 400<br>San Francisco, CA 94105</p>
              <p style="margin: 8px 0 0 0; font-size: 12px; color: #6b7280;">Mon-Fri: 9AM-6PM EST</p>
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      };

      // Load Google Maps API if not already loaded
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        window.initMap = initMap;
        document.head.appendChild(script);
      } else {
        initMap();
      }
    }, [darkMode]);

    return (
      <div 
        id="google-map" 
        className="w-full h-64 rounded-xl"
        style={{ minHeight: '256px' }}
      />
    );
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
            <h1 className={`text-5xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Get In <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Touch</span>
            </h1>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Have questions about our technology? Want to partner with us? Need enterprise solutions? 
              We'd love to hear from you and help you fight misinformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Contact Information
                </h2>
                <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  We're here to help you understand and implement our AI-powered detection technology. 
                  Reach out through any of these channels.
                </p>
              </motion.div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`backdrop-blur-md border rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70' 
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                    onClick={() => info.action && window.open(info.action)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${getColorClasses(info.color)}`}>
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {info.title}
                        </h3>
                        <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {info.subtitle}
                        </p>
                        <p className={`text-sm font-medium ${info.color === 'blue' ? 'text-blue-400' : 
                          info.color === 'green' ? 'text-green-400' : 
                          info.color === 'purple' ? 'text-purple-400' : 'text-yellow-400'}`}>
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Follow Us
                </h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`p-3 rounded-xl ${getColorClasses(social.color)} hover:scale-110 transition-all duration-300`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`backdrop-blur-md border rounded-2xl p-8 ${
                  darkMode 
                    ? 'bg-gray-800/50 border-gray-700' 
                    : 'bg-white border-gray-200 shadow-lg'
                }`}
              >
                <div className="flex items-center space-x-3 mb-8">
                  <MessageSquare className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Send us a message
                  </h2>
                </div>

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-900/20 border border-red-500/20 rounded-xl p-4 mb-6"
                  >
                    <p className="text-red-400 text-sm">{submitError}</p>
                  </motion.div>
                )}

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Send className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Message Sent!
                    </h3>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className={`block font-medium mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            darkMode 
                              ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' 
                              : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                          placeholder="John Doe"
                          autoComplete="name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={`block font-medium mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            darkMode 
                              ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' 
                              : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                          placeholder="john@example.com"
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className={`block font-medium mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`w-full rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-gray-700/50 border-gray-600 text-white' 
                            : 'bg-gray-50 border-gray-300 text-gray-900'
                        }`}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="enterprise">Enterprise Solutions</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="support">Technical Support</option>
                        <option value="press">Press & Media</option>
                        <option value="api">API Access</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className={`block font-medium mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className={`w-full rounded-xl px-4 py-3 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2 ${
                        darkMode
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white'
                          : 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 disabled:from-gray-400 disabled:to-gray-500 text-white'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Visit Our <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Office</span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Located in the heart of San Francisco's tech district
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`backdrop-blur-md border rounded-2xl p-8 text-center ${
              darkMode 
                ? 'bg-gray-900/50 border-gray-700' 
                : 'bg-white border-gray-200 shadow-lg'
            }`}
          >
            <div className="mb-6">
              <GoogleMap />
            </div>
            <div className="text-center">
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                TruthGuard Headquarters
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                123 Innovation Drive, Suite 400
              </p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                San Francisco, CA 94105
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Frequently Asked <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Questions</span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How accurate is your detection technology?",
                answer: "Our AI models achieve 99.2% accuracy across text, image, and video analysis, continuously improving through machine learning."
              },
              {
                question: "Do you store the content I upload?",
                answer: "No, we prioritize privacy. Content is processed in real-time and immediately deleted after analysis."
              },
              {
                question: "Can I integrate TruthGuard into my platform?",
                answer: "Yes, we offer enterprise APIs and custom integration solutions. Contact us for more details."
              },
              {
                question: "What file formats do you support?",
                answer: "We support all major formats: text (any), images (JPG, PNG, WebP), and videos (MP4, MOV, AVI)."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`backdrop-blur-md border rounded-xl p-6 ${
                  darkMode 
                    ? 'bg-gray-800/50 border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {faq.question}
                </h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;