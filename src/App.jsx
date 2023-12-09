import { useState } from "react";
import DialogBox from "./Components/DialogBox";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Nav/Navigation";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Components/Cart/Cart";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  );
}
