import { Link } from "react-router-dom"
import profile from "../../../../assets/menu-profile.png"
import analysis from "../../../../assets/menu-analysis.png"

const OverviewLinks = ({ user }) => {
  return (
    <ul className="profile-dropdown__content--links">
      <li>
        <Link to={"/profile/" + user._id}>
          <span>
            <img src={profile} alt="" />
          </span>
          Profile
        </Link>
      </li>
      <li>
        <Link to={"/profile/" + user._id}>
          <span>
            <img src={analysis} alt="" />
          </span>
          My Analysis
        </Link>
      </li>
    </ul>
  )
}

export default OverviewLinks
