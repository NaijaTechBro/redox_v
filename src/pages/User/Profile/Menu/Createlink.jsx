import { AiOutlinePlus } from "react-icons/ai"
import { Link } from "react-router-dom"

const Createlink = ({ user }) => {
  return (
    <ul className="profile-dropdown__content--links">
      <li>
        <Link to={"/profile/" + user._id}>
          <span className="coloured">
            <AiOutlinePlus size={18} />
          </span>
          Create
        </Link>
      </li>
    </ul>
  )
}

export default Createlink
