import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useCart } from '../context/CartContex'

function CartWidget() {
  const { getQuantity } = useCart ()

  const total = getQuantity()
  
  return (
    <Button variant="primary">
      <FaShoppingCart/> <Badge bg="secondary">{total}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default CartWidget
