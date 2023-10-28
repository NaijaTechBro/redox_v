/* eslint-disable react/prop-types */
import "./blogpost.css"

const BlogPosts = ({ post }) => {
  return (
    <div className="blogpost">
      {/* left */}
      <img src={post.image} alt="image" />
      {/* right */}
      <div className="blogtext">
        <h1>{post.title}</h1>
        <div className="bloginfo">
          <p className="blog-author">@{post.username}</p>
          <div>
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <p className="blog-summary">{post.desc.slice(0, 200) + " ...Read more"}</p>
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
  )
}

export default BlogPosts
