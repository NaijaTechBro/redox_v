import React from 'react';
import phone from '../../../assets/phone.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './hero.css';
const Hero = () => {

  return (
    <div className='header-start'>
      <div className="header-left">
        <h1><span>Get Smarter with Financial Education</span></h1>
        <p>We provide Market Intelligence, Research and analysis on the Future of money and the Economy in Africa. </p>
        <div className="header-left-button">
        <button><a href="/login">Start your journey with us</a></button>
        <button><AiOutlineArrowRight /></button>
        </div>
      </div>
      <div className="header-right">
          <img src={phone} alt='phone'/>
        </div>
    </div>
  );
};

export default Hero;
