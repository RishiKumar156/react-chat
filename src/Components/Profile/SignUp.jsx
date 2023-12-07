import React from "react";
import { X } from "lucide-react";
export default function SignUp({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      className="w-full h-full fixed top-0 left-0 flex items-center justify-center"
    >
      <div className="w-[35%] h-[65%] relative bg-white rounded">
        <X
          onClick={onClose}
          className="absolute top-0 right-0 m-[1rem] text-black cursor-pointer"
        />
        <form className="flex flex-col h-full w-full items-center justify-center">
          <h1 className="font-semibold text-2xl py-4">Sing Up</h1>
          <p className="text-gray-600">
            Add your profile to keep the track of your purchases
          </p>
          <div className="flex flex-col w-[60%] h-[58%] items-center justify-start mt-[1rem]">
            <input
              type="text"
              className="px-2 py-2 m-2 w-full"
              placeholder="Username"
            />
            <input
              type="text"
              className="px-2 py-2 m-2 w-full"
              placeholder="myemail@xyz.com"
            />
            <input
              type="password"
              placeholder="password"
              className="px-2 py-2 m-2 w-full"
            />
            <button
              type="submit"
              className="text-white mt-4 mb-2 w-full bg-[#FF8C8C] font-semibold py-2 px-6 rounded-sm"
            >
              Sing Up
            </button>
          </div>
          <p className="text-gray-600 text-xs">
            Alredy have a profile at Ecommerce, Need to
            <a href="" className="text-sm text-[#FF8C8C] px-1">
              Login
            </a>
            ?.
          </p>
        </form>
        {/* Add your login form or content here */}
      </div>
    </div>
  );
}
