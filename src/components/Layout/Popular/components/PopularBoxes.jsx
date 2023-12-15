import { AiOutlinePlus } from "react-icons/ai"
import { Link } from "react-router-dom"
import PopularBox from "./PopularBox"

const PopularBoxes = ({ user, type, posts, category }) => {
	return (
		<div className="popular__boxes">
			{user._id !== undefined && category === undefined && type !== "Search" && (
				<>
					<div className="popular__user--managenent">
						<h5 className="popular--username">Hi, {user.username}🎊</h5>
						<Link
							to="/write"
							className="btn mobile--hidden">
							Create Analysis
						</Link>
					</div>
					<div className="popular__top">
						<h5 className="popular__top--heading">Explore more on RedoX</h5>
						<Link to="/write">
							<AiOutlinePlus
								size={25}
								className="desktop--hidden add--icon"
							/>
						</Link>
					</div>
				</>
			)}
			{posts.map(post => (
				<PopularBox
					post={post}
					user={user}
					key={post._id}
				/>
			))}
		</div>
	)
}

export default PopularBoxes
