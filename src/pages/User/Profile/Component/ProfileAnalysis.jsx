import PropTypes from "prop-types"
import ProfilePost from "./ProfilePost"

const ProfileAnalysis = ({ data }) => {
	const { posts, user } = data

	return (
		<div className="profile-details__grid">
			{posts.map(post => (
				<ProfilePost
					post={post}
					user={user}
					key={post._id}
				/>
			))}
		</div>
	)
}

ProfileAnalysis.propTypes = {
	data: PropTypes.object.isRequired,
}

export default ProfileAnalysis
