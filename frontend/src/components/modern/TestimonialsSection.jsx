import React from 'react'
import { TestimonialCard } from './TestimonialCard'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'IIT JEE Student',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    quote: 'Santrix helped me improve my math scores by 40 points. The tutors are incredibly supportive and explain complex concepts simply.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'GMAT Aspirant',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    quote: 'The personalized learning paths and mock tests made all the difference. I scored in the top 10%!',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Software Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    quote: 'Great course quality and exceptional support. I learned more in 3 months than I expected to in 6.',
    rating: 5
  }
]

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-bg-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-lg text-gray-600">Hear from our amazing students</p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
