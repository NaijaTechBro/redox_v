/* eslint-disable react/prop-types */
import {IF} from '../../../../url'
import './profilepost.css'

const ProfilePosts = ({p}) => {
  // console.log(p)
  return (
    <div className="post">
    {/* left */}
    <img src={IF+p.photo} alt="post-image"/>
    {/* right */}   
    <div className="posttext">
      <h1>
      {p.title}
      </h1>
      <div className="postinfo">
      <p className='post-author'>@{p.username}</p>
      <div >
      <p>{new Date(p.updatedAt).toString().slice(0,15)}</p>
      <p>{new Date(p.updatedAt).toString().slice(16,24)}</p>
      </div>
      </div>
      <p className="post-summary">{p.desc.slice(0,200)+" ...Read more"}</p>
    </div>

    </div>
  )
}

export default ProfilePosts