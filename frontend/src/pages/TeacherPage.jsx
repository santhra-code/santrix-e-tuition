import React from 'react'
import { SEO } from '../components/common/SEO'
import { ModernNavbar } from '../components/modern/ModernNavbar'
import { CTASection } from '../components/modern/CTASection'
import { ModernFooter } from '../components/modern/ModernFooter'

export const TeacherPage = () => {
  return (
    <>
      <SEO
        title="Teachers | Santrix E-Tuition"
        description="Meet our expert teachers at Santrix. Learn about their qualifications, experience, and teaching methodologies designed to help you succeed."
        keywords="teachers, instructors, experts, tutors, education"
        url="https://santrix-e-tuitions.com/teachers"
      />
      
      <ModernNavbar />
      
      {/* Teachers Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">
              Our Expert Teachers
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from experienced educators who are passionate about helping you achieve your academic goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all hover:-translate-y-1">
                <div className="w-full h-64 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-dark"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Teacher {i}</h3>
                  <p className="text-gray-600 mb-4">Subject Specialist | Experience: 10+ years</p>
                  <p className="text-gray-500 text-sm">Expert in teaching and mentoring students with personalized approach to learning.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CTASection />
      
      {/* Footer */}
      <ModernFooter />
    </>
  )
}
