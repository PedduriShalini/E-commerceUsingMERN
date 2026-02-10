import { createContext, useState } from "react";

// Create Cart Context
export const CartContext = createContext();

// Create Provider Component
export function CartProvider({ children }) {

  // Cart state (empty cart initially)
  const [cart, setCart] = useState([]);

  
  // ADD PRODUCT TO CART

  function addToCart(product) {
    setCart((oldCart) => {

      // check if product already exists in cart
      const productFound = oldCart.find(
        (item) => item.id === product.id
      );

      // if product already exists → increase quantity
      if (productFound) {
        return oldCart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }
          return item;
        });
      }

      // if product does NOT exist → add new product
      return [
        ...oldCart,
        {
          ...product,
          quantity: 1
        }
      ];
    });
  }

  
  // INCREASE QUANTITY

  function increment(id) {
    setCart((oldCart) => {
      return oldCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });
    });
  }

  
  // DECREASE QUANTITY

  function decrement(id) {
    setCart((oldCart) => {
      return oldCart
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1
            };
          }
          return item;
        })
        // remove item if quantity becomes 0
        .filter((item) => item.quantity > 0);
    });
  }

  
  // REMOVE ONE ITEM COMPLETELY

  function removeFromCart(id) {
    setCart((oldCart) => {
      return oldCart.filter((item) => item.id !== id);
    });
  }

  
  // CLEAR ENTIRE CART
 
  function clearCart() {
    setCart([]);
  }

  //  Provide values to all components
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increment,
        decrement,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
