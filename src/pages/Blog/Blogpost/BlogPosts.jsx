/* eslint-disable react/prop-types */
import { useContext } from "react"
import { UserContext } from "../../../context/UserContext"
import { FaRegUserCircle } from "react-icons/fa"
import Navbar from "../../../components/Layout/Navbar/Navbar"
import "./blogpost.css"

const BlogPosts = ({ post }) => {
  const { user } = useContext(UserContext)
  return (
    <>
      <Navbar />
      <div className="blogpost">
        {/* left */}
        <img src={post.image} alt="image" />
        {/* right */}
        <div className="blogtext">
          <h1>{post.title}</h1>
          <div className="bloginfo">
            <FaRegUserCircle src={user.photo} style={{ height: "40px", width: "30px" }} />
            <p className="blog-author">@{post.username}</p>
          </div>
          <div className="bloginfo">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
          <div className="blog-summary">{post.desc.slice(0, 200) + " ...Read more"}</div>
          <div className="blog-category-list">
            {post.categories?.map((c, i) => (
              <>
                <div key={i} className="blog-category-item">
                  {c}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPosts
