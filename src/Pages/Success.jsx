import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate()
  return (
    <div className=" flex justify-center animate__animated animate__backInDown">
      <div className=" bg-secondary p-20 my-10 rounded-lg text-center">
        <h1 className=" capitalize tracking-wider text-4xl text-white mb-10 font-bold">
          Thanks for purchasing
        </h1>
        <button onClick={() => navigate('/')} className=" bg-danger text-white px-5 py-2 rounded transform transition hover:scale-95 animate__delay-1s animate__animated animate__bounceInRight">
          go to shopping
        </button>
      </div>
    </div>
  );
};

export default Success;
