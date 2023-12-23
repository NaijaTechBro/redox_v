import React, { useState } from 'react';
import Logo from '../../assets/logor.png';
import { Link, useNavigate } from 'react-router-dom';
import './authAdmin.css';
import PasswordInput from "../../components/PasswordInput/PasswordInput"

const ResetPassword = ({sideMenuOpen}) => {
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [success,setSuccess]=useState(false)
  const [error,setError]=useState(false)


  return (
    <>
    <div className={sideMenuOpen ? "mobile--hidden login-page" : "login-page"}>
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
        <form onSubmit="">
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
