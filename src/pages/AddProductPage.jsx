import React, { useContext } from "react";
import ProductForm from "../components/ProductForm";
import { ProductContext } from "../contexts/ProductContext";

const AddProductPage = () => {
  const { onAddProduct } = useContext(ProductContext);
  return <ProductForm onSubmit={onAddProduct} />;
};

export default AddProductPage;
