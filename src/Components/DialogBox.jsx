import React from "react";

export default function DialogBox({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  return (
    <div
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      className="w-full h-screen fixed top-0 left-0 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col w-[80%] h-[70%] bg-white rounded-sm p-4">
        <div className="flex w-full h-full items-center justify-between">
          <div className="flex w-[30%] flex-col">
            <img src={data?.image} className="object-cover p-4" alt="" />
          </div>
          <div className="flex w-full h-full flex-col justify-center ml-[4rem]">
            <h2 className="font-bold py-2 text-xl capitalize">
              {data?.category}
            </h2>
            <h3 className="font-semibold text-xl"> {data?.title} </h3>
            <p className="text-sm py-2"> {data?.description} </p>
            <div className="flex items-center">
              <span className="p-1"> Price : {data?.price}, </span>
              <span className="p-1">Available: {data?.rating.count},</span>
              <span className="p-1"> Rating ~ {data?.rating.rate}. </span>
            </div>
            <div className="flex items-center justify-between w-[30%] mt-4">
              <button className="bg-[#FF8C8C] text-white px-6 py-2 rounded-sm ">
                Buy Now
              </button>
              <button className="bg-[#FF8C8C] text-white px-6 py-2 rounded-sm ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <button
          className="absolute top-[33rem] right-[13rem] px-[2rem] py-[0.5rem] rounded-sm text-white bg-[#FF8C8C]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
