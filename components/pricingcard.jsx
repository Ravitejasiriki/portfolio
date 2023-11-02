import { Link } from 'react-router-dom'
import './pricing.css'
import React from 'react'

const Pricingcard = () => {
  return (
    <div className='pricing'>
<div className="card-container">
    <div className="card">
        <h3>-Basic-</h3>
        <span className="bar"></span>
        <p className='btc'>Rs 1000</p>
        <p>- 3 Days -</p>
        <p> - 3 Pages -</p>
        <p>- Featured - </p>
        <p>- Responsive Desgin -</p>
        <div className="price-btn"> 
        <Link to='/contact' className='btn'>
            PURCHASE NOW
        </Link>
    </div>
    </div>
    <div className="card">
        <h3>-Premium-</h3>
        <span className="bar"></span>
        <p className='btc'>Rs 2000</p>
        <p>- 2 Days -</p>
        <p> - 5 Pages -</p>
        <p>- Featured - </p>
        <p>- Responsive Desgin -</p>
         <div className="price-btn">  
        <Link to='/contact' className='btn'>
            PURCHASE NOW
        </Link>
    </div>
    </div>
    <div className="card">
        <h3>-Business-</h3>
        <span className="bar"></span>
        <p className='btc'>Rs 4000</p>
        <p>- 5 Days -</p>
        <p> - 8 Pages -</p>
        <p>- Featured - </p>
        <p>- Responsive Desgin -</p>
        <div className="price-btn"> 
        <Link to='/contact' className='btn'>
            PURCHASE NOW
        </Link>
    </div>
    </div>
    </div>      
    </div>
  )
}

export default Pricingcard
