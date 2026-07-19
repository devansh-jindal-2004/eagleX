import Testimonials from '@/components/home/Testimonial'
import Hero from '@/components/services/Hero'
import Pricing from '@/components/services/Pricing'
import Process from '@/components/services/Process'
import Services from '@/components/services/Services'
import CTA from '@/components/home/CTA'
import React from 'react'

function page() {
    return (
        <>
            <Hero />
            <Services />
            <Process />
            <Pricing />
            <Testimonials />
            <CTA />
        </>
    )
}

export default page