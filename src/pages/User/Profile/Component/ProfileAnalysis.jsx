import PropTypes from "prop-types"
import ProfilePost from "./ProfilePost"

const ProfileAnalysis = ({ data }) => {
	const { posts, user } = data

	return (
		<div className="profile-details__grid">
			{posts.length > 0 ? (
				posts.map(post => (
					<ProfilePost
						post={post}
						user={user}
						key={post._id}
					/>
				))
			) : (
				<div className="profile-details__bookmarks">
					<h4 className="profile-details__heading">No Analysis Found</h4>
				</div>
			)}
		</div>
	)
}

ProfileAnalysis.propTypes = {
	data: PropTypes.object.isRequired,
}

export default ProfileAnalysis
