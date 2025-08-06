import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { cn } from '../utils';

const TestimonialsSection = ({ language = 'en' }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Alex Thompson',
      role: 'Software Engineer',
      company: 'Spotify',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: "Working with Sarah completely transformed my career trajectory. In just 3 months, I went from a junior developer to landing a senior position at Spotify. Her insights into the tech industry and personalized coaching approach made all the difference.",
      videoUrl: '#',
      results: {
        salaryIncrease: '40%',
        timeToPromotion: '3 months',
        confidenceLevel: '95%'
      },
      beforeAfter: {
        before: 'Junior Developer, struggling with career direction',
        after: 'Senior Software Engineer at Spotify'
      }
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      role: 'Marketing Director',
      company: 'Adobe',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: "Emily's guidance helped me navigate a challenging career transition from finance to marketing. Her strategic approach and industry connections were invaluable. I'm now leading a team of 15 at Adobe and loving every moment of it.",
      videoUrl: '#',
      results: {
        salaryIncrease: '55%',
        timeToPromotion: '6 months',
        confidenceLevel: '98%'
      },
      beforeAfter: {
        before: 'Financial Analyst looking to switch careers',
        after: 'Marketing Director at Adobe'
      }
    },
    {
      id: 3,
      name: 'James Park',
      role: 'Product Manager',
      company: 'Tesla',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: "David's mentorship was exactly what I needed to break into product management. His hands-on experience and practical advice helped me land my dream job at Tesla. The investment in coaching paid for itself within the first month.",
      videoUrl: '#',
      results: {
        salaryIncrease: '65%',
        timeToPromotion: '4 months',
        confidenceLevel: '92%'
      },
      beforeAfter: {
        before: 'Business Analyst wanting to move into product',
        after: 'Product Manager at Tesla'
      }
    },
    {
      id: 4,
      name: 'Rachel Kim',
      role: 'Investment Manager',
      company: 'BlackRock',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: "Michael's expertise in investment banking was instrumental in my transition to asset management. His network and strategic advice opened doors I never thought possible. I'm now managing a $500M portfolio at BlackRock.",
      videoUrl: '#',
      results: {
        salaryIncrease: '70%',
        timeToPromotion: '5 months',
        confidenceLevel: '96%'
      },
      beforeAfter: {
        before: 'Financial Advisor at a small firm',
        after: 'Investment Manager at BlackRock'
      }
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

    // Auto-advance testimonials
  useEffect(() => {
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, testimonials.length]);

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary-100/50 to-secondary-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-secondary-100/50 to-accent-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from professionals who transformed their careers with our expert coaching. 
            Their success could be your next chapter.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary-200" />
                <blockquote className="text-2xl font-medium text-gray-900 leading-relaxed pl-8">
                  "{current.quote}"
                </blockquote>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{current.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{current.name}</h4>
                  <p className="text-primary-600 font-medium">{current.role}</p>
                  <p className="text-gray-600">{current.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-600 ml-2">Verified Review</span>
              </div>

              {/* Before & After */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
                <h5 className="font-semibold text-gray-900 mb-4">Transformation Journey</h5>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">BEFORE</span>
                    <p className="text-gray-700 mt-1">{current.beforeAfter.before}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">AFTER</span>
                    <p className="text-gray-700 mt-1">{current.beforeAfter.after}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Video/Results */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`results-${currentTestimonial}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Video Placeholder */}
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group"
                  >
                    <Play className="w-8 h-8 text-gray-900 ml-1 group-hover:text-primary-600 transition-colors" />
                  </motion.button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-sm font-medium">
                      "{current.name} shares their career transformation story"
                    </p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-green-700">{current.results.salaryIncrease}</div>
                  <div className="text-sm text-green-600">Salary Increase</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-blue-700">{current.results.timeToPromotion}</div>
                  <div className="text-sm text-blue-600">Time to Success</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-purple-700">{current.results.confidenceLevel}</div>
                  <div className="text-sm text-purple-600">Confidence Level</div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-6 mb-16">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-primary-300 hover:bg-primary-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </motion.button>

          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={cn(
                  'w-3 h-3 rounded-full transition-colors',
                  currentTestimonial === index ? 'bg-primary-600' : 'bg-gray-300'
                )}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-primary-300 hover:bg-primary-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </motion.button>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '94%', label: 'Success Rate', description: 'Achieved career goals' },
            { value: '45%', label: 'Average Salary Increase', description: 'Within 6 months' },
            { value: '4.2x', label: 'Faster Promotions', description: 'Compared to industry average' },
            { value: '98%', label: 'Would Recommend', description: 'To friends and colleagues' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Ready to write your own success story?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
