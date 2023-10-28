// ProfileDropdown.js

import React, { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { URL } from "../../../../url"
import { UserContext } from "../../../../context/UserContext"
import { FaRegUserCircle } from "react-icons/fa"
import axios from "axios"
import "./profiledropdown.css"

const ProfileDropdown = () => {
<<<<<<< Updated upstream
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
=======
  const [isOpen, setIsOpen] = useState(false);
  const [toFollow,setToFollow] = useState("653c22a75d7dec25ebf920fe");
  const navigate = useNavigate();
>>>>>>> Stashed changes

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

<<<<<<< Updated upstream
  const handleLogout = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem(`t`))}` },
      }
      const res = await axios.post(URL + "/api/auth/logout", config, { withCredentials: true })
      localStorage.setItem(`t`, ``)
=======
  const followUser=async()=>{
    try{
      const res=await axios.post(URL+"/api/users/follow/",{toFollow},{withCredentials:true, Authorization:user.user._id})
      console.log(res)
    }
    catch(err){
      console.log(err)
    }
  }
  const handleLogout=async()=>{
    try{
      const res=await axios.post(URL+"/api/auth/logout",{withCredentials:true})
      // console.log(res)
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <div className="profile-image" onClick={toggleDropdown}>
        <FaRegUserCircle src={user.photo} style={{ height: "60px", width: "30px" }} />
=======
      <div className="profile-image" style={{ display: 'flex', gap: '10px', alignItems: 'center', width: 'max-content'}}>
      <FaRegUserCircle src={user.photo} style={{ height:"60px", width: "30px", display: 'inline'}} onClick={toggleDropdown}/>
      <div style={{ display: 'flex', flexDirection: "column", textAlign: "left"}}>
        {/* {console.log(user.user)} */}
        <p style={{ margin: '0'}} onClick={toggleDropdown}>
          {user.user.username}
        </p>
        <p style={{ display: 'flex', fontSize: '14px', margin: '0px'}}>
          <small onClick={followUser}>{`${user?.user?.followers?.length} followers,`}</small>
          <small>{`${user?.user?.following?.length} following`}</small>
        </p>
      </div>
>>>>>>> Stashed changes
        {/* <img src={user.photo} alt="Profile" /> */}
      </div>
      {isOpen && (
        <div className="profiledropdown-content">
          <p className="username">{user.username}</p>
          <ul>
            <li>
              <Link to={"/profile/" + user._id} style={{ backgroundColor: "#f0f0f0", color: "#000" }}>
                Profile
              </Link>
            </li>
            <li>
              {" "}
              <Link to={"/myblogs/" + user._id} style={{ backgroundColor: "#f0f0f0", color: "#000" }}>
                My Story
              </Link>
            </li>
            <li onClick={handleLogout}>
              <Link style={{ backgroundColor: "#f0f0f0", color: "#000" }}>Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default ProfileDropdown
