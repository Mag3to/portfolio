import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection2 from '../components/HeroSection2'
import PricingCard from '../components/PricingCard'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroSection2 heading="PROJECTS." text="Some of our most recent works"/>
      <WorkCard/>
      <PricingCard/>
      <Footer />
    </div>
  )
}

export default Project