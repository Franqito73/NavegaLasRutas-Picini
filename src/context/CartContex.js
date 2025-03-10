import { createContext, useContext } from "react";

export const CartContex = createContext()

export const useCart = () => useContext (CartContex)
