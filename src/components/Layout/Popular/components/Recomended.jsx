import { useEffect, useState } from "react"
import RecomendedBadge from "./RecomendedBadge"

const Recomended = ({ posts }) => {
	const badgeData = ["Fundamentals", "Money", "Business", "Productivity", "USD", "Trading Strategy", "Yada Yada"]

	const [categoryPosts, setCategoryPosts] = useState([])

	useEffect(() => {
		if (posts) {
			const filteredPosts = posts.reduce((acc, post) => {
				// Assuming post.categories is an array
				post.categories.forEach(category => {
					if (!acc.includes(category)) {
						acc.push(category)
					}
				})
				return acc
			}, [])
			setCategoryPosts(filteredPosts)
		}
	}, [posts])

	return (
		<div className="popular__recomended">
			<h4 className="popular__recomended--heading">Recommended Topics</h4>
			<div className="popular__recomended--badges">
				{categoryPosts.map(data => (
					<RecomendedBadge
						text={data}
						key={data}
					/>
				))}
			</div>
		</div>
	)
}

export default Recomended
