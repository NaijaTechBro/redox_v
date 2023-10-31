import { AiOutlinePlus } from "react-icons/ai"
// ProfileDropdown.js

import React, { useState, useContext, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { URL } from "../../../../url"
import { UserContext } from "../../../../context/UserContext"
import { FaRegUserCircle } from "react-icons/fa"
import axios from "axios"
import "./profiledropdown.scss"
import Createlink from "./Createlink"
import OverviewLinks from "./OverviewLinks"
import SettingsLinks from "./SettingsLinks"
import MembershipLinks from "./MembershipLinks"
import CTALinks from "./CTALinks"

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

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
  const { user } = useContext(UserContext)
  const { setUser } = useContext(UserContext)

  return (
    <div className="profile-dropdown">
      <div className="profile-dropdown__image" onClick={toggleDropdown}>
        <FaRegUserCircle src={user.photo} style={{ height: "60px", width: "30px" }} />
        {/* <img src={user.photo} alt="Profile" /> */}
      </div>
      {isOpen && (
        <div className="profile-dropdown__content">
          <div className="profile-dropdown__content--blur" onClick={toggleDropdown}></div>
          <div className="profile-dropdown__content--inner">
            <Createlink user={user} />
            <OverviewLinks user={user} />
            <SettingsLinks user={user} />
            <MembershipLinks user={user} />
            <CTALinks user={user} onClick={handleLogout} />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileDropdown
