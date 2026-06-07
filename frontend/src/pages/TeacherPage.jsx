import React from 'react'
import { SEO } from '../components/common/SEO'
import { ModernNavbar } from '../components/modern/ModernNavbar'
import { CTASection } from '../components/modern/CTASection'
import { ModernFooter } from '../components/modern/ModernFooter'

export const TeacherPage = () => {
  return (
    <>
      <SEO
        title="Meet Sanjana - Founder of Santrix E-Tuition"
        description="Meet Sanjana, the passionate founder of Santrix E-Tuitions. Dedicated to personalized education and student success through quality tutoring and mentorship."
        keywords="Sanjana, founder, teacher, tutor, education, mentorship"
        url="https://santrix-e-tuitions.com/teachers"
      />
      
      <ModernNavbar />
      
      {/* Teacher Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">
              Meet Our Founder
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated to transforming education through personalized learning and expert mentorship
            </p>
          </div>
          
          {/* Sanjana's Profile */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-soft-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Image Section */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-2xl opacity-30"></div>
                    <img 
                      src="https://via.placeholder.com/400x500/9b87d9/7c6bc3?text=Sanjana" 
                      alt="Sanjana - Founder" 
                      className="relative rounded-2xl w-full max-w-sm object-cover shadow-soft-lg"
                    />
                  </div>
                </div>
                
                {/* Bio Section */}
                <div className="flex flex-col justify-center">
                  <div className="mb-6">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Sanjana</h2>
                    <p className="text-xl text-primary-dark font-semibold mb-2">Founder & Lead Educator</p>
                    <p className="text-lg text-accent font-medium">Santrix E-Tuitions</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-700 text-base leading-relaxed">
                      Hello, I'm Sanjana, the founder of Santrix E-Tuitions.
                    </p>
                    
                    <p className="text-gray-700 text-base leading-relaxed">
                      Teaching has always been more than a profession to me—it's a passion. I believe every student has unique potential, and with the right guidance, encouragement, and learning environment, they can achieve remarkable success.
                    </p>
                    
                    <p className="text-gray-700 text-base leading-relaxed">
                      My goal is not just to help students score well in exams, but to build their confidence, strengthen their concepts, and inspire a genuine love for learning.
                    </p>
                    
                    <p className="text-gray-700 text-base leading-relaxed">
                      Through Santrix E-Tuitions, I am committed to providing personalized attention, clear explanations, and a supportive atmosphere where students can learn, grow, and excel academically. I take pride in helping students overcome challenges and reach their goals with confidence.
                    </p>
                  </div>
                  
                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
                      <p className="text-2xl font-bold bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">10+</p>
                      <p className="text-gray-600 text-sm mt-1">Years of Teaching Experience</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
                      <p className="text-2xl font-bold bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">500+</p>
                      <p className="text-gray-600 text-sm mt-1">Students Mentored</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">
              What We Believe In
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 hover:shadow-soft-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Personalized Learning</h4>
                <p className="text-gray-600">Every student is unique. We tailor our teaching approach to match individual learning styles and pace.</p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 hover:shadow-soft-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Concept Clarity</h4>
                <p className="text-gray-600">We focus on building strong conceptual foundations rather than rote learning, ensuring lasting knowledge.</p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 hover:shadow-soft-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Student Empowerment</h4>
                <p className="text-gray-600">Our goal is to build confidence and independence in students, making them self-reliant learners.</p>
              </div>
            </div>
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
