import React from 'react';
import learn from '../../../assets/product/learn.svg'
import build from '../../../assets/product/build.png'
import interact from '../../../assets/product/interact.png'
import safe from '../../../assets/product/safe.png'

import './product.css'; 

const Product = () => {
  return (
    <>
        <div className="product_cards" id="product">
          <div className="cards_row">
            <div className="card" style={{ backgroundColor: "#FAFAFA" }}>
              <div className="content" style={{ color: "#413935", margin: "8rem" }}>
              <div className="image-container" style={{ backgroundColor: "#000", width: "150px", height: "150px",  borderRadius: "150px"}}>
                <img
                src={learn}
                alt=""
                style={{ width: "80px" , height: "80px", margin: "2rem", backgroundColor: "#fff", borderRadius: "50px"}}
                className="hmm"
              />
                </div>
                <h2 style={{ color: "#000", width: "180px"}}>Learn</h2>
                <p style={{ color: "#000", width: "200px"}}>
                Get the best upto course per content on every track you choose to learn from the best authors.
                </p>
              </div>
            </div>
            <div className="card" style={{ backgroundColor: "#000" }}>
              <div className="content" style={{ color: "#413935", margin: "8rem" }}>
              <div className="image-container" style={{ backgroundColor: "#FFF", width: "150px", height: "150px",  borderRadius: "150px"}}>
                <img
                src={interact}
                alt=""
                style={{ width: "80px" , height: "80px", margin: "2rem"}}
                className="hmm"
              />
                </div>
                <h2 style={{ color: "#fff"}}>Interact</h2>
                <p style={{ color: "#fff", width: "200px"}}>With a community of over 140,000 members you get first hand experience, knowledge on questions, how to do things and many more.
                </p>
              </div>
            </div>
          </div>
          <div className="cards_row">
          <div className="card" style={{ backgroundColor: "#000" }}>
              <div className="content" style={{ color: "#413935", margin: "8rem" }}>
              <div className="image-container" style={{ backgroundColor: "#FFF", width: "150px", height: "150px",  borderRadius: "150px"}}>
                <img
                src={build}
                alt=""
                style={{ width: "80px" , height: "80px", margin: "2rem"}}
                className="hmm"
              />
                </div>
                <h2 style={{ color: "#fff", width: "250px"}}>Build</h2>
                <p style={{ color: "#fff", width: "200px"}}>After Learning we allow you build real live product and your dream startup, with our "JUSTSHIPIT" featured product!
                </p>
              </div>
            </div>
            <div className="card" style={{ backgroundColor: "#FAFAFA" }}>
              <div className="content" style={{ color: "#413935", margin: "8rem", justifyContent: "center" }}>
              <div className="image-container" style={{ backgroundColor: "#000", width: "150px", height: "150px",  borderRadius: "150px"}}>
                <img
                src={safe}
                alt=""
                style={{ width: "80px" , height: "80px", margin: "2rem"}}
                className="hmm"
              />
                </div>
                <h2 style={{ color: "#000"}}>Safe</h2>
                <p style={{ color: "#000", width: "200px"}}>
                Pylearning is safe for learning as the content are upto standard. As a Learner we have in-built future to help you stay on track.
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Product;