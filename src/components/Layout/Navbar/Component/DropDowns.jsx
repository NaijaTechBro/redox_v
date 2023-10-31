import { IoMdNotificationsOutline } from "react-icons/io"
import profile from "../../../../assets/profile.png"
import ProfileDropdown from "../../../../pages/User/Profile/Menu/ProfileDropdown"

const DropDowns = () => {
  return (
    <div className="header__dropdowns">
      <span className="header__dropdowns--item">
        <IoMdNotificationsOutline size={20} />
        <span className="notify"></span>
      </span>
      <ProfileDropdown />
    </div>
  )
}

export default DropDowns
