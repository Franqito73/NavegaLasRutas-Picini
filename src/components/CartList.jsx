import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { CartContex } from '../context/CartContex'

const CartList = ({ cart }) => {
  const navigate = useNavigate ()
  const { removeFromCart, clearCart } = useContext(CartContex);

    const handleClick = () => {
        navigate('/checkout')
    }

    const handleRemoveClick = (productId) => {
      removeFromCart(productId)
    }

    const handleClearCart = () => {
      clearCart()
    }

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Carrito de Compras</Card.Title>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Precio</th>
                      <th>Total</th>
                      <th>Imagen</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price}</td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <img src={item.image} style={{ width: '50px',
                           height: '50px', objectFit: 'cover' }} alt={item.title}/>
                        </td>
                        <td>
                          <Button variant="danger" onClick={() => 
                          handleRemoveClick(item.id)} size="sm">Eliminar</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <h4 className="text-right">
                  Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                </h4>
                <div className="text-center">
                    <Button variant="danger" onClick={handleClearCart} className="my-2">
                    Vaciar Carrito</Button>
                    <Button  variant="primary" onClick={handleClick}>Ir al checkout</Button>
                </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CartList
