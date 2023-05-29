import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import io from 'socket.io-client';
import { GetOrderHistory, GetOrderLiveStatus, OutForDeliveryService } from '../../../services/order/OrderService';

import NoOrderFound from '../../../assets/animations/noOrderFound.json';
import { hostname } from '../../../GlobalVariable';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateAssignedOrderId } from '../../../redux/reducer/order/OrderAssignedReducer';
import OrderCard from '../Card/OrderCard';
import { Select } from 'antd';
import useErrorHandler from '../../../services/handler/ErrorHandler';
import { orderType } from '../../../types';

const socket = io(hostname);

const AssignedOrderList: React.FC<any> = () => {
    const [orderList, setOrderList] = useState([]);
    const dispatch = useDispatch();
    const showError = useErrorHandler();
    const { userId } = useSelector((state: any) => state.user);
    const [isConnected, setIsConnected] = useState(socket.connected);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: NoOrderFound,
    };

    const getOrderList = async (status: string) => {
        try {
          if(status === 'live'){
            const res = await GetOrderLiveStatus();
            const list = res.data.result;
            if (list.length > 0) {
              setOrderList(list);
            }
          }else{
            const res = await GetOrderHistory();
            const list = res.data.result;
            if(list.length > 0){
              const data = list.filter((order: orderType) => order.status === status);
              setOrderList(data);
            }
          }
          
        } catch (error) {
            showError(error);
        }
      };


    //socket listen to change in order status
    useEffect(() => {
        getOrderList('live');

        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });
        // To create room with the agent Id
        socket.emit('join_room', userId);

        // Listen for Deassign Order Event
        socket.on('Deassigend_Order', () => {
            setOrderList([]);
        });

        // To Update
        socket.on('ORDER_UPDATED', (data) => {
            try {
                if (data) {
                    // setOrderList(data);
                    addNewOrder(data);
                }
            } catch (error) {
                showError(error);
            }
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('Deassigend_Order');
            socket.off('ORDER_UPDATED');
            socket.off('join_room');
        };
    }, []);

    const addNewOrder = async (data) => {
        console.log('data', data);
        try {
            const res = await GetOrderLiveStatus();
            const list = res.data.result;
            if (list.length > 0) {
                //list.unshift(data);
                setOrderList(list);
            }
        } catch (error) {
            showError(error);
        }
    }

    const handleChange = (value: string) => {
        getOrderList(value);
    }

    const OrderStatus = [
        {
          label: 'Current Order',
          value: 'live'
        },
        {
          label: 'Completed Order',
          value: 'COMPLETED'
        },
      ];



    return (
        <div className='mt-1 mt-md-4'>
            <div className="col-12 d-flex justify-content-space px-3">
                <div className="col-3">
                    <p className='mt-1 h3 fontWeight-700'>Orders</p>
                </div>
                <div className="ms-auto col-3">
                    <Select
                        size={'large'}
                        defaultValue='live'
                        onChange={handleChange}
                        style={{ width: '100%' }}
                        options={OrderStatus}
                    />
                </div>
            </div>
            <div className="col-12 px-2 d-flex justify-content-center align-item-center">
                {
                    orderList.length > 0 ?
                        <div className="container row">
                            {orderList.map((order) => {
                                return (
                                    <div className="col-12 col-md-6 col-xl-4 p-3">
                                        <OrderCard
                                            order={order}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <div className='col-12 d-flex justify-content-center align-item-center' style={{ height: '90vh' }}>
                            <Lottie
                                options={defaultOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                }
            </div>
        </div>
    )
}

export default AssignedOrderList