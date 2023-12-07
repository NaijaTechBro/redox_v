import PropTypes from "prop-types"
import ProfilePost from "./ProfilePost"

const ProfileBookmarks = ({ data }) => {
	const { bookmarks, user } = data

	return (
		<div className="profile-details__grid">
			{bookmarks.length > 0 ? (
				bookmarks.map(bookmark => (
					<ProfilePost
						post={bookmark.post}
						user={user}
						key={bookmark._id}
					/>
				))
			) : (
				<div className="profile-details__bookmarks">
					<h4 className="profile-details__heading">No Bookmark Found</h4>
				</div>
			)}
		</div>
	)
}

ProfileBookmarks.propTypes = {
	data: PropTypes.object.isRequired,
}

export default ProfileBookmarks
