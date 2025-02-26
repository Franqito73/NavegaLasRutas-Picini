import { CartContext } from "./CartContex";

function CartProvider ({children}) {
    return(
        <CartContext.Provider value={'pepito'}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider