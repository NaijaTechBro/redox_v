import React, { useState, useEffect } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { ImCross } from "react-icons/im"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import Navbar from "../../components/Layout/Navbar/Navbar"
import Footer from "../../components/Layout/Footer/Footer"
import "./post.css"
import { convert } from "html-to-text"
import usePostContext from "../../context/post/usePostContext"
import Imgplaceholder from "../../assets/imgplaceholder.png"
import TradingViewIcon from "../../assets/tradingview_icon.png"
import axios from "axios"

const CreatePost = () => {
  const { errorMsg, handleCreatePost } = usePostContext()
  const { user } = useContext(UserContext)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState("")
  const [cats, setCats] = useState([])
  const [tradViewLink, setTradViewLink] = useState("")
  const [imageUrl, setImageUrl] = useState()
  const [editorHtml, setEditorHtml] = useState('')
  const [editorText, setEditorText] = useState('')

  const deleteCategory = (i) => {
    const updatedCats = cats.filter((_, index) => index !== i)
    setCats(updatedCats)
  }

  const handleEnterKey = (e) => {
    if (e.key === `Enter`) {
      addCategory()
    }
  }

  const addCategory = () => {
    const updatedCats = [...cats, cat]
    setCat("")
    setCats(updatedCats)
    console.log(user)
  }

  const handleCreate = async (e) => {
    e.preventDefault()


    const post = {
      title,
      // tradViewLink,
      desc: editorText,
      username: user.user.username,
      userId: user.user._id,
      categories: cats,
    }
    
    console.log(post, file)

    await handleCreatePost(post, file).then(() => {
      setTitle(``)
      setDesc(``)
      setCat(``)
      setCats([])
      setEditorText(``)
      setTradViewLink(``)
      setFile(null)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title:title,
      desc: editorText,
      username: user.user.username,
      userId: user.user._id,
      categories: cats,
    }

    axios.post('https://redoxv.onrender.com/api/posts/create', post)
      .then(response => {
        console.log('Response:', response.data);
        console.log(post);
      })
      .catch(error => {
        console.error('Error:', error);
        console.log(post);
        console.log(user.user);
      });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageUrl(URL.createObjectURL(event.target.files[0]));
      setFile(event.target.files[0]);
    }
    console.log(file)
  };


  const handleEditorChange = (html) => {
    convertHtmlToPlainText(html);
    setEditorHtml(html);
  };

  function convertHtmlToPlainText(html) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;
  
    setEditorText(tempElement.textContent || tempElement.innerText || '');
    console.log(editorText);
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
        <h1 className="create__h1">Create Analysis</h1>
        <form className="create__form">
          {!imageUrl ?
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

            {imageUrl && <img src={imageUrl} alt="preview image" style={{width: '852px', height: '400px'}}/>}
          </div>
          }
          <section className="create__form--section">
            <div>
              <label htmlFor="title">Title:</label>
              <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter title" />
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
                    {console.log(c)}
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
                placeholder="Give summary on analysis..."
              />
            </div>
            {errorMsg !== `` && <p className="error-msg">{errorMsg}</p>}
            <button onClick={handleCreate} className="create--button">Publish</button>
          </section>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default CreatePost
