import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useLoginMutation } from "../../../service/apiHandler"
import Logo from "../../assets/logor.png"
import PasswordInput from "../../components/PasswordInput/PasswordInput"
import "./authAdmin.css"

const Login = ({ sideMenuOpen }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const [login] = useLoginMutation()

	const handleLogin = async () => {
		try {
			const params = { email, password }
			login(params)
				.unwrap()
				.then(data => console.log(data))
				.catch(error => console.log(error))
		} catch (error) {
			console.error("Login failed:", error)
		}
	}

	return (
		<>
			<ToastContainer />
			<div className={sideMenuOpen ? "login-page mobile--hidden" : "login-page"}>
				<img
					src={Logo}
					alt="logo"
					width={150}
				/>
				<h1 className="text-xl font-bold text-left">Admin Sign In</h1>
				<input
					onChange={e => setEmail(e.target.value)}
					type="text"
					placeholder="Enter your email"
					autoComplete="on"
				/>
				<PasswordInput
					onChange={e => setPassword(e.target.value)}
					type="password"
					placeholder="Enter your password"
				/>
				<button onClick={() => handleLogin()}>Log in</button>
				<p>
					Don't Have an Account?{" "}
					<Link
						className="register-page-Link"
						to="/admin/cyprus">
						Register
					</Link>
				</p>
				<p>
					Or{" "}
					<Link
						className="register-page-Link"
						to="/admin/forgotPassword">
						Forgot Password
					</Link>
				</p>
			</div>
		</>
	)
}

export default Login
