import { useContext, useEffect, useState } from "react"
import Footer from "../../components/Layout/Footer/Footer"
import Navbar from "../../components/Layout/Navbar/Navbar"
import { ImCross } from "react-icons/im"
import { useParams } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import "./post.css"
import usePostContext from "../../context/post/usePostContext"

const EditPost = () => {
  const { errorMsg, handleFetchPost, handleEditPost } = usePostContext()
  const postId = useParams().id
  const { user } = useContext(UserContext)
  const [displayTitle, setDisplayTitle] = useState("")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState("")
  const [cats, setCats] = useState([])

  const fetchPost = async () => {
    await handleFetchPost(postId)
      .then((post) => {
        setDisplayTitle(post.title)
        setTitle(post.title)
        setDesc(post.desc)
        setCats(post.categories)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const post = {
      title,
      desc,
      username: user.username,
      userId: user.user._id,
      categories: cats,
    }

    await handleEditPost(post, file, postId)
  }

  useEffect(() => {
    fetchPost()
  }, [postId])

  const deleteCategory = (i) => {
    let updatedCats = [...cats]
    updatedCats.splice(i)
    setCats(updatedCats)
  }

  const handleEnterKey = (e) => {
    if (e.key === `Enter`) {
      addCategory()
    }
  }

  const addCategory = () => {
    let updatedCats = [...cats]
    updatedCats.push(cat)
    setCat("")
    setCats(updatedCats)
  }

  return (
    <div>
      <Navbar />
      <div className="create">
        <form className="form-group">
          <h1>Update {displayTitle}</h1>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Enter post title" />
          </div>
          <div className="form-group">
            <label htmlFor="file">Add Image</label>
            <input onChange={(e) => setFile(e.target.files[0])} type="file" />
          </div>
          <div className="form-group">
            <div>
              <input value={cat} onChange={(e) => setCat(e.target.value)} onKeyDown={handleEnterKey} placeholder="Enter post category" type="text" />
              <div onClick={addCategory} className="add-category">
                Add
              </div>
            </div>

            {/* categories */}
            <div className="flex px-4 mt-3">
              {cats?.map((c, i) => (
                <div key={i} className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md">
                  <p className="color">{c}</p>
                  <p onClick={() => deleteCategory(i)} className="text-white bg-black rounded-full cursor-pointer p-1 text-sm">
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group">
            <textarea onChange={(e) => setDesc(e.target.value)} value={desc} rows={15} cols={30} placeholder="Enter post description" />
          </div>
          {errorMsg !== `` && <p className="error-msg">{errorMsg}</p>}
          <button onClick={handleUpdate}>Update</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default EditPost
