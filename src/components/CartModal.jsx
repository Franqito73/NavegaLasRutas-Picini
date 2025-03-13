import { Modal, Button } from 'react-bootstrap'

const CartModal = ({ showModal, handleClose }) => {

  return (
    <>
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito Vacío</Modal.Title>
      </Modal.Header>
      <Modal.Body>No hay ningún producto en el carrito.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default CartModal
