import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import { BsBagCheck, BsBriefcaseFill, BsHouseFill, BsPencilSquare, BsPeopleFill, BsPersonCircle, BsReceipt, BsStopwatch } from 'react-icons/bs'
import { useTheme } from '../../../context/ThemeContext'

const Sidebar = ({sideMenuOpen, setSideMenuOpen}) => {
	const { darkMode, toggleTheme } = useTheme()

  return (<>
    <aside className={darkMode ? 'admin--sidebar dark_mode' : 'admin--sidebar'}>
      <div>
        <NavLink to="/admin" exact end activeClassName="active"><BsHouseFill/> Home</NavLink>
      </div>
      <div>
        <h3>Account</h3>
        <NavLink to="/admin/allusers" exact end activeClassName="active"><BsPersonCircle/> Users</NavLink>
        <NavLink to="/admin/alladmins" exact end activeClassName="active"><BsPeopleFill/> Admins</NavLink>
        <NavLink to="/admin/activities" exact end activeClassName="active"><BsBriefcaseFill/> Activities</NavLink>
      </div>
      <div>
        <h3>Market</h3>
        <NavLink to="/admin" exact end activeClassName="active"><BsStopwatch/> Posts</NavLink>
        <NavLink to="/admin" exact end activeClassName="active"><BsBriefcaseFill/> Category</NavLink>
      </div>
      <div>
        <h3>Learn</h3>
        <NavLink to="/admin/courses" exact end activeClassName="active"><BsBagCheck/> Course</NavLink>
        <NavLink to="/admin/coupons" exact end activeClassName="active"><BsReceipt/> Coupons</NavLink>
        <NavLink to="/admin/paymenthistory" exact end activeClassName="active"><BsPencilSquare/> Payment</NavLink>
      </div>
    </aside>
    {
      sideMenuOpen && 
      <aside className={darkMode ? 'admin--sidebar--mobile dark_mode' : 'admin--sidebar--mobile'}>
        <div>
          <NavLink to="/admin" exact end activeClassName="active"><BsHouseFill/> Home</NavLink>
        </div>
        <div>
          <h3>Account</h3>
          <NavLink to="/admin/allusers" exact end activeClassName="active"><BsPersonCircle/> Users</NavLink>
          <NavLink to="/admin/alladmins" exact end activeClassName="active"><BsPeopleFill/> Admins</NavLink>
          <NavLink to="/admin/activities" exact end activeClassName="active"><BsBriefcaseFill/> Activities</NavLink>
        </div>
        <div>
          <h3>Market</h3>
          <NavLink to="/admin" exact end activeClassName="active"><BsStopwatch/> Posts</NavLink>
          <NavLink to="/admin" exact end activeClassName="active"><BsBriefcaseFill/> Category</NavLink>
        </div>
        <div>
          <h3>Learn</h3>
          <NavLink to="/admin/courses" exact end activeClassName="active"><BsBagCheck/> Course</NavLink>
          <NavLink to="/admin/coupons" exact end activeClassName="active"><BsReceipt/> Coupons</NavLink>
          <NavLink to="/admin/paymenthistory" exact end activeClassName="active"><BsPencilSquare/> Payment</NavLink>
        </div>
      </aside>
    }
  </>)
}

export default Sidebar