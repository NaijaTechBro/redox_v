// src/Admin/App.jsx
import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import NotFound from './components/Error/NotFound'

const App = () => {

  return (
    <>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Navbar />}/>
          <Route exact path='/navbar' element={<Navbar />}/>
          <Route exact path='/footer' element={<Footer />}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
