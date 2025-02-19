import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router'
function Item({ producto }) {
  return (
    <Col md={6} lg={4} className="mb-4 d-flex justify-content-center">
      <Card className="shadow-sm h-100" style={{ width: '100%' }}>
        <Card.Img variant="top" src={producto.thumbnail} />
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>{producto.category}</Card.Text>
          <Card.Text>{producto.description}</Card.Text>
          <Button as={Link} to={`/item/${producto.id}`} variant="primary">Ver Más</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item
