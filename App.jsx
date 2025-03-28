import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";


const App = () => {
  const [showLogin, setShowLogin] = useState(false);


  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>} 
      <div className="App">
       <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Footer/>
    
    </>
  );
};

export default App;
