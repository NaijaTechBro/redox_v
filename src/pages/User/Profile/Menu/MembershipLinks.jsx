import { Link } from "react-router-dom"
import verified from "../../../../assets/menu-verified.png"
import gift from "../../../../assets/menu-gift.png"

const MembershipLinks = ({ user }) => {
  return (
    <ul className="profile-dropdown__content--links">
      <li>
        <Link to={"/profile/" + user._id}>
          <span>
            <img src={verified} alt="" />
          </span>
          Pro Member
        </Link>
      </li>
      <li>
        <Link to={"/profile/" + user._id}>
          <span>
            <img src={gift} alt="" />
          </span>
          Gift
        </Link>
      </li>
    </ul>
  )
}

export default MembershipLinks
