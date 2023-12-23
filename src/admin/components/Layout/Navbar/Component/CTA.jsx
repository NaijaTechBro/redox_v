import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <div className="header__ctas">
      <span className="header__ctas--link">
        <Link to="/admin/login" className="header__ctas--link__item mobile--hidden">
          Sign In
        </Link>
      </span>
      <span className="header__ctas--link header__ctas--link--btn">
        <Link className="header__ctas--link__item" to="/admin/cyprus">
          Get Started
        </Link>
      </span>
    </div>
  )
}

export default CTA
