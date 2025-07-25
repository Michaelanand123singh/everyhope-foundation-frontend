import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'
import ImpactSection from '../components/sections/ImpactSection'
import MissionSection from '../components/sections/MissionSection'
import WaysToHelpSection from '../components/sections/WaysToHelpSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImpactSection />
      <MissionSection />
      <WaysToHelpSection />
      <TestimonialsSection />
    </div>
  )
}

export default Home