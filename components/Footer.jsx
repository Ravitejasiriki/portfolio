import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import './Footerstyle.css'
import React from 'react'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:'#fff',marginRight:"2rem"}}/>
                <div>
                    <p>Visakhapatnam</p>
                    <p>Andhra Pradesh</p>
                    <p>INDIA.</p>
                </div>
            </div>

            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:'#fff',marginRight:"2rem"}}/> 91+9390009361
                </h4>
            </div>

          <div className="email">
            <h4>
                <FaMailBulk size={20} style={{color:'#fff',marginRight:"2rem",marginTop:"0.8rem"}}/>
                ravitejasiriki08@gmail.com
            </h4>
          </div>
            </div>
            <div className="right">
                <h4>About Me</h4><br></br>
             <h4><p>This is Raviteja skilled professional with expertise in frontend development, particularly in using the React framework and building interactive and user-friendly web applications and well-equipped to create engaging and responsive user interfaces,
                 making  a valuable asset in the world of web development.</p>
            </h4><br></br>
            <div className="social">
                <FaLinkedin size={30} style={{color:'#fff',marginRight:"1rem"}}/>
                <FaFacebook size={30} style={{color:'#fff',marginRight:"1rem"}}/>
                <FaInstagram size={30} style={{color:'#fff',marginRight:"1rem"}}/>
            </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Footer
