import React from 'react';
import phone from '../../assets/error.png'
import './notfound.css';


const NotFound = ({sideMenuOpen}) => {

  return (
    <>
    <div className={sideMenuOpen ? 'notfound-start mobile--hidden' : 'notfound-start'}>
      <div className="notfound-left">
        <p>Oops!!!.</p>
        <h1>We couldn't find that page.</h1>
        <a href="/admin"><button>Back to Home</button></a>
      </div>
      <div className="notfound-right">
          <img src={phone} alt='phone'/>
        </div>
    </div>
    </>
  );
};

export default NotFound;
