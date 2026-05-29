import React from 'react'
import { ServiceCard } from './ServiceCard'
import { FiBook, FiUsers, FiTarget, FiZap } from 'react-icons/fi'
import { motion } from 'framer-motion'

const services = [
  {
    icon: FiBook,
    title: 'Comprehensive Courses',
    description: 'Access hundreds of courses across multiple subjects with interactive lessons and resources.',
    gradient: 'purple'
  },
  {
    icon: FiUsers,
    title: 'Expert Mentorship',
    description: 'Get personalized guidance from experienced tutors who care about your success.',
    gradient: 'orange'
  },
  {
    icon: FiTarget,
    title: 'Test Preparation',
    description: 'Ace your exams with targeted preparation courses and practice tests.',
    gradient: 'beige'
  },
  {
    icon: FiZap,
    title: 'Skill Development',
    description: 'Build in-demand skills with hands-on projects and real-world applications.',
    gradient: 'purple'
  }
]

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-bg-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">Premium Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes Santrix the perfect platform for your learning journey
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
