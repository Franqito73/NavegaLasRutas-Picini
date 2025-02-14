import React from 'react'

function Item({producto}) {
  return (
    <>
        <div className='chichilo'>
          <p>{producto.title}</p>
          <p>${producto.price}</p>
          <p>Stock:{producto.stock}</p>
        </div>
    </>
  )
}

export default Item
