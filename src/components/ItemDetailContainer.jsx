import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import { getProducts } from '../firebase/database'

function ItemDetailContainer() {

const [detail, setDetail] = useState ()
const {id} = useParams()

useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(res => setDetail(res))
    getProducts().then(products => {
      const productDetail = products.find(product => product.id === id);
      setDetail(productDetail);
    });
}, [id])


  return (
   <ItemDetail detail={detail}/>
  )
}

export default ItemDetailContainer
