import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  Calendar, 
  Briefcase, 
  ChevronLeft,
  ChevronRight,
  Filter
} from 'lucide-react';
import { cn } from '../utils';

const ExpertsSection = ({ language = 'en' }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);

  const categories = [
    { id: 'all', name: 'All Experts', count: 150 },
    { id: 'tech', name: 'Technology', count: 45 },
    { id: 'finance', name: 'Finance', count: 32 },
    { id: 'marketing', name: 'Marketing', count: 28 },
    { id: 'leadership', name: 'Leadership', count: 25 },
    { id: 'consulting', name: 'Consulting', count: 20 }
  ];

  const experts = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Product Manager',
      company: 'Google',
      avatar: '/api/placeholder/80/80',
      rating: 4.9,
      reviews: 127,
      experience: '8+ years',
      location: 'San Francisco, CA',
      specialties: ['Product Strategy', 'Team Leadership', 'Career Transitions'],
      hourlyRate: 120,
      nextAvailable: 'Today 3:00 PM',
      category: 'tech',
      featured: true,
      languages: ['English', 'Spanish']
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Investment Director',
      company: 'Goldman Sachs',
      avatar: '/api/placeholder/80/80',
      rating: 4.8,
      reviews: 89,
      experience: '12+ years',
      location: 'New York, NY',
      specialties: ['Investment Banking', 'Financial Planning', 'Risk Management'],
      hourlyRate: 150,
      nextAvailable: 'Tomorrow 10:00 AM',
      category: 'finance',
      featured: false,
      languages: ['English', 'Mandarin']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Creative Director',
      company: 'Nike',
      avatar: '/api/placeholder/80/80',
      rating: 4.9,
      reviews: 156,
      experience: '10+ years',
      location: 'Portland, OR',
      specialties: ['Brand Strategy', 'Creative Leadership', 'Marketing Campaigns'],
      hourlyRate: 110,
      nextAvailable: 'Today 5:00 PM',
      category: 'marketing',
      featured: true,
      languages: ['English', 'Portuguese']
    },
    {
      id: 4,
      name: 'David Kumar',
      title: 'Engineering Manager',
      company: 'Microsoft',
      avatar: '/api/placeholder/80/80',
      rating: 4.7,
      reviews: 203,
      experience: '15+ years',
      location: 'Seattle, WA',
      specialties: ['Engineering Management', 'Technical Leadership', 'Career Growth'],
      hourlyRate: 140,
      nextAvailable: 'Tomorrow 2:00 PM',
      category: 'tech',
      featured: false,
      languages: ['English', 'Hindi']
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      title: 'Executive Coach',
      company: 'McKinsey & Company',
      avatar: '/api/placeholder/80/80',
      rating: 5.0,
      reviews: 94,
      experience: '20+ years',
      location: 'London, UK',
      specialties: ['Executive Coaching', 'Leadership Development', 'Strategic Planning'],
      hourlyRate: 200,
      nextAvailable: 'Monday 9:00 AM',
      category: 'leadership',
      featured: true,
      languages: ['English', 'French']
    },
    {
      id: 6,
      name: 'James Wilson',
      title: 'Management Consultant',
      company: 'Bain & Company',
      avatar: '/api/placeholder/80/80',
      rating: 4.8,
      reviews: 167,
      experience: '11+ years',
      location: 'Boston, MA',
      specialties: ['Business Strategy', 'Operations', 'Digital Transformation'],
      hourlyRate: 160,
      nextAvailable: 'Today 7:00 PM',
      category: 'consulting',
      featured: false,
      languages: ['English']
    }
  ];

  const filteredExperts = activeCategory === 'all' 
    ? experts 
    : experts.filter(expert => expert.category === activeCategory);

  const expertsPerPage = 3;
  const totalPages = Math.ceil(filteredExperts.length / expertsPerPage);
  const startIndex = currentPage * expertsPerPage;
  const displayedExperts = filteredExperts.slice(startIndex, startIndex + expertsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
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
    <section id="careers" className="py-24 bg-gray-50">
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
            Meet Our <span className="gradient-text">Expert Coaches</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with industry leaders who have walked the path you want to take. 
            Get personalized guidance from professionals at top companies worldwide.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentPage(0);
              }}
              className={cn(
                'px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2',
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              )}
            >
              <span>{category.name}</span>
              <span className={cn(
                'text-xs px-2 py-1 rounded-full',
                activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
              )}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Experts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={currentPage} // Re-animate when page changes
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {displayedExperts.map((expert) => (
            <motion.div
              key={expert.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Featured Badge */}
              {expert.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}

              {/* Expert Info */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{expert.name.charAt(0)}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{expert.name}</h3>
                  <p className="text-primary-600 font-medium">{expert.title}</p>
                  <p className="text-gray-600 text-sm">{expert.company}</p>
                </div>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium text-gray-900">{expert.rating}</span>
                  <span className="text-gray-600 text-sm">({expert.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600 text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>{expert.experience}</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-1 text-gray-600 text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>{expert.location}</span>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {expert.specialties.slice(0, 2).map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                  {expert.specialties.length > 2 && (
                    <span className="text-gray-500 text-xs">
                      +{expert.specialties.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Languages */}
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-gray-600 text-sm">Languages:</span>
                <div className="flex space-x-1">
                  {expert.languages.map((lang) => (
                    <span key={lang} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Availability & Price */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-gray-600 text-sm">Next available</div>
                  <div className="font-medium text-gray-900">{expert.nextAvailable}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">${expert.hourlyRate}</div>
                  <div className="text-gray-600 text-sm">per hour</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-primary-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Session</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-100 text-gray-700 font-medium py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  View Profile
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevPage}
              className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </motion.button>

            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={cn(
                    'w-3 h-3 rounded-full transition-colors',
                    currentPage === index ? 'bg-primary-600' : 'bg-gray-300'
                  )}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextPage}
              className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </motion.button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Can't find the perfect match? Our AI will help you discover the ideal coach for your goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center space-x-2 mx-auto"
          >
            <Filter className="w-5 h-5" />
            <span>Find My Perfect Coach</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertsSection;
