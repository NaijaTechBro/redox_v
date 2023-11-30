import Reading from "./Reading"
import Recomended from "./Recomended"
import Search from "./Search"

const Sidebar = ({ posts }) => {
	return (
		<div className="popular__sidebar mobile--hidden">
			<Search />
			<Reading />
			<Recomended posts={posts} />
		</div>
	)
}

export default Sidebar
