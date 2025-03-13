import { FaShoppingCart } from 'react-icons/fa'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useCart } from '../context/CartContex'
import { useNavigate } from 'react-router'

function CartWidget() {
  const { getQuantity } = useCart ()
  
  const navigate = useNavigate ()
  
  const total = getQuantity()

  const handleClick = () => {
    navigate('/cart')
  }

  return (
    <Button variant="success" onClick={handleClick}>
      <FaShoppingCart/> <Badge bg="secondary">{total}</Badge>
    </Button>
  );
}

export default CartWidget
