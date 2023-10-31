import { AiOutlinePlus } from "react-icons/ai"
import { useContext } from "react"
import PopularBoxes from "./components/PopularBoxes"
import Sidebar from "./components/Sidebar"
import "./popular.scss"
import { UserContext } from "../../../context/UserContext"
import { Link } from "react-router-dom"

const Popular = () => {
  const { user } = useContext(UserContext)

  return (
    <section className="popular section">
      <div className="container">
        {!user && (
          <>
            <h3 className="section--title mobile--hidden">Popular this Week</h3>
            <h3 className="section--title desktop--hidden">Popular Analyst</h3>
          </>
        )}
        <div className="popular--grid">
          <PopularBoxes user={user} />
          <Sidebar />
        </div>
      </div>
    </section>
  )
}

export default Popular
