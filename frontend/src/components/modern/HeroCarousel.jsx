import React, { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    title: 'Master Any Subject',
    subtitle: 'Learn from world-class tutors with personalized guidance',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70504c11?w=1200&h=600&fit=crop',
    cta: 'Start Learning'
  },
  {
    id: 2,
    title: 'Personalized Mentoring',
    subtitle: 'Get expert one-on-one coaching tailored to your pace',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    cta: 'Book a Session'
  },
  {
    id: 3,
    title: 'Expert Teachers',
    subtitle: 'Learn from certified professionals with years of experience',
    image: 'https://images.unsplash.com/photo-1522202176988-696239b7d861?w=1200&h=600&fit=crop',
    cta: 'Meet Teachers'
  },
  {
    id: 4,
    title: 'Interactive Learning',
    subtitle: 'Engaging courses with assignments, quizzes, and live sessions',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop',
    cta: 'Explore Courses'
  },
  {
    id: 5,
    title: 'Success Stories',
    subtitle: 'Join thousands of students achieving their goals',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    cta: 'View Success'
  }
]

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-4xl">
      <AnimatePresence>
        {slides.map((slide, index) => {
          if (index !== current) return null
          return (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 via-primary-dark/50 to-accent/30"></div>
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                  >
                    {slide.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg md:text-xl text-white/90 mb-8"
                  >
                    {slide.subtitle}
                  </motion.p>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="px-8 py-3 rounded-full bg-white text-primary-dark font-bold hover:scale-105 hover:shadow-glow transition-all"
                  >
                    {slide.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all ${
              index === current
                ? 'bg-white w-8 h-2 rounded-full'
                : 'bg-white/50 w-2 h-2 rounded-full hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
