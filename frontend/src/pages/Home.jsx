import React from 'react'
import { SEO } from '../components/common/SEO'
import { HeroBanner } from '../components/home/HeroBanner'

export const Home = () => {
  return (
    <>
      <SEO
        title="Learn from Expert Tutors | Online Tuition Platform"
        description="Get personalized tutoring from expert instructors. Learn at your own pace with our interactive courses."
        keywords="online tuition, tutoring, courses, learn online, education"
        url="https://santrix-e-tuitions.com"
      />
      
      <HeroBanner />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Welcome to Santrix E-Tuitions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your complete platform for online learning. More features coming soon including course browsing, teacher profiles, and demo bookings.
          </p>
        </div>
      </section>
    </>
  )
}
