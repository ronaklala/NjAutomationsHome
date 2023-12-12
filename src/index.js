import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Shop from "./components/Shop";
import SingleProduct from "./components/SingleProduct";
import Login from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import Orders from "./components/Orders";
import OurProducts from "./components/OurProducts";
import Services from "./components/Services";
import SingleService from "./components/SingleService";
import About from "./components/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} title="Home" />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/:id/order/success" element={<OrderSuccess />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Our-Products" element={<OurProducts />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Service/:id" element={<SingleService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
