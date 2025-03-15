import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import { getProduct } from '../firebase/database'

function ItemDetailContainer() {

const [detail, setDetail] = useState ()
const {id} = useParams()

useEffect(() => {
    getProduct(id).then(res => setDetail(res))
}, [id])


  return (
   <ItemDetail detail={detail}/>
  )
}

export default ItemDetailContainer
