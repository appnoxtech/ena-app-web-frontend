import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Table from 'react-bootstrap/Table';
import CustomButton from '../Button/Button';
import WarningModal from '../WarningModal/WarningModal';
import './Order.css'
import { GetCartDetailsService } from '../../services/cart/cartService';
import { GetOrderLiveStatus } from '../../services/order/OrderService';
import { FaBoxOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getJSDocDeprecatedTag } from 'typescript';
import OrderCancelModal from '../common-components/modals/OrderCancelModal';
import '../../assets/global/global.css';
import { hostname } from '../../GlobalVariable';
import { useSelector } from 'react-redux';
import { Modal } from 'antd';
import MapContainer from '../common-components/mapComponent/MapContainer';

const socket = io(hostname);
const Order = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const { userId } = useSelector((state: any) => state.user);
  const [modalShow, setModalShow] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [mapModal, showMapModal] = useState(false);
  const [agentId, setAgentId] = useState('');

  const navigate = useNavigate();
  const [id, setId] = useState('');
  const displayModal = (e: any, id: any) => {
    console.log('display fn.called');
    setModalShow(true);
    setId(id);
    e.stopPropagation();
  }
  const hideModal = () => {
    setModalShow(false);
  }
  const handleOrderTracking = () => {
    console.log('function will handle order tracking ..');
  }

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
  }, []);

  const handleOrderRowClick = (order: any) => {
    localStorage.setItem('orderDetail', JSON.stringify(order));
    navigate('/orderDetails');
  }

  const getDate = (data: any) => {
    var date = new Date(data);
    return date.toLocaleDateString();
  }

  useEffect(() => {
    getOrderList();

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
        const newList = list.filter((item: any) => item._id !== data._id);
        newList.unshift(data);
        setOrderList(newList);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const toggleMapModal = (agent: string) => {
    setAgentId(agent);
    showMapModal(true);
  }

  return (
    <div className='container-fluid pb-5 mt-90'>
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='col-10 mx-auto fixedHeightTable mt-5 mt-md-0'>
        <Table responsive className='orders_Heading rounded' hover bordered>
          <thead>
            <tr>
              <th>Orders</th>
              <th>Placed At</th>
              {/* <th>Price</th> */}
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='shopingCartTableBody text-center'>
            {orderList.map((data, index) => (
              <tr key={index} className="orderRow" >
                <td>
                  <div className=''>
                    <img
                      src='https://static.vecteezy.com/system/resources/previews/003/705/785/original/basket-with-fruits-isolated-with-icon-illustration-free-vector.jpg'
                      alt='fruit'
                      width={80}
                      height={80}
                    />
                    {/* <FaBoxOpen size={60} /> */}
                  </div>
                </td>
                <td>
                  <h5>{getDate(data.createdAt)}</h5>
                </td>
                <td>
                  <h6>{data.productList.length}</h6>
                </td>
                <td>
                  <div className=''>
                    <h5>{data.netAmount}</h5>
                  </div>
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
                    <h5>{data.status === 'CREATED' ? 'Pending' : data.status === 'OFD' ? 'Out for Delivery' : data.status}</h5>
                  </div>
                </td>
                <td>
                  <div className=''>
                    <CustomButton
                      props={{ styleName: 'success px-3 p-0 w-75', indexData: 'Order Details', btnType: 'btn-outline', clickHandler: () => handleOrderRowClick(data) }}
                    />
                    {
                      data.status === 'CANCELED' ?
                        null
                      :
                        data.status === 'OFD' ?
                          <CustomButton
                            props={{ styleName: 'primary px-3 p-0 mt-2 w-75', indexData: 'Track Order', btnType: 'btn-outline', clickHandler: () => toggleMapModal(data.assignedTo) }}
                          />
                      :
                          <CustomButton
                            props={{ styleName: 'danger px-3 p-0 mt-2', indexData: 'Cancel Order', btnType: 'btn-outline', clickHandler: (e) => displayModal(e, data._id) }}
                          />
                    }
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <OrderCancelModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
        refreshList={getOrderList}
      />
      <Modal
        title="Order Live Location."
        centered
        open={mapModal}
        width={1000}
        footer={false}
        onCancel={() => showMapModal(false)}
      >
        <div className="container">
          <MapContainer agentId={agentId} />
        </div>
      </Modal>
    </div>
  )
}

export default Order
