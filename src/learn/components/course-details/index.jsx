import React, { useState } from 'react'
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
          ASIDE CONTENT
        </aside>
      </div>
    </section>
  )
}

export default CourseDetails