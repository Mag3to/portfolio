import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection2 from '../components/HeroSection2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection2 heading="CONTACT US." text="Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact