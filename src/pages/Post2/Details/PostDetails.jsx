import { useNavigate, useParams } from "react-router-dom"
import Comment from "../comment/Comment"
import Footer from "../../../components/Layout/Footer/Footer"
import Navbar from "../../../components/Layout/Navbar/Navbar"
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import axios from "axios"
import { URL } from "../../../url"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/UserContext"
import Loader from "../../../components/Loading/Loader"
import "./postdetails.css"
import { BsBookmarkCheck } from "react-icons/bs"
import { BsBookmarkCheckFill } from "react-icons/bs"
import { BsThreeDotsVertical } from "react-icons/bs"
import { Link } from "react-router-dom"

const PostDetails = () => {
  const postId = useParams().id
  const [post, setPost] = useState({})
  const { user } = useContext(UserContext)
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()
  const [bookmarked, setBookmarked] = useState(true)
  const [followStatus, setFollowStatus] = useState(false)
  const [editMenu, setEditMenu] = useState(false)

  const fetchPost = async () => {
    try {
      const res = await axios.get(URL + "/api/posts/" + postId)
      // console.log(res.data)
      setPost(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeletePost = async () => {
    try {
      const res = await axios.delete(URL + "/api/posts/" + postId, { withCredentials: true })
      console.log(res.data)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPost()
  }, [postId])

  const fetchPostComments = async () => {
    setLoader(true)
    try {
      const res = await axios.get(URL + "/api/comments/post/" + postId)
      setComments(res.data)
      setLoader(false)
    } catch (err) {
      setLoader(true)
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPostComments()
  }, [postId])

  const postComment = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(URL + "/api/comments/create", { comment: comment, author: user.user.username, postId: postId, userId: user.user._id }, { withCredentials: true })
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
    <div>
      <Navbar />
      {loader ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <div className="post__details__container">
          <div className="post-details-header">
            <h1 className="post-title">{post.title}</h1>
            {user?._id === post?.userId && (
              <div className="edit-delete-buttons">
                <p className="edit-button" onClick={() => navigate("/edit/" + postId)}>
                  <BiEdit />
                </p>
                <p className="delete-button" onClick={handleDeletePost}>
                  <MdDelete />
                </p>
              </div>
            )}
          </div>
          <div className="post__info">
            <div>
              <img src={user?.user?.photo} alt="" />
              <p>@{post.username}</p>
            </div>
            <div className="post-date">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
              {bookmarked ? <BsBookmarkCheckFill/> : <BsBookmarkCheck/>}
              {(user?.user?._id === post?.userId) ? <span onClick={dispEditMenu} style={{cursor: "pointer"}}><BsThreeDotsVertical/></span> : ""}
              {editMenu &&
                <div className="edit-menu">
                  <Link key={post._id} to={user ? `/edit/${post._id}` : "/login"} style={{ textDecoration: "none" }}> Edit </Link>
                  <Link key={post._id} to={user ? `/blog` : "/login"} style={{ textDecoration: "none" }}> Delete </Link>
                </div>
              }
            </div>
          </div>
          <img src={post.image} className="post__image" alt="" />
          <p className="post__description">{post.desc}</p>
          <div className="post__categories">
            <h3>Categories:</h3>
            <div className="category__list">
              {post.categories?.map((c, i) => (
                <>
                  <div key={i} className="category__item">
                    {c}
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="comments-section">
            <h3 className="comments-heading">Comments:</h3>
            {comments?.map((c) => (
              <Comment key={c._id} c={c} post={post} />
            ))}
          </div>
          {/* write a comment */}
          <div className="comment__input__section">
            <input onChange={(e) => setComment(e.target.value)} type="text" placeholder="Add a comment" className="comment__input" />
            <button onClick={postComment} className="comment__button">
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