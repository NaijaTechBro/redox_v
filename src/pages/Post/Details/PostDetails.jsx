import { useNavigate, useParams } from "react-router-dom"
import Comment from "../comment/Comment"
import Footer from "../../../components/Layout/Footer/Footer"
import Navbar from "../../../components/Layout/Navbar/Navbar1"
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import axios from "axios"
import { URL } from "../../../url"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/UserContext"
import Loader from "../../../components/Loading/Loader"
import "./postdetails.css"

const PostDetails = () => {
  const postId = useParams().id
  const [post, setPost] = useState({})
  const { user } = useContext(UserContext)
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()

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
      const res = await axios.post(URL + "/api/comments/create", { comment: comment, author: user.username, postId: postId, userId: user._id }, { withCredentials: true })
      window.location.reload(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Navbar />
      {loader ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <div className="post-details-container">
          <img src={post.image} className="post-image" alt="" />
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
          <div className="post-info">
            <p>@{post.username}</p>
            <div className="post-date">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
            </div>
          </div>
          <p className="post-description">{post.desc}</p>
          <div className="post-categories">
            <p>Categories:</p>
            <div className="category-list">
              {post.categories?.map((c, i) => (
                <>
                  <div key={i} className="category-item">
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
          <div className="comment-input-section">
            <input onChange={(e) => setComment(e.target.value)} type="text" placeholder="Write a comment" className="comment-input" />
            <button onClick={postComment} className="comment-button">
              Add Comment
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default PostDetails