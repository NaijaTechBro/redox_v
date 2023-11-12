import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Logo from "../../assets/logor.png"
import Footer from "../../components/Layout/Footer/Footer"
import Navbar from "../../components/Layout/Navbar/Navbar"
import PasswordInput from "../../components/PasswordInput/PasswordInput"
import { useTheme } from "../../context/ThemeContext"
import { UserContext } from "../../context/UserContext"
import { URL } from "../../url"
import "./auth.css"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { setUser } = useContext(UserContext)
	const navigate = useNavigate()
	const { darkMode } = useTheme()

	const handleLogin = async () => {
		try {
			await axios.post(`${URL}/api/auth/login`, { email, password }, { withCredentials: true }).then(res => {
				localStorage.setItem(`t`, JSON.stringify(res.data.token))
				setUser(res.data)
				navigate("/blog")
			})
		} catch (err) {
			console.log(err)
			toast.error(err.response.data.message)
		}
	}

	return (
		<>
			<Navbar />
			<ToastContainer />
			<div className={darkMode ? "dark_mode login-page relative" : "login-page relative"}>
				<img
					src={Logo}
					alt="logo"
					width={150}
				/>
				<h1 className="text-xl font-bold text-left">Sign In</h1>
				<input
					onChange={e => setEmail(e.target.value)}
					type="text"
					placeholder="Enter your email"
				/>
				<PasswordInput
					onChange={e => setPassword(e.target.value)}
					type="password"
					placeholder="Enter your password"
				/>
				<button onClick={handleLogin}>Log in</button>
				<p>
					Don't Have an Account?{" "}
					<Link
						className="register-page-Link"
						to="/register">
						Register
					</Link>
				</p>
				<p>
					Or{" "}
					<Link
						className="register-page-Link"
						to="/forgotPassword">
						Forgot Password
					</Link>
				</p>
			</div>
			<Footer />
		</>
	)
}

export default Login
