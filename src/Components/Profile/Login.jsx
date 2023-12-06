import React from "react";
import { X } from "lucide-react";

export default function Login({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      className="w-full h-full fixed top-0 left-0 flex items-center justify-center"
    >
      <div className="w-[80%] md:w-[35%] h-[65%] relative bg-white rounded">
        <X
          onClick={onClose}
          className="absolute top-0 right-0 m-[1rem] text-black cursor-pointer"
        />
        <form action=""></form>
        {/* Add your login form or content here */}
      </div>
    </div>
  );
}