import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const { cartItems } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item md={3} xs={12} key={product.id}>
          <ProductCard
            cartItem={cartItems.find((ci) => ci.product.id === product.id)}
            product={product}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
