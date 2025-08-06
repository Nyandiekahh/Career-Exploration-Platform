import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Video, TrendingUp, ArrowRight } from 'lucide-react';
import { cn } from '../utils';

const HowItWorksSection = ({ language = 'en' }) => {
  const steps = [
    {
      icon: Search,
      title: 'Find Your Expert',
      description: 'Browse through our curated network of industry professionals and find the perfect match for your career goals.',
      details: ['Filter by industry, experience, and specialization', 'Read reviews and success stories', 'View expert profiles and credentials'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'Book Your Session',
      description: 'Schedule a 1-hour session at a time that works for you. Our flexible booking system makes it easy.',
      details: ['Real-time availability checking', 'Instant confirmation', 'Calendar integration'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Connect & Learn',
      description: 'Join your secure video session and get personalized advice tailored to your unique situation.',
      details: ['HD video and crystal-clear audio', 'Screen sharing capabilities', 'Session recording available'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your career growth with follow-up sessions and actionable insights from your coach.',
      details: ['Progress tracking dashboard', 'Goal setting and milestones', 'Resource recommendations'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with professional career coaching in just four simple steps. 
            Our streamlined process ensures you get the guidance you need quickly and efficiently.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={stepVariants}
              className={cn(
                'flex flex-col lg:flex-row items-center gap-12',
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              )}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={cn(
                    'w-16 h-16 rounded-2xl bg-gradient-to-r flex items-center justify-center',
                    step.color
                  )}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Step {index + 1}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{step.description}</p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * detailIndex }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-700">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {index === steps.length - 1 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center space-x-2 group"
                  >
                    <span>Get Started Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                )}
              </div>

              {/* Visual */}
              <div className="flex-1 max-w-lg">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full translate-x-16 -translate-y-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full -translate-x-12 translate-y-12"></div>
                    </div>

                    {/* Mock Interface */}
                    <div className="relative z-10">
                      {index === 0 && (
                        <div className="space-y-4">
                          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                              <div>
                                <div className="w-24 h-3 bg-gray-300 rounded"></div>
                                <div className="w-16 h-2 bg-gray-200 rounded mt-1"></div>
                              </div>
                            </div>
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 opacity-75">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                              <div>
                                <div className="w-20 h-3 bg-gray-300 rounded"></div>
                                <div className="w-14 h-2 bg-gray-200 rounded mt-1"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                          <div className="grid grid-cols-7 gap-2 mb-4">
                            {[...Array(35)].map((_, i) => (
                              <div key={i} className={cn(
                                'w-8 h-8 rounded flex items-center justify-center text-xs',
                                i === 15 ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'
                              )}>
                                {i + 1}
                              </div>
                            ))}
                          </div>
                          <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
                            <div className="text-sm font-medium text-primary-800">3:00 PM - 4:00 PM</div>
                            <div className="text-xs text-primary-600">Career Strategy Session</div>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="bg-black rounded-xl p-6 relative">
                          <div className="bg-gray-800 rounded-lg p-4 mb-4">
                            <div className="w-full h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded"></div>
                          </div>
                          <div className="flex justify-center space-x-4">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                              <Video className="w-5 h-5 text-white" />
                            </div>
                            <div className="w-10 h-10 bg-red-500 rounded-full"></div>
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        <div className="space-y-4">
                          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                            <div className="flex justify-between items-center mb-3">
                              <div className="text-sm font-medium text-gray-900">Career Progress</div>
                              <div className="text-green-600 text-sm">+15%</div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-3/4"></div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                              <div className="w-4 h-4 bg-blue-500 rounded mb-2"></div>
                              <div className="w-16 h-2 bg-gray-300 rounded"></div>
                            </div>
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                              <div className="w-4 h-4 bg-purple-500 rounded mb-2"></div>
                              <div className="w-12 h-2 bg-gray-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className={cn(
                      'absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r flex items-center justify-center',
                      step.color
                    )}
                  >
                    <step.icon className="w-4 h-4 text-white" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Connection Arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-16"
                >
                  <div className={cn(
                    'w-12 h-12 rounded-full bg-gradient-to-r flex items-center justify-center shadow-lg',
                    steps[index + 1].color
                  )}>
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-600 mb-8">
            Ready to start your career transformation journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Browse Experts
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
