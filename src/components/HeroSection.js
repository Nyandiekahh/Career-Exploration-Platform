import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Star, Users, Calendar, Zap } from 'lucide-react';
import { cn, languages } from '../utils';

const HeroSection = ({ language = 'en' }) => {
  const t = languages[language];

  const stats = [
    { icon: Star, value: '4.9', label: 'Rating' },
    { icon: Users, value: '10k+', label: 'Experts' },
    { icon: Calendar, value: '50k+', label: 'Sessions' },
  ];

  const floatingElements = [
    { icon: Zap, position: 'top-20 left-20', delay: 0 },
    { icon: Star, position: 'top-40 right-32', delay: 1 },
    { icon: Users, position: 'bottom-32 left-32', delay: 2 },
    { icon: Calendar, position: 'bottom-20 right-20', delay: 0.5 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden gradient-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: element.delay, duration: 2 }}
            className={cn(
              'absolute w-16 h-16 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center',
              element.position
            )}
          >
            <element.icon className="w-8 h-8 text-white" />
          </motion.div>
        ))}
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-primary-400/30 to-secondary-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-r from-secondary-400/30 to-accent-400/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Live Career Coaching Available</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">{t.hero.title.split(' ').slice(0, 2).join(' ')}</span>
                <br />
                <span className="text-gray-900">{t.hero.title.split(' ').slice(2).join(' ')}</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                {t.hero.subtitle}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2 group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t.hero.watchDemo}</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
                      <p className="text-gray-600">Senior Product Manager at Google</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-2">5.0 (127 reviews)</span>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      "Specialized in product strategy, team leadership, and career transitions in tech. 
                      I've helped 500+ professionals advance their careers."
                    </p>
                    
                    <button className="w-full btn-primary">
                      {t.bookSession}
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -right-4 bg-accent-400 text-white p-4 rounded-2xl shadow-xl"
              >
                <Calendar className="w-6 h-6 mb-2" />
                <div className="text-sm font-semibold">Next Available</div>
                <div className="text-xs opacity-90">Today 3:00 PM</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-4 -left-4 bg-secondary-500 text-white p-4 rounded-2xl shadow-xl"
              >
                <Zap className="w-6 h-6 mb-2" />
                <div className="text-sm font-semibold">1-Hour Session</div>
                <div className="text-xs opacity-90">Instant Booking</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
