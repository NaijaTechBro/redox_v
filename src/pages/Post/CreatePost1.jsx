import React, { useState } from "react"
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

const CreatePost = () => {
  const { errorMsg, handleCreatePost } = usePostContext()
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const { user } = useContext(UserContext)
  const [cat, setCat] = useState("")
  const [cats, setCats] = useState([])

  const deleteCategory = (i) => {
    let updatedCats = [...cats]
    updatedCats.splice(i)
    setCats(updatedCats)
  }

  const addCategory = () => {
    let updatedCats = [...cats]
    updatedCats.push(cat)
    setCat("")
    setCats(updatedCats)
  }

  const handleCreate = async (e) => {
    e.preventDefault()

    const post = {
      title,
      desc: convert(desc), // Convert HTML content to plain text
      username: "Jamin",
      userId: user.user._id,
      categories: cats,
    }

    await handleCreatePost(post, file)
  }

  return (
    <div>
      <Navbar />
      <div className="create">
        <form className="form-group">
          <h1>Write a post</h1>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter post title" />
          </div>
          <div className="form-group">
            <label htmlFor="file">Add Image</label>
            <input onChange={(e) => setFile(e.target.files[0])} accept="image/*" type="file" />
          </div>
          <div className="form-group">
            <div>
              <input value={cat} onChange={(e) => setCat(e.target.value)} placeholder="Enter post category" type="text" />
              <div onClick={addCategory} className="add-category">
                Add
              </div>
            </div>

            <div className="form-group">
              {cats?.map((c, i) => (
                <div key={i}>
                  <p className="color">{c}</p>
                  <p onClick={() => deleteCategory(i)}>
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group">
            <ReactQuill value={desc} onChange={setDesc} placeholder="Write post here" />
          </div>
          {errorMsg !== `` && <p className="error-msg">{errorMsg}</p>}
          <button onClick={handleCreate}>Create</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default CreatePost

// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import { ImCross } from 'react-icons/im';
// import { useContext } from 'react';
// import { UserContext } from '../../context/UserContext';
// import { URL } from '../../url';
// import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router-dom';
// import Navbar from '../../components/Layout/Navbar/Navbar'
// import Footer from '../../components/Layout/Footer/Footer'
// import './post.css';
// import { convert } from 'html-to-text';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');
//   const [image, setImage] = useState(null);
//   const { user } = useContext(UserContext);
//   const [cat, setCat] = useState('');
//   const [cats, setCats] = useState([]);

//   const navigate = useNavigate();

//   const deleteCategory = (i) => {
//     let updatedCats = [...cats];
//     updatedCats.splice(i);
//     setCats(updatedCats);
//   };

//   const addCategory = () => {
//     let updatedCats = [...cats];
//     updatedCats.push(cat);
//     setCat('');
//     setCats(updatedCats);
//   };

//   // handle image
//   const handleImageUpload = async (e) => {
//     try {
//       const formData = new FormData();
//       formData.append('image', e.target.files[0]);

//       const res = await axios.post(URL + '/api/posts/upload', formData, {
//         withCredentials: true,
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (res.data && res.data.imageUrl) {
//         setImage(res.data.imageUrl);
//       } else {
//         console.error('Image upload failed.');
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // handle create post
//   const handleCreate = async (e) => {
//     try {
//       e.preventDefault();
//       const post = {
//         title,
//         desc: convert(desc), // Convert HTML content to plain text
//         username: user.username,
//         userId: user._id,
//         categories: cats,
//         image,
//       };

//       const res = await axios.post(URL + '/api/posts/create', post, {
//         withCredentials: true,
//       });
//       navigate('/posts/post/' + res.data._id);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="create">
//         <form className="form-group">
//           <h1>Write a post</h1>
//           <div className="form-group">
//             <label htmlFor="title">Title:</label>
//             <input
//               onChange={(e) => setTitle(e.target.value)}
//               type="text"
//               placeholder="Enter post title"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="file">Add Image</label>
//             <input
//               onChange={handleImageUpload}
//               accept='image/*'
//               type="file"
//             />
//           </div>
//           <div className="form-group">
//             <div>
//               <input
//                 value={cat}
//                 onChange={(e) => setCat(e.target.value)}
//                 placeholder="Enter post category"
//                 type="text"
//               />
//               <div onClick={addCategory} className="add-category">
//                 Add
//               </div>
//             </div>

//             <div className="form-group">
//               {cats?.map((c, i) => (
//                 <div key={i}>
//                   <p className="color">{c}</p>
//                   <p onClick={() => deleteCategory(i)}><ImCross /></p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="form-group">
//             <ReactQuill
//               value={desc}
//               onChange={setDesc}
//               placeholder="Write post here"
//             />
//           </div>
//           <button onClick={handleCreate}>Create</button>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CreatePost;

// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import { ImCross } from 'react-icons/im';
// import { useContext } from 'react';
// import { UserContext } from '../../context/UserContext';
// import { URL } from '../../url';
// import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router-dom';
// import Navbar from '../../components/Layout/Navbar/Navbar'
// import Footer from '../../components/Layout/Footer/Footer'
// import './post.css';
// import { convert } from 'html-to-text';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');
//   const [file, setFile] = useState(null);
//   const { user } = useContext(UserContext);
//   const [cat, setCat] = useState('');
//   const [cats, setCats] = useState([]);

//   const navigate = useNavigate();

//   const deleteCategory = (i) => {
//     let updatedCats = [...cats];
//     updatedCats.splice(i);
//     setCats(updatedCats);
//   };

//   const addCategory = () => {
//     let updatedCats = [...cats];
//     updatedCats.push(cat);
//     setCat('');
//     setCats(updatedCats);
//   };

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     const post = {
//       title,
//       desc: convert(desc), // Convert HTML content to plain text
//       username: user.username,
//       userId: user._id,
//       categories: cats,
//     };

//     if (file) {
//       const data = new FormData();
//       const filename = Date.now() + file.name;
//       data.append('img', filename);
//       data.append('file', file);
//       post.photo = filename;
//       try {
//         const imgUpload = await axios.post(URL + '/api/upload', data);
//       } catch (err) {
//         console.log(err);
//       }
//     }

//     try {
//       const res = await axios.post(URL + '/api/posts/create', post, {
//         withCredentials: true,
//       });
//       navigate('/posts/post/' + res.data._id);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   export default function Upload() {
//     const [fileInputState, setFileInputState] = useState('');
//     const [previewSource, setPreviewSource] = useState('');
//     const [selectedFile, setSelectedFile] = useState();
//     const [successMsg, setSuccessMsg] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const handleFileInputChange = (e) => {
//         const file = e.target.files[0];
//         previewFile(file);
//         setSelectedFile(file);
//         setFileInputState(e.target.value);
//     };

//   const handleSubmitFile = (e) => {
//     e.preventDefault();
//     if (!selectedFile) return;
//     const reader = new FileReader();
//     reader.readAsDataURL(selectedFile);
//     reader.onloadend = () => {
//         uploadImage(reader.result);
//     };
//     reader.onerror = () => {
//         console.error('AHHHHHHHH!!');
//         setErrMsg('something went wrong!');
//     };
// };

//   // upload image
//   const uploadImage = async (base64EncodedImage) => {
//     try {
//         await fetch('/api/upload', {
//             method: 'POST',
//             body: JSON.stringify({ data: base64EncodedImage }),
//             headers: { 'Content-Type': 'application/json' },
//         });
//         setFileInputState('');
//         setPreviewSource('');
//         setSuccessMsg('Image uploaded successfully');
//     } catch (err) {
//         console.error(err);
//         setErrMsg('Something went wrong!');
//     }
// };

//   return (
//     <div>
//       <Navbar />
//       <div className="create">
//         <form className="form-group">
//           <h1>Write a post</h1>
//           <div className="form-group">
//             <label htmlFor="title">Title:</label>
//             <input
//               onChange={(e) => setTitle(e.target.value)}
//               type="text"
//               placeholder="Enter post title"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="file">Add Image</label>
//             <input
//                     id="fileInput"
//                     type="file"
//                     name="image"
//                     onChange={handleFileInputChange}
//                     value={fileInputState}
//                     className="form-input"
//                 />
//           </div>
//           <div className="form-group">
//             <div>
//               <input
//                 value={cat}
//                 onChange={(e) => setCat(e.target.value)}
//                 placeholder="Enter post category"
//                 type="text"
//               />
//               <div onClick={addCategory} className="add-category">
//                 Add
//               </div>
//             </div>

//             <div className="form-group">
//               {cats?.map((c, i) => (
//                 <div key={i}>
//                   <p className="color">{c}</p>
//                   <p onClick={() => deleteCategory(i)}><ImCross /></p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="form-group">
//             <ReactQuill
//               value={desc}
//               onChange={setDesc}
//               placeholder="Write post here"
//             />
//           </div>
//           <button onClick={handleCreate}>Create</button>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CreatePost;
