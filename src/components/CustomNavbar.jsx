import React from 'react'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router"

function CustomNavbar () {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Chichilo <span>Store</span></Navbar.Brand>
        <Nav className={`me-auto`}>
          <Nav.Link as={Link} to="category/furniture">Furniture</Nav.Link>
          <Nav.Link as={Link} to="category/fragrances">Fragrances</Nav.Link>
          <Nav.Link as={Link} to="category/beauty">Beauty</Nav.Link>     
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar
