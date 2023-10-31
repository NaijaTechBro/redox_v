import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu--link">
          <Link to="/market" className="navbar__menu--link__item">
            Market
          </Link>
        </li>
        <li className="navbar__menu--link">
          <Link to="/tools" className="navbar__menu--link__item">
            Tools
          </Link>
        </li>
        <li className="navbar__menu--link">
          <Link to="/about" className="navbar__menu--link__item">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
