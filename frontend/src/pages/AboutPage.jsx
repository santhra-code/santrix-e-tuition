import React from 'react'
import { SEO } from '../components/common/SEO'
import { ModernNavbar } from '../components/modern/ModernNavbar'
import { AboutHero } from '../components/modern/AboutHero'
import { StatsSection } from '../components/modern/StatsSection'
import { TestimonialsSection } from '../components/modern/TestimonialsSection'
import { CTASection } from '../components/modern/CTASection'
import { ModernFooter } from '../components/modern/ModernFooter'

export const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us | Santrix E-Tuition"
        description="Learn about Santrix's mission to transform education through personalized learning experiences. Meet our expert team of educators."
        keywords="about us, mission, team, education, tutoring platform"
        url="https://santrix-e-tuitions.com/about"
      />
      
      <ModernNavbar />
      
      {/* About Hero */}
      <section className="pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AboutHero />
        </div>
      </section>
      
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
