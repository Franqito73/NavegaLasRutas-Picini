import React from 'react'
import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function ItemList({ items }) {
  return (
    <Container>
      <Row className="justify-content-center">
        {items.map(producto => (
          <Item key={producto.id} producto={producto} />
        ))}
      </Row>
    </Container>
  );
}

export default ItemList
