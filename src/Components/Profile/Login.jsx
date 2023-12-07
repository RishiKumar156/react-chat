import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import enivronment from "../../Config";

export default function Login({ isOpen, onClose }) {
  const [userName, setuserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  if (!isOpen) return null;
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(userName);
      console.log(email);
      console.log(password);
      // const response = await axios.get(`${enivronment.api}`);
      // console.log(response);
    } catch (error) {
      console.log("Error occured in ", error);
    }
  };
  return (
    <div
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      className="w-full h-full fixed top-0 left-0 flex items-center justify-center"
    >
      <div className="w-[80%] md:w-[35%] h-[60%] relative bg-white rounded">
        <X
          onClick={onClose}
          className="absolute top-0 right-0 m-[1rem] text-black cursor-pointer"
        />
        <form
          onSubmit={loginHandler}
          className="flex flex-col h-full w-full items-center justify-center"
        >
          <h1 className="font-semibold text-2xl py-4">Login</h1>
          <p>To shop more on Ecommerce just Login </p>
          <div className="flex flex-col w-[60%] h-[58%] items-center justify-start mt-[1rem]">
            <input
              onChange={(e) => {
                setuserName(e.target.value);
              }}
              type="text"
              className="px-2 py-2 focus:no-underline m-2 w-full"
              placeholder="Username"
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              className="px-2 py-2 focus:no-underline m-2 w-full"
              placeholder="myemail@xyz.com"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="password"
              className="px-2 py-2 focus:no-underline m-2 w-full"
            />
            <button
              type="submit"
              className="text-white mt-4 mb-2 w-full bg-[#FF8C8C] font-semibold py-2 px-6 rounded-sm"
            >
              Login
            </button>
          </div>
          <p className="text-gray-600 text-xs">
            New to Ecommerce{" "}
            <a href="" className="text-sm text-[#FF8C8C] px-1">
              Sing Up
            </a>{" "}
            first.
          </p>
        </form>
        {/* Add your login form or content here */}
      </div>
    </div>
  );
}
