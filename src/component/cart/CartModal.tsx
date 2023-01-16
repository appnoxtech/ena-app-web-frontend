import React, { FC, useEffect, useState } from 'react';
import './cart.css';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// type cartModalProps = {
//     showCartModal : boolean,
//     closeCartModal : () => void,
//     productData:any
// }
const CartModal: FC<any> = ({ showCartModal, closeCartModal, productData }) => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const { isLogin } = useSelector((state: any) => state.user);

    useEffect(() => {
        const list = localStorage.getItem('cartData');
        if (list) {
            const cartList = JSON.parse(list);
            setCartItems([...cartList]);
        }
    }, [showCartModal]);
    
    const calculateSubTotal = () => {
        const total = cartItems.reduce((total, item) => {
          return total + (item.price * item.orderQuantity)
        }, 0);
        return total;
      }

    return (
        <>
            <Modal show={showCartModal} onHide={closeCartModal} className="cartModalMain">
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        cartItems.map((data, index) => (
                            <div key={index} className="cartModalMain">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div className="cartModalImg">
                                            <img src={data.image} alt="img" className='img-fluid' />
                                        </div>
                                        <div className="cartModalProductDetail">
                                            <h5>{data.engVegName} </h5>
                                            <h6>Size : {data.orderQuantity}kg</h6>
                                            <h4>€ {data.price}</h4>
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
                            <h5>Subtotal: <span>€ {calculateSubTotal().toFixed(2)}</span></h5>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='cartModalFooter'>
                    <button onClick={() => navigate('/cart')} className='btn modalViewCartBtn'>
                        View Cart
                    </button>
                    {
                        isLogin ? <button className='btn marginLeft modalViewCartBtn' onClick={() => navigate('/checkoutWaddress')}>
                            Checkout
                        </button> : null
                    }

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartModal