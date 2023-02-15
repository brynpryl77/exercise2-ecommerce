import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CartSummary from "./components/CartSummary";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { PRODUCTS_DATA } from "./data/products";
import AddProductPage from "./pages/AddProductPage";
import AdminPage from "./pages/AdminPage";
import CartSummaryPage from "./pages/CartSummaryPage";
import EditProductPage from "./pages/EditProductPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const [cartItems, setCartItems] = useState([]);
  // [{product, quantity}]

  const [showCartSummary, setShowCartSummary] = useState(false);

  const handleAddToCart = (product) => {
    const cartItem = cartItems.find((ci) => ci.product.id === product.id);

    if (cartItem) {
      setCartItems(
        cartItems.map((ci) => {
          if (ci.product.id === product.id) {
            return {
              ...ci,
              quantity: ci.quantity + 1,
            };
          }
          return ci;
        })
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const cartItem = cartItems.find((ci) => ci.product.id === product.id);

    if (cartItem.quantity === 1) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.product.id !== product.id)
      );
    } else {
      setCartItems(
        cartItems.map((ci) => {
          if (ci.product.id === product.id) {
            return {
              ...ci,
              quantity: ci.quantity - 1,
            };
          }
          return ci;
        })
      );
    }
  };

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
    <>
      <CssBaseline />
      <Navbar
        showCartSummary={showCartSummary}
        cartItemsCount={cartItems.length}
      />
      <Container sx={{ marginTop: 3 }}>
        <Routes>
          <Route
            path="/"
            element={
              <ProductsPage
                cartItems={cartItems}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                products={products}
              />
            }
          />
          <Route
            path="/cart-summary"
            element={<CartSummaryPage cartItems={cartItems} />}
          />
          <Route
            path="/admin/products/new"
            element={<AddProductPage onAddProduct={handleAddProduct} />}
          />
          <Route
            path="/admin/products/:id/edit"
            element={
              <EditProductPage
                onEditProduct={handleEditProduct}
                products={products}
              />
            }
          />
          <Route
            path="/admin/products"
            element={
              <AdminPage
                onDeleteProduct={handleDeleteProduct}
                products={products}
              />
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
