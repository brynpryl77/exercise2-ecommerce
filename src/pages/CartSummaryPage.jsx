import React from "react";
import CartSummary from "../components/CartSummary";

const CartSummaryPage = ({ cartItems }) => {
  return <CartSummary cartItems={cartItems} />;
};

export default CartSummaryPage;
