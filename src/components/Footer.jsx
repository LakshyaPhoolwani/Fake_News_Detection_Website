import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Detect', path: '/detect' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Data Processing', href: '#' }
  ];

  return (
    <footer className={`border-t transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-950 border-gray-800' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                TruthGuard
              </span>
            </Link>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Empowering truth through artificial intelligence. Detect misinformation across text, images, and videos with cutting-edge AI technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-2 rounded-lg transition-colors duration-300 group ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  <social.icon className={`h-5 w-5 transition-colors ${
                    darkMode 
                      ? 'text-gray-400 group-hover:text-white' 
                      : 'text-gray-600 group-hover:text-gray-900'
                  }`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className={`transition-colors duration-300 ${
                      darkMode 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-300 ${
                      darkMode 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Stay Updated
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Get the latest updates on AI-powered fact-checking technology.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full rounded-lg px-4 py-3 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                    : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                }`}
              />
              <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                darkMode
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white'
              }`}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t mt-12 pt-8 transition-colors duration-300 ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 TruthGuard. All rights reserved.
            </p>
            <div className={`flex items-center space-x-6 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>Built with ❤️ for truth</span>
              <span>•</span>
              <span>Powered by AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;