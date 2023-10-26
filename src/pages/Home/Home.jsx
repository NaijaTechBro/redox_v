import React from 'react'
import './home.css'
import Navbar from '../../components/Layout/Navbar/Navbar'
import Hero from '../../components/Layout/Hero/Hero'
import Footer from '../../components/Layout/Footer/Footer'
import Product from '../../components/Layout/Product/Product'
import Join from '../../components/Layout/Join/Join'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Product />
    <Join />
    <Footer />
      </>
  )
}

export default Home