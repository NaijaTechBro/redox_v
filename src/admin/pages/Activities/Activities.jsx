import React from 'react'
import AvatarImg from '../../assets/AVATAR.png'
import './Activities.css'

const Activities = () => {
  return (
    <section className='admin--activities'>
      <h2>My Activities</h2>
      <main>
        <article className='activity'>
          <div className="admin--details">
            <img src={AvatarImg} alt="" />
            <div>
              <h5>Praise Dominic</h5>
              <p>You just created an invoice</p>
            </div>
          </div>
          <p>07-07-2022</p>
        </article>
        <article className='activity'>
          <div className="admin--details">
            <img src={AvatarImg} alt="" />
            <div>
              <h5>Praise Dominic</h5>
              <p>You just created an invoice</p>
            </div>
          </div>
          <p>07-07-2022</p>
        </article>
      </main>
    </section>
  )
}

export default Activities