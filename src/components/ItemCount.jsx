import { useState, useContext } from "react"
import React from 'react'
import { CartContex } from "../context/CartContex"

function ItemCount({product}) {

  const [count, setCount] = useState (0)
  const { addToCart } = useContext(CartContex)

  const handleAdd = () => {
    setCount(count + 1) 
  }

  const handleRest = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const handleAddToCart = () => {
    addToCart ({...product, quantity: count})
    setCount(0)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleRest}>-</button>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  )
  
}

export default ItemCount