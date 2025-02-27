import { useState, useContext } from "react"
import React from 'react'
import { CartContext } from "../context/CartContex"

function ItemCount({product}) {
const [count, setCount] = useState (0)
const {addToCart} = useContext(CartContext)

const handleAdd = () => {
    setCount(count + 1) 
}

const handleRest = () => {
    setCount(count - 1)
}

const handleAddToCart = () => {
  addToCart({...product, quantity: count})
}
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleRest}>-</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount