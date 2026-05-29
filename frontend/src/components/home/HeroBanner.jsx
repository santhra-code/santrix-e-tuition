import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../common/Button'
import { FiArrowRight } from 'react-icons/fi'

export const HeroBanner = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-0 left-0 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-0 right-0 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)]">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Learn from the Best Teachers
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Get personalized tutoring from expert instructors. Master any subject with our interactive courses and one-on-one sessions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/">
                <Button variant="primary" size="lg" className="group">
                  Explore Courses
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-blue-100">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-100">Teachers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100+</div>
                <div className="text-blue-100">Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
