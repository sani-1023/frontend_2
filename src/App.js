import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import webfont from "webfontloader";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails";
import LogInSignUp from "./component/User/logInSignUp";
import Cart  from "./component/Cart/Cart"
import Profile from "./component/User/profile"
import Shipping from "./component/Cart/Shipping"
import ConfirmOrder from "./component/Cart/ConfirmOrder.js"

import Payment from "./component/Cart/Payment.js"
import Admin from "./component/Admin/Admin"
import Supplier from "./component/Supplier/Supplier";




function App() {
  React.useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Droid Sans"],
      },
    });
  }, []);

  return (
    <Router>
      

      
      <Routes>
       
        <Route exact path="/" element={<Home />} />
        <Route exact path="/image" element={<Image />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/login" element={<LogInSignUp />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/confirmOrder" element={<ConfirmOrder />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/admin" element={<Admin/>} />
        <Route exact path="/supplier" element={<Supplier/>} />


      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
