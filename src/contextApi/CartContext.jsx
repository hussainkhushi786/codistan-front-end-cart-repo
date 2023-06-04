import React, { createContext, useState } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(newItem) {
    const existingItem = cart.find((item) => item.Id === newItem.Id);
    if (existingItem) {
      const updatedCart = cart.map((item) => {
        if (item.Id === existingItem.Id) {
          return {
            ...item,
            count: item.count + 1,
            totalPrice: item.totalPrice + newItem.Price,
          };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const newCart = [...cart, { ...newItem, count: 1, Price: newItem.Price,totalPrice:newItem.Price }];
      setCart(newCart);
    }
  }

  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  function removeFromCart(itemToRemove) {
    console.log(itemToRemove)
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.Id === itemToRemove.Id);
      if (existingItem) {
        if (existingItem.count > 1) {
          return prevCart.map((item) => {
            if (item.Id === existingItem.Id) {
              return {
                ...item,
                count: item.count - 1,
                totalPrice: item.totalPrice - item.Price,
              };
            }
            return item;
          });
        } else {
          return prevCart.filter((item) => item.Id !== itemToRemove.Id);
        }
      }
      return prevCart;
    });
  }

  // Pass the cart state and functions to the context provider
  return (
    <CartContext.Provider value={{ cart, totalCount, totalPrice, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
