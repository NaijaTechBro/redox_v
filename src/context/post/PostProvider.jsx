import axios from "axios"
import { PostContext } from "./PostContext"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { URL } from "../../url"

const PostProvider = (props) => {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState(``)
  const [posts, setPosts] = useState([])
  const [postSearch, setPostSearch] = useState([])

  useEffect(() => {
    setTimeout(() => setErrorMsg(``), 5000)
  }, [errorMsg])

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${URL}/api/posts`)
      setPosts(res.data.posts)
    } catch (err) {
      // console.log(err)
      setErrorMsg(err.message)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleFetchPost = async (postId) => {
    try {
      const res = await axios.get(`${URL}/api/posts/${postId}`)
      setPosts(res.data)
      return res.data
    } catch (err) {
      // console.log(err)
    }
  }

  const handleSearch = async (postTitle) => {
    let newPosts
    await axios.get(`${URL}/api/posts`).then((res) => {
      newPosts = res.data.posts.filter((post) => post.title.toLowerCase().includes(postTitle.toLowerCase()))
    })
    setPostSearch(newPosts)
  }

  const handleCreatePost = async (params, file) => {
    const formData = new FormData()
    formData.append("image", file)

    await axios
      .post(`${URL}/api/posts/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem(`t`))}`,
        },
      })
      .then(async (res) => {
        params.image = res.data.data.url
        await axios
          .post(`${URL}/api/posts/create`, params, {
            withCredentials: true,
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem(`t`))}`,
          })
          .then((res) => {
            navigate(`/posts/post/${res.data._id}`)
          })
          .catch((err) => {
            // console.log(err)
            setErrorMsg(err.message)
          })
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error uploading image:", error)
        setErrorMsg(err.message)
      })
  }

  const handleEditPost = async (params, file, postId) => {
    const formData = new FormData()
    formData.append("image", file)

    await axios
      .post(`${URL}/api/posts/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem(`t`))}`,
        },
      })
      .then(async (res) => {
        params.image = res.data.data.url
        await axios
          .post(`${URL}/api/posts/${postId}`, params, {
            withCredentials: true,
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem(`t`))}`,
          })
          .then((res) => {
            navigate(`/posts/post/${res.data._id}`)
          })
          .catch((err) => {
            // console.log(err)
            setErrorMsg(err.message)
          })
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error uploading image:", error)
        setErrorMsg(err.message)
      })
  }

  const providerValues = { posts, postSearch, handleSearch, handleCreatePost, handleEditPost, handleFetchPost, errorMsg }

  return <PostContext.Provider value={providerValues}>{props.children}</PostContext.Provider>
}

export default PostProvider
