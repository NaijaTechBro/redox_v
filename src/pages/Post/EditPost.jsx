import { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import Navbar from '../../components/Layout/Navbar/Navbar';
import { ImCross } from 'react-icons/im';
import axios from 'axios';
import { URL } from '../../url';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './post.css';

const EditPost = () => {
  const postId = useParams().id;
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState('');
  const [cats, setCats] = useState([]);

  const fetchPost = async () => {
    try {
      const res = await axios.get(URL + '/api/posts/' + postId);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setCats(res.data.categories);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
      username: user.username,
      userId: user._id,
      categories: cats,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('img', filename);
      data.append('file', file);
      post.photo = filename;
      try {
        const imgUpload = await axios.post(URL + '/api/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    
    try {
      const res = await axios.put(URL + '/api/posts/' + postId, post, { withCredentials: true });
      navigate('/posts/post/' + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i);
    setCats(updatedCats);
  };

  const addCategory = () => {
    let updatedCats = [...cats];
    updatedCats.push(cat);
    setCat('');
    setCats(updatedCats);
  };

  return (
    <div>
      <Navbar />
      <div className="create">
        <form className="form-group">
          <h1>Update a post</h1>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter post title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">Add Image</label>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
            />
          </div>
          <div className="form-group">
            <div>
              <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                placeholder="Enter post category"
                type="text"
              />
              <div onClick={addCategory} className="add-category">
                Add
              </div>
            </div>

            {/* categories */}
            <div className="flex px-4 mt-3">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
                >
                  <p className="color">{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                  >
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group">
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              rows={15}
              cols={30}
              placeholder="Enter post description"
            />
          </div>
          <button onClick={handleUpdate}>Update</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditPost;





// import { useContext, useEffect, useState } from "react"
// import Footer from "../../components/Layout/Footer/Footer"
// import Navbar from '../../components/Layout/Navbar/Navbar'
// import {ImCross} from 'react-icons/im'
// import axios from "axios"
// import { URL } from "../../url"
// import { useNavigate, useParams } from "react-router-dom"
// import { UserContext } from "../../context/UserContext"
// import './post.css'


// const EditPost = () => {

//     const postId=useParams().id
//     const {user}=useContext(UserContext)
//     const navigate=useNavigate()
//     const [title,setTitle]=useState("")
//     const [desc,setDesc]=useState("")
//     const [file,setFile]=useState(null)
//     const [cat,setCat]=useState("")
//     const [cats,setCats]=useState([])

//     const fetchPost=async()=>{
//       try{
//         const res=await axios.get(URL+"/api/posts/"+postId)
//         setTitle(res.data.title)
//         setDesc(res.data.desc)
//         setFile(res.data.photo)
//         setCats(res.data.categories)

//       }
//       catch(err){
//         console.log(err)
//       }
//     }

//     const handleUpdate=async (e)=>{
//       e.preventDefault()
//       const post={
//         title,
//         desc,
//         username:user.username,
//         userId:user._id,
//         categories:cats
//       }

//       if(file){
//         const data=new FormData()
//         const filename=Date.now()+file.name
//         data.append("img",filename)
//         data.append("file",file)
//         post.photo=filename
//         // console.log(data)
//         //img upload
//         try{
//           const imgUpload=await axios.post(URL+"/api/upload",data)
//           // console.log(imgUpload.data)
//         }
//         catch(err){
//           console.log(err)
//         }
//       }
//       //post upload
     
//       try{
//         const res=await axios.put(URL+"/api/posts/"+postId,post,{withCredentials:true})
//         navigate("/posts/post/"+res.data._id)
//         // console.log(res.data)

//       }
//       catch(err){
//         console.log(err)
//       }
//     }

    

//     useEffect(()=>{
//       fetchPost()
//     },[postId])

//     const deleteCategory=(i)=>{
//        let updatedCats=[...cats]
//        updatedCats.splice(i)
//        setCats(updatedCats)
//     }

//     const addCategory=()=>{
//         let updatedCats=[...cats]
//         updatedCats.push(cat)
//         setCat("")
//         setCats(updatedCats)
//     }
//   return (
//     <div>
//         <Navbar/>
//         <div className='create'>
//         <form className='form-group'>
//         <h1>Update a post</h1>
//           <div className="form-group">
//           <label htmlFor="title">Title:</label>
//           <input 
//             onChange={(e)=>setTitle(e.target.value)}
//             value={title} 
//             type="text" 
//             placeholder='Enter post title'/>
//           </div>
//           <div className="form-group">
//           <label htmlFor='file'>Add Image</label>
//           <input 
//           onChange={(e)=>setFile(e.target.files[0])} 
//           type="file" />
//           </div>
//           <div className='form-group'>
//             <div>
//                 <input 
//                 value={cat} onChange={(e)=>setCat(e.target.value)} 
//                 placeholder='Enter post category' 
//                 type="text"/>
//                 <div onClick={addCategory}className='add-category' >Add</div>
//             </div>

//             {/* categories */}
//             <div className='flex px-4 mt-3'>
//             {cats?.map((c,i)=>(
//                 <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
//                 <p className="color">{c}</p>
//                 <p onClick={()=>deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
//             </div>
//             ))}
            
            
//             </div>
//           </div>
//           <div className="form-group">
//             <textarea 
//             onChange={(e)=>setDesc(e.target.value)} 
//             value={desc} 
//             rows={15} 
//             cols={30} 
//             placeholder='Enter post description'/></div>
//           <button onClick={handleUpdate}>Update</button>
//         </form>

//         </div>
//         <Footer/>
//     </div>
//   )
// }

// export default EditPost