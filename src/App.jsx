import { useState } from "react";
import DialogBox from "./Components/DialogBox";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Nav/Navigation";

export default function App() {
  const [Open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}> Open dialog</button>
      <DialogBox
        isOpen={Open}
        onClose={() => setOpen(false)}
        data={"Hello"}
      ></DialogBox>
    </>
  );
}
