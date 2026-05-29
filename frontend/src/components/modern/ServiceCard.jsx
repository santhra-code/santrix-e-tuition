import React from 'react'
import { motion } from 'framer-motion'

export const ServiceCard = ({ icon: Icon, title, description, gradient }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className={`relative overflow-hidden rounded-3xl p-8 backdrop-blur-md transition-all duration-300 ${
        gradient === 'purple' ? 'bg-gradient-to-br from-primary/30 to-primary-dark/20 border border-primary/20 hover:border-primary/50' :
        gradient === 'orange' ? 'bg-gradient-to-br from-accent/30 to-beige/20 border border-accent/20 hover:border-accent/50' :
        'bg-gradient-to-br from-beige/30 to-primary/10 border border-beige/20 hover:border-beige/50'
      } hover:shadow-soft-lg`}>
        
        {/* Background Decoration */}
        <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-20" style={{
          background: gradient === 'purple' ? '#8E6BBE' : gradient === 'orange' ? '#F6A04D' : '#C8B6D9'
        }}></div>
        
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all ${
          gradient === 'purple' ? 'bg-gradient-to-br from-primary-dark to-primary text-white' :
          gradient === 'orange' ? 'bg-gradient-to-br from-accent to-beige text-white' :
          'bg-gradient-to-br from-primary to-beige text-white'
        } group-hover:scale-110 group-hover:shadow-glow`}>
          <Icon size={32} />
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">{title}</h3>
        <p className="text-gray-600 leading-relaxed relative z-10">{description}</p>
        
        {/* Hover Border Animation */}
        <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
          gradient === 'purple' ? 'border-2 border-primary-dark/50' :
          gradient === 'orange' ? 'border-2 border-accent/50' :
          'border-2 border-primary/50'
        }`}></div>
      </div>
    </motion.div>
  )
}
