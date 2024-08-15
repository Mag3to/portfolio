import React from 'react'
import './pricingCard.css'
import { Link } from 'react-router-dom'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>-Basic-</h3>
                <span className="bar"></span>
                <p className="btc">Ksh 15,000</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- 3 Featured -</p>
                <p>- 3 Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>

            <div className="card">
                <h3>-Premium-</h3>
                <span className="bar"></span>
                <p className="btc">Ksh 25,000</p>
                <p>- 2 Days -</p>
                <p>- 5 Pages -</p>
                <p>- 3 Featured -</p>
                <p>- 3 Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>

            <div className="card">
                <h3>-Business-</h3>
                <span className="bar"></span>
                <p className="btc">Ksh 30,000</p>
                <p>- 3 Days -</p>
                <p>- 8 Pages -</p>
                <p>- 3 Featured -</p>
                <p>- 3 Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard