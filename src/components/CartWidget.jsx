/* eslint-disable no-unused-vars */
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components'

const CartWidget = () => {
  const cartItems = 5;

  return (
    <div>
      <FaShoppingCart/> {}
      <span>{cartItems}</span> {}
    </div>
  );
};

export default CartWidget;
