import { IoMdNotificationsOutline } from "react-icons/io"
import profile from "../../../../assets/profile.png"

const DropDowns = () => {
  return (
    <div className="header__dropdowns">
      <span className="header__dropdowns--item">
        <IoMdNotificationsOutline size={20} />
        <span className="notify"></span>
      </span>
      <span className="header__dropdowns--item">
        <img src={profile} alt="" />
      </span>
    </div>
  )
}

export default DropDowns
