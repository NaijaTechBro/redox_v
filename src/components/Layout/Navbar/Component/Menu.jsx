import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu--link">
          <Link to="/blog" className="navbar__menu--link__item">
            Market
          </Link>
        </li>
        <li className="navbar__menu--link">
          <Link to="/trading-tools" className="navbar__menu--link__item">
            Tools
          </Link>
        </li>
        <li className="navbar__menu--link">
          <Link to="/company/about-us" className="navbar__menu--link__item">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
