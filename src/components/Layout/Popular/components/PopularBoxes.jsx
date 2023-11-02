import { Link } from "react-router-dom"
import PopularBox from "./PopularBox"
import { AiOutlinePlus } from "react-icons/ai"

const PopularBoxes = ({ user, type, posts }) => {
  // console.log(posts)
  return (
    <div className="popular__boxes">
      {user && type !== "Search" && (
        <>
          <div className="popular__user--managenent">
            <h5 className="popular--username">Hi, {user.username}</h5>
            <Link to="/write" className="btn mobile--hidden">
              Create Analysis
            </Link>
          </div>
          <div className="popular__top">
            <h5 className="popular__top--heading">Explore more on RedoX</h5>
            <Link to="/write">
              <AiOutlinePlus size={25} className="desktop--hidden add--icon" />
            </Link>
          </div>
        </>
      )}
      {posts.map((post) => (
        <PopularBox key={post._id} post={post} />
      ))}
    </div>
  )
}

export default PopularBoxes
