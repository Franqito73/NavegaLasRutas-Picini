import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { CartContex } from '../context/CartContex'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/database'
import { useNavigate } from 'react-router'

const CheckoutForm = () => {

  const { cart, getTotal, clearCart } = useContext(CartContex)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const name = form.name.value
    const phone = form.phone.value

    const order ={
      items: cart,
      user: {name, email, phone},
      time: serverTimestamp(),
      total: getTotal(),
    }
    
    const id = await createOrder(order)

    Swal.fire({
      title: '¡Gracias por tu compra!',
      html: `Tu compra ha sido completada exitosamente.<br/>
      El ID de tu compra es: <strong>${id}</strong>.<br/>
      El total es: <strong>$${order.total}</strong>`,
      icon: 'success',
      confirmButtonText: 'Cerrar',
    }).then(() => {clearCart(); navigate('/')})

}

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
                  <Form.Control type="text" placeholder="Introduce tu nombre y apellido"
                    name="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email" placeholder="Introduce tu correo electrónico"
                    name="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="tel" placeholder="Introduce tu número telefónico"
                    name="phone" required />
                </Form.Group>
                <Button variant="primary" type="submit" block>Finalizar Compra</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CheckoutForm;
