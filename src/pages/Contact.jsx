import React, { useState , useEffect} from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, Clock, Globe, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
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
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Get In <span className="text-blue-400">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Have questions about our technology? Want to partner with us? Need enterprise solutions? 
              We'd love to hear from you and help you fight misinformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
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
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-8">
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
                    className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-4 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
                    onClick={() => info.action && window.open(info.action)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${getColorClasses(info.color)}`}>
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{info.title}</h3>
                        <p className="text-gray-400 text-sm mb-1">{info.subtitle}</p>
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
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
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
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <MessageSquare className="h-6 w-6 text-blue-400" />
                  <h2 className="text-3xl font-bold text-white">Send us a message</h2>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Send className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-white font-medium mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-4xl font-bold text-white">
              Visit Our <span className="text-blue-400">Office</span>
            </h2>
            <p className="text-xl text-gray-300">
              Located in the heart of San Francisco's tech district
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 text-center"
          >
            <div className="w-full h-64 bg-gray-700 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-400">Interactive Map Placeholder</p>
                <p className="text-gray-500 text-sm">Google Maps integration would go here</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">TruthGuard Headquarters</h3>
              <p className="text-gray-300">123 Innovation Drive, Suite 400</p>
              <p className="text-gray-300">San Francisco, CA 94105</p>
            </div>
          </motion.div>
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
              Frequently Asked <span className="text-blue-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
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

export default Contact;