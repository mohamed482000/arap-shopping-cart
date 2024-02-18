import React from "react";
import CartComponent from "../../Components/CartComponent/CartComponent";
import "./cart.css";
import CartInfo from "../../Components/CartComponent/CartInfo";

const Cart = () => {
  return (
    <div className="cart-page">
      <CartComponent />
      <CartInfo />
    </div>
  );
};

export default Cart;
