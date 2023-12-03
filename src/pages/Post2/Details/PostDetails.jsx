import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { BiEdit } from "react-icons/bi"
import { BsBookmarkCheck, BsBookmarkCheckFill, BsThreeDotsVertical } from "react-icons/bs"
import { MdDelete } from "react-icons/md"
import { Link, useNavigate, useParams } from "react-router-dom"
import Footer from "../../../components/Layout/Footer/Footer"
import Navbar from "../../../components/Layout/Navbar/Navbar"
import Loader from "../../../components/Loading/Loader"
import { useTheme } from "../../../context/ThemeContext"
import { UserContext } from "../../../context/UserContext"
import { URL } from "../../../url"
import Comment from "../comment/Comment"
import "./postdetails.css"

const PostDetails = () => {
	const postTitle = useParams().title
	const [postId, setPostId] = useState(``)
	const [post, setPost] = useState({})
	const { user } = useContext(UserContext)
	const [comments, setComments] = useState([])
	const [comment, setComment] = useState("")
	const [loader, setLoader] = useState(false)
	const navigate = useNavigate()
	const [bookmarked, setBookmarked] = useState(true)
	const [followStatus, setFollowStatus] = useState(false)
	const [editMenu, setEditMenu] = useState(false)
	const [userID, setUserID] = useState(``)
	const { darkMode, toggleTheme } = useTheme()

	const fetchPostComments = async () => {
		setLoader(true)
		try {
			const res = await axios.get(URL + "/api/comments/post/" + postId)
			setComments(res.data)
			setLoader(false)
		} catch (err) {
			setLoader(false)
			console.log(err)
		}
	}

	const fetchPost = async () => {
		try {
			const res = await axios.get(`${URL}/api/posts`)
			const foundPost = res.data.posts.find(p => p.title.toLowerCase() === postTitle.toLowerCase())

			if (foundPost) {
				setPostId(foundPost._id)
				setPost(foundPost)
				setUserID(foundPost.userId)
				// await fetchPostComments()
			} else {
				// Handle the case where the post with the specified title is not found
				console.log("Post not found")
			}
		} catch (err) {
			console.log(err)
		}
	}

	const handleDeletePost = async () => {
		try {
			await axios.delete(URL + "/api/posts/" + postId, { withCredentials: true })
			navigate("/")
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		fetchPost()
	}, [postTitle])

	const postComment = async e => {
		e.preventDefault()
		try {
			await axios.post(URL + "/api/comments/create", { comment: comment, author: user.username, postId: postId, userId: user._id }, { withCredentials: true })
			window.location.reload(true)
		} catch (err) {
			console.log(err)
		}
	}

	const checkFollowed = async () => {
		if (user.following.includes(post.username)) {
			setFollowStatus(true)
		} else {
			setFollowStatus(false)
		}
	}
	// console.log(user)
	// useEffect(() => {
	//   checkFollowed()
	// }, [postId])

	const dispEditMenu = () => {
		setEditMenu(!editMenu)
	}

	return (
		<div className={darkMode ? "dark_mode" : ""}>
			<Navbar />
			{loader ? (
				<div className="loader-container">
					<Loader />
				</div>
			) : (
				<div className={darkMode ? "post__details__container dark_mode" : "post__details__container"}>
					<div className="post-details-header">
						<h1 className="post-title">{post.title}</h1>
						{/* {user?._id === post?.userId && (
							<div className="edit-delete-buttons">
								<p
									className="edit-button"
									onClick={() => navigate("/edit/" + postId)}>
									<BiEdit />
								</p>
								<p
									className="delete-button"
									onClick={handleDeletePost}>
									<MdDelete />
								</p>
							</div>
						)} */}
					</div>
					<div className="post__info">
						<div>
							<img
								src={user?.photo}
								alt=""
							/>
							<p>{user?._id == userID ? <>@{post.username}</> : <Link to={`/profile/${userID}`}>@{post.username}</Link>}</p>
						</div>
						<div className="post-date">
							<p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
							<p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
							{bookmarked ? <BsBookmarkCheckFill /> : <BsBookmarkCheck />}
							{/* {console.log(user, post)} */}
							{(user?._id === post?.userId) && (
								<span
									onClick={dispEditMenu}
									style={{ cursor: "pointer" }}>
									<BsThreeDotsVertical />
								</span>
							)}
							{editMenu && (
								<div className="edit-menu">
									<Link
										key={post._id}
										to={user ? `/edit/${post._id}` : "/login"}
										style={{ textDecoration: "none" }}>
										<BiEdit /> Edit
									</Link>
									<Link
										key={post._id}
										// to={user ? `/` : "/login"}
										onClick={handleDeletePost}
										style={{ textDecoration: "none" }}>
										<MdDelete /> Delete
									</Link>
								</div>
							)}
						</div>
					</div>
					<img
						src={post.image}
						className="post__image"
						alt=""
					/>
					<p className="post__description">{post.desc}</p>
					<div className="post__categories">
						<h3>Categories:</h3>
						<div className="category__list">
							{post.categories?.map((c, i) => (
								<div
									key={i}
									className="category__item">
									{c}
								</div>
							))}
						</div>
					</div>
					<div className="comments-section">
						<h3 className="comments-heading">Comments:</h3>
						{comments?.map(c => (
							<Comment
								key={c._id}
								c={c}
								post={post}
							/>
						))}
					</div>
					{/* write a comment */}
					<div className="comment__input__section">
						<input
							onChange={e => setComment(e.target.value)}
							type="text"
							placeholder="Add a comment"
							className="comment__input"
						/>
						<button
							onClick={postComment}
							className="comment__button">
							Send
						</button>
					</div>
				</div>
			)}
			<Footer />
		</div>
	)
}

export default PostDetails
