import React, { useState } from "react";
import Profile from "../Profile/Profile";
import Login from "../Profile/Login";
import SignUp from "../Profile/SignUp";

export default function Navigation({ loggedIn }) {
  const [isOpen, setIsOpen] = useState(false); //just for reference not the entier logic
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  console.log(loggedIn);
  return (
    <div className="fixed flex items-center justify-between top-0 left-0 w-full h-[13vh] p-5 bg-[#FF8C8C]">
      <h1>Navigation</h1>
      {loggedIn ? (
        <Profile />
      ) : (
        <div className="mr-[0.3rem] md:mr-[2rem]">
          <button
            onClick={() => setLoginModalOpen(true)}
            className="text-[#FF8C8C] transition duration-300 hover:bg-[#FF8C8C]
            hover:text-white font-semibold text-sm py-2 px-6 bg-[white] mx-[0.5rem] rounded-sm"
          >
            Login
          </button>
          <Login
            isOpen={isLoginModalOpen}
            onClose={() => setLoginModalOpen(false)}
          />
          <button
            onClick={() => setSignUpModalOpen(true)}
            className="text-[#FF8C8C] transition duration-300 hover:bg-[#FF8C8C] hover:text-white font-semibold text-sm py-2 px-6 bg-[white] mx-[0.5rem] rounded-sm"
          >
            SignUp
          </button>
          <SignUp
            isOpen={isSignUpModalOpen}
            onClose={() => setSignUpModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
