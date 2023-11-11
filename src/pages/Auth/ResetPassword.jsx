import React, { useState } from 'react';
import Logo from '../../assets/logor.png';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import { useTheme } from '../../context/ThemeContext';
import PasswordInput from "../../components/PasswordInput/PasswordInput"

const ResetPassword = () => {
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [success,setSuccess]=useState(false)
  const [error,setError]=useState(false)
  const { darkMode, toggleTheme } = useTheme()

  const handleResetPassword=async ()=>{
    
    try{
      const res=await axios.post(URL+"/api/auth/forgotpassword",{password})
      setSuccess(true)
      console.log(res.data.email)
    }
    catch(err){
      setError(true)
      console.log(err)
    }

  }


  return (
    <>
    <div className={darkMode ? "dark_mode login-page" : "login-page"}>
      <img src={Logo} alt='' width={150} />
      <h2>Reset Password</h2>
      {success ?
        <>
          <p>Proceed to Log in with your new password</p>
          <Link className="register-page-Link" to="/forgotPassword">
            <button>Log in</button>
          </Link>
        </>
      :
        <><p style={{color:'#000'}}>Join other traders to analyse</p>
        <form onSubmit={handleResetPassword}>
          <PasswordInput
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="New Password"
          />
          <PasswordInput
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
          />
          <button type="submit">Reset Password</button>
        </form></>
      }
      
    </div>
    </>
  );
}

export default ResetPassword;
