import { Container, Row, Col } from 'react-bootstrap'
import CheckoutFormInputs from './CheckoutFormInputs'
import useCheckout from './useCheckout'

const CheckoutForm = () => {
  const handleSubmit = useCheckout()

  return (
    <Container>
      <Row className="my-4">
        <Col md={6} className="offset-md-3">
          <CheckoutFormInputs onSubmit={handleSubmit} />
        </Col>
      </Row>
    </Container>
  )
}

export default CheckoutForm
