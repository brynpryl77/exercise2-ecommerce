import React from "react";
import Products from "../components/Products";

const ProductsPage = ({
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  products,
}) => {
  return (
    <Products
      cartItems={cartItems}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
      products={products}
    />
  );
};

export default ProductsPage;
