import { AiOutlineSetting } from "react-icons/ai"
import { Link } from "react-router-dom"
import bookmark from "../../../../assets/menu-bookmark.png"
import help from "../../../../assets/menu-help.png"

const SettingsLinks = ({ user }) => {
  return (
    <ul className="profile-dropdown__content--links">
      <li>
        <Link to={"/profile/" + user._id}>
          <span>
            <img src={bookmark} alt="" />
          </span>
          Bookmark
        </Link>
      </li>
      <li>
        <Link to={"/profile/" + user._id}>
          <span>
            <AiOutlineSetting size={18} />
          </span>
          Settings
        </Link>
      </li>
      <li>
        <Link to={"/profile/" + user._id}>
          <span>
            <img src={help} alt="" />
          </span>
          Help
        </Link>
      </li>
    </ul>
  )
}

export default SettingsLinks
