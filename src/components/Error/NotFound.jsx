import React from 'react';
import phone from '../../assets/error.png'
import './notfound.css';
import Footer from '../Layout/Footer/Footer';
const NotFound = () => {

  return (
    <>
    <div className='notfound-start'>
      <div className="notfound-left">
        <p>Oops!!!.</p>
        <h1>We couldn't find that page.</h1>
        <button><a target="blank" href="/">Back to Home</a></button>
      </div>
      <div className="notfound-right">
          <img src={phone} alt='phone'/>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default NotFound;
