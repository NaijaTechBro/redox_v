import React from 'react';
import phone from '../../../assets/equality.png'
import './join.css';
const Join = () => {

  return (
    <div className='join-start'>
      <div className="join-left">
        <h1>Join the Pylearn Community</h1>
        <p>Join our dynamic Python machine learning community to delve into the excitement of rapid data analysis and precise predictions, all guided by your favorite tech experts. When you become a member of pylearning, you open the door to a realm of user-friendly, secure, and affordable machine learning courses tailored exclusively for the Python machine learning community. Don't miss out on the adventure and countless opportunities – join us today!"</p>
        <button><a target="blank" href="https://t.me/pymachine">Join Our Community</a></button>
      </div>
      <div className="join-right">
          <img src={phone} alt='phone'/>
        </div>
    </div>
  );
};

export default Join;
