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
        <h3 className="font-semibold text-black">Sing Up</h3>
        <X
          onClick={onClose}
          className="absolute top-0 right-0 m-[1rem] text-black cursor-pointer"
        />
        {/* Add your login form or content here */}
      </div>
    </div>
  );
}
