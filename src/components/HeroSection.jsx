import React from 'react'
import "./heroSection.css"
import heroBg from "../Assets/heroBg-2.jpg"
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img" src={heroBg} alt="" />
        </div>
        <div className="content">
            <p>HI! WE ARE A TECH COMPANY.</p>
            <h1>WEB AND SOFTWARE DEVELOPERS</h1>
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection