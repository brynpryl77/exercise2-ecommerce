import { createContext, useState } from "react";
import { PRODUCTS_DATA } from "../data/products";

export const ProductContext = createContext({
  products: [],
  onDeleteProduct: () => {},
  onEditProduct: () => {},
  onAddProduct: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleAddProduct = (product) => {
    setProducts([...products, { ...product, id: products.length * 999 + 1 }]);
  };

  const handleEditProduct = (id, product) => {
    setProducts(
      products.map((p) => {
        if (p.id === id) {
          return {
            ...product,
            id,
          };
        }
        return p;
      })
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        onDeleteProduct: handleDeleteProduct,
        onEditProduct: handleEditProduct,
        onAddProduct: handleAddProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
