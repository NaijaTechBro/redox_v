import React from 'react'
import InstructorDp from '../../../assets/instructordp.png'
import { BiChevronRight } from 'react-icons/bi'

const QA = () => {
  return (
    <div className='course--specific--qa'>
      <section className="comment--list">
        <article>
          <img src={InstructorDp} alt="" />
          <div>
            <span>
              <h4>User's name</h4>
              <p>time stamp</p>
            </span>
            <p>Nam mollis, elit et faucibus pulvinar, tellus dolor ?</p>
          </div>
          <span>
            <p>Reply</p>
            <BiChevronRight/>
          </span>
        </article>
        <article>
          <img src={InstructorDp} alt="" />
          <div>
            <span>
              <h4>User's name</h4>
              <p>time stamp</p>
            </span>
            <p>Nam mollis, elit et faucibus pulvinar, tellus dolor tristique nibh, quis tincidunt mauris quam viverra felis. Morbi vehicula velit mi, molestie ullamcorper dolor rhoncus laoreet. Vivamus pulvinar faucibus nisi, vitae euismod quam suscipit id. Vivamus suscipit ligula et tortor eleifend, sit amet auctor risus iaculis Vestibulum nisl magna, cursus eget maximus id, sollicitudin in dolor.</p>
          </div>
          <span>
            <p>Reply</p>
            <BiChevronRight/>
          </span>
        </article>
      </section>
      <section className="new--comment">
        <h3>Leave a Question/Comment</h3>
        <textarea rows="7" placeholder='leave a question/comment'></textarea>
        <button>Question/Comment</button>
      </section>
    </div>
  )
}

export default QA