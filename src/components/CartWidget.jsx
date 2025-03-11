import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useCart } from '../context/CartContex'
import { useNavigate } from 'react-router'

function CartWidget() {
  const { getQuantity } = useCart ()
  const navigate = useNavigate ()
  const total = getQuantity()

  const handleClick = () => {
    navigate('/cart')
  }

  return (
    <Button variant="primary">
      <FaShoppingCart/> <Badge bg="secondary">{total}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default CartWidget
