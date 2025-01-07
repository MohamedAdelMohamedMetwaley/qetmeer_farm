"use client";

import { createContext, useContext, useMemo, useState } from "react";

function numToArabic(number) {
  return number.toLocaleString("ar-EG").replace("٬", ",");
}

const CartContext = createContext();

function CartProvider({ children }) {
  const [location, setLocation] = useState({});
  const [address, setAddress] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(
    cartItems.reduce((total, item) => total + item.price * item.amount, 0)
  );
  // Carefull with this
  const totalDiscount = useMemo(
    () =>
      cartItems.reduce(
        (totalDiscount, item) => totalDiscount + item.discount * item.amount,
        0
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(cartItems)]
  );

  function addItemToCart(item) {
    setCartItems((prev) => [...prev, item]);
    increaseTotalPrice(item.price, item.amount);
  }

  function increaseTotalPrice(price, amount = 1) {
    setTotalPrice((prev) => prev + price * amount);
  }
  function decreaseTotalPrice(price, amount = 1) {
    setTotalPrice((prev) => prev - price * amount);
  }

  function getItem(id) {
    return cartItems.find((item) => item.id === id);
  }

  function deleteItem(id) {
    const item = getItem(id);
    setCartItems(cartItems.filter((item) => item.id !== id));
    decreaseTotalPrice(item.price, item.amount);
  }

  function increaseItemAmount(id) {
    const item = getItem(id);
    if (item) {
      item.amount += 1;
      increaseTotalPrice(item.price);
      return true;
    }

    return false;
  }

  function decreaseItemAmount(id) {
    const item = getItem(id);
    if (item && item.amount > 0) {
      item.amount -= 1;
      decreaseTotalPrice(item.price);
    }
    if (item.amount === 0) {
      deleteItem(id);
      return true;
    }

    return false;
  }

  // Derived state. These are the products that will actually be displayed
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItemToCart,
        increaseItemAmount,
        decreaseItemAmount,
        deleteItem,
        totalPrice,
        numToArabic,
        setTotalPrice,
        location,
        setLocation,
        address,
        setAddress,
        totalDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside of the ProductProvider");
  return context;
}

export { CartProvider, useCart };
