import { useContext, useEffect, useState } from "react"
import Footer from "../../../components/Layout/Footer/Footer"
import Navbar from "../../../components/Layout/Navbar/Navbar"
import axios from "axios"
import { URL } from "../../../url"
import { UserContext } from "../../../context/UserContext"
import { useParams } from "react-router-dom"
import "./profile.scss"

const EditProfile = () => {
  const param = useParams().id
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [bio, setBio] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { user } = useContext(UserContext)
  const [updated, setUpdated] = useState(false)
  // console.log(user)

  const fetchProfile = async () => {
    try {
      const res = await axios.get(URL + "/api/users/" + user._id)
      setUsername(res.data.username)
      setBio(res.data.bio)
      setName(res.data.name)
      setPhone(res.data.phone)
      setEmail(res.data.email)
      setPassword(res.data.password)
    } catch (err) {
      console.log(err)
    }
  }

  const handleUserUpdate = async () => {
    setUpdated(false)
    try {
      const res = await axios.put(URL + "/api/users/" + user._id, { username, email, password }, { withCredentials: true })
      // console.log(res.data)
      setUpdated(true)
    } catch (err) {
      console.log(err)
      setUpdated(false)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [param])

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="container">
          <div className="min-h-[80vh] px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
            <div className="profile">
              <h1>Profile</h1>
              <div className="profile-main">
                <input onChange={(e) => setName(e.target.value)} value={name} className="profile-input" placeholder="Your name" type="text" />
              </div>
              <div className="profile-main">
                <input onChange={(e) => setUsername(e.target.value)} value={username} className="profile-input" placeholder="Your username" type="text" />
              </div>
              <div className="profile-main">
                <input onChange={(e) => setBio(e.target.value)} value={bio} className="profile-input" placeholder="Your Bio" type="text" />
              </div>
              <div className="profile-main">
                <input onChange={(e) => setEmail(e.target.value)} value={email} className="profile-input" placeholder="Your email" type="email" />
              </div>
              <div className="profile-main">
                <input onChange={(e) => setPhone(e.target.value)} value={phone} className="profile-input" placeholder="Your Phone number" type="text" />
              </div>
              {/* <input onChange={(e)=>setPassword(e.target.value)} value={password} className="outline-none px-4 py-2 text-gray-500" placeholder="Your password" type="password"/> */}
              <div className="profile-main">
                <button onClick={handleUserUpdate} className="profile-edit__btn">
                  Update
                </button>
              </div>
              {updated && <h3 className="text-green-500 text-sm text-center mt-4">user updated successfully!</h3>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EditProfile
