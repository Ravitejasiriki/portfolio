import './Heroimage.css'
import React from 'react'
import Introimg from "../assests/intro-bg.jpg"
import { Link } from 'react-router-dom'

const Heroimage = () => {
  return (
    <div>
      <div className="hero">
        <div className="mask">
          <img className='into-img' src={Introimg} alt='intro'></img>
        </div>
        <div className="content">
            <p>Hi, I'M A FREELANCER.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className='btn-light'>contact</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Heroimage
