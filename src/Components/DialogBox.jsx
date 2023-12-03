import React from "react";

export default function DialogBox({ isOpened, closed, data }) {
  return isOpened ? (
    <div>
      DialogBox
      <button onClick={closed}> close </button>
    </div>
  ) : null;
}
