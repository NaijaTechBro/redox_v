import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { BsSearch } from "react-icons/bs"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Footer from "../../components/Layout/Footer/Footer"
import Navbar from "../../components/Layout/Navbar/Navbar"
import Loader from "../../components/Loading/Loader"
import { useTheme } from "../../context/ThemeContext"
import { UserContext } from "../../context/UserContext"
import { URL } from "../../url"
import BlogPosts from "./Blogpost/BlogPosts"
import "./blog.css"

const Blog = () => {
	const { search } = useLocation()
	// console.log(search)
	const [posts, setPosts] = useState([])
	const [noResults, setNoResults] = useState(false)
	const [loader, setLoader] = useState(false)
	const { user } = useContext(UserContext)
	// console.log(user)
	const { darkMode, toggleTheme } = useTheme()

	const [prompt, setPrompt] = useState("")
	const navigate = useNavigate()
	const path = useLocation().pathname

	const fetchPosts = async () => {
		setLoader(true)
		try {
			const res = await axios.get(`${URL}/api/posts/${search}`)
			// console.log(res.data)
			setPosts(res.data.posts)
			if (res.data.posts.length === 0) {
				setNoResults(true)
			} else {
				setNoResults(false)
			}
			setLoader(false)
		} catch (err) {
			console.log(err)
			setLoader(true)
		}
	}

	useEffect(() => {
		fetchPosts()
	}, [search])

	return (
		<>
			<Navbar />
			<div className={darkMode ? "dark_mode blog" : "blog"}>
				<h1>Find your Favourite Content</h1>
				<div className="mobile">
					{path === "/blog" && (
						<div className="search-bar">
							<input
								onChange={e => setPrompt(e.target.value)}
								className="outline-none px-3 "
								placeholder="Search"
								type="text"
							/>
							<p
								onClick={() => navigate(prompt ? "?search=" + prompt : navigate("/"))}
								className="cursor-pointer">
								<BsSearch />
							</p>
						</div>
					)}
				</div>
				{loader ? (
					<div className="loader">
						<Loader />
					</div>
				) : !noResults ? (
					posts.map(post => (
						<Link
							key={post._id}
							to={user ? `/${post._id}` : "/login"}
							style={{ textDecoration: "none" }}>
							<BlogPosts
								key={post._id}
								post={post}
							/>
						</Link>
					))
				) : (
					<h3 className="text-center font-bold mt-16">No posts available</h3>
				)}
			</div>
			<Footer />
		</>
	)
}

export default Blog
