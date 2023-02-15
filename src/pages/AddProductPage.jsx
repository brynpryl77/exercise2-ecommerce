import React from "react";
import ProductForm from "../components/ProductForm";

const AddProductPage = ({ onAddProduct }) => {
  return <ProductForm onSubmit={onAddProduct} />;
};

export default AddProductPage;
