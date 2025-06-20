import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Detect from './pages/Detect';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Report from './pages/Report';
import NewsAnalysis from './pages/NewsAnalysis';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to dark mode if no preference saved
    return true;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  // Apply theme to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <div className={`min-h-screen transition-colors duration-300 ${
          darkMode 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }`}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/detect" element={<Detect darkMode={darkMode} />} />
              <Route path="/about" element={<About darkMode={darkMode} />} />
              <Route path="/contact" element={<Contact darkMode={darkMode} />} />
              <Route path="/login" element={<Login darkMode={darkMode} />} />
              <Route path="/report" element={<Report darkMode={darkMode} />} />
              <Route path="/news-analysis" element={<NewsAnalysis darkMode={darkMode} />} />
            </Routes>
          </AnimatePresence>
          
          <Footer darkMode={darkMode} />
        </div>
      </Router>
    </div>
  );
}

export default App;