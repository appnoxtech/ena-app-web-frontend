import React, { FC, useState } from 'react';
import './cart.css';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

// type cartModalProps = {
//     showCartModal : boolean,
//     closeCartModal : () => void,
//     productData:any
// }
const CartModal:FC<any> = ({showCartModal,closeCartModal,productData}) => {
    const navigate=useNavigate()
    return (
        <>
            <Modal show={showCartModal} onHide={closeCartModal} className="cartModalMain">
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        Array.from({ length: 2 }).map((data, index) => (
                            <div key={index} className="cartModalMain">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div className="cartModalImg">
                                            <img src={productData.img} alt="img" className='img-fluid' />
                                        </div>
                                        <div className="cartModalProductDetail">
                                            <h5>Carrot </h5>
                                            <h6>Size : 1kg</h6>
                                            <h4>€ 35.2</h4>
                                        </div>
                                    </div>
                                    <div className="cartModalDelete">
                                        {/* <img src={deleteIcon} alt="delete" className='img-fluid' /> */}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="cartModalMain">
                        <div className="cartModalSubTotal">
                            <h5>Subtotal: <span>€ 3568</span></h5>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer  className='cartModalFooter'>
                    <button  onClick={()=>navigate('/cart')} className='btn modalViewCartBtn'>
                        View Cart
                    </button>
                    <button className='btn marginLeft modalViewCartBtn'>
                        Checkout
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartModal