import React from 'react'
import InstructorDp from '../../../assets/instructordp2.png'
import { IoIosStarOutline } from "react-icons/io"
import { MdOutlineSpeakerNotes } from "react-icons/md"
import { IoPersonCircleOutline } from "react-icons/io5"
import { BiBookBookmark } from "react-icons/bi"

const Instructor = () => {
  return (
    <div className='course--specific--instructor'>
      <h3>Instructor</h3>
      <section>
        <img src={InstructorDp} alt="" />
        <div>
          <h4>Fantom</h4>
          <p>Crypto Instructor</p>
          <span><IoIosStarOutline/><p>4.9 Rating</p></span>
          <span><MdOutlineSpeakerNotes/><p>7 Reviews</p></span>
          <span><IoPersonCircleOutline /><p>14 Students</p></span>
          <span><BiBookBookmark/><p>9 Courses</p></span>
        </div>
      </section>
      <p>Nam mollis, elit et faucibus pulvinar, tellus dolor tristique nibh, quis tincidunt mauris quam viverra felis. Morbi vehicula velit mi, molestie ullamcorper dolor rhoncus laoreet. Vivamus pulvinar faucibus nisi, vitae euismod quam suscipit id. Vivamus suscipit ligula et tortor eleifend, sit amet auctor risus iaculis Vestibulum nisl magna, cursus eget maximus id, sollicitudin in dolor. Duis sed augue quis neque auctor lobortis. Proin pretium mauris lacus, quis vulputate lorem vulputate id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In tortor erat, sagittis id tempor quis, pharetra nec leo.</p>
    </div>
  )
}

export default Instructor