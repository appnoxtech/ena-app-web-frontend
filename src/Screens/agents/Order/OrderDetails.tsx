import React, { FC, useEffect, useState } from 'react';
import { Card, Modal } from 'antd';
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { orderType, products } from '../../../types';
import '../../../assets/global/global.css';
import '../../admin/orders/adminOrder.css';
import OrderSteps from '../../../component/orderSteps/OrderSteps';
import { GetOrderById, OutForDeliveryService } from '../../../services/order/OrderService';
import { useSelector } from 'react-redux';
import { hostname } from '../../../GlobalVariable';
import './style.css';


type PropTypes = {
    order: orderType
};

const getDate = (data: number) => {
    var date = new Date(data);
    return date.toLocaleDateString();
}

const socket = io(hostname);

const OrderDetails: FC<any> = (props) => {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [order, setOrder]: any = useState({});
    const { userId } = useSelector((state: any) => state.user);
    const [addressInfo, setAddressInfo]: any = useState({});
    const { state } = useLocation();
    const Order = state.order;

    const calcTotal = () => {
        const bidTotal = Order.productList.reduce((total: number, item: products) => {
            return total + (item.bidAmount * item.quantity)
        }, 0);
        return bidTotal;
    }

    const updateOrderDetails = async () => {
        try {
            const res = await GetOrderById(Order._id);
            const data = res.data.result;
            setAddressInfo(data.addressInfo);
            setOrder(data);
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        updateOrderDetails();

        socket.on('connect', () => {
            console.log('Socket is Connected ====>');
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.emit('join_room', userId);

        socket.on('ORDER_UPDATED', (data) => {
            console.log('Agent Socket Fn. runned');
            try {
                console.log('Agent Data', { ...data });
                if (data) {
                    updateOrderDetails();
                }
            } catch (error) {
                console.error('Socket Error', error);
            }
        });


        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('join_room');
        };
    }, []);

    const handleStartRide = () => {
        Modal.confirm({
            centered: true,
            title: 'Confirm',
            icon: <ExclamationCircleOutlined />,
            content: 'Are you sure !',
            okText: 'Yes',
            cancelText: 'No',
        });
    };

    const handleOrderTracking = async (orderId: string, status: string) => {
        try {
            const data = { orderId: orderId, status: status };
            const res = await OutForDeliveryService(data);
            let TrackerId: number;
            console.log('status', res.status);
            if (res.status === 200) {
                if (status === 'OFD') {
                    TrackerId = navigator.geolocation.watchPosition((position) => {
                        let lat = position.coords.latitude;
                        let lng = position.coords.longitude;
                        socket.emit('UPDATE_LOCATION', { id: userId, location: { lat, lng } });
                    });
                } else {
                    navigator.geolocation.clearWatch(TrackerId);
                }
            }
        } catch (error) {
            alert(error.message)
        }
    }

    console.log('orderDetails', Order);
    


    return (
        <div className='mt-1 mt-md-4 mb-2'>
            <div className="col-12 d-flex justify-content-between px-3 align-item-center py-2">
                <div className="col-6 col-md-6">
                    <div className="d-flex">
                        <p className='mt-1 h3  fontWeight-700 me-1'>Order </p>
                        <p className='mt-1 h3 text-dots fontWeight-700'>
                            #{order._id}
                        </p>
                    </div>
                    <p className='text-body-secondary opacity-50'>{getDate(order.createdAt)}</p>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column flex-md-row">
                    {
                        order.status === 'ASSIGNED' ?
                            <div className='ms-auto me-2 mb-2 mb-md-0'>
                                {
                                    <button onClick={() => handleOrderTracking(order._id, 'OFD')} type="button" className="btn btn-success">
                                        Start Ride
                                    </button>
                                }
                            </div>
                            : order.status === 'OFD' ?
                                <div className='ms-auto me-2'>
                                    <button onClick={() => handleOrderTracking(order._id, 'COMPLETED')} type="button" className="btn btn-primary">
                                        Complete
                                    </button>
                                </div>
                                : null
                    }
                </div>
            </div>
            <div className="col-12 d-flex flex-column px-3 flex-lg-row  justify-content-between align-item-center px-lg-4 pb-3">
                <div className="col-12 col-lg-9 shadow p-2 rounded-2">
                    <div className="col-12 py-1 border-bottom ps-2 d-flex justify-content-between align-item-center">
                        <div className="col-6">
                            <h6>Order Items</h6>
                        </div>
                    </div>
                    <div className="px-3 px-lg-2">
                        <div className="py-3 fixedTable-55">
                            {
                                Object.keys(order).length > 0 ? order.productList.map((item: products) => {
                                    return (
                                        <div className="col-12 d-flex justify-content-between align-item-center border-bottom orderContainer" key={item.productId}>
                                            <div className="col-3 pt-3">
                                                <img src={item.image} alt={item.vegName} height={100} width={'100%'} style={{ objectFit: 'contain', objectPosition: 'center' }} />
                                            </div>

                                            <div className="col-9 d-flex flex-column flex-md-row ps-3 ps-md-0">
                                                <div className="col-12 col-md-4 ps-2 pt-2 pt-md-3">
                                                    <h6 className=''>{item.vegName}</h6>
                                                    <h6 className='opacity-50'>Quantity: {item.quantity}</h6>
                                                </div>
                                                <div className="col-12 col-md-4 d-flex pt-1 pt-md-3 ps-2 ps-md-0">
                                                    <h6 className='me-2 text-center'>Bid Price: </h6>
                                                    <h6 className='text-center opacity-50'>€ {isNaN((item.bidAmount * item.quantity)) ? '0.0' : (item.bidAmount * item.quantity).toFixed(2)}</h6>
                                                </div>
                                                <div className="col-12 col-md-4 d-flex text-center pt-1 pt-md-3 ps-2 ps-md-0">
                                                    <h6 className='me-2 text-center'>Total : </h6>
                                                    <h6 className='text-center opacity-50'>€ {(item.price * item.quantity).toFixed(2)}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : null
                            }
                        </div>
                    </div>
                    {/* <div className="">
                        <div className="col-12 d-flex flex-column flex-lg-row mt-3">
                            <div className="col-12 col-lg-8 d-flex justify-content-center">
                                <Card title="Shipping Details" bordered={true} style={{ width: '90%' }}>
                                    <p>{`${addressInfo.buildingName} , ${addressInfo.street}`}</p>
                                    <p>{`${addressInfo.city} , ${addressInfo.state}`}</p>
                                    <p>{addressInfo.pincode}</p>
                                </Card>
                            </div>
                            <div className="mt-2 mt-lg-0 col-12 col-lg-4 d-flex justify-content-center">
                                <Card title="Billing Details" bordered={true} style={{ width: '90%' }}>
                                    <div className="col-12 d-flex">
                                        <div className="col-6">
                                            <h5 className='mb-2'>SubTotal :</h5>
                                            <h5 className='mb-2'>Shipping :</h5>
                                            <h5 className='mb-2'>Tax :</h5>
                                            <h5 className='mb-2'>Bid Total :</h5>
                                        </div>
                                        <div className="col-6">
                                            <h5 className='mb-2 opacity-50'>€ {order.netAmount}</h5>
                                            <h5 className='mb-2 opacity-50'>€ 0.0</h5>
                                            <h5 className='mb-2 opacity-50'>€ 0.0</h5>
                                            <h5 className='mb-2 opacity-50'>€ {isNaN(calcTotal().toFixed(2)) ? '0.0' : calcTotal().toFixed(2)}</h5>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="col-12 col-lg-3 d-flex ps-lg-3 flex-column">
                    <div className="col-12 shadow rounded mt-3 mt-lg-0 mb-3">
                        <Card title="Shipping Details" bordered={true} style={{ width: '100%' }}>
                            <p className='fs-7 fw-semibold mb-0 opacity-50'>{`${addressInfo.buildingName} , ${addressInfo.street}`}</p>
                            <p className='fs-7 fw-semibold mb-0 opacity-50'>{`${addressInfo.city} - ${addressInfo.pincode}`}</p>
                            <p className='fs-7 fw-semibold mb-1 opacity-50'>{addressInfo.state}</p>
                            <p className='fs-7 fw-semibold opacity-50'>Mobile: {Order.phoneNumber}</p>
                        </Card>
                    </div>
                    <div className="col-12 shadow rounded mt-auto mt-lg-0">
                        <Card title="Billing Details" bordered={true} style={{ width: '100%' }}>
                            <div className="col-12 d-flex">
                                <div className="col-6">
                                    <p className='fs-5 mb-0 fw-normal'>SubTotal :</p>
                                    <p className='fs-5 mb-0 fw-normal'>Shipping :</p>
                                    <p className='fs-5 mb-0 fw-normal'>Tax :</p>
                                    <p className='fs-5 mb-0 fw-normal'>Bid Total :</p>
                                </div>
                                <div className="col-6">
                                    <p className='fs-5 mb-0 fw-normal opacity-50'>€ {order.netAmount}</p>
                                    <p className='fs-5 mb-0 fw-normal opacity-50'>€ 0.0</p>
                                    <p className='fs-5 mb-0 fw-normal opacity-50'>€ 0.0</p>
                                    <p className='fs-5 mb-0 fw-normal opacity-50'>€ {isNaN(calcTotal().toFixed(2)) ? '0.0' : calcTotal().toFixed(2)}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails