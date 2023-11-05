import { useState, useEffect, useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import { URL } from "../../../url"
import { UserContext } from "../../../context/UserContext"
import logo from "../../../assets/logor.png"
import mobileLogo from "../../../assets/x.png"
import "../../../scss/navbar.scss"
import Menu from "./Component/Menu"
import SearchContainer from "./Component/SearchContainer"
import CTA from "./Component/CTA"
import DropDowns from "./Component/DropDowns"

const Navbar = () => {
  const { setUser } = useContext(UserContext)

  const { search } = useLocation()
  // console.log(search)
  const [posts, setPosts] = useState([])
  const [noResults, setNoResults] = useState(false)
  const [loader, setLoader] = useState(false)
  const [open, setOpen] = useState(false)
  const { user } = useContext(UserContext)

  const fetchPosts = async () => {
    setLoader(true)
    try {
      const res = await axios.get(`${URL}/api/posts/${search}`)
      // console.log(res.data)
      setPosts(res.data)
      if (res.data.length === 0) {
        setNoResults(true)
      } else {
        setNoResults(false)
      }
      setLoader(false)
    } catch (err) {
      console.log(err)
      setLoader(true)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [search])

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Redox" className="mobile--hidden" />
            <img src={mobileLogo} alt="Redox" className="desktop--hidden" />
          </Link>
        </div>
        {user.length === 0 ? <Menu /> : <SearchContainer />}
        {user.length === 0 ? <CTA /> : <DropDowns />}
      </div>
    </header>
  )
}

export default Navbar
