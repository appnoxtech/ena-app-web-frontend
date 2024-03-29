import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import ButtonComp from '../buttonComp/ButtonComp';
import { CancelOrder } from '../../../services/order/OrderService';


const OrderCancelModal: React.FC<any> = (props) => {
  const handelCancelOrder = async () => {
    try {
      const data = { orderId: props.id }
      const res = await CancelOrder(data);
      await props.refreshList();
      props.onHide();
    } catch (error) {
      alert(error.message)
    }
  }

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
          <div className='mt-3' style={{ width: '80%' }}>
            <textarea placeholder='Tell us the reason of cancellation' className="form-control w-100" aria-label="With textarea"></textarea>
          </div>
          <ButtonComp
            navigationHandler={handelCancelOrder}
            type='button'
            class=' btnRadius border border-0 w-100 h-100 mt-4 fontWeight-600 button danger text-light py-2 '
            btvalue='Submit'
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default OrderCancelModal;
