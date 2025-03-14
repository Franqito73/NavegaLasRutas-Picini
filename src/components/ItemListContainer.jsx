import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'
import { getProducts } from '../firebase/database'

function ItemListContainer() {

const [items, setItems] = useState ([])
const {id} = useParams()

useEffect (() => {
const allProducts = 'https://dummyjson.com/products'
const byCategories = `https://dummyjson.com/products/category/${id}`

  fetch(id ? byCategories : allProducts )
  .then(res => res.json())
  .then(res => setItems(res.products))

  getProducts().then(res => setItems(res))
}, [id])

  
  return (
    <div className="mt-5">
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
