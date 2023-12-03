import axios from "axios"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { URL } from "../../../../url"

const ProfileDetailsSection = ({ data }) => {
	const { id, photo, username, posts, followers, following, user, isCurrentUser, bio, fetchProfile } = data
	const [followState, setFollowState] = useState(`Follow`)
	const [btnClicked, setBtnClicked] = useState(false)

	useEffect(() => {
		if (followers.includes(user._id)) {
			setFollowState(`Unfollow`)
		} else {
			setFollowState(`Follow`)
		}
	}, [followers])

	const handleFollow = async () => {
		const postData = { followerId: user._id }

		await axios
			.post(`${URL}/api/users/${followState.toLowerCase()}/${id}`, postData, {
				withCredentials: true,
				"Content-Type": "application/json",
				Authorization: `Bearer ${JSON.parse(localStorage.getItem(`t`))}`,
			})
			.then(() => fetchProfile(id))
	}

	return (
		<div className="profile-details__section">
			<div className="profile-details__photo">
				<img
					src={photo}
					alt={username}
				/>
			</div>
			<div className="profile-details__info">
				<h3 className="profile-details__title">@{username}</h3>
				<div className="profile-details__content">
					<span className="profile-details__info--box">{posts} Posts</span>
					<span className="profile-details__info--box">{followers.length} Followers</span>
					<span className="profile-details__info--box">{following.length} Following</span>
				</div>
				<div className="profile-details__info">
					<p>{bio}</p>
				</div>
				<div className="profile-details__cta">
					{isCurrentUser ? (
						<Link to={`/profile/edit/${id}`}>
							<button className="cta__btn">Edit Profile</button>
						</Link>
					) : (
						<button
							className="cta__btn"
							onClick={handleFollow}>
							{followState}
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProfileDetailsSection
