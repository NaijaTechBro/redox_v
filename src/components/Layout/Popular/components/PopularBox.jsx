import { convert } from "html-to-text"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { MdOutlineBookmarkAdd } from "react-icons/md"
import { Link } from "react-router-dom"
import postPhoto from "../../../../assets/popular-box.png"
import { getBriefStr, postDate } from "../../../../helpers"

const PopularBox = ({ post, user }) => {
	return (
		<div className="popular-box">
			<h4 className="popular-box__info--title title--mobile desktop--hidden text--center">{post.title}</h4>
			<Link
				to={user._id !== undefined ? `/${post.title.toLowerCase().replace(/ /g, "-")}` : `/login`}
				className="popular-box__info--top mobile--top desktop--hidden">
				<div>
					<img
						src={postPhoto}
						alt="Popular"
						className="popular-box__info--profile"
					/>
					<h6 className="popular-box__info--heading">{`@${post.username}`}</h6>
				</div>
				<h6 className="popular-box__info--heading popular-box__info--heading--dimmed">{postDate(post.createdAt)}</h6>
			</Link>
			<div className="popular-box__info">
				<div className="popular-box__info--top mobile--hidden">
					<img
						src={postPhoto}
						alt="Popular"
						className="popular-box__info--profile"
					/>
					<h6 className="popular-box__info--heading">{post.username}</h6>
					<h6 className="popular-box__info--heading popular-box__info--heading--dimmed">{postDate(post.createdAt)}</h6>
				</div>
				<Link
					to={user._id !== undefined ? `/${post.title.toLowerCase().replace(/ /g, "-")}` : `/login`}
					className="popular-box__info--body">
					<h4 className="popular-box__info--title mobile--hidden">{post.title}</h4>
					<p
						className="popular-box__info--text"
						dangerouslySetInnerHTML={{
							__html: getBriefStr(convert(post.desc.substring(1, post.desc.length - 1)), 200),
						}}
					/>
				</Link>
				<div className="popular-box__info--bottom">
					<div className="popular-box__info--meta meta">
						{post.categories.map(category => (
							<Link
								to={`/category/${category}`}
								className="meta__category"
								key={category}>
								{category}
							</Link>
						))}
						<span className="meta__time mobile--hidden">3 min read</span>
						<span className="meta__selected mobile--hidden">Selected for you</span>
					</div>
					<div className="popular-box__info--cta mobile--hidden">
						<span>
							<MdOutlineBookmarkAdd size={20} />
						</span>
						<span>
							<BiDotsHorizontalRounded size={20} />
						</span>
					</div>
				</div>
			</div>
			<div className="popular-box--img">
				<img
					src={post.image}
					alt=""
				/>
			</div>
		</div>
	)
}

export default PopularBox
