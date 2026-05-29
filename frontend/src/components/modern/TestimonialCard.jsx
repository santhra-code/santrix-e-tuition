import React from 'react'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

export const TestimonialCard = ({ name, role, image, quote, rating }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative"
    >
      <div className="bg-white rounded-3xl p-8 backdrop-blur-md border border-primary/10 hover:border-primary/30 shadow-soft hover:shadow-soft-lg transition-all">
        {/* Quote Mark */}
        <div className="text-5xl text-primary/20 mb-4">"</div>
        
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <FiStar key={i} size={18} className="fill-accent text-accent" />
          ))}
        </div>
        
        {/* Quote */}
        <p className="text-gray-700 mb-6 line-clamp-4">{quote}</p>
        
        {/* Author */}
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
