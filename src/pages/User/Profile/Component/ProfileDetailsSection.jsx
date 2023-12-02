import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const ProfileDetailsSection = ({ data }) => {
	const { id, photo, username, posts, followers, following, isCurrentUser } = data

	console.log(isCurrentUser)

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
					<span className="profile-details__info--box">{followers} Followers</span>
					<span className="profile-details__info--box">{following} Following</span>
				</div>
				<div className="profile-details__cta">
					{isCurrentUser ? (
						<Link to={`/profile/edit/${id}`}>
							<button className="cta__btn">Edit Profile</button>
						</Link>
					) : (
						<button className="cta__btn">Follow</button>
					)}
				</div>
			</div>
		</div>
	)
}

ProfileDetailsSection.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string,
		photo: PropTypes.string,
		username: PropTypes.string,
		posts: PropTypes.number,
		followers: PropTypes.number,
		following: PropTypes.number,
		isCurrentUser: PropTypes.bool,
	}),
}

export default ProfileDetailsSection
