import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  
  
  const linkStyle = {
    color: '#ff5f00',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none'
  };

  return (
    <div className="dropdown">
      <a>
        <Link style={linkStyle} to='/'>Home</Link>
      </a>
    </div>
  );
};

export default Home;
