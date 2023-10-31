import React from 'react'
import './footer.css'
import { FaTwitter, FaLinkedin, FaTelegramPlane } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

const Footer = () => {
  return (
  <footer>
  <div class="footer-section">
  <img src='https://res.cloudinary.com/dkcazf954/image/upload/v1682628918/redoxlogo_1_cfljyp.png' alt='redox-logo' />
  <p>Financial Freedom for All.</p>
  </div>
  <div className="footer-section">
    <ul>
      <a href='/about'>About</a>
      < br/>
      <a href='/crypto-news'>Crypto News</a>
      <br />
      <a href='/free-resources'>Free Resources</a>
      <br/>
      <a href='https://t.me/insideredox' target='blank'>Community</a>
      </ul>
    <div className="copyright">
  <p>© 2023 RedoX Trading, Inc. | 

   All Rights Reserved.</p>
  </div>
  </div>
  <div className="footer-section">
    <h4>Follow Us</h4>
    <ul className="social-media">
      <a href="https://twitter.com/insideredox" target='blank'><FaTwitter /></a>
      {/* <li><a href="#"><FaLinkedin /></a></li> */}
      <a href='https://t.me/insideredox' target='blank'><FaTelegramPlane /></a>
      <a href="mailto:insideredox@gmail.com" target='blank'><AiOutlineMail /></a>
    </ul>
    <div className="button">
    <button><a href="/"></a>Subscribe</button>
    </div>
  </div>
  
</footer>

  )
}

export default Footer