import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const AdminPage = ({ products, onDeleteProduct }) => {
  return (
    <Grid container justifyContent="flex-end" textAlign="right">
      <Grid item xs={12}>
        <Button LinkComponent={Link} to="/admin/products/new">
          Add Product
        </Button>
      </Grid>
      <Grid item xs={12}>
        <ProductsList onDeleteProduct={onDeleteProduct} products={products} />
      </Grid>
    </Grid>
  );
};

export default AdminPage;
