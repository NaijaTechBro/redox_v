import axios from "axios"
import { useEffect, useState } from "react"
import { URL } from "../../../../url"
import RecomendedBadge from "./RecomendedBadge"

const Recomended = () => {
	const [categoryPosts, setCategoryPosts] = useState([])

	const fetchCategories = async () => {
		try {
			const { data } = await axios.get(`${URL}/api/posts/category/getall`)
			console.log(data)
			setCategoryPosts(data)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		fetchCategories()
	}, [])

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
