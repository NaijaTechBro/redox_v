import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, RESET } from '../../redux/features/auth/authSlice'
import Navbar from '../../components/Layout/Navbar/Navbar';
import Ads from '../../components/Layout/Ads/Ads';
import Footer  from '../../components/Layout/Footer/Footer';
import Partner from '../../components/Layout/Partner/Partner';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../../assets/logor.png';
import Loader from '../../components/Loading/Loader';
import './auth.css';

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess, isError } = 
  useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  
  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!isValidEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
      password,
    };

    await dispatch(login(userData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/results");
    }

    if (isError && twoFactor) {
      navigate("/user/login");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, isError])

      // Email validation function
      const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      };

  return (
<>
<Navbar />
<div className="login-page">
      <img src={Logo} alt='' width={150} />
      {isLoading && <Loader />}
      <h2>Sign In</h2>
      <p>
          Get all your favorite Nigerian lotto games results <br />and get  accurate AI predicted lottery games.
        </p>{' '}
      <form onSubmit={loginUser}>
      <input
            type="email"
            value={email}
            placeholder="Email"
            name="email"
            required
            onChange={handleInputChange}
          />

        <input
          type="password"
          value={password}
          placeholder='Password'
          name='password'
          required
          onChange={handleInputChange}
        />
          <p>Don't Have an Account? <Link className='register-page-Link' to='/user/register'>Register</Link></p>
          <p>Or <Link className='register-page-Link' to='/forgotPassword'>Forgot Password</Link></p>

        <button type="submit">Login</button>
      </form>
    </div>
    <Ads />
    <Partner />
    <Footer />
</>
  );
}

export default Login;