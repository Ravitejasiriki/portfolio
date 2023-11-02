import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimage2 from '../components/Heroimage2'
import Form from '../components/form'
const Contact = () => {
  return (
    <div>
     <Navbar/>
     <Heroimage2 heading="CONTACT" text="Lets Have a Chat"/>
     <Form/>
  <Footer/>
    </div>
  )
}

export default Contact
