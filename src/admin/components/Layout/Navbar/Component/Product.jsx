import React from 'react';

const Product = () => {

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
      <a href='#product' style={linkStyle}>Products</a>
    </div>
  );
};

export default Product;
