import React, { useState, useContext, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { URL } from '../../../../../url'
import { UserContext } from '../../../../../context/UserContext'
import { FaRegUserCircle } from "react-icons/fa"
import axios from "axios"
import { useTheme } from '../../../../../context/ThemeContext'
import { BsBoxArrowRight, BsCheckSquare, BsGear, BsMoon, BsPersonCircle } from "react-icons/bs"


const AdminProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const { setUser } = useContext(UserContext)
  const { darkMode, toggleTheme } = useTheme()

  useEffect(() => {
    isOpen ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto")
  }, [isOpen])

  const toggleDropdown = () => setIsOpen((prev) => !prev)

  const handleLogout = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem(`t`))}` },
      }
      const res = await axios.post(`${URL}/api/auth/logout`, config, { withCredentials: true })
      localStorage.setItem(`t`, ``)
      setUser(null)
      navigate("/login")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="profile-dropdown">
      <div className="profile-dropdown__image" onClick={toggleDropdown}>
        {/* <FaRegUserCircle src={user.photo} style={{ height: "60px", width: "30px" }} /> */}
        <img src={user.photo} alt="Profile" />
      </div>
      {isOpen && (
        <div className="profile-dropdown__content">
          <div className="profile-dropdown__content--blur" onClick={toggleDropdown}></div>
          <div className={darkMode ? "profile-dropdown__content--inner dark_mode admin-profile-dropdown" : "profile-dropdown__content--inner admin-profile-dropdown"}>
            <p className="admin-profile-dropdown-link"><Link to={`/profile/${user.username}`}><BsPersonCircle/> Profile</Link></p>
            <p className="admin-profile-dropdown-link"><Link to='/admin/settings'><BsGear/> Settings</Link></p>
            <p className="admin-profile-dropdown-link"><BsCheckSquare /> Verification</p>
            <p className="admin-profile-dropdown-link" onClick={toggleTheme}><BsMoon /> Dark Mode</p>
            <p className="admin-profile-dropdown-link" onClick={handleLogout}><BsBoxArrowRight /> Log Out</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminProfileDropdown