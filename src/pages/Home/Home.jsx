import "./home.scss"
import Navbar from "../../components/Layout/Navbar/Navbar"
import Hero from "../../components/Layout/Hero/Hero"
import Popular from "../../components/Layout/Popular/Popular"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const Home = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      <Navbar />
      {!user && <Hero />}
      <Popular />
    </>
  )
}

export default Home
