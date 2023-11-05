import "./home.scss"
import Navbar from "../../components/Layout/Navbar/Navbar"
import Hero from "../../components/Layout/Hero/Hero"
import Popular from "../../components/Layout/Popular/Popular"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import usePostContext from "../../context/post/usePostContext"

const Home = () => {
  const { user } = useContext(UserContext)
  const { posts } = usePostContext()

  return (
    <>
      <Navbar />
      {user._id === undefined && <Hero />}
      <Popular posts={posts} type="all" />
    </>
  )
}

export default Home
