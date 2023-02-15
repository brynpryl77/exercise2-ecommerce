import { Button, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsList from "../components/ProductsList";
import { ProductContext } from "../contexts/ProductContext";

const AdminPage = () => {
  return (
    <Grid container justifyContent="flex-end" textAlign="right">
      <Grid item xs={12}>
        <Button LinkComponent={Link} to="/admin/products/new">
          Add Product
        </Button>
      </Grid>
      <Grid item xs={12}>
        <ProductsList />
      </Grid>
    </Grid>
  );
};

export default AdminPage;
