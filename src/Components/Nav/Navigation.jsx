import React, { useState } from "react";
import Profile from "../Profile/Profile";
import Login from "../Profile/Login";
import SignUp from "../Profile/SignUp";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  return (
    <div className="fixed flex items-center justify-between top-0 left-0 w-full h-[13vh] p-5 bg-[#FF8C8C]">
      <h1>Navigation</h1>
      {isOpen ? (
        <Profile />
      ) : (
        <div className="mr-[4rem]">
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
