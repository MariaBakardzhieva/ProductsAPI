import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

type CartProviderProps = {
  children: ReactNode;
};

type CartContextProps = {
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext({} as CartContextProps);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider value={{ openCart, closeCart }}>
      {children}
      <ShoppingCart isOpen={isOpen} />
    </CartContext.Provider>
  );
}
