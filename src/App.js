import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import ExpertsSection from './components/ExpertsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import { languages } from './utils';
import './App.css';

// Homepage component with all sections
const HomePage = ({ language }) => (
  <>
    <HeroSection language={language} />
    <FeaturesSection language={language} />
    <HowItWorksSection language={language} />
    <ExpertsSection language={language} />
    <TestimonialsSection language={language} />
    
    {/* Final CTA Section */}
    <section className="py-24 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Your Career Transformation
            <br />
            <span className="text-yellow-300">Starts Today</span>
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of professionals who have already transformed their careers. 
            Your future self will thank you for taking this step.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-bold py-4 px-8 rounded-xl text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Free Trial
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Schedule Demo Call
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

// How It Works Page
const HowItWorksPage = ({ language }) => {
  const t = languages[language] || languages.en;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.howItWorks?.title || 'How It Works'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.howItWorks?.subtitle || 'Discover how CareerCoach transforms your professional journey in three simple steps'}. Our streamlined process ensures you get the guidance you need quickly and efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.howItWorks?.step1?.title || 'Assessment'}</h3>
              <p className="text-gray-600 leading-relaxed">{t.howItWorks?.step1?.description || 'Take our comprehensive career assessment to understand your strengths and interests.'}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.howItWorks?.step2?.title || 'Matching'}</h3>
              <p className="text-gray-600 leading-relaxed">{t.howItWorks?.step2?.description || 'Get matched with personalized career paths and opportunities that fit your profile.'}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.howItWorks?.step3?.title || 'Growth'}</h3>
              <p className="text-gray-600 leading-relaxed">{t.howItWorks?.step3?.description || 'Follow your personalized roadmap with expert guidance and continuous support.'}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Our Process Works
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-600">Our matching algorithm ensures you connect with experts who understand your specific industry and career goals.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-600">All sessions are structured to maximize value, with pre-session planning and post-session action items.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-600">Our platform tracks your progress and suggests next steps to keep you moving toward your career goals.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">What You'll Get</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Personalized career roadmap</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Industry-specific insights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Actionable next steps</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Ongoing support and resources</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Network of professional contacts</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

// Explore Careers Page
const ExploreCareersPage = ({ language }) => {
  const t = languages[language] || languages.en;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{t.exploreCareers?.title || 'Explore Careers'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.exploreCareers?.subtitle || 'Discover exciting career opportunities across various industries and find the perfect match for your skills and interests'}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(t.exploreCareers?.categories || []).map((career, index) => (
            <motion.div
              key={career.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{career.name}</h3>
              <p className="text-gray-600 mb-6">{career.description}</p>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Blog Page
const BlogPage = ({ language }) => {
  const t = languages[language] || languages.en;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{t.blog?.title || 'Career Blog'}</h1>
          <p className="text-xl text-gray-600">
            {t.blog?.subtitle || 'Latest insights, tips, and trends to help you navigate your career journey'}
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {[1, 2, 3].map((post) => (
            <motion.article
              key={post}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: post * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t.blog?.posts?.[0]?.title || `Career Development Tips for ${new Date().getFullYear()}`}
              </h2>
              <p className="text-gray-600 mb-4">
                {t.blog?.posts?.[0]?.excerpt || 'Discover the latest strategies for advancing your career in today\'s competitive job market...'}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{t.blog?.posts?.[0]?.date || 'Published 3 days ago'}</span>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

// FAQ Page
const FAQPage = ({ language }) => {
  const t = languages[language] || languages.en;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{t.faq?.title || 'Frequently Asked Questions'}</h1>
          <p className="text-xl text-gray-600">
            {t.faq?.subtitle || 'Find answers to common questions about CareerCoach and our services'}
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {(t.faq?.questions || []).map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          {/* Logo */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto"
          >
            <span className="text-white font-bold text-2xl">C</span>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold gradient-text">CareerCoach</h1>
            <p className="text-gray-600">Preparing your personalized career experience...</p>
            
            {/* Loading Bar */}
            <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        {/* Navigation */}
        <Navigation 
          language={language} 
          onLanguageChange={setLanguage}
        />

        {/* Main Content with Routes */}
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage language={language} />} />
            <Route path="/how-it-works" element={<HowItWorksPage language={language} />} />
            <Route path="/explore-careers" element={<ExploreCareersPage language={language} />} />
            <Route path="/blog" element={<BlogPage language={language} />} />
            <Route path="/faq" element={<FAQPage language={language} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer language={language} />

        {/* Floating Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300"
          >
            <span className="text-2xl">💬</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;