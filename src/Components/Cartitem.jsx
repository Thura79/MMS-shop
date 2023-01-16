import React, { useState } from "react";
import { AiFillDelete, AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { useStateContext } from "../Context/StateContextGlobal";

const Cartitem = ({item, incPrice, decPrice}) => {
    const {dispatch} = useStateContext();
    const [qty, setQty] = useState(1);

    const inc = () => {
        setQty(pre => pre + 1);
        incPrice(item.price)
    }

    console.log(inc);

    const dec = () => {
        if(qty > 1) {
            setQty(pre => pre - 1)
            decPrice(item.price)
        }
    }

    const removehand = () => {
        dispatch({ type: "REMOVE-FROM-CART", payload: item });
        decPrice(item?.price * qty)
    }
  return (
    <div>
      <div  className=" border-2 rounded-lg shadow px-5 py-2">
        <div className=" flex items-center gap-5">
          <img src={item?.image} className="h-24 border rounded p-2" alt="" />
          <div className="">
            <h3 className=" font-bold">{item?.title}</h3>
            <p className=" text-xl my-2">$ {(item?.price * qty).toFixed(2)}</p>
            {/* <p >{item?.qty}</p> */}
            <div className=" flex items-center gap-3">
              <AiFillMinusSquare
                onClick={dec}
                className=" text-xl text-white bg-info"
              />
              <p className=" text-xl">{qty}</p>
              <AiFillPlusSquare
                onClick={ inc}
                className=" text-xl text-white bg-info"
              />
              <AiFillDelete
                onClick={() =>
                  removehand()
                }
                className=" text-danger"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
