// ProfileDropdown.js

import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {URL} from '../../../../url';
import { UserContext } from '../../../../context/UserContext';
import {  FaRegUserCircle } from 'react-icons/fa'
import axios from 'axios';
import './profiledropdown.css';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout=async()=>{
    try{
      const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
      // console.log(res)
      setUser(null)
      navigate("/login")
  
    }
    catch(err){
      console.log(err)
    }
  }
  const {user}=useContext(UserContext)
  const {setUser}=useContext(UserContext)

  return (
    <div className="profile-dropdown">
      <div className="profile-image" onClick={toggleDropdown}>
      <FaRegUserCircle src={user.photo} style={{ height:"60px", width: "30px"}} />
        {/* <img src={user.photo} alt="Profile" /> */}
      </div>
      {isOpen && (
        <div className="profiledropdown-content">
          <p className="username">{user.username}</p>
          <ul>
          <li><Link to={"/profile/"+user._id} style={{backgroundColor: "#f0f0f0", color: "#000"}}>Profile</Link></li>
            <li> <Link to={"/myblogs/"+user._id} style={{backgroundColor: "#f0f0f0", color: "#000"}}>My Story</Link></li>
            <li onClick={handleLogout}><Link style={{backgroundColor: "#f0f0f0", color: "#000"}}>Logout</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
