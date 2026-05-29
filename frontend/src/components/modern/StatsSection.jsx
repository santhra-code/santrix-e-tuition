import React from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiBook, FiAward, FiTrendingUp } from 'react-icons/fi'

const stats = [
  { icon: FiUsers, value: '10K+', label: 'Active Students', color: 'primary' },
  { icon: FiBook, value: '500+', label: 'Expert Teachers', color: 'primary-dark' },
  { icon: FiAward, value: '1000+', label: 'Courses Available', color: 'accent' },
  { icon: FiTrendingUp, value: '95%', label: 'Success Rate', color: 'accent' },
]

export const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-dark/10 via-accent/10 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-gray-600">Join our growing community of successful learners</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const colorClasses = stat.color === 'primary' ? 'from-primary to-primary-dark' :
                                stat.color === 'primary-dark' ? 'from-primary-dark to-accent' :
                                'from-accent to-beige'
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses} flex items-center justify-center mx-auto mb-4 text-white shadow-glow`}
                >
                  <Icon size={28} />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
