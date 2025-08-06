import React from 'react';
import { motion } from 'framer-motion';
import ExpertsSection from '../components/ExpertsSection';
import { translations } from '../utils';

const ExploreCareersPage = ({ language }) => {
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.experts.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.experts.subtitle}. Get personalized guidance from professionals at top companies worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <ExpertsSection language={language} />

      {/* Why Choose Our Experts Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Our Experts Stand Out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We carefully vet every coach to ensure they meet our high standards for expertise and mentorship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Track Record',
                description: 'All our experts have 5+ years of experience in their field and a history of successful mentorship.',
                icon: '🏆'
              },
              {
                title: 'Industry Leaders',
                description: 'Our coaches work at top companies like Google, Microsoft, Goldman Sachs, and McKinsey.',
                icon: '🚀'
              },
              {
                title: 'Verified Results',
                description: 'Every expert is verified through our rigorous screening process and client feedback system.',
                icon: '✅'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become an Expert CTA */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Are You an Industry Expert?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our network of professional coaches and help others achieve their career dreams while building your personal brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-bold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300"
              >
                Become a Coach
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ExploreCareersPage;
