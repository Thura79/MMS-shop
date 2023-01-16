import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../Context/StateContextGlobal";
import Cartitem from "./Cartitem";


const Cart = () => {
  const {state} = useStateContext();
  // const one = document.querySelector('.one');
  // console.dir(one.innerHTML);
  const [total, setTotal] = useState(0)
  const navigate = useNavigate();
  const handlecheck = () => {
    dispatch({ type: "Cart-EMPTY" });
    navigate("/success");
  };
// console.log(state);
  const {
    state: { cart },
    dispatch,
  } = useStateContext();

  const incPrice = (price) => {
    setTotal(total + price);
  }

  const decPrice = (price) => {
    setTotal(total - price);
  }

  useEffect(() => {
    setTotal(cart.reduce( (pv, cu) => pv + cu.price, 0 ));
    // decPrice()
  }, [])



  

  return (
    <>
      {cart.length > 0 ? (
        <div className=" flex  gap-10">
          <div className=" flex flex-col gap-5 flex-1">
            {cart?.map((item) => (
              <Cartitem key={item.id} incPrice={incPrice} decPrice={decPrice} item={item} />
            ))}
          </div>
          <div className="">
            <div className=" bg-primary shadow-lg h-[300px] w-96 rounded flex flex-col items-center justify-center">
              <h1 className=" text-3xl my-5">
                Total Price - $ {total.toFixed(2)}{" "}
              </h1>
              <button
                onClick={handlecheck}
                className="uppercase bg-info px-5 py-2 text-white rounded shadow"
              >
                Checkout
              </button>
            </div>
            <button
              onClick={() => dispatch({ type: "Cart-EMPTY" })}
              className=" mt-5 w-44 bg-danger px-5 py-2 text-white rounded shadow"
            >
              Cart Empty
            </button>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center animate__animated animate__backInDown">
          <div className=" bg-secondary p-20 my-10 rounded-lg text-center">
            <h1 className=" capitalize tracking-wider text-4xl mb-10 font-bold">
              Your Cart is empty
            </h1>
            <button
              onClick={() => navigate("/")}
              className=" bg-danger text-white px-5 py-2 rounded transform transition hover:scale-95 animate__delay-1s animate__animated animate__bounceInRight"
            >
              go to shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
