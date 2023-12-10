import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Cart } from "./Cart/Cart";
import axios from "axios";
import environment from "./../Config";
export default function DialogBox({ isOpen, onClose, data }) {
  if (!isOpen) return null;
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const postSelectedCartItem = async () => {
    const bk_obj = {
      userId: 56,
      img: data?.image,
      description: data?.description,
      price: data?.price,
      qty: 500,
    };
    console.log(bk_obj);
    const response = await axios.post(
      `${environment.api}/cart/createCart`,
      bk_obj
    );
    console.log(response);
  };
  return (
    <div
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      className="w-full h-screen fixed top-0 left-0 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col relative w-[80%] h-[70%] justify-center bg-white rounded-sm p-4">
        <div className="flex w-full h-full items-center justify-between">
          <div className="flex w-[50%] md:w-[30%] flex-col">
            <img src={data?.image} className="object-cover p-4" alt="" />
          </div>
          <div className="flex justify-center w-full h-full flex-col  ml-[1rem] md:ml-[4rem]">
            <h2 className="font-bold py-2 text-xl capitalize">
              {data?.category}
            </h2>
            <h3 className="font-semibold text-[1rem] md:text-xl">
              {data?.title}
            </h3>
            <p className="text-xs p-[1rem] pl-[0] md:text-sm md:py-2">
              {truncateString(data?.description, 350)}
            </p>
            <div className="flex items-evenly">
              <span className="flex items-center text-xs md:text-sm p-1">
                <span className="font-semibold">Price : </span> {data?.price},
              </span>
              <span className="flex items-center text-xs md:text-sm p-1">
                <span className="font-semibold">Available: </span>
                {data?.rating.count},
              </span>
              <span className="flex items-center text-xs md:text-sm p-1">
                <span className="font-semibold">Rating ~ </span>
                {data?.rating.rate}.
              </span>
            </div>
            <div className="flex items-center justify-between w-full md:w-[30%] mt-4">
              <button className="bg-[#FF8C8C] text-white px-4 md:px-6 md:py-2  py-1 rounded-sm ">
                Buy Now
              </button>
              <button
                onClick={postSelectedCartItem}
                className="bg-[#FF8C8C] text-white px-4 md:px-6 md:py-2 py-1 rounded-sm "
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <X
          onClick={onClose}
          className="absolute top-0 right-0 m-[1rem] text-black cursor-pointer"
        />
      </div>
    </div>
  );
}
