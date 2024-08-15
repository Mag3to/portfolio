import React, {Component} from 'react'
import './heroSection2.css'
import heroBg from "../Assets/heroBg.jpg"


class HeroSection2 extends  Component {
  render(){
  return (
    <div className="hero-section">
        <div className="massk">
            <img className="herro-img" src={heroBg} alt="" />
        </div>
        <div className="content">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            
            
        </div>
    </div>
  );
}
};

export default HeroSection2