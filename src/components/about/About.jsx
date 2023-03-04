import React from 'react'
import './about.css'
import Headshot from '../../assets/go-kart-pic.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>The details</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <h2>About Me</h2>
          <div className="about__me-image">
            <img src={Headshot} alt='About' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className='about__icon' />
              <h5>
                Front-end
              </h5>
              <small>React</small>
              <small>
                1+ Years
              </small>
            </div>
            <div className="about__card">
              <FaAward className='about__icon' />
              <h5>
                Quality Assurance
              </h5>
              <small>Python | JS | Java</small>
              <small>
                1+ Years
              </small>
            </div>
            <div className="about__card">
              <FaAward className='about__icon' />
              <h5>
                Backend | Automation
              </h5>
              <small>Python | Big Data</small>
              <small>
                1+ Years
              </small>
            </div>
          </div>
          <div>
            <p>
              As a full-stack developer with a focus on test-driven development, I bring a wealth of experience in leveraging emerging technologies to deliver intuitive, scalable solutions. Whether working on a greenfield project or optimizing legacy systems, I am committed to writing maintainable code and following best practices. Looking for a tech-savvy team player to drive your project forward? Let's connect and see what we can accomplish together.
            </p>
          </div>
          <div>
            <a href='#contact' className='btn btn-primary'>Let's talk</a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About;
