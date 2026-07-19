import ClosingCTA from '@/components/home/CTA'
import DevelopmentExpertise from '@/components/work/Expertise'
import FeaturedProjects from '@/components/work/Featured'
import WorkHero from '@/components/work/Hero'
import ImpactResults from "@/components/work/ImpactResults"
import RecognitionStrip from '@/components/work/RecognitionStrip'
import React from 'react'

function page() {
  return (
    <div>
        <WorkHero />
        <FeaturedProjects />
        <DevelopmentExpertise />
        <RecognitionStrip />
        <ImpactResults />
        <ClosingCTA />
    </div>
  )
}

export default page