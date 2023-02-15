import React from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const EditProductPage = ({ products, onEditProduct }) => {
  const params = useParams();

  const { id, title, description, price, quantityInStock, image } =
    products.find((product) => product.id === +params.id);

  const handleSubmit = (product) => {
    onEditProduct(id, product);
  };

  return (
    <ProductForm
      initialValue={{
        title,
        description,
        price,
        quantityInStock,
        image,
      }}
      onSubmit={(form) => handleSubmit(form)}
    />
  );
};

export default EditProductPage;
