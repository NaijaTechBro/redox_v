import React, { useState } from 'react';
import Logo from '../../assets/logor.png';
import './auth.css';
import { useTheme } from '../../context/ThemeContext';

const ForgotPassword = () => {
  const [email,setEmail]=useState("")
  const [success,setSuccess]=useState(false)
  const [error,setError]=useState(false)
  const { darkMode, toggleTheme } = useTheme()

  const handleForgotPassword=async ()=>{
    
    try{
      const res=await axios.post(URL+"/api/auth/forgotpassword",{email})
      setEmail(res.data.email)
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
      <h2>Forgot Password</h2>
      {success ?
        <p>Please Check Your Email For A Reset Link</p>
      :
        <><p>Please Enter Your Email</p>
        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder='Email'
            name='email'
            onChange={(e)=>setEmail(e.target.value)}
          />
          <button type="submit">Reset Password</button>
        </form></>
      }
      
    </div>
    </>
  );
}

export default ForgotPassword;
