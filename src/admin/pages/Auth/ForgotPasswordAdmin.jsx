import { useState } from "react"
import Logo from "../../assets/logor.png"  
import "./authAdmin.css" 

const ForgotPassword = () => {
	const [email, setEmail] = useState("")
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)


	return (
		<>
			<div className="">
				<img
					src={Logo}
					alt=""
					width={150}
				/>
				<h2>Forgot Password</h2>
				{success ? (
					<p>Please Check Your Email For A Reset Link</p>
				) : (
					<>
						<p>Please Enter Your Email</p>
						<form>
							<input
								type="email"
								placeholder="Email"
								name="email"
								onChange={e => setEmail(e.target.value)}
							/>
							<button type="button" onClick="">Reset Password</button>
						</form>
					</>
				)}
			</div>
		</>
	)
}

export default ForgotPassword
