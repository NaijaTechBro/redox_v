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
		// Filter posts based on the category
		const filteredPosts = posts.filter(post => post.categories.includes(category))

		// Set the filtered posts to the state
		setCategoryPosts(filteredPosts)
	}, [posts, category])

	const nav=(
		<>
		<nav></nav>
		</>
	)
	return (
		<>
			<Navbar />
			<h2 className="category__heading">{category}</h2>
			<Popular
				posts={categoryPosts}
				type="all"
			/>
		</>
	)
		//nav added
	
}

export default Category
