import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  const resumeLink = "https://drive.google.com/drive/folders/1dypdXbnjPZDRHVDUR43pjvecxLHolojC?usp=sharing";
  return (
    <div id='home' className='hero'>
      <img className='image' src={profile_img} alt="" />
      <h1> <span> I'm Sourov Kumar,</span> frontend developer based in Bangladesh</h1>
      <p>I am a frontend developer from Dhaka, Bangladesh with 2 years of experience in multiple companies like Vivasoft,Walton.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
        <div className="hero-resume"  >
        <a href={resumeLink} download className='resume-link'>My resume</a>
          </div>
      </div>
    </div>
  )
}

export default Hero
