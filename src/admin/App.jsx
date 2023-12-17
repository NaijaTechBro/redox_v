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
import Posts from './pages/Posts/Posts'
import Categories from './pages/Categories/Categories';
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
            <Route path='/' element={<Dashboard sideMenuOpen={sideMenuOpen} />}/>
            <Route path='/activities' element={<Activities sideMenuOpen={sideMenuOpen} />}/>
            <Route path='/alladmins' element={<AllAdmin sideMenuOpen={sideMenuOpen} />}/>
            <Route path='/allusers' element={<AllUsers sideMenuOpen={sideMenuOpen} />}/>
            <Route path='/posts' element={<Posts sideMenuOpen={sideMenuOpen} />}/>
            <Route path='/categories' element={<Categories sideMenuOpen={sideMenuOpen} />}/>
            <Route path='/coupons' element={<Coupons sideMenuOpen={sideMenuOpen} />}/>
            <Route path='/courses' element={<Courses sideMenuOpen={sideMenuOpen} />}/>
            <Route path='/paymenthistory' element={<PaymentHistory sideMenuOpen={sideMenuOpen} />}/>
            <Route path='/settings' element={<Settings sideMenuOpen={sideMenuOpen} />}/>
            <Route path='/*' element={<NotFound />}/>
          </Routes>
      </div>
      {/* <Footer/> */}
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
