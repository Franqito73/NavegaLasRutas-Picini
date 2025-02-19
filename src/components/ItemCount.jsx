import { useState, useEffect } from "react"
import React from 'react'

function ItemCount() {
const [count, setCount] = useState (0)

    useEffect(() => {

    return 
    }, [count])

const handleAdd = () => {
    setCount(count + 1) 
}

const handleRest = () => {
    setCount(count - 1)
}
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleRest}>-</button>
    </div>
  )
}

export default ItemCount