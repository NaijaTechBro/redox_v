import React from "react";
import "./Loader.scss";
import loaderImg from "../../assets/loader.gif";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>
  );
};

export const Spinner = () => {
  return (
    <div className="--center-all">
      <img src={loaderImg} alt="Loading..." />
    </div>
  );
};

export default Loader;
