import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {

  const buttonStyle = {
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
      <Link style={buttonStyle} to='/blog'>Blog</Link>
      </a>
    </div>
  );
};

export default Blog;
