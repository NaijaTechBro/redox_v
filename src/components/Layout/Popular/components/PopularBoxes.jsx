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
            <Link to="#" className="btn mobile--hidden">
              Create Analysis
            </Link>
          </div>
          <div className="popular__top">
            <h5 className="popular__top--heading">Explore more on RedoX</h5>
            <AiOutlinePlus size={25} className="desktop--hidden add--icon" />
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
