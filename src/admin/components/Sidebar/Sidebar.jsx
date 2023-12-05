import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className='admin--sidebar'>
      <div>
        <a href="/admin">Home</a>
      </div>
      <div>
        <h3>Account</h3>
        <a href="/admin/allusers">Users</a>
        <a href="/admin/alladmins">Admins</a>
        <a href="/admin/activities">Activities</a>
      </div>
      <div>
        <h3>Market</h3>
        <a href="/admin">Posts</a>
        <a href="/admin">Category</a>
      </div>
      <div>
        <h3>Learn</h3>
        <a href="/admin/courses">Course</a>
        <a href="/admin/coupons">Coupons</a>
        <a href="/admin/paymenthistory">Payment</a>
      </div>
    </aside>
  )
}

export default Sidebar