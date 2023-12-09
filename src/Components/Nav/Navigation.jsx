import React, { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import Login from "../Profile/Login";
import SignUp from "../Profile/SignUp";
import { CircleUserRound } from "lucide-react";
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false); //just for reference not the entier logic
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [token, setToken] = useState(null);

  const handleAuthSuccess = (newToken) => {
    // Update the token in the state when login is successful
    if (newToken) {
      setToken(newToken);
    }
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("tokenUserObject");
    if (storedToken) {
      setToken(JSON.stringify(storedToken));
    }
  });

  return (
    <div className="fixed flex items-center justify-between top-0 left-0 w-full h-[13vh] p-5 bg-[#FF8C8C]">
      <h1>Navigation</h1>
      {token ? (
        <CircleUserRound className="text-white w-[30px] mr-[1rem]" />
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
            onSuccess={handleAuthSuccess}
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
            onSuccess={handleAuthSuccess}
          />
        </div>
      )}
    </div>
  );
}
