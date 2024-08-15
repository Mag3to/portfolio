import React from 'react'
import "./aboutContent.css"
import { Link } from 'react-router-dom'
import React1 from "../Assets/heroBg-1.jpg"
import React2 from "../Assets/heroBg-2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Are We?</h1>
            <p>
                   We are the fastest growing software and web development 
                   company in the region.
                   With over 4 years of experience in web application development, 
                   We have acquired expertise in WordPress, HTML & CSS, 
                   JavaScript, React.js, Next.js, Python, and Django. 
                   We have successfully designed platforms utilized by over 1000 users. 
                   This experience has not only honed our technical skills but also enriched our capacity to engage with clients on a profound level, 
                   recognizing the significance of user-friendly interfaces in achieving optimal results.
            </p>
            <Link to="/contact" className="btn">Contact</Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent