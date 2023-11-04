import { useContext, useEffect, useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import Footer from "../../components/Layout/Footer/Footer"
import Navbar from "../../components/Layout/Navbar/Navbar"
import { ImCross } from "react-icons/im"
import { useParams } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import "./post.css"
import usePostContext from "../../context/post/usePostContext"
import Imgplaceholder from "../../assets/imgplaceholder.png"
import TradingViewIcon from "../../assets/tradingview_icon.png"

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
  const [tradViewLink, setTradViewLink] = useState("")
  const [oldImageUrl, setOldImageUrl] = useState()
  const [newImageUrl, setNewImageUrl] = useState()
  const [editorHtml, setEditorHtml] = useState('')
  const [editorText, setEditorText] = useState('')

  const fetchPost = async () => {
    await handleFetchPost(postId)
      .then((post) => {
        console.log(post)
        setDisplayTitle(post.title)
        setTitle(post.title)
        setDesc(post.desc)
        setCats(post.categories)
        setTradViewLink(post.tradViewLink)
        setEditorText(post.editorText)
        setOldImageUrl(post.image)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const post = {
      title,
      // tradViewLink,
      desc: editorText,
      username: user.user.username,
      userId: user.user._id,
      categories: cats,
    }
    setFile(newImageUrl ? file : null)
    // console.log(file)
    // console.log(typeof file)

    await handleEditPost(post, file, postId)
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    
    setTitle(``)
    setDesc(``)
    setCat(``)
    setCats([])
    setEditorText(``)
    setTradViewLink(``)
    setFile(null)

    const post = {
      title,
      // tradViewLink,
      desc,
      editorText,
      username: user.username,
      userId: user._id,
      categories: cats,
    }
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
  
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setNewImageUrl(URL.createObjectURL(event.target.files[0]));
      setFile(event.target.files[0]);
    }
  };


  const handleEditorChange = (html) => {
    convertHtmlToPlainText(html);
    setEditorHtml(html);
  };

  function convertHtmlToPlainText(html) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;
  
    setEditorText(tempElement.textContent || tempElement.innerText || '');
    // console.log(editorText);
    return;
  }

  //specific styles for the editor
  const editorStyles = {
    width: '100%', // Set the width
    height: '300px', // Set the height
  };

  //modules for text formatting options
  const modules = {
    toolbar: [
      [{ 'align': 'left' }, { 'align': 'right' }, { 'align': 'center' }, { 'align': 'justify' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean']
    ],
  };
  

  return (
    <div>
      <Navbar />
      <div className="create">
        <h1 className="create__h1">Edit Analysis</h1>
        <form className="create__form">
          {!oldImageUrl ?
          <div className="create__form--image" onClick={() => document.getElementById('imageInput').click()}>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={onImageChange}
              style={{ display: 'none' }}
            />
            <img src={Imgplaceholder} alt="image placeholder" />
            <p>Add  Analysis cover Image</p>
          </div>
          :
          <div className="create__form--image" onClick={() => document.getElementById('imageInput').click()}>
            <input type="file" accept="image/*" id="imageInput" onChange={onImageChange} className="filetype" style={{ display: 'none' }}/>

            {oldImageUrl && <img src={newImageUrl ? newImageUrl : oldImageUrl} alt="preview image" style={{width: '852px', height: '400px'}}/>}
          </div>
          }
          <section className="create__form--section">
            <div>
              <label htmlFor="title">Title:</label>
              <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder={title} />
            </div>
            <div>
              <img src={TradingViewIcon} alt="" width={52} height={48} />
              <input onChange={(e) => setTradViewLink(e.target.value)} type="text" placeholder="Add Trading View Link" />
            </div>
            <div>
              <label htmlFor="desc">Description</label>
              <input onChange={(e) => setDesc(e.target.value)} type="text" placeholder="Enter description" />
            </div>
            <div>
              <label htmlFor="categories">Categories</label>
              <span>
                <input value={cat} onChange={(e) => setCat(e.target.value)} onKeyDown={handleEnterKey} placeholder="Enter Category" type="text" className="cat-input"/>
                <div onClick={addCategory} className="add-category">
                  Add
                </div>
              </span>

              <div className="create__form__section--categories">
                {cats?.map((c, i) => (
                  <div key={i}>
                    <p className="color">{c}</p>
                    <i onClick={() => deleteCategory(i)}>
                      <ImCross />
                    </i>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="file">Summary</label>
              <ReactQuill
                theme="snow"
                value={editorHtml}
                onChange={handleEditorChange}
                style={editorStyles} //styles
                modules={modules} //text formatting options
                placeholder="Enter analysis update..."
              />
            </div>
            {errorMsg !== `` && <p className="error-msg">{errorMsg}</p>}
            <button onClick={handleUpdate} className="update--button">Update</button>
            <button onClick={handleDelete} className="delete--button">Delete</button>
          </section>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default EditPost
