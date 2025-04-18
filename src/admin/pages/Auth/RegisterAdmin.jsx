import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Logo from "../../assets/logor.png"
import { useCreateAdminMutation } from "../../../service/apiHandler"


const Register = ({sideMenuOpen}) => {
	const [username, setUsername] = useState("")
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	
	const [createAdmin] = useCreateAdminMutation();

  const handleSignup = async () => {
    try {
      const result = await createAdmin({ name, email, password })
      console.log(result)
    } catch (error) {
      console.error('Sign up failed:', error)
    }
  }


	return (
		<>
			<ToastContainer />
			<div className={sideMenuOpen ? 'register-page mobile--hidden' : 'register-page'}> 
				<img
					src={Logo}
					alt="logo"
					width={150}
				/>
				<h2>Create Admin account</h2>
				<input
					onChange={e => setName(e.target.value)}
					value={name}
					type="text"
					placeholder="Enter your name"
				/>
				{/* <input
					onChange={e => setUsername(e.target.value)}
					value={username}
					type="text"
					placeholder="Enter your username"
				/> */}
				<input
					onChange={e => setEmail(e.target.value)}
					value={email}
					type="text"
					placeholder="Enter your email"
				/>
				<input
					onChange={e => setPassword(e.target.value)}
					value={password}
					type="password"
					placeholder="Enter your password"
				/>
				<button onClick={() => handleSignup()}>Register</button>
				<p>
					Already Have an Account?{" "}
					<Link
						className="register-page-Link"
						to="/admin/login">
						Login
					</Link>
				</p>
			</div>
		</>
	)
}

export default Register
