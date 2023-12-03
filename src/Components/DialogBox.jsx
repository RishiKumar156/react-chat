import React from "react";

export default function DialogBox({ isOpened, closed, data }) {
  if (!isOpened) return null;
  return (
    <div>
      DialogBox
      <button onClick={closed}> close </button>
    </div>
  );
}
