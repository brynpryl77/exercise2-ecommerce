import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products, onAddToCart, cartItems, onRemoveFromCart }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item md={3} xs={12} key={product.id}>
          <ProductCard
            cartItem={cartItems.find((ci) => ci.product.id === product.id)}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
            product={product}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
