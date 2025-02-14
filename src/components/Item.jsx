import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Item({producto}) {
  return (
    <Col md={6} lg={4}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.thumbnail}/>
            <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <Button variant="primary">Ver Más</Button>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default Item
