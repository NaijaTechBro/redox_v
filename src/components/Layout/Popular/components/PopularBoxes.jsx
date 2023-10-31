import { Link } from "react-router-dom"
import PopularBox from "./PopularBox"
import { AiOutlinePlus } from "react-icons/ai"

const PopularBoxes = ({ user }) => {
  return (
    <div className="popular__boxes">
      {user && (
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
      <PopularBox />
      <PopularBox />
      <PopularBox />
    </div>
  )
}

export default PopularBoxes
