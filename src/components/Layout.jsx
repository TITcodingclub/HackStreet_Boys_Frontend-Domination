import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Tracker', path: '/tracker' },
    { name: 'Trainer', path: '/trainer' },
    { name: 'Diet', path: '/diet' },
    { name: 'Workout', path: '/workout' },
    { name: 'Sign In', path: '/signup' }
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-black text-white' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-indigo-500 animate-pulse ${
          isDarkMode ? 'opacity-20' : 'opacity-10'
        }`}></div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? `${isDarkMode ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-md shadow-lg`
          : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Dumbbell className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              FlexFitness
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group px-4 py-2 transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-500'
                    : `${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
              }`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
              }`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden backdrop-blur-md border-t ${
            isDarkMode ? 'bg-black/95 border-gray-800' : 'bg-white/95 border-gray-200'
          }`}>
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-blue-500'
                      : `${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className={`py-12 border-t ${
        isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'
      }`}>
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Dumbbell className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              FlexFitness
            </span>
          </div>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Transform Your Body, Transform Your Life
          </p>
          <div className={`flex flex-wrap justify-center gap-4 text-sm ${
            isDarkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            <span>© 2025 FlexFitness. All rights reserved.</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;