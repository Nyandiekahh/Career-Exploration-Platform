import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Clock, 
  Target, 
  Shield, 
  Zap, 
  Globe,
  MessageCircle,
  Award,
  TrendingUp,
  Heart,
  CheckCircle
} from 'lucide-react';
import { cn, languages } from '../utils';

const FeaturesSection = ({ language = 'en' }) => {
  const t = languages[language];

  const mainFeatures = [
    {
      icon: Users,
      title: t.features.expert.title,
      description: t.features.expert.description,
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Clock,
      title: t.features.flexible.title,
      description: t.features.flexible.description,
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Target,
      title: t.features.personalized.title,
      description: t.features.personalized.description,
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.3
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'End-to-end encrypted sessions with GDPR compliance'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Book sessions instantly with real-time availability'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with experts from around the world'
    },
    {
      icon: MessageCircle,
      title: 'Chat Support',
      description: '24/7 support with integrated chatbot assistance'
    },
    {
      icon: Award,
      title: 'Verified Experts',
      description: 'All coaches are verified with proven track records'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your career growth with detailed analytics'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is designed to provide the most effective and engaging career coaching experience
          </p>
        </motion.div>

        {/* Main Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="card h-full text-center space-y-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={cn(
                    'w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r flex items-center justify-center',
                    feature.gradient
                  )}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of professionals who have already accelerated their career growth with our expert guidance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
                >
                  Browse Experts
                </motion.button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 mt-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">30-day money back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
