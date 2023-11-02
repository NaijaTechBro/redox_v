import axios from "axios"
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import { URL } from "../../../url"
import { useContext } from "react"
import { UserContext } from "../../../context/UserContext"
import './comment.css'

const Comment = ({c,post}) => {

  const {user}=useContext(UserContext)
  const deleteComment=async(id)=>{
    try{
      await axios.delete(URL+"/api/comments/"+id,{withCredentials:true})
      window.location.reload(true)
    }
    catch(err){
      console.log(err)
    }
  }
  // console.log(post.userId)
  // console.log(user._id)
  // console.log(post)
  // console.log(user)
  return (
    <div className="comment">
      <article className="comment__main">
        <p className="comment__text">{c.comment}</p>
        {user?._id===c?.userId ?
          <div className="delete__comment__div">
            <p className="cursor-pointer" onClick={()=>deleteComment(c._id)}><MdDelete/></p>
          </div>
        :
          ""
        }
      </article>
      <div className="comment__metadata">
        <div>
          <img src={c.photo} alt="" />
          {console.log(c)}
          <h3>@{c.author}</h3>
        </div>
        <div>
          <p>{new Date(c.updatedAt).toString().slice(0,15)}</p>
          <p>{new Date(c.updatedAt).toString().slice(16,24)}</p>
        </div>
      </div>
    </div>
  )
}

export default Comment