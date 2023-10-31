import { Link, useNavigate } from "react-router-dom"
import Footer from "../../components/Layout/Footer/Footer"
<<<<<<< HEAD
import Logo from "../../assets/logor.png"
import { useState } from "react"
import axios from "axios"
import { URL } from "../../url"
import Navbar from "../../components/Layout/Navbar/Navbar"
=======
import Logo from '../../assets/logor.png';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import { useState } from "react"
import axios from 'axios'
import { URL } from '../../url'
import Navbar from "../../components/Layout/Navbar/Navbar";
>>>>>>> 3dcfafb576f9cb6952a88b16c5f6b79aeee3e916

const Register = () => {
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
<<<<<<< HEAD
  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/register", { username, email, password })
=======
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()

  const handleRegister = async () => {
    if (!username || !name || !email || !password) {
      setError(true)
      setErrorMessage("All fields are required")
      return
    }

        // Check if password is greater than 6 characters
    if (password.length < 6) {
      setError(true)
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }


    try {
      const res = await axios.post(URL + "/api/auth/register", { username, name, email, password })
>>>>>>> 3dcfafb576f9cb6952a88b16c5f6b79aeee3e916
      setUsername(res.data.username)
      setName(res.data.name)
      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      setErrorMessage("")
      navigate("/login")
    } catch (err) {
      setError(true)
      setErrorMessage("Something went wrong. Please try again.")
      console.log(err)
    }
  }

  return (
    <>
      <Navbar />
      <div className="register-page">
        <img src={Logo} alt="logo" width={150} />
        <h2>Create an account</h2>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your username" />
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" />
<<<<<<< HEAD
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
        <button onClick={handleRegister}>Register</button>
        {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
        <p>
          Already Have an Account?{" "}
=======
        
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)} 
          type="password" 
          placeholder="Enter your password"
          />
        <button onClick={handleRegister}>Register</button>
        {error && <h3 style={{ color: "#ff0000", fontWeight: "500" }}>{errorMessage}</h3>}
        <p>
          Already Have an Account?{' '}
>>>>>>> 3dcfafb576f9cb6952a88b16c5f6b79aeee3e916
          <Link className="register-page-Link" to="/login">
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
