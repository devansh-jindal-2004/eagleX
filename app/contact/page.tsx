import ContactForm from '@/components/contact/Form'
import Hero from '@/components/contact/Hero'
import React from 'react'
import CTA from '@/components/home/CTA'

function page() {
  return (
    <div>
        <Hero />
        <ContactForm />
        <CTA />
    </div>
  )
}

export default page