import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className=" flex justify-center items-center mt-20">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default Loading;
