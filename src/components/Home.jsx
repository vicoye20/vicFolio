import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import './Folio.css'
import program from '../image/programmer.jpg'
import ham from '../image/ham.png'
import { Reveal } from 'react-reveal'
import { Zoom } from 'react-reveal'
import { Flip } from 'react-reveal'


const Home = () => {
  const [myHam, setMyHam] = useState('0%')
  const handleClick = () =>{
    setMyHam('100%')
  }
  return (
    <div className='glow glows'>

          <header>
              <nav className='hnav'>
                <h1>Oyedokun V.</h1>
                <button className='btnham' onClick={handleClick}>
                  <img src={ham} alt="" className='ham'/>
                </button>
              </nav>
          </header>
        
          <Reveal bottom right delay={500} duration={500}>

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
          </Reveal>

            <Zoom left delay={1000} duration={1000}>
            <div className='imghome'>
              <img src={program} alt="" className='img1' />
            </div>
            </Zoom>

          <Flip right leftt delay={500} duration={500}>
            <p className="p">
           Hello , I am Oyedokun Victor Ayobami. <br></br> I'm a passionate front-end developer with a knack for <br></br>crafting robust and scalable web applications, I have <br></br> honed my skills in front-end technologies like React.js, <br></br> Next.js, Tailwind, JavaScript, Version Control (Git & GitHub). I enjoy <br></br> creating responsive and user-friendly websites.
            </p>
          </Flip>

          <footer>
           
                <p>&copy; 2024 Oyedokun V. All rights reserved.</p>
           
          </footer>
        
          
    </div>
  )
}

export default Home