import React from 'react'
import './about.css'
import ME from '../../assets/profilepic.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Intern @ Developers Studio & SeeBiz</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Hospital System, E-commerce, Chat App, Blog</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Skills</h5>
              <small>React.js, Vue.js, Quasar, Bootstrap, APIs</small>
            </article>

          </div>

          <p>
            I am a passionate Software Engineer skilled in building responsive and user-friendly
            web applications using modern JavaScript frameworks like React.js and Vue.js.
            I have hands-on experience from internships and multiple projects, and I am
            currently working towards becoming a Full Stack Developer.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
