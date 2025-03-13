import { useState, useContext } from "react"
import { CartContex } from "../context/CartContex"
import { Button } from "react-bootstrap"

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
    <>
      <p>{count}</p>

      <div className="d-flex gap-2 mb-2">  
        <Button variant="primary" onClick={handleAdd}>+</Button>
        <Button variant="danger" onClick={handleRest}>-</Button>
        <Button variant="dark" onClick={handleAddToCart}>Agregar al Carrito</Button>
      </div>
    </>
  )
  
}

export default ItemCount