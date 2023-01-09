import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import io from 'socket.io-client';
import { GetOrderLiveStatus, OutForDeliveryService } from '../../../services/order/OrderService';

import NoOrderFound from '../../../assets/animations/noOrderFound.json';
import { hostname } from '../../../GlobalVariable';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateAssignedOrderId } from '../../../redux/reducer/order/OrderAssignedReducer';
import OrderCard from '../Card/OrderCard';

const socket = io(hostname);

function AssignedOrderList() {
    const [orderList, setOrderList] = useState([]);
    const dispatch = useDispatch();
    const {userId} = useSelector((state) => state.user);
    const [isConnected, setIsConnected] = useState(socket.connected);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: NoOrderFound,
      };
    const getOrderList = async () => {
        try {
            const res = await GetOrderLiveStatus();
            const list = res.data.result;
            if (list.length > 0) {
                setOrderList(list);
            }
        } catch (error) {
            alert(error.message);
        }
    };


    //socket listen to change in order status
    useEffect(() => {
        getOrderList();

        socket.on('connect', () => {
          console.log('Socket is Connected ====>');
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
            console.log('Agent Socket Fn. runned');
            try {
              console.log('Agent Data', {...data});
              if(data){
                // setOrderList(data);
                addNewOrder(data);
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

      const addNewOrder = async (data) => {
        console.log('data', data);
        try {
            const res = await GetOrderLiveStatus();
            const list = res.data.result;
            if (list.length > 0) {
                //list.unshift(data);
                console.log('list', list);
                setOrderList(list);
            }
        } catch (error) {
            alert(error.message);
        }
      }



    return (
        <div className='mt-1 mt-md-4'>
            <div className="col-12">
                <div className="ps-4">
                    <p className='mt-1 h3 fontWeight-700'>Orders</p>
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