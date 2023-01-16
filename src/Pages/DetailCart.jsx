import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { getData } from "../api";
import Loading from "../Components/Spinner/Loading";
import { useStateContext } from "../Context/StateContextGlobal";

const DetailCart = () => {
  const { dispatch } = useStateContext();
  const { id } = useParams();
  const [product, setproduct] = useState();
  const [productcats, setproductcats] = useState();

  const getProductDetail = async () => {
    setproduct(await getData(`/products/${id}`));
  };

  const getProductbyCat = async () => {
    const data = await getData(`/products/category/${product?.category}`);
    const filterproduct = data?.filter((d) => d.id !== product.id);
    setproductcats(filterproduct);
  };

  useEffect(() => {
    getProductDetail();
    getProductbyCat();
  }, [productcats, product]);

  return (
    <>
      {product && productcats?.length > 0 ? (
        <div className="">
          <div className=" flex gap-5 items-start my-10">
            <img
              src={product?.image}
              className=" h-80 border-2 shadow-md p-5"
            />
            <div className=" flex flex-col gap-3 mt-5">
              <p className=" bg-secondary text-info rounded-full text-center w-52 px-3 py-1 capitalize">
                {product?.category}
              </p>
              <h1 className=" text-2xl font-semibold text-header ">
                {product?.title}
              </h1>
              <div className="">
                <p className=" text-header font-semibold">Description</p>
                <p className=" text-gray-500 tracking-wider leading-6 mt-1">
                  {product?.description}
                </p>
              </div>
              <p className=" flex items-center gap-2">
                <AiFillStar className=" text-yellow-400" />
                <small>( {product?.rating?.rate} )</small>
              </p>
              <p className=" text-header text-xl font-semibold">
                $ {product?.price}
              </p>
              <div className="">
                <button
                  onClick={() =>
                    dispatch({ type: "ADD-TO-CART", payload: product })
                  }
                  className=" w-40 py-2 text-white bg-info rounded transform transition hover:scale-90"
                >
                  Add to Cart
                </button>
                <Link to={"/success"}>
                  <button
                    onClick={() => dispatch({ type: "Cart-EMPTY" })}
                    className=" w-40 py-2 ml-3 text-white bg-header rounded transform transition hover:scale-90"
                  >
                    Buy now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className=" my-10">
            <h1 className=" text-2xl text-header font-semibold">
              You may also like
            </h1>
            <div className=" flex flex-wrap gap-7 my-10">
              {productcats?.map((item) => (
                <div onClick={() => setproduct(item)} key={item?.id}>
                  <img
                    src={item?.image}
                    className=" h-52 border-2 rounded shadow p-5"
                  />
                  <p className=" text-secondary font-semibold mt-2">
                    $ {item?.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DetailCart;
