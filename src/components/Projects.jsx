import React from 'react'
import { Link } from 'react-router-dom'
import './Folio.css'
import './Project.css'
import { Fade, Reveal } from 'react-reveal'
import { Zoom } from 'react-reveal'
import grading from '../image/grading.jpg'
import quiz from '../image/QuiZ.png'


const Projects = () => {
  return (
    <div className='glow glows'>
      
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

            <section className='sec1'>

            <Zoom left delay={1000} duration={1000}>
              <div className='imgp22'>
            
                <img src={grading} className='imgp'/>
                  <h5>A student grading app made with HTML,CSS and JAVASCRIPT.</h5>
                  <div className='btna'><a href="https://grading-system-six.vercel.app">View Project</a></div>
              
              </div>

              <div className='imgp22'>

                <img src={quiz} className='imgp'/>
                <h5>A quiz app designed extensively with JAVASCRIPT,CSS and HTML.</h5>
                  <div className='btna'><a href="https://quiz-app-nine-livid.vercel.app">View Project</a></div>
              </div>

              </Zoom>

            </section>  

            
          

        
          <footer>
           
                <p>&copy; 2024 Oyedokun V. All rights reserved.</p>
           
          </footer>
          
    </div>
  )
}

export default Projects