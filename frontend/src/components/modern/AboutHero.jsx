import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export const AboutHero = () => {
  return (
    <section className="relative min-h-[700px] bg-gradient-to-br from-primary-dark via-primary to-accent flex items-center overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Santrix E-Tuitions
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 text-white/95 text-lg leading-relaxed mb-8"
          >
            <p>
              Santrix E-Tuitions is a modern online learning platform committed to delivering quality education through expert mentoring, personalized guidance, and innovative teaching methods. Our goal is to help students build strong academic foundations, develop critical thinking skills, and achieve excellence in their chosen fields.
            </p>
            
            <p>
              We offer comprehensive coaching for school students, competitive examination aspirants, and programming enthusiasts. Our mentors provide specialized training for JEE, NEET, GATE, SSC, IBPS, TNPSC, UGC-NET, Java, Python, C, C++, 10th Standard, +1, and +2 students across all educational boards.
            </p>
            
            <p>
              At Santrix E-Tuitions, learning goes beyond textbooks. Through interactive online classes, concept-based teaching, regular assessments, doubt-clearing sessions, and personalized attention, we create an engaging learning environment that empowers students to reach their full potential.
            </p>
            
            <p>
              Our mission is to make quality education accessible to learners everywhere and to guide every student toward academic success, career growth, and lifelong learning.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <button className="px-8 py-3 rounded-full bg-white text-primary-dark font-bold hover:shadow-glow transition-all hover:scale-105 flex items-center gap-2">
              Explore Courses
              <FiArrowRight size={20} />
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all">
              Meet Teachers
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
