import { Form, Button, Card } from 'react-bootstrap'

const CheckoutFormInputs = ({ onSubmit }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">Formulario de Compra</Card.Title>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduce tu nombre y apellido"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Introduce tu correo electrónico"
              name="email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Introduce tu número telefónico"
              name="phone"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" block>Finalizar Compra</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default CheckoutFormInputs
