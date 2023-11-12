import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Logo from "../../assets/logor.png"
import Footer from "../../components/Layout/Footer/Footer"
import Navbar from "../../components/Layout/Navbar/Navbar"
import { useTheme } from "../../context/ThemeContext"
import { URL } from "../../url"

const Register = () => {
	const [username, setUsername] = useState("")
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()
	const { darkMode } = useTheme()

	const handleRegister = async () => {
		try {
			await axios.post(`${URL}/api/auth/register`, { name, username, email, password }).then(({ data }) => {
				setUsername(data.username)
				setName(data.name)
				setEmail(data.email)
				setPassword(data.password)
				navigate("/login")
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
			<div className={darkMode ? "dark_mode register-page relative" : "register-page relative"}>
				<img
					src={Logo}
					alt="logo"
					width={150}
				/>
				<h2>Create an account</h2>
				<input
					onChange={e => setName(e.target.value)}
					value={name}
					type="text"
					placeholder="Enter your name"
				/>
				<input
					onChange={e => setUsername(e.target.value)}
					value={username}
					type="text"
					placeholder="Enter your username"
				/>
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
				<button onClick={handleRegister}>Register</button>
				<p>
					Already Have an Account?{" "}
					<Link
						className="register-page-Link"
						to="/login">
						Login
					</Link>
				</p>
			</div>
			<Footer />
		</>
	)
}

export default Register

// import { Link, useNavigate } from "react-router-dom"
// import Footer from "../../components/Layout/Footer/Footer"
// import Logo from '../../assets/logor.png';
// import { useState } from "react"
// import axios from 'axios'
// import {URL} from '../../url'
// import Navbar from "../../components/Layout/Navbar/Navbar";

// const Register = () => {

//   const [username,setUsername]=useState("")
//   const [ name, setName ] = useState("")
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")
//   const [error,setError]=useState(false)
//   const navigate=useNavigate()

//   const handleRegister=async ()=>{

//     try{
//       const res=await axios.post(URL+"/api/auth/register",{username, name, email, password})
//       setUsername(res.data.username)
//       setName(res.data.name)
//       setEmail(res.data.email)
//       setPassword(res.data.password)
//       setError(false)
//       navigate("/login")

//     }
//     catch(err){
//       setError(true)
//       console.log(err)
//     }

//   }

//   return (
//     <>
//     <Navbar />
//         <div className="register-page">
//         <img src={Logo} alt="logo" width={150} />
//           <h2>Create an account</h2>
//           <input onChange={(e)=>setName(e.target.value)}  type="text" placeholder="Enter your name" />
//           <input onChange={(e)=>setUsername(e.target.value)}  type="text" placeholder="Enter your username" />
//           <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter your email" />
//           <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password" />
//           <button onClick={handleRegister} >Register</button>
//           {error && <h3 style={{color: "#ff0000", fontWeight: "500"}}>Something went wrong</h3>}
//           <p>
//           Already Have an Account?{' '}
//           <Link className="register-page-Link" to="/login">
//             Login
//           </Link>
//         </p>
//         </div>
//     <Footer/>
//     </>

//   )
// }

// export default Register
