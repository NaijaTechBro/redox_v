import React, { useState } from 'react'
import { IoMdAlarm } from "react-icons/io"
import { PiLinkSimple } from "react-icons/pi"
import { IoPersonCircleOutline } from "react-icons/io5"
import { BiBookBookmark } from "react-icons/bi"
import { MdOutlineImportantDevices } from "react-icons/md";
import { PiMedal } from "react-icons/pi";
import InstructorDP from '../../assets/instructordp.png'
import Overview from './components/overview'
import Curriculum from './components/curriculum'
import Instructor from './components/instructor'
import QA from './components/qa'
import './index.css'

const CourseDetails = () => {

  const [specificScreen, setSpecificScreen] = useState('Overview')

  return (
    <section className='course--details'>
      <div className="top--details">
        <div>
          <img src={InstructorDP} alt="" />
          <span>
            <h6>Instructor Name</h6>
            <p>Fantom</p>
          </span>
        </div>
        <div>
          <span>
            <h6>Category</h6>
            <p>Cryptocurrency</p>
          </span>
        </div>
        <div>
          <span>
            <h6>Reviews</h6>
            <p>{`4.0 (287 ratings)`}</p>
          </span>
        </div>
      </div>
      <div className="bottom--details">
        <main>
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1"></iframe>
          <div className="course--specifics">
          <ul>
            <li onClick={() => setSpecificScreen('Overview')} className={specificScreen == 'Overview' ? 'active--modal' : ''}>Overview</li>
            <li onClick={() => setSpecificScreen('Curriculum')} className={specificScreen == 'Curriculum' ? 'active--modal' : ''}>Curriculum</li>
            <li onClick={() => setSpecificScreen('Instructor')} className={specificScreen == 'Instructor' ? 'active--modal' : ''}>Instructor</li>
            <li onClick={() => setSpecificScreen('QA')} className={specificScreen == 'QA' ? 'active--modal' : ''}>Q/A</li>
          </ul>
          { specificScreen == 'Overview' && <Overview/>}
          { specificScreen == 'Curriculum' && <Curriculum/>}
          { specificScreen == 'Instructor' && <Instructor/>}
          { specificScreen == 'QA' && <QA/>}
          </div>
        </main>
        <aside>
          <h3>₦5,000</h3>
          <button>Add To Cart</button>
          <button>Buy Now</button>
          <div>
            <h5>This course includes:</h5> 
            <span><IoMdAlarm /><p>Duration 5H</p></span>
            <span><PiLinkSimple /><p>Skill Level Intermediate</p></span>
            <span><BiBookBookmark/><p>Lectures 7 lessons</p></span>
            <span><IoPersonCircleOutline /><p>Enrolled 3 students</p></span>
            <span><MdOutlineImportantDevices /><p>Certificate of completion</p></span>
            <span><PiMedal /><p>Lifetime access</p></span>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default CourseDetails