import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { cn, languages } from '../utils';

const Navigation = ({ language = 'en', onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const location = useLocation();
  
  const t = languages[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t?.home || 'Home', path: '/' },
    { name: t?.howItWorks || 'How It Works', path: '/how-it-works' },
    { name: t?.exploreCareers || 'Explore Careers', path: '/explore-careers' },
    { name: t?.blog || 'Blog', path: '/blog' },
    { name: t?.faq || 'FAQ', path: '/faq' },
  ];

  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    transition: 'all 0.5s ease',
    background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(16px)' : 'none',
    borderBottom: isScrolled ? '1px solid #e5e7eb' : 'none',
    boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const navInnerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4rem'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const logoIconStyle = {
    width: '2.5rem',
    height: '2.5rem',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const logoTextStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06d6a0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={navStyle}
    >
      <div style={containerStyle}>
        <div style={navInnerStyle}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={logoStyle}
          >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              <div style={logoIconStyle}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.125rem' }}>C</span>
              </div>
              <span style={logoTextStyle}>CareerCoach</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "font-medium transition-colors duration-200 relative group",
                    location.pathname === item.path
                      ? "text-primary-600"
                      : "text-gray-700 hover:text-primary-600"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-300",
                    location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  )}></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  color: '#6b7280',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.target.style.color = '#6b7280'}
              >
                <Globe size={16} />
                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{language.toUpperCase()}</span>
                <ChevronDown size={12} />
              </button>
              
              {isLanguageDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '0.5rem',
                    width: '5rem',
                    background: 'white',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #f3f4f6',
                    padding: '0.25rem 0',
                    zIndex: 50
                  }}
                >
                  <button
                    onClick={() => {
                      onLanguageChange('en');
                      setIsLanguageDropdownOpen(false);
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.5rem 0.75rem',
                      fontSize: '0.875rem',
                      color: '#374151',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#f9fafb'}
                    onMouseLeave={(e) => e.target.style.background = 'none'}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange('pt');
                      setIsLanguageDropdownOpen(false);
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.5rem 0.75rem',
                      fontSize: '0.875rem',
                      color: '#374151',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#f9fafb'}
                    onMouseLeave={(e) => e.target.style.background = 'none'}
                  >
                    PT
                  </button>
                </motion.div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                color: '#374151',
                fontWeight: '500',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
              onMouseLeave={(e) => e.target.style.color = '#374151'}
            >
              {t?.login || 'Log In'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              {t?.signUp || 'Sign Up'}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                padding: '0.5rem',
                borderRadius: '0.5rem',
                color: '#374151',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#3b82f6';
                e.target.style.background = '#f3f4f6';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#374151';
                e.target.style.background = 'none';
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              borderTop: '1px solid #f3f4f6',
              marginTop: '0.5rem',
              paddingTop: '1rem',
              paddingBottom: '1rem'
            }}
            className="md:hidden"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "font-medium transition-colors duration-200 py-2 block",
                    location.pathname === item.path
                      ? "text-primary-600"
                      : "text-gray-700 hover:text-primary-600"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid #f3f4f6'
              }}>
                <button style={{
                  textAlign: 'left',
                  color: '#374151',
                  fontWeight: '500',
                  background: 'none',
                  border: 'none',
                  padding: '0.5rem 0',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  {t?.login || 'Log In'}
                </button>
                <button className="btn-primary" style={{ textAlign: 'center' }}>
                  {t?.signUp || 'Sign Up'}
                </button>

                {/* Mobile Language Switcher */}
                <div style={{ paddingTop: '1rem', borderTop: '1px solid #f3f4f6' }}>
                  <div style={{ 
                    display: 'flex', 
                    gap: '0.5rem',
                    justifyContent: 'center' 
                  }}>
                    <button
                      onClick={() => {
                        onLanguageChange('en');
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        "px-3 py-1 rounded text-sm font-medium transition-colors",
                        language === 'en' 
                          ? "bg-primary-600 text-white" 
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      )}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => {
                        onLanguageChange('pt');
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        "px-3 py-1 rounded text-sm font-medium transition-colors",
                        language === 'pt' 
                          ? "bg-primary-600 text-white" 
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      )}
                    >
                      PT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;