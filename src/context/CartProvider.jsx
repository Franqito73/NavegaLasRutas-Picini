import { CartContext } from "./CartContex";
import { useState } from "react";

function CartProvider ({children}) {

    const [cart, setCart] = useState ([])
    const addToCart = (product) => {
        const productoExiste = cart.find(item => item.id === product.id);
        if (productoExiste){
            const updatedCart = cart.map(item => 
                item.id === product.id 
                ? { ...item, quantity: item.quantity + product.quantity } 
                : item
            );
            setCart(updatedCart);
            console.log("Producto actualizado en el carrito:", updatedCart);
        }
        else{
            const updatedCart = [...cart, product];
            setCart(updatedCart);
            console.log("Nuevo producto agregado al carrito:", updatedCart);
        }
    }
    
    return(
        <CartContext.Provider value={{cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider