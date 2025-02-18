import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

function CartWidget() {
  return (
    <Button variant="primary">
      <FaShoppingCart/> <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default CartWidget
