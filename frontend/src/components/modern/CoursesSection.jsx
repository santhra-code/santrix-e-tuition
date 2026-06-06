import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const allCourses = [
  // Competitive Exams
  { id: 1, name: 'JEE Main & Advanced', category: 'competitive', level: 'Advanced', students: '2000+', color: 'from-blue-400 to-blue-600' },
  { id: 2, name: 'NEET', category: 'competitive', level: 'Advanced', students: '1800+', color: 'from-green-400 to-green-600' },
  { id: 3, name: 'GATE', category: 'competitive', level: 'Advanced', students: '1200+', color: 'from-purple-400 to-purple-600' },
  { id: 4, name: 'SSC', category: 'competitive', level: 'Intermediate', students: '950+', color: 'from-red-400 to-red-600' },
  { id: 5, name: 'IBPS', category: 'competitive', level: 'Intermediate', students: '800+', color: 'from-yellow-400 to-yellow-600' },
  { id: 6, name: 'TNPSC', category: 'competitive', level: 'Intermediate', students: '650+', color: 'from-pink-400 to-pink-600' },
  { id: 7, name: 'UGC-NET', category: 'competitive', level: 'Advanced', students: '500+', color: 'from-indigo-400 to-indigo-600' },
  
  // School Boards
  { id: 8, name: 'LKG to 3rd Grade', category: 'school', level: 'Beginner', students: '1500+', color: 'from-rose-400 to-rose-600' },
  { id: 9, name: '4th to 6th Grade', category: 'school', level: 'Beginner', students: '1800+', color: 'from-cyan-400 to-cyan-600' },
  { id: 10, name: '7th to 9th Grade', category: 'school', level: 'Intermediate', students: '2200+', color: 'from-teal-400 to-teal-600' },
  { id: 11, name: '+1 (11th Grade)', category: 'school', level: 'Intermediate', students: '1600+', color: 'from-lime-400 to-lime-600' },
  { id: 12, name: '+2 (12th Grade)', category: 'school', level: 'Advanced', students: '1900+', color: 'from-amber-400 to-amber-600' },
  
  // Programming
  { id: 13, name: 'Java Programming', category: 'programming', level: 'Intermediate', students: '1100+', color: 'from-orange-400 to-orange-600' },
  { id: 14, name: 'Python Programming', category: 'programming', level: 'Intermediate', students: '1400+', color: 'from-blue-500 to-cyan-500' },
  { id: 15, name: 'C Programming', category: 'programming', level: 'Beginner', students: '950+', color: 'from-slate-400 to-slate-600' },
  { id: 16, name: 'C++ Programming', category: 'programming', level: 'Intermediate', students: '1050+', color: 'from-violet-400 to-violet-600' },
]

const categories = [
  { id: 'all', label: 'All Courses', icon: '📚' },
  { id: 'competitive', label: 'Competitive Exams', icon: '🎯' },
  { id: 'school', label: 'School Boards', icon: '🏫' },
  { id: 'programming', label: 'Programming', icon: '💻' },
]

export const CoursesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredCourses = activeFilter === 'all' 
    ? allCourses 
    : allCourses.filter(course => course.category === activeFilter)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive collection of courses across competitive exams, school boards, and programming
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-primary-dark to-accent text-white shadow-glow'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${course.color} p-6 text-white shadow-soft hover:shadow-soft-lg transition-all cursor-pointer h-full flex flex-col justify-between`}>
                {/* Background Decoration */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-white/5 rounded-full"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-3">
                    {course.level}
                  </div>

                  {/* Course Name */}
                  <h3 className="text-xl font-bold mb-2">{course.name}</h3>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-white/80 text-sm">
                    <span>👥 {course.students} enrolled</span>
                  </div>
                </div>

                {/* Hover CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="relative z-10 mt-4 pt-4 border-t border-white/20 flex items-center gap-2 text-white font-semibold group-hover:translate-x-2 transition-transform"
                >
                  Explore
                  <FiArrowRight size={18} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Ready to start learning?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-dark to-accent text-white font-bold hover:shadow-glow transition-all flex items-center gap-2 mx-auto"
          >
            Explore All Courses
            <FiArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
