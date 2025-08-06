import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { translations } from '../utils';

const FAQPage = ({ language }) => {
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'general', name: t.faq.categories.general },
    { id: 'booking', name: t.faq.categories.booking },
    { id: 'payment', name: t.faq.categories.payment },
    { id: 'technical', name: t.faq.categories.technical }
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'What is CareerCoach and how does it work?',
      answer: 'CareerCoach is a platform that connects professionals with industry experts for 1-on-1 career coaching sessions. You can browse our network of verified coaches, book sessions that fit your schedule, and receive personalized guidance to advance your career.'
    },
    {
      id: 2,
      category: 'general',
      question: 'Who are the coaches on your platform?',
      answer: 'Our coaches are experienced professionals from top companies like Google, Microsoft, Goldman Sachs, and McKinsey. Each coach is thoroughly vetted and has a proven track record of success in their field and in mentoring others.'
    },
    {
      id: 3,
      category: 'general',
      question: 'How do I choose the right coach for me?',
      answer: 'You can filter coaches by industry, experience level, specialization, and availability. Each coach profile includes their background, expertise areas, client reviews, and success stories to help you make an informed decision.'
    },
    {
      id: 4,
      category: 'booking',
      question: 'How do I book a session with a coach?',
      answer: 'Simply browse our coach directory, select a coach that matches your needs, view their available time slots, and book a session. You\'ll receive instant confirmation with session details and preparation materials.'
    },
    {
      id: 5,
      category: 'booking',
      question: 'Can I reschedule or cancel my session?',
      answer: 'Yes, you can reschedule or cancel your session up to 24 hours before the scheduled time without any penalty. For cancellations within 24 hours, please contact our support team.'
    },
    {
      id: 6,
      category: 'booking',
      question: 'How long are the coaching sessions?',
      answer: 'Standard coaching sessions are 60 minutes long. Some coaches also offer 30-minute quick consultation sessions for specific questions or follow-up discussions.'
    },
    {
      id: 7,
      category: 'payment',
      question: 'How much do coaching sessions cost?',
      answer: 'Session prices vary by coach based on their experience and expertise, typically ranging from $50 to $300 per hour. Each coach sets their own rates, which are clearly displayed on their profile.'
    },
    {
      id: 8,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.'
    },
    {
      id: 9,
      category: 'payment',
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with your coaching experience. Additionally, if a coach cancels your session, you\'ll receive a full refund or can reschedule at no extra cost.'
    },
    {
      id: 10,
      category: 'technical',
      question: 'What technology do I need for video sessions?',
      answer: 'You need a computer, tablet, or smartphone with a stable internet connection, camera, and microphone. We use a secure video platform that works in most web browsers without requiring any downloads.'
    },
    {
      id: 11,
      category: 'technical',
      question: 'What if I experience technical issues during my session?',
      answer: 'Our support team is available 24/7 to help with technical issues. If technical problems significantly impact your session, we\'ll provide a full refund or free rescheduling.'
    },
    {
      id: 12,
      category: 'technical',
      question: 'Are the sessions recorded?',
      answer: 'Sessions are only recorded with explicit consent from both parties. If recorded, you\'ll receive a copy of the session for your reference. All recordings are stored securely and are never shared with third parties.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = faq.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HelpCircle className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.faq.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.faq.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  whileHover={{ backgroundColor: '#f9fafb' }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === faq.id ? 'auto' : 0,
                    opacity: openFAQ === faq.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our support team is here to help you 24/7. Get in touch and we'll respond within a few hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-600 text-primary-600 font-semibold py-4 px-8 rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                Live Chat
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQPage;
