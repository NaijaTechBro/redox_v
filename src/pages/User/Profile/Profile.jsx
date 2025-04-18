import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../../components/Layout/Footer/Footer"
import Navbar from "../../../components/Layout/Navbar/Navbar"
import { useTheme } from "../../../context/ThemeContext"
import { UserContext } from "../../../context/UserContext"
import { URL } from "../../../url"
import ProfileAnalysis from "./Component/ProfileAnalysis"
import ProfileBookmarks from "./Component/ProfileBookmarks"
import ProfileDetailsSection from "./Component/ProfileDetailsSection"
import ProfileDetailsToggler from "./Component/ProfileDetailsToggler"
import "./profile.scss"

const Profile = () => {
	const { usertag } = useParams()
	const [username, setUsername] = useState("")
	const [id, setId] = useState("")
	const [followers, setFollowers] = useState([])
	const [following, setFollowing] = useState([])
	const [bio, setBio] = useState("")
	const { user } = useContext(UserContext)
	const [posts, setPosts] = useState([])
	const [bookmarks, setBookmarks] = useState([])
	const [analysisState, setAnalysisState] = useState(true)
	const { darkMode } = useTheme()

	const profileAnalysis = { posts, user }

	const profileBookmarks = { bookmarks, user }

	const toggleAnalysisState = () => setAnalysisState(prev => !prev)

	const fetchProfile = async param => {
		try {
			const res = await axios.get(`${URL}/api/users/username/${param}`)
			setId(res.data._id)
			setUsername(res.data.username)
			setFollowers(res.data.followers)
			setFollowing(res.data.following)
			setBio(res.data.bio)
			fetchUserPosts(res.data._id)
			fetchUserBookmarks(res.data._id)
		} catch (err) {
			console.log(err)
		}
	}

	const profileDetailsSection = {
		id,
		photo: user.photo,
		username,
		posts: posts.length,
		followers: followers,
		following: following,
		user,
		isCurrentUser: user._id == id,
		bio: bio,
		fetchProfile,
	}

	const fetchUserPosts = async id => {
		try {
			const { data } = await axios.get(`${URL}/api/posts/user/${id}`)
			setPosts(data)
		} catch (err) {
			console.log(err)
		}
	}

	const fetchUserBookmarks = async id => {
		try {
			const { data } = await axios.get(`${URL}/api/bookmarks/${id}`)
			setBookmarks(data)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		if (usertag !== undefined) {
			fetchProfile(usertag)
		}
	}, [usertag])

	return (
		<>
			<Navbar />
			<div className={darkMode ? "dark_mode profile" : "profile"}>
				<div className="container">
					<div className="profile">
						<h4 className="profile-details__heading">Profile</h4>
						<ProfileDetailsSection data={profileDetailsSection} />
						<ProfileDetailsToggler
							analysisState={analysisState}
							toggleAnalysisState={toggleAnalysisState}
						/>
						{analysisState ? <ProfileAnalysis data={profileAnalysis} /> : <ProfileBookmarks data={profileBookmarks} />}
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Profile
