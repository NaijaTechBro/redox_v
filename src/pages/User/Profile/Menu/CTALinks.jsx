import { Link } from "react-router-dom"
import dark from "../../../../assets/menu-dark.png"
import logout from "../../../../assets/menu-logout.png"
import { useTheme } from "../../../../context/ThemeContext"

const CTALinks = ({ user, onClick }) => {
  const { darkMode, toggleTheme } = useTheme()
  
  return (
    <ul className="profile-dropdown__content--links">
      <li onClick={toggleTheme}>
        <Link to="">
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
