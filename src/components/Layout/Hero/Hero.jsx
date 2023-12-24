import React from "react"
import phone from "../../../assets/hero-phone.png"
import "./hero.scss"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__left">
          <h1 className="mobile--hidden">Providing Informed Data on Startups and Businesses across Africa.</h1>
          <h1 className="desktop--hidden">Providing Informed Data on Startups and Businesses across Africa.</h1>
          <p>We provide Market Intelligence, Tools, Research and Analysis on the Future of Money and Economy for startups and businesses in Africa.</p>
          <a href="/login" className="hero__btn">
            Start your journey with us
          </a>
        </div>
        <div className="hero__right mobile--hidden">
          <img src={phone} alt="phone" />
        </div>
      </div>
    </section>
  )
}

export default Hero
