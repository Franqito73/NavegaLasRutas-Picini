import { Modal, Button } from 'react-bootstrap'

const ModalForm = ({ showModal, handleClose }) => {

  return (
    <>
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Compra Exitosa</Modal.Title>
      </Modal.Header>
      <Modal.Body>Muchas Gracias por tu compra!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default ModalForm
