import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  onAddToCart: () => {},
  onRemoveFromCart: () => {},
  cartItemsCount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // [{product, quantity}]

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
  return (
    <CartContext.Provider
      value={{
        cartItems,
        onAddToCart: handleAddToCart,
        onRemoveFromCart: handleRemoveFromCart,
        cartItemsCount: cartItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
