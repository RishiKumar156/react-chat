import React from "react";

export default function DialogBox({ isOpen, onClose, data }) {
  if (!isOpen) return null;
  return (
    <div
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      className="w-full h-screen fixed top-0 left-0 flex items-center justify-center"
    >
      <div className="flex w-[80%] h-[70%] bg-white rounded-sm ">
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
