import React from "react"
import phone from "../../../assets/hero-phone.png"
import "./hero.scss"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__left">
          <h1>Connect with traders, and analyst across Africa.</h1>
          <p>We provide Market Intelligence, Research and Analysis on the Future of Money and Economy in Africa.</p>
          <a href="/login" className="hero__btn">
            Start your journey with us
          </a>
        </div>
        <div className="hero__right">
          <img src={phone} alt="phone" />
        </div>
      </div>
    </section>
  )
}

export default Hero
