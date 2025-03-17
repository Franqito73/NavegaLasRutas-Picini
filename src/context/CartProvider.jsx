import { CartContex } from "./CartContex"
import { useState } from "react"

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

        const clearCart = () => {
            setCart([])
        }


        const getTotal = () => {
            const prices = cart.map(product => product.price*product.quantity)
            const total = prices.reduce((acc, current) => acc + current, 0)
            
            return total
        }

        const removeFromCart = (productId) => {
            const updatedCart = cart.filter((item) => item.id !== productId)
            setCart(updatedCart)
          }
        
    return(
        <CartContex.Provider value={{addToCart, cart, getTotal, getQuantity, clearCart, removeFromCart}}>
            {children}
        </CartContex.Provider>
    )
}

export default CartProvider