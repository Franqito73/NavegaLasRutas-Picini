import { CartContex } from "./CartContex";
import { useState } from "react";

function CartProvider ({children}) {
    const [cart, setCart] = useState([])
    
    const addToCart = (product) => {
        const updatedCart = cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item)

            if (updatedCart.length === cart.length) {
                setCart([...cart, product]) 
            } 
            else {
                setCart(updatedCart)
            }
        } 

        const getQuantity = () => {
            const quantities = cart.map(product => product.quantity)
            const result = quantities.reduce((acc, current) => acc + current, 0)
            
            return result
        }
        
    return(
        <CartContex.Provider value={{addToCart, cart, getQuantity}}>
            {children}
        </CartContex.Provider>
    )
}

export default CartProvider