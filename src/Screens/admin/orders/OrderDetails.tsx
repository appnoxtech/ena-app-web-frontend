import React, { FC, useEffect, useState } from 'react';
import { Card } from 'antd';
import { orderType, products } from '../../../types';
import { useLocation } from 'react-router-dom';
import '../../../assets/global/global.css';
import './adminOrder.css';
import OrderSteps from '../../../component/orderSteps/OrderSteps';
import AddressModal from './AddressModal';
import AgentModal from './AgentModal';
import { Button } from 'react-bootstrap';
import { GetRiderDetailsById, GetRiderListService } from '../../../services/rider/RiderService';
import { GetOrderById } from '../../../services/order/OrderService';
import io from 'socket.io-client';
import { hostname } from '../../../GlobalVariable';
import { useSelector } from 'react-redux';
import OrderCancelModal from '../../../component/common-components/modals/OrderCancelModal';


type PropTypes = {
    order: orderType
};

const getDate = (data: number) => {
    var date = new Date(data);
    return date.toLocaleDateString();
}

const socket = io(hostname);

const OrderDetails: FC<any> = (props) => {
    const [agentModal, setAgentModal] = useState(false);
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [riderList, setRiderList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [addressModal, setAddressModal] = useState(false);
    const [order, setOrder]: any = useState({});
    const [id, setId] = useState('');
    const [addressInfo, setAddressInfo]: any = useState({});
    const [selectedRider, setSelectedRider]: any = useState({});
    const { state } = useLocation();
    const Order = state.order;
    const orderId = useSelector((state: any) => state.assignedOrderId.orderId);
    const {userId} = useSelector((state:any) => state.user);

    const calcTotal = () => {
        const bidTotal = Order.productList.reduce((total: number, item: products) => {
            return total + (item.bidAmount * item.quantity)
        }, 0);
        return bidTotal;
    }

    const getRiderList = async () => {
        try {
            const res = await GetRiderListService();
            const list = res.data.data;
            if (list.length > 0) {
                setRiderList(list);
            } else {
                setRiderList(list);
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };

    const getSelectedRiderDetails = async (id:string) => {
        try {
            const res = await GetRiderDetailsById(id);
            console.log('rider details', res.data);
            const data = res.data.data;
            setSelectedRider(data);
        } catch (error) {
            alert(error.message);
        }
    }

    const updateOrderDetails = async () => {
        try {
            const res = await GetOrderById(Order._id);
            const data = res.data.result;
            setAddressInfo(data.addressInfo);
            if (data.assignedTo) {
                getSelectedRiderDetails(data.assignedTo);
            }
            setOrder(data);
        } catch (error) {
            alert(error.message);
        }
    };

    console.log('orderId', orderId);
    useEffect(() => {
        updateOrderDetails();
        getRiderList();
    
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
              console.log('Agent Data', {...data});
              if(data){
                // setOrderList(data);
                setOrder(data);
               }
            } catch (error) {
              console.error('Socket Error', error);
            }
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
          socket.off('ORDER_UPDATED');
          socket.off('join_room');
        };
      }, []);

    return (
        <div className='mt-1 mt-md-4 mb-2'>
            <div className="col-12 d-flex justify-content-between align-item-center py-2">
                <div className="ps-4 col-6 col-md-6">
                    <div className="d-flex">
                        <p className='mt-1 h3  fontWeight-700 me-1'>Order </p>
                        <p className='mt-1 h3 text-dots fontWeight-700'>
                            #{order._id}
                        </p>
                    </div>
                    <p className='text-body-secondary opacity-50'>{getDate(order.createdAt)}</p>
                </div>
                <div className="col-6 col-md-3 d-flex ms-auto">
                    {
                        order.status === 'CANCELED' ? <div className=' me-4'>
                        {
                            <button onClick={() => setAgentModal(true)} type="button" className="btn btn-primary">
                                Canceled Order
                            </button>
                        }
                    </div> : null
                    }
                    <div className=' me-4'>
                        {
                            order.assignedTo ?
                                <button onClick={() => setAgentModal(true)} type="button" className="btn btn-primary">
                                    Update Agent
                                </button> :
                                <button onClick={() => setAgentModal(true)} type="button" className="btn btn-primary">
                                    Assign Agent
                                </button>
                        }
                    </div>
                </div>
            </div>
            <div className="col-12 d-flex flex-column flex-lg-row  justify-content-between align-item-center px-lg-4 pb-3">
                <div className="col-12 col-lg-9 shadow p-2 rounded-2">
                    <div className="col-12 py-1 border-bottom ps-2 d-flex justify-content-between align-item-center">
                        <div className="col-6">
                            <h6>Order Items</h6>
                        </div>
                    </div>
                    <div className="px-3 px-lg-2">
                        <div className="py-3 fixedTable">
                            {
                                Object.keys(order).length > 1 ? order.productList.map((item: products) => {
                                    return (
                                        <div className="col-12 d-flex flex-column flex-lg-row justify-content-between align-item-center border-bottom">
                                            <div className="col-12 col-lg-3 p-3">
                                                <img src={item.image} className="rounded w-100 h-100 image-fit" />
                                            </div>
                                            <div className="col-12 col-lg-3 ps-2 pt-2 pt-lg-3">
                                                <h6 className=''>{item.vegName}</h6>
                                                <h6 className='opacity-50'>Quantity: {item.quantity}</h6>
                                            </div>
                                            <div className="col-12 col-lg-3 d-flex pt-1 pt-lg-3 ps-2 ps-lg-0">
                                                <h6 className='me-2 text-center'>Bid Price: </h6>
                                                <h6 className='text-center opacity-50'>$ {isNaN((item.bidAmount * item.quantity)) ? '0.0' : (item.bidAmount * item.quantity).toFixed(2)}</h6>
                                            </div>
                                            <div className="col-12 col-lg-3 d-flex text-center pt-1 pt-lg-3 ps-2 ps-lg-0">
                                                <h6 className='me-2 text-center'>Total : </h6>
                                                <h6 className='text-center opacity-50'>$ {(item.price * item.quantity).toFixed(2)}</h6>
                                            </div>
                                        </div>
                                    )
                                }) : null
                            }
                        </div>
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
                                            <h5 className='mb-2 opacity-50'>$ {order.netAmount}</h5>
                                            <h5 className='mb-2 opacity-50'>$ 0.0</h5>
                                            <h5 className='mb-2 opacity-50'>$ 0.0</h5>
                                            <h5 className='mb-2 opacity-50'>$ {isNaN(calcTotal().toFixed(2)) ? '0.0' : calcTotal().toFixed(2)}</h5>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-2 p-2 px-3 shadow rounded mt-3 mt-lg-0">
                    <div className="col-12 py-1 border-bottom ps-2 mb-3">
                        <h6>Order History</h6>
                    </div>
                    <OrderSteps />
                    {
                        order.assignedTo ?
                            <div className="site-card-border-less-wrapper">
                                <Card title="Rider Details" bordered={false} style={{ width: '80%' }}>
                                    <p>Name: {selectedRider.firstName + ' ' + selectedRider.lastName}</p>
                                    <p>Email: {selectedRider.email}</p>
                                </Card>
                            </div> : null
                    }
                </div>
            </div>
            {
                setAgentModal ?
                    <AgentModal
                        show={agentModal}
                        riderList={riderList}
                        onHide={() => {
                            setAgentModal(false)
                        }
                        }
                        orderId={order._id}
                        updateOrderDetails={updateOrderDetails}
                        setSelectedRider={setSelectedRider}
                    /> : null
            }
            <OrderCancelModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={id}
            />

        </div>
    )
}

export default OrderDetails