import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Items total (only products price)
  const itemsTotal = cart.reduce((sum, item) => sum + item.price, 0);

  // Delivery charge logic
  const deliveryCharge = cart.length > 0 ? 60 : 0;

  // Final total
  const totalPrice = itemsTotal + deliveryCharge;

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        itemsTotal,
        deliveryCharge,
        totalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);