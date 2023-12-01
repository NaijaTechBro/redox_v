import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../../components/Layout/Footer/Footer"
import Navbar from "../../../components/Layout/Navbar/Navbar"
import { useTheme } from "../../../context/ThemeContext"
import { UserContext } from "../../../context/UserContext"
import { URL } from "../../../url"
import ProfileAnalysis from "./Component/ProfileAnalysis"
import ProfileDetailsSection from "./Component/ProfileDetailsSection"
import ProfileDetailsToggler from "./Component/ProfileDetailsToggler"
import "./profile.scss"

const Profile = () => {
	const { id } = useParams()
	const [username, setUsername] = useState("")
	const [followers, setFollowers] = useState([])
	const [following, setFollowing] = useState([])
	const { user } = useContext(UserContext)
	const [posts, setPosts] = useState([])
	const [analysisState, setAnalysisState] = useState(true)
	const { darkMode } = useTheme()

	const profileDetailsSection = {
		id,
		photo: user.photo,
		username,
		posts: posts.length,
		followers: followers.length,
		following: following.length,
		isCurrentUser: user._id == id,
	}

	const profileAnalysis = { posts, user }

	const toggleAnalysisState = () => setAnalysisState(prev => !prev)

	const fetchProfile = async param => {
		try {
			const res = await axios.get(`${URL}/api/users/${param}`)
			setUsername(res.data.username)
			setFollowers(res.data.followers)
			setFollowing(res.data.following)
		} catch (err) {
			console.log(err)
		}
	}

	const fetchUserPosts = async id => {
		try {
			const { data } = await axios.get(`${URL}/api/posts/user/${id}`)
			setPosts(data)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		if (id !== undefined) {
			fetchProfile(id)
			fetchUserPosts(id)
		}
	}, [id])

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
						{analysisState ? (
							<ProfileAnalysis data={profileAnalysis} />
						) : (
							<div className="profile-details__bookmarks">
								<h4 className="profile-details__heading">No Bookmark Found</h4>
							</div>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Profile
