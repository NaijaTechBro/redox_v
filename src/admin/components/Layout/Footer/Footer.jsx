import React from "react"
import "./footer.css"
import { FaTwitter, FaLinkedin, FaTelegramPlane } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <img src="https://res.cloudinary.com/dkcazf954/image/upload/v1682628918/redoxlogo_1_cfljyp.png" alt="redox-logo" />
        <p>Financial Freedom for All.</p>
        <p>© 2022. Redox  All rights reserved</p>
        <ul className="social-media">
          <a href="https://twitter.com/insideredox" target="blank">
            <BsTwitter/>
          </a>
          <a href="https://instagram.com/_insideredox" target="blank">
            <BsInstagram/>
          </a>
          <a href="https://t.me/insideredox" target="blank">
            <BsTelegram/>
          </a>
        </ul>
        <a href="mailto:support@redox.com.ng" target="blank">support@redox.com.ng</a>
      </div>
      <div className="footer-section">
        <h4>Products</h4>
        <p><a href="/#">Learn</a></p>
        <p><a href="/blog">Market Research</a></p>
        <p><a href="/trading-tools">Trading Tools</a></p>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <p><a href="/company/about-us">About Us</a></p>
        <p><a href="/company/contact">Contact</a></p>
      </div>
      <div className="footer-section">
        <h4>Legal</h4>
        <p><a href="/#">Terms of Use</a></p>
        <p><a href="/#">Privacy Policy</a></p>
      </div>
    </footer>
  )
}

export default Footer
