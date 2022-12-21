import React, { useEffect, useState, FC } from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import Table from 'react-bootstrap/Table'
import Tomato from '../../assets/images/6-tomato-png-image.png'
import CustomButton from '../Button/Button';
import WarningModal from '../WarningModal/WarningModal';
import './Order.css'
import { GetCartDetailsService } from '../../services/cart/cartService';
import { GetOrderLiveStatus } from '../../services/order/OrderService';
import OrderTracking from './OrderTracking';


const OrderDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const [orderList, setOrderList] = useState([]);
    const displayModal = () => {
        console.log('display fn.called');

        setShowModal(true);
    }
    const hideModal = () => {
        setShowModal(false);
    }
    const handleOrderTracking = () => {
        console.log('function will handle order tracking ..');
    }

    //   const getOrderList = async() => {
    //     try {
    //       const res = await GetOrderLiveStatus();
    //       const list = res.data.result;

    //       if(list.length > 0) {
    //         list.map((item:any) => {
    //           setOrderList([...orderList, ...item.productList]);
    //         })
    //       }
    //     } catch (error) {
    //        alert(error.message);
    //     }
    //   };

    //   useEffect(() => {
    //     getOrderList();
    //   }, []);

    useEffect(() => {
        const data = localStorage.getItem('orderDetail');
        if (data) {
            const list = JSON.parse(data);
            setOrderList(list)
        }
    }, []);

    return (
        <div className='container-fluid pb-5'>
            <div className='side-Part rounded-4 bg-white'></div>
            <div className='col-10 mx-auto'>
                <Table responsive className='orders_Heading rounded'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='shopingCartTableBody'>
                        {orderList.map((data, index) => (
                            <tr key={index}>
                                <td>
                                    <div className=''>
                                        <img src={data.image} alt='img' className='img-fluid order_image' />
                                    </div>
                                </td>
                                <td>
                                    <h5>{data.engVegName}</h5>
                                    <p className='order_Id'>Order id:1234</p>
                                </td>
                                <td>
                                    <h6>kn {data.price}/kg</h6>
                                </td>
                                <td>
                                    <div className=''>
                                        <h5>{data.quantity} kg</h5>
                                    </div>
                                </td>
                                <td>
                                    <h5>kn {(data.quantity * data.price).toFixed(2)}</h5>
                                </td>
                                <td>
                                    {/* {index  == 0 ? (
                  <div className=''>
                    <h5>Approved</h5>
                  </div>
                ) : (
                  <div className=''>
                    <h5>Pending</h5>
                  </div>
                )} */}
                                    <div className=''>
                                        <h5>Pending</h5>
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {/* {
                    index == 0 ? (
                      <div className='d- flex align-items-center justify-content-between'>
                      <CustomButton
                        props={{ styleName: 'dark px-5  p-0', indexData: 'Track', btnType: 'btn-outline', clickHandler: handleOrderTracking}}
                      />

                      <CustomButton
                        props={{ styleName: 'danger px-3 p-0 mt-2', indexData: 'Cancel Order', btnType: 'btn-outline', clickHandler:  displayModal}}
                      />
                    </div>
                    ) : (
                      <CustomButton
                        props={{ styleName: 'danger px-3 p-0 mt-2', indexData: 'Cancel Order', btnType: 'btn-outline', clickHandler: displayModal}}
                      />
                    )
                  } */}
                                        <CustomButton
                                            props={{ styleName: 'danger px-3 p-0 mt-2', indexData: 'Cancel Order', btnType: 'btn-outline', clickHandler: displayModal }}
                                        />

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            {/* <div className="order-details col-10 d-flex justify-content-around align-items-center mx-auto">
                <div className="order-tracking col-3 p-2">
                    <div className="border border-end-2">
                        <h4>Tracking Details</h4>
                    </div>
                    <div className="progressContainer">
                        <ProgressBar percent={25} filledBackground="#B54ABC">
                            <Step>
                                {({ accomplished, index }) => (
                                    <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
                                        <div className='dot'>

                                        </div>
                                        <div className="">
                                            <h6>Ordered | 20/12/2022</h6> 
                                        </div>
                                    </div>
                                )}
                            </Step>
                            <Step>
                                {({ accomplished, index }) => (
                                    <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
                                        <div className='dot'>

                                        </div>
                                    </div>
                                )}
                            </Step>
                            <Step>
                                {({ accomplished, index }) => (
                                    <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
                                        <div className='dot'>

                                        </div>
                                    </div>
                                )}
                            </Step>
                        </ProgressBar>
                    </div>
                </div>
                <div className="order-address col-3 p-2 bg-secondary">
                    <div className="border border-end-2">
                        <h4>Shipping Details</h4>
                    </div>
                    <div className="">

                    </div>
                </div>
                <div className="order-payment col-3 p-2 bg-secondary">
                    <div className="border border-end-2">
                        <h4>Payments Details</h4>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default OrderDetails
