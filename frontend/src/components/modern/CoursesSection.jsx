import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const allCourses = [
  // Competitive Exams
  { id: 1, name: 'JEE Main & Advanced', category: 'competitive', level: 'Advanced', courses: ['JEE Main', 'JEE Advanced', 'Physics', 'Chemistry', 'Mathematics'] },
  { id: 2, name: 'NEET', category: 'competitive', level: 'Advanced', courses: ['Biology', 'Physics', 'Chemistry', 'Organic Chemistry', 'Anatomy'] },
  { id: 3, name: 'GATE', category: 'competitive', level: 'Advanced', courses: ['Engineering Math', 'Core Subjects', 'Technical Drawing', 'Problem Solving'] },
  { id: 4, name: 'SSC', category: 'competitive', level: 'Intermediate', courses: ['English', 'General Knowledge', 'Quantitative', 'Reasoning'] },
  { id: 5, name: 'IBPS', category: 'competitive', level: 'Intermediate', courses: ['Banking Basics', 'Quantitative', 'Reasoning', 'General Awareness'] },
  { id: 6, name: 'TNPSC', category: 'competitive', level: 'Intermediate', courses: ['Tamil', 'History', 'Geography', 'Polity'] },
  { id: 7, name: 'UGC-NET', category: 'competitive', level: 'Advanced', courses: ['Research Methods', 'Subject Expertise', 'Teaching Aptitude'] },
  
  // School Boards
  { id: 8, name: 'LKG to 3rd Grade', category: 'school', level: 'Beginner', courses: ['Math Basics', 'English', 'EVS', 'Life Skills'] },
  { id: 9, name: '4th to 6th Grade', category: 'school', level: 'Beginner', courses: ['Mathematics', 'English', 'Science', 'Social Studies'] },
  { id: 10, name: '7th to 9th Grade', category: 'school', level: 'Intermediate', courses: ['Math', 'Science', 'English', 'History', 'Geography'] },
  { id: 11, name: '+1 (11th Grade)', category: 'school', level: 'Intermediate', courses: ['Physics', 'Chemistry', 'Biology/Maths', 'English'] },
  { id: 12, name: '+2 (12th Grade)', category: 'school', level: 'Advanced', courses: ['Physics', 'Chemistry', 'Biology/Maths', 'English'] },
  
  // Programming
  { id: 13, name: 'Java Programming', category: 'programming', level: 'Intermediate', courses: ['OOP Concepts', 'Collections', 'Threads', 'Spring Framework'] },
  { id: 14, name: 'Python Programming', category: 'programming', level: 'Intermediate', courses: ['Basics', 'Data Structures', 'Web Dev', 'Machine Learning'] },
  { id: 15, name: 'C Programming', category: 'programming', level: 'Beginner', courses: ['Fundamentals', 'Pointers', 'Arrays', 'File Handling'] },
  { id: 16, name: 'C++ Programming', category: 'programming', level: 'Intermediate', courses: ['OOP', 'STL', 'Templates', 'Advanced C++'] },
]

const categories = [
  { id: 'all', label: 'All Courses', icon: '📚' },
  { id: 'competitive', label: 'Competitive Exams', icon: '🎯' },
  { id: 'school', label: 'School Boards', icon: '🏫' },
  { id: 'programming', label: 'Programming', icon: '💻' },
]

const courseColors = [
  'bg-gradient-to-br from-primary to-primary-dark',
  'bg-gradient-to-br from-primary-dark to-accent',
  'bg-gradient-to-br from-accent to-primary',
  'bg-gradient-to-br from-primary to-accent',
  'bg-gradient-to-br from-primary-dark to-primary',
]

export const CoursesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [expandedCourse, setExpandedCourse] = useState(null)

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
              <div className={`relative overflow-hidden rounded-2xl ${courseColors[index % courseColors.length]} p-6 text-white shadow-soft hover:shadow-soft-lg transition-all cursor-pointer h-full flex flex-col justify-between`}>
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
                  <h3 className="text-xl font-bold mb-4">{course.name}</h3>

                  {/* Course List */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={expandedCourse === course.id ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <ul className="space-y-2 text-sm text-white/90">
                      {course.courses.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-accent">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Expand/Collapse Button */}
                <motion.button
                  onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                  className="relative z-10 mt-4 pt-4 border-t border-white/20 flex items-center gap-2 text-white font-semibold hover:translate-x-2 transition-transform w-full"
                >
                  {expandedCourse === course.id ? 'View Less' : 'View Courses'}
                  <FiArrowRight size={18} />
                </motion.button>
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
