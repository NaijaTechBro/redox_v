import { useContext } from "react"
import PopularBoxes from "./components/PopularBoxes"
import Sidebar from "./components/Sidebar"
import "./popular.scss"
import { UserContext } from "../../../context/UserContext"
import empty_post from "../../../assets/empty-post.png"
import { useTheme } from "../../../context/ThemeContext"

const Popular = ({ posts, type }) => {
  const { user } = useContext(UserContext)
  const { darkMode, toggleTheme } = useTheme()

  return (
    <section className={darkMode ? "popular section dark_mode" : "popular section"}>
      <div className="container">
        {posts.length > 0 ? (
          <>
            {!user && type !== "search" && (
              <>
                <h3 className="section--title mobile--hidden">Popular this Week</h3>
                <h3 className="section--title desktop--hidden">Popular Analyst</h3>
              </>
            )}
            <div className="popular--grid">
              <PopularBoxes user={user} posts={posts} type={type} />
              <Sidebar />
            </div>
          </>
        ) : (
          <>
            <div className="empty--search">
              <img src={empty_post} alt="" width="50%" />
              <h2 className="empty--search--heading">No Post Available</h2>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Popular
