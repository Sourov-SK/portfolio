import React from 'react'
import './About.css'
import about_profile from '../../assets/about_profile.png'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm an experienced Frontend Developer with over a decode of professional expertise in the field.Throughout my career, I have had the privilege of collaborating with prestigious orgonizations, contributing to their success and growth.</p>
            <p>My passion for frontend debelopment is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{width:"50%"}} />
              </div>
              <div className="about-skill">
              <p>React JS</p>
              <hr style={{width:"70%"}} />
              </div>
              <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{width:"60%"}} />
              </div>
              <div className="about-skill">
              <p>Next JS</p>
              <hr style={{width:"50%"}} />
              </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>2+</h1>
          <p>YEARS OF EXPRIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About
