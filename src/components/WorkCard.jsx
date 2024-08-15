import React from 'react'
import './workCard.css'
import pro1 from "../Assets/Hotel-1.PNG"
import pro2 from "../Assets/Hotel-3.PNG"
import pro3 from "../Assets/SPot.PNG"
import pro4 from "../Assets/keto.PNG"
import { NavLink } from 'react-router-dom'

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="" />
                <h2 className="project-title">HOTEL SAMPLE WEBSITE</h2>
                <div className="pro-details">
                    <p>The web application presented herein has been crafted utilizing <span>React.js</span> and <span>jQuery</span>.
                        It effectively enhances the customer experience by simplifying the hotel booking 
                        process and showcasing the range of amenities available at each hotel.
                    </p>
                    <div className="pro-btns">
                    <NavLink
                        to="https://reacthotel.vercel.app/"
                        className="btn"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open("https://reacthotel.vercel.app/", "_blank");
                        }}
                        >
                        VIEW
                    </NavLink>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src={pro2} alt="" />
                <h2 className="project-title">SHERATTON HOTEL WEBSITE</h2>
                <div className="pro-details">
                    <p>The web application presented herein has been crafted utilizing <span>React.js</span>, <span>CSS</span> and <span>jQuery</span>.
                        It effectively enhances the customer experience by simplifying the hotel booking 
                        process and showcasing the range of amenities available at each hotel.
                    </p>
                    <div className="pro-btns">
                    <NavLink
                        to="https://sheratton.vercel.app/"
                        className="btn"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open("https://sheratton.vercel.app/", "_blank");
                        }}
                        >
                        VIEW
                    </NavLink>
                    </div>
                </div>
            </div>

            
            <div className="project-card">
                <img src={pro3} alt="" />
                <h2 className="project-title">SWAHILIPOT HUB WEBSITE</h2>
                <div className="pro-details">
                    <p>This platform facilitates the organization's interaction with its members and potential clients, 
                        providing a showcase for a diverse array of services and amenities available to clients. 
                        The platform was developed using <span>Next.js</span>, <span>Bootstrap</span>, and <span>Django</span>.
                    </p>
                    <div className="pro-btns">
                    <NavLink
                        to="https://www.swahilipothub.co.ke/"
                        className="btn"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open("https://www.swahilipothub.co.ke/", "_blank");
                        }}
                        >
                        VIEW
                    </NavLink>
                    </div>
                </div>
            </div>


            <div className="project-card">
                <img src={pro4} alt="" />
                <h2 className="project-title">KETO-SAMPLE</h2>
                <div className="pro-details">
                    <p>The web application presented herein has been crafted utilizing <span>React.js</span>, <span>CSS</span> and <span>jQuery</span>.
                        It effectively enhances the customer experience by simplifying the hotel booking 
                        process and showcasing the range of amenities available at each hotel.
                    </p>
                    <div className="pro-btns">
                    <NavLink
                        to="https://keto-sample.vercel.app/"
                        className="btn"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open("https://keto-sample.vercel.app/", "_blank");
                        }}
                        >
                        VIEW
                    </NavLink>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default WorkCard