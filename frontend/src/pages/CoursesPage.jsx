import React from 'react'
import { SEO } from '../components/common/SEO'
import { ModernNavbar } from '../components/modern/ModernNavbar'
import { CoursesSection } from '../components/modern/CoursesSection'
import { CTASection } from '../components/modern/CTASection'
import { ModernFooter } from '../components/modern/ModernFooter'

export const CoursesPage = () => {
  return (
    <>
      <SEO
        title="Online Courses | Santrix E-Tuition"
        description="Explore our comprehensive collection of online courses taught by expert instructors. Master subjects with interactive learning modules and personalized guidance."
        keywords="online courses, e-learning, tuition, lessons, subjects"
        url="https://santrix-e-tuitions.com/courses"
      />
      
      <ModernNavbar />
      
      {/* Courses Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">
              Our Courses
            </h1>
            <p className="text-xl text-gray-600">
              Choose from a wide variety of courses designed by experts to help you achieve your learning goals.
            </p>
          </div>
          <CoursesSection />
        </div>
      </section>
      
      {/* CTA */}
      <CTASection />
      
      {/* Footer */}
      <ModernFooter />
    </>
  )
}
