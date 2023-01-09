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
import '../../assets/global/global.css';
import OrderSteps from '../orderSteps/OrderSteps';
import { Card } from 'antd';

const OrderDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const order = JSON.parse(localStorage.getItem('orderDetail'));
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
            const order = JSON.parse(data);
            setOrderList(order.productList);
        }
    }, []);

    console.log('orderList', order);

    return (
        <div className='container-fluid pb-5 mt-5'>
            <div className='side-Part rounded-4 bg-white'></div>
            <div className='fixedHeightTable-20 col-10 mx-auto'>
                <Table responsive className='orders_Heading rounded mt-5 mt-md-0'>
                    <thead className="header">
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Bid Price</th>
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
                                </td>
                                <td>
                                    <h6>€ {data.price}/kg</h6>
                                </td>
                                <td>
                                    <div className=''>
                                        <h5>{data.quantity} kg</h5>
                                    </div>
                                </td>
                                <td>
                                    <h5>€ {(data.quantity * data.price).toFixed(2)}</h5>
                                </td>
                                <td>
                                    <div className=''>
                                        <h5>€ {data.bidAmount ? data.bidAmount : data.price}</h5>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className="order-details col-10 d-flex flex-column flex-xl-row justify-content-around align-items-stretch mx-auto border-top pt-4">
                <Card title="Tracking Details" bordered={true} className='col-12 col-xl-3 my-2 my-xl-0'>
                    <OrderSteps />
                </Card>

                <Card title="Shipping Details" bordered={true} className='col-12 col-xl-3 my-2 my-xl-0'>
                    <p className='fs-5'>{`${order.addressInfo.buildingName} , ${order.addressInfo.street}, ${order.addressInfo.city} `}</p>
                    <p className='fs-5'>{`${order.addressInfo.state}, ${order.addressInfo.pincode}`}</p>
                    <p className='fs-5'>{`Phone: 9667699240`}</p>
                </Card>

                <Card title="Payments Details" bordered={true} className='col-12 col-xl-3 my-2 my-xl-0'>
                    <p className='fs-5 fw-semibold'>Payment Method</p>
                    <p className='fs-5 fw-normal text-muted'>Pay On Delivery (POD)</p>
                </Card>
            </div>
        </div>
    )
}

export default OrderDetails
