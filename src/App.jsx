import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import CartSummary from "./components/CartSummary";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { PRODUCTS_DATA } from "./data/products";

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

  const toggleCartSummary = () => {
    setShowCartSummary(!showCartSummary);
  };

  return (
    <>
      <CssBaseline />
      <Navbar
        showCartSummary={showCartSummary}
        cartItemsCount={cartItems.length}
        onToggleCartSummaryVisibility={toggleCartSummary}
      />
      <Container sx={{ marginTop: 3 }}>
        {showCartSummary ? (
          <CartSummary cartItems={cartItems} />
        ) : (
          <Products
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            products={products}
          />
        )}
      </Container>
    </>
  );
}

export default App;
