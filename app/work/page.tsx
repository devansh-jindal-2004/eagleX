import ClosingCTA from '@/components/home/CTA'
import FeaturedProjects from '@/components/work/Featured'
import WorkHero from '@/components/work/Hero'
import React from 'react'

function page() {
  return (
    <div>
        <WorkHero />
        <FeaturedProjects />
        <ClosingCTA />
    </div>
  )
}

export default page