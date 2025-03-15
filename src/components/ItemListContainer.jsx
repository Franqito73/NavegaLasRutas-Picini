import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'
import { getProducts, productByCategory } from '../firebase/database'

function ItemListContainer() {

const [items, setItems] = useState ([])
const {id} = useParams()

useEffect (() => {
  if (id) {
    productByCategory(id).then(res => setItems(res))
  } else {
    getProducts().then(res => setItems(res))
  }
}, [id])

  
  return (
    <div className="mt-5">
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
