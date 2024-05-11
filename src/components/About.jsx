import React from 'react'
import './Folio.css'
import { Link } from 'react-router-dom'
import image from '../image/IMG_1261.JPG'
import { Reveal, Rotate, Zoom } from 'react-reveal'


const About = () => {
  return (
    <div style={{backgroundColor:"teal",height:"100%",width:"100%"}}>

           <Reveal right delay={500} duration={500}>        
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
            <div className='container'>
              <img src={image} className='img1' style={{width:'200px',height:'200px'}} alt=''/>
            </div>
          </Zoom>

      <Rotate top delay={1000} duration={1000}>
        <div className="pp">
          <p>Hello , I am Oyedokun Victor Ayobami. <br></br> I'm a passionate front-end developer with a knack for crafting robust and scalable web applications, I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects. My goal is to turn ideas into reality through code. With a keen eye for detail and a love for clean code, I strive to deliver high-quality and visually appealing web solutions. I would offer my full commitment, and be a pleasant and friendly addition to your team. I am therefore currently looking for a job or an internship as a frontend developer in your reputable company.</p>
          </div>
      </Rotate>

      <footer>
           
                <p>&copy; 2024 Oyedokun V. All rights reserved.</p>
           
          </footer>
    </div>
  )
}

export default About