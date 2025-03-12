import React, { useState } from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {

    const [email,setEmail]= useState('');
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
    const handleSubscribe = () => {
      if (validateEmail(email)) {
        alert('Subscription successful!');
        setEmail('');
      } else {
        alert('Please enter a valid email address.');
      }
    };

  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>I am a frontend developer from,Bangladesh with 2 years of experience in companies like Walton,	Vivasoft. </p> 
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="footer-subscribe " onClick={handleSubscribe}>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>@ 2025 Sourov Kumar. All rights reserved.</p>
      <div className="footer-bottom-right">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with Me</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
