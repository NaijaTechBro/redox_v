import { Link } from "react-router-dom"
import dark from "../../../../assets/menu-dark.png"
import logout from "../../../../assets/menu-logout.png"

const CTALinks = ({ user, onClick }) => {
  return (
    <ul className="profile-dropdown__content--links">
      <li>
        <Link to={"/profile/" + user._id}>
          <span>
            <img src={dark} alt="" />
          </span>
          Dark Mode
        </Link>
      </li>
      <li onClick={onClick}>
        <Link>
          <span>
            <img src={logout} alt="" />
          </span>
          Logout
        </Link>
      </li>
    </ul>
  )
}

export default CTALinks
