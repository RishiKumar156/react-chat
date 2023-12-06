import { useState } from "react";
import Profile from "../Profile/Profile";

export default function Navigation() {
  const [isOpen, setOff] = useState(false);
  return (
    <div className="fixed flex items-center justify-between top-0 left-0 w-full h-[13vh] p-5 bg-[#FF8C8C]">
      <h1>Navigation</h1>
      {isOpen ? (
        <Profile />
      ) : (
        <div className="mr-[4rem]">
          <button className="text-[#FF8C8C] transition duration-300 hover:bg-[#FF8C8C] hover:text-white font-semibold text-sm py-2 px-6 bg-[white] mx-[0.5rem] rounded-sm">
            Login
          </button>
          <button className="text-[#FF8C8C] transition duration-300 hover:bg-[#FF8C8C] hover:text-white font-semibold text-sm py-2 px-6 bg-[white] mx-[0.5rem] rounded-sm">
            SignUp
          </button>
        </div>
      )}
    </div>
  );
}
