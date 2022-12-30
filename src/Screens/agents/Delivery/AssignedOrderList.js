import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import io from 'socket.io-client';
import { GetOrderLiveStatus } from '../../../services/order/OrderService';
import OrderCard from '../../admin/orders/OrderCard';
import NoOrderFound from '../../../assets/animations/noOrderFound.json';
import { hostname } from '../../../GlobalVariable';

const socket = io(hostname);

function AssignedOrderList() {
    const [orderList, setOrderList] = useState([]);
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

    useEffect(() => {
        getOrderList();
        socket.on('connect', () => {
          console.log('Hi connection is runned');
          setIsConnected(true);
        });
    
        socket.on('disconnect', () => {
          setIsConnected(false);
        });
    
        socket.on('ORDER_UPDATED', (data) => {
            try {
              console.log({...data});
              if(data){
                setOrderList(data);
               }
            } catch (error) {
              console.error(error);
            }
          });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
          socket.off('ORDER_CREATED');
        };
      }, []);

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