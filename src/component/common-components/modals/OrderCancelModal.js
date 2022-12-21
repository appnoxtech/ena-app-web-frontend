import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

function OrderCancelModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
         <div className="w-60 mx-auto flex d-flex flex-column justify-content-center align-items-center">
             <HiOutlineExclamationCircle size={60} color="#EB5757" />
             <p className='mt-3 h3 fontWeight-700'>
                {`Are you sure you want to cancel
              the order ?`}
             </p>
             <div className='mt-3' style={{width: '80%'}}>
                <textarea placeholder='Tell us the reason of cancellation' className="form-control w-100" aria-label="With textarea"></textarea>
            </div>
         </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderCancelModal;
