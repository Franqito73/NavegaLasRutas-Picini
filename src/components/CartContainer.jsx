import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContex'
import CartList from './CartList'
import CartModal from './CartModal'

const CartContainer = () => {
  const { cart } = useCart()
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (cart.length === 0 && !showModal) {
      setShowModal(true)
    }
  }, [cart])
  return (
    <>
      <CartModal showModal={showModal} handleClose={handleCloseModal} />
      {cart.length > 0 && <CartList cart={cart} />}
    </>
  );
};

export default CartContainer
