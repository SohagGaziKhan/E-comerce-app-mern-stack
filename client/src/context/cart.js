import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    let exitsingCartItem = localStorage.getItem("cart");
    if (exitsingCartItem) setCart(JSON.parse(exitsingCartItem));
  }, []);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook
const useCart = () => useContext(CartContext);
// costom hook ye alwase use korta hoba
export { useCart, CartProvider };
