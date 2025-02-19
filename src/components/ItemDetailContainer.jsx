import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function ItemDetailContainer() {

const [detail, setDetail] = useState ()
const {id} = useParams()

useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(res => setDetail(res))
}, [id])


  return (
    <Container className="d-flex justify-content-center align-items-center mt-5 mb-5" style={{ minHeight: '100vh' }}>
      <Row className="w-100 justify-content-center">
        <Card style={{ width: '40rem' }} className="shadow-lg">
          <Card.Img variant="top" src={detail?.thumbnail} />
          <Card.Body>
            <Card.Title>{detail?.title}</Card.Title>
            <Card.Text>{detail?.description}</Card.Text>
            <Card.Text>{detail?.category}</Card.Text>
            <Card.Text>${detail?.price}</Card.Text>
            <Card.Text>Stock: {detail?.stock}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default ItemDetailContainer
