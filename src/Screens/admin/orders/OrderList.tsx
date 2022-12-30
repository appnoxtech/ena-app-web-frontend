import React, { useEffect, useState, FC } from 'react'
import io from 'socket.io-client';
import Lottie from 'react-lottie';
import NoOrderFound from '../../../assets/animations/noOrderFound.json';
import OrderCard from './OrderCard';
import { GetOrderLiveStatus } from '../../../services/order/OrderService';
import { orderType } from '../../../types';
import { hostname } from '../../../GlobalVariable';

const socket = io(hostname);

const OrderList: FC<any> = () => {
  const [orderList, setOrderList] = useState([]);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NoOrderFound,
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

    socket.on('ORDER_CREATED', (data) => {
        try {
          console.log({ ...data });
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
                  {orderList.map((order: orderType) => {
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

export default OrderList