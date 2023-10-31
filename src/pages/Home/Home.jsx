import "./home.scss"
import Navbar from "../../components/Layout/Navbar/Navbar"
import Hero from "../../components/Layout/Hero/Hero"
import Popular from "../../components/Layout/Popular/Popular"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Popular />
      {/* <Join />
      <Footer /> */}
    </>
  )
}

export default Home
