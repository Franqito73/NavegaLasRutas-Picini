import React from 'react'
import Item from './Item'

function ItemList({items}) {
  return (
    <div>
        {items.map(producto => (
        <Item key={producto.id} producto={producto}/>
      ))}
    </div>
  )
}

export default ItemList
