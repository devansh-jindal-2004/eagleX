import CTA from '@/components/home/CTA'
import Hero from '@/components/home/Hero'
import Projects from '@/components/home/Projects'
import Services from '@/components/home/Services'
import Testimonials from '@/components/home/Testimonial'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import React from 'react'

function page() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default page