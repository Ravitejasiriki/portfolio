import { Link } from 'react-router-dom'
import './About.css'
import React from 'react'
import react1 from '../assests/react1.jpg'


const Aboutcontent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a raect front-end developer.I create responsive secure websites..</p>
            <Link to='/contact' className='btn'>Contact</Link>
            
        </div>
        <div className="right">
            <div className="img-container">
                <div className="imgstack-top">
                    <img src={react1} className='img' alt='true'/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Aboutcontent
