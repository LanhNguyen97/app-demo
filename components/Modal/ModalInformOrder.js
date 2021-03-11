import React from 'react';
import { Modal } from "react-bootstrap";
import Button from '../Button'

const ModalInformOrder = (props) => {
  return (
    <Modal
      show={props.isShow}
      onHide={props.onClose}
      dialogClassName="modal-inform-order"
    >
      <Modal.Header closeButton>
        <Modal.Title>Success</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Your order is successfully created. Continue to shopping.
      </Modal.Body>
      <Modal.Footer>
        <Button theme="success" onClick={props.onContinue}>Let's go</Button>
        <Button theme="primary" onClick={props.onCancel}>No</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalInformOrder;