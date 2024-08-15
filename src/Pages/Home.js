import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import WorkCard from '../components/WorkCard'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WorkCard/>
      <Footer />
    </div>
  )
}

export default Home