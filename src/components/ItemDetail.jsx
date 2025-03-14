import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ItemCount from './ItemCount'

function ItemDetail({ detail }) {
  return (
    <Container className="d-flex justify-content-center align-items-center mt-5 mb-5" style={{ minHeight: '100vh' }}>
    <Row className="w-100 justify-content-center">
      <Card style={{ width: '25rem' }} className="shadow-lg">
        <Card.Img variant="top" src={detail?.image} />
        <Card.Body>
          <Card.Title>{detail?.title}</Card.Title>
          <Card.Text>{detail?.description}</Card.Text>
          <Card.Text>{detail?.category}</Card.Text>
          <Card.Text>${detail?.price}</Card.Text>
          <Card.Text>Stock: {detail?.stock}</Card.Text>
          <ItemCount product={ detail }/>
        </Card.Body>
      </Card>
    </Row>
  </Container>
  )
}

export default ItemDetail
