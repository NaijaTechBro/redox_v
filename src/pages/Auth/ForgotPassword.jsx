import React, { useState } from 'react';
import Logo from '../../assets/logor.png';
import './auth.css';

const ForgotPassword = () => {
  return (
<>
<div className="login-page">
      <img src={Logo} alt='' width={150} />
      <h2>Forgot Password</h2>
      <p>Please Enter Your Email</p>
      <form>
        <input
          type="email"
          placeholder='Email'
          name='email'
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
    </>
  );
}

export default ForgotPassword;
