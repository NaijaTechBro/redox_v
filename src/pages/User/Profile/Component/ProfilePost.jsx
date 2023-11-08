/* eslint-disable react/prop-types */
import PropTypes from "prop-types"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { MdOutlineBookmarkAdd } from "react-icons/md"
import { Link } from "react-router-dom"
import { postDate, truncate } from "../../../../helpers"

const ProfilePost = ({ post, user }) => {
	return (
		<Link
			to={`/posts/post/${post._id}`}
			key={post._id}>
			<div className="profile-box">
				<h4 className="profile-box__info--title title--mobile desktop--hidden text--center">{post.title}</h4>
				<div className="profile-box__info--top mobile--top desktop--hidden">
					<div>
						<img
							src={user.photo}
							alt="Popular"
							className="profile-box__info--profile"
						/>
						<h6 className="profile-box__info--heading">{post.username}</h6>
					</div>
					<h6 className="profile-box__info--heading profile-box__info--heading--dimmed">{postDate(post.createdAt)}</h6>
				</div>
				<div className="profile-box__info">
					<div className="profile-box__info--top mobile--hidden">
						<img
							src={user.photo}
							alt="Popular"
							className="profile-box__info--profile"
						/>
						<h6 className="profile-box__info--heading">{post.username}</h6>
						<h6 className="profile-box__info--heading profile-box__info--heading--dimmed">{postDate(post.createdAt)}</h6>
					</div>
					<div className="profile-box__info--body">
						<h4 className="profile-box__info--title mobile--hidden">{post.title}</h4>
						<p className="profile-box__info--text">{truncate(post.desc, 300)}</p>
					</div>
					<div className="profile-box__info--bottom">
						<div className="profile-box__info--meta meta">
							{post.categories.map(category => (
								<span
									className="meta__category"
									key={category}>
									{category}
								</span>
							))}
							<span className="meta__time mobile--hidden">3 min read</span>
							<span className="meta__selected mobile--hidden">Selected for you</span>
						</div>
						<div className="profile-box__info--cta mobile--hidden">
							<span>
								<MdOutlineBookmarkAdd size={20} />
							</span>
							<span>
								<BiDotsHorizontalRounded size={20} />
							</span>
						</div>
					</div>
				</div>
				<div className="profile-box--img">
					<img
						src={post.image}
						alt=""
					/>
				</div>
			</div>
		</Link>
	)
}

ProfilePost.propTypes = {
	post: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
}

export default ProfilePost
