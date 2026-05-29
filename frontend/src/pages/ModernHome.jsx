import React from 'react'
import { SEO } from '../components/common/SEO'
import { ModernNavbar } from '../components/modern/ModernNavbar'
import { HeroCarousel } from '../components/modern/HeroCarousel'
import { ServicesSection } from '../components/modern/ServicesSection'
import { StatsSection } from '../components/modern/StatsSection'
import { TestimonialsSection } from '../components/modern/TestimonialsSection'
import { CTASection } from '../components/modern/CTASection'
import { ModernFooter } from '../components/modern/ModernFooter'

export const ModernHome = () => {
  return (
    <>
      <SEO
        title="Premium Online Tutoring Platform | Santrix"
        description="Learn from world-class tutors with personalized guidance. Master any subject with interactive courses and expert mentoring."
        keywords="online tutoring, personalized learning, expert teachers, courses, mentorship"
        url="https://santrix-e-tuitions.com"
      />
      
      <ModernNavbar />
      
      {/* Hero Section */}
      <section className="pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HeroCarousel />
        </div>
      </section>
      
      {/* Services */}
      <ServicesSection />
      
      {/* Stats */}
      <StatsSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* CTA */}
      <CTASection />
      
      {/* Footer */}
      <ModernFooter />
    </>
  )
}
