import { useContext } from 'react'
import { CartContex } from '../context/CartContex'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/database'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

const useCheckout = () => {
  const { cart, getTotal, clearCart } = useContext(CartContex)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const name = form.name.value
    const phone = form.phone.value

    const order = {
      items: cart,
      user: { name, email, phone },
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
    }).then(() => {
      clearCart()
      navigate('/')
    })
  }

  return handleSubmit
}

export default useCheckout