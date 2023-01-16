import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useStateContext } from "../Context/StateContextGlobal";

const Card = ({ product }) => {
  const { dispatch } = useStateContext();
  return (
    <div className=" w-72 border-2 p-5 rounded-lg transform transition shadow hover:shadow-xl duration-500 hover:scale-105">
      <img src={product?.image} className=" mx-auto my-3 h-[200px]" />
      <h3 className="text-header font-bold tracking-wider truncate my-3">
        {product?.title}
      </h3>
      <div className=" flex items-center gap-1">
        <AiFillStar className=" text-yellow-400" />
        <small className=" font-semibold">( {product?.rating?.rate} )</small>
      </div>
      <p className=" my-3 text-xl">${product?.price}</p>
      <div className=" flex justify-between">
        <button
          onClick={() => dispatch({ type: "ADD-TO-CART", payload: product })}
          className=" text-primary bg-info px-5 py-2 transform transition hover:-translate-y-1 duration-1000 rounded shadow-md"
        >
          Add to Cart
        </button>
        <Link to={`/detail/${product.id}`}>
          <button className=" text-primary bg-header px-5 py-2 transform transition hover:-translate-y-1 duration-1000 rounded shadow-md">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
