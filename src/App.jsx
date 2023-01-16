import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import "./index.css";
import DetailCart from "./Pages/DetailCart";
import Products from "./Pages/Products";
import Success from "./Pages/Success";
import 'animate.css'

const App = () => {
  return (
    <div className=" container mx-auto bg-primary">
      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/detail/:id" element={<DetailCart />} />
      </Routes>
    </div>
  );
};

export default App;
