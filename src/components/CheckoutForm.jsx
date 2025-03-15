import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import ModalForm from './ModalForm'

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para procesar el formulario, como enviarlo a un backend
    alert('Compra realizada exitosamente!')
  };

  return (
    <Container>
      <Row className="my-4">
        <Col md={6} className="offset-md-3">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Formulario de Compra</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Introduce tu nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Introduce tu correo electrónico"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Introduce tu dirección"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Introduce tu ciudad"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="postalCode">
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Introduce tu código postal"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Finalizar Compra
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout;
