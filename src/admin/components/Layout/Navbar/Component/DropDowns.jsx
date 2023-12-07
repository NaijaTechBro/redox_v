import { IoMdNotificationsOutline } from "react-icons/io"
import AdminProfileDropdown from './AdminProfileDropdown'

const DropDowns = () => {
  return (
    <div className="header__dropdowns">
      <span className="header__dropdowns--item">
        <IoMdNotificationsOutline size={20} />
        <span className="notify"></span>
      </span>
      <AdminProfileDropdown />
    </div>
  )
}

export default DropDowns
