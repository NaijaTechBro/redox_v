import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../../components/Layout/Navbar/Navbar"
import Popular from "../../components/Layout/Popular/Popular"
import usePostContext from "../../context/post/usePostContext"

const Category = () => {
	const { posts } = usePostContext()
	const { category } = useParams()
	const [categoryPosts, setCategoryPosts] = useState([])

	useEffect(() => {
		const filteredPosts = posts.filter(post => post.categories.includes(category))
		setCategoryPosts(filteredPosts)
	}, [posts, category])

	return (
		<>
			<Navbar />
			<Popular
				posts={categoryPosts}
				type="all"
				category={category}
			/>
		</>
	)
}

export default Category
