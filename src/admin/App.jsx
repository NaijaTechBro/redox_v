// src/Admin/App.jsx
import React, {useState, useEffect} from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

// PAGES
import Activities from './pages/Activities/Activities'
import AllAdmin from './pages/AllAdmin/AllAdmin'
import AllUsers from './pages/AllUsers/AllUsers'
import Coupons from './pages/Coupons/Coupons'
import Courses from './pages/Courses/Courses'
import Dashboard from './pages/Dashboard/Dashboard'
import PaymentHistory from './pages/PaymentHistory/PaymentHistory'
import Settings from './pages/Settings/Settings'
import NotFound from './components/Error/NotFound'
import './App.css'

const App = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen}/>
      <div className='admin--layout--div'>
        <Sidebar sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen}/>
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/activities' element={<Activities />}/>
            <Route path='/alladmins' element={<AllAdmin />}/>
            <Route path='/allusers' element={<AllUsers />}/>
            <Route path='/coupons' element={<Coupons />}/>
            <Route path='/courses' element={<Courses />}/>
            <Route path='/paymenthistory' element={<PaymentHistory />}/>
            <Route path='/settings' element={<Settings />}/>
            <Route path='/*' element={<NotFound />}/>
          </Routes>
      </div>
      {/* <Footer/> */}
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
