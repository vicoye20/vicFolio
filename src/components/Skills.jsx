import React from 'react'
import { Link } from 'react-router-dom'
import './Folio.css'
import './Project.css'
import { Fade } from 'react-reveal'
import { Zoom, Reveal, Flip, Rotate } from 'react-reveal'
import boot from '../image/tail.png'
import css11 from '../image/css11.png'
import git from '../image/git1.png'
import react1 from '../image/react1.png'
import html1 from '../image/html1.png'
import java1 from '../image/java1.png' 


const Skills = () => {
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

          <Flip delay={500} duration={500}>
              <main>
                <div className='divSk'>
                  <img src={java1} alt="" className='skmg' /> <h6>JavaScript</h6>
                </div>

                <div className='divSk'>
                  <img src={react1} alt="" className='skmg' /> <h6>React.js</h6>
                </div>

                <div className='divSk'>
                  <img src={boot} alt="" className='skmg' /> <h6>Tailwind</h6>
                </div>

                <div className='divSk'>
                  <img src={git} alt="" className='skmg' /> <h6>Version Control (Git & GitHub)</h6>
                </div>
                
                <div className='divSk'>
                  <img src={html1} alt="" className='skmg' /> <h6>HTML</h6>
                </div>
                
                <div className='divSk'>
                  <img src={css11} alt="" className='skmg' /> <h6>CSS</h6>
                </div>
                
              </main>
          </Flip>



          <footer>
           
                <p>&copy; 2024 Oyedokun V. All rights reserved.</p>
           
          </footer>

    </div>
  )
}

export default Skills