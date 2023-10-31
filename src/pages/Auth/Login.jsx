import { Link, useNavigate } from "react-router-dom"
import Logo from '../../assets/logor.png';
import Footer from "../../components/Layout/Footer/Footer"
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import { useContext, useState } from "react"
import axios from "axios"
import { URL } from "../../url"
import { UserContext } from "../../context/UserContext"
import "./auth.css"
import Navbar from "../../components/Layout/Navbar/Navbar"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/login", { email, password }, { withCredentials: true })
      localStorage.setItem(`t`, JSON.stringify(res.data.token))
      setUser(res.data)
      navigate("/blog")
    } catch (err) {
      setError(true)
      console.log(err)
    }
  }
  return (
    <>
      <Navbar />
      <div className="login-page">
      <img src={Logo} alt="logo" width={150} />
        <h1 className="text-xl font-bold text-left">Sign In</h1>
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" />
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)} 
          type="password" 
          placeholder="Enter your password"
          />
        <button onClick={handleLogin}>Log in</button>
        {error && <h3 style={{color: "#ff0000", fontWeight: "500"}}>Something went wrong</h3>}
        <p>
          Don't Have an Account?{" "}
          <Link className="register-page-Link" to="/register">
            Register
          </Link>
        </p>
        <p>
          Or{" "}
          <Link className="register-page-Link" to="/forgotPassword">
            Forgot Password
          </Link>
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Login
