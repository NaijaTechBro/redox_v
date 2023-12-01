import PropTypes from "prop-types"
import { useContext } from "react"
import empty_post from "../../../assets/empty-post.png"
import { useTheme } from "../../../context/ThemeContext"
import { UserContext } from "../../../context/UserContext"
import PopularBoxes from "./components/PopularBoxes"
import Sidebar from "./components/Sidebar"
import "./popular.scss"

const Popular = ({ posts, type }) => {
	const { user } = useContext(UserContext)
	const { darkMode } = useTheme()

	return (
		<section className={darkMode ? "popular section dark_mode" : "popular section"}>
			<div className="container">
				{posts.length > 0 ? (
					<>
						{user._id === undefined && type !== "search" && (
							<>
								<h3 className="section--title mobile--hidden">Popular this Week</h3>
								<h3 className="section--title desktop--hidden">Popular Analysis</h3>
							</>
						)}
						<div className="popular--grid">
							<PopularBoxes
								user={user}
								posts={posts}
								type={type}
							/>
							<Sidebar posts={posts} />
						</div>
					</>
				) : (
					<>
						<div className="empty--search">
							<img
								src={empty_post}
								alt=""
								width="50%"
							/>
							<h2 className="empty--search--heading">No Post Available</h2>
						</div>
					</>
				)}
			</div>
		</section>
	)
}

Popular.propTypes = {
	posts: PropTypes.array,
	type: PropTypes.string,
}

export default Popular
