import React from 'react'
import "./footer.css"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>80100 Mombasa</p>
                        <p>Kenya</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    +254729-507-932</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    solomonmageto22@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About us</h4>
                <p>
                With a vast experince in the field,
                we are able to keep up with the new cutting edge technolgies
                that help make the client's life easier and better.
                </p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer