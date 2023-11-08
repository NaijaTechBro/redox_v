import axios from "axios"
import { useContext, useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../../components/Layout/Footer/Footer"
import Navbar from "../../../components/Layout/Navbar/Navbar"
import { UserContext } from "../../../context/UserContext"
import { URL } from "../../../url"
import "./profile.scss"

const EditProfile = () => {
	const { id } = useParams()
	const imageRef = useRef()
	const [profileImg, setProfileImg] = useState(``)
	const [username, setUsername] = useState("")
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [bio, setBio] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { user } = useContext(UserContext)
	const [updated, setUpdated] = useState(false)

	const fetchProfile = async id => {
		try {
			const res = await axios.get(`${URL}/api/users/${id}`)
			const { username, bio, name, phone, email, password, photo } = res.data
			setUsername(username)
			setBio(bio)
			setName(name)
			setPhone(phone)
			setEmail(email)
			setPassword(password)
			setProfileImg(photo)
		} catch (err) {
			console.log(err.message)
		}
	}

	const handleUserUpdate = async () => {
		setUpdated(false)
		try {
			const params = { username, email, password }
			const credentials = { withCredentials: true }

			await axios.put(`${URL}/api/users/${user._id}`, params, credentials).then(() => setUpdated(true))
		} catch (err) {
			console.log(err.message)
			setUpdated(false)
		}
	}

	const handleProfileChange = e => setProfileImg(e.target.files[0])

	const handleProfileDelete = async () => {
		const res = await axios.get(`${URL}/api/users/${id}`)
		const { photo } = res.data
		setProfileImg(photo)
	}

	useEffect(() => {
		fetchProfile(id)
	}, [id])

	return (
		<>
			<Navbar />
			<div className="profile">
				<div className="container">
					<div className="min-h-[80vh] px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
						<div className="profile">
							<h4 className="profile-details__heading">Edit your Profile</h4>
							<div className="profile-form__img-container">
								<img
									className="profile-form__img--img"
									src={typeof profileImg !== `string` ? window.URL.createObjectURL(profileImg) : profileImg}
									alt="profile"
								/>
								<div className="profile-form__img--cta">
									<input
										type="file"
										ref={imageRef}
										onChange={handleProfileChange}
										className="profile-form__img--input"
									/>
									<button
										className="profile-form__img--cta__btn"
										onClick={() => imageRef.current.click()}>
										Upload
									</button>
									<button
										className="profile-form__img--cta__btn"
										onClick={handleProfileDelete}>
										Delete
									</button>
								</div>
							</div>
							<div className="profile-main">
								<input
									onChange={e => setName(e.target.value)}
									value={name}
									className="profile-input"
									placeholder="Your name"
									type="text"
								/>
							</div>
							<div className="profile-main">
								<input
									onChange={e => setUsername(e.target.value)}
									value={username}
									className="profile-input"
									placeholder="Your username"
									type="text"
								/>
							</div>
							<div className="profile-main">
								<input
									onChange={e => setBio(e.target.value)}
									value={bio}
									className="profile-input"
									placeholder="Your Bio"
									type="text"
								/>
							</div>
							<div className="profile-main">
								<input
									onChange={e => setEmail(e.target.value)}
									value={email}
									className="profile-input"
									placeholder="Your email"
									type="email"
								/>
							</div>
							<div className="profile-main">
								<input
									onChange={e => setPhone(e.target.value)}
									value={phone}
									className="profile-input"
									placeholder="Your Phone number"
									type="text"
								/>
							</div>
							{/* <input onChange={(e)=>setPassword(e.target.value)} value={password} className="outline-none px-4 py-2 text-gray-500" placeholder="Your password" type="password"/> */}
							<div className="profile-main">
								<button
									onClick={handleUserUpdate}
									className="profile-edit__btn">
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
