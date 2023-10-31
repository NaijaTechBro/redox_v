import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <div className="header__ctas">
      <span className="header__ctas--link">
        <Link to="/login" target="_blank" className="header__ctas--link__item">
          Sign In
        </Link>
      </span>
      <span className="header__ctas--link header__ctas--link--btn">
        <Link target="_blank" className="header__ctas--link__item" href="/register">
          Get Started
        </Link>
      </span>
    </div>
  )
}

export default CTA
