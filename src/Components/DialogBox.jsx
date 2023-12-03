import React, { useState } from "react";

export default function DialogBox({ isOpened, closed, data }) {
  const [] = useState();
  const [] = useState();
  return (
    <div
      style={{ backgroundColor: "rgba(0,0,0,0.5" }}
      className="fixed top-0 left-o w-full h-screen flex items-center justify-center"
    >
      <div className="flex flex-col rounded-sm justify-center bg-white w-[80%] h-[80%]">
        <h1>{}</h1>
        <div className="flex w-[70%] h-[70%] bg-[#1a1a1a] rounded-sm"></div>
        <button className="bg-[#FF8C8C] px-8 rounded-sm py-2 text-white">
          Close
        </button>
      </div>
    </div>
  );
}
