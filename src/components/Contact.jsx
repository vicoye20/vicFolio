import React from 'react'
import { Link } from 'react-router-dom'
import './Folio.css'
import { Fade } from 'react-reveal'
import { Zoom } from 'react-reveal'



const Contact = () => {
  return (
    <div style={{backgroundColor:"teal",height:"100vh",width:"100%"}}>
      
      <Fade top>
              <nav className='nav1'>

                <Link to='/'>
                <button className='btnh'>Home</button>
                </Link>
                
                <Link to='/projects/vicFolio'>
                <button className='btnh'>Projects</button>
                </Link>

                <Link to='/skills/vicFolio'>
                <button className='btnh'>Skills</button>
                </Link>

                <Link to='/about/vicFolio'>
                <button className='btnh'>About</button>
                </Link>
                
                <Link to='/contact/vicFolio'>
                <button className='btnh'>Contact</button>
                </Link>
                
              </nav>
          </Fade>

          <footer>
           
                <p>&copy; 2024 Oyedokun V. All rights reserved.</p>
           
          </footer>
    </div>
  )
}

export default Contact