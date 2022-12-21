import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import CustomButton from '../Button/Button';
import WarningModal from '../WarningModal/WarningModal';
import './Order.css'
import { GetCartDetailsService } from '../../services/cart/cartService';
import { GetOrderLiveStatus } from '../../services/order/OrderService';
import { FaBoxOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getJSDocDeprecatedTag } from 'typescript';
import OrderCancelModal from '../common-components/modals/OrderCancelModal';

const Order = () => {
  const [modalShow, setModalShow] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const navigate = useNavigate();

  const displayModal = (e:any) => {
    console.log('display fn.called');
    setModalShow(true);
    e.stopPropagation();
  }
  const hideModal = () => {
    setModalShow(false);
  }
  const handleOrderTracking = () => {
    console.log('function will handle order tracking ..');
  }

  const getOrderList = async() => {
    try {
      const res = await GetOrderLiveStatus();
      const list = res.data.result;
      if(list.length > 0) {
        setOrderList(list);
      }
    } catch (error) {
       alert(error.message);
    }
  };

  useEffect(() => {
    getOrderList();
  }, []);

  const handleOrderRowClick = (productList:any) => {
    localStorage.setItem('orderDetail', JSON.stringify(productList));
    navigate('/orderDetails');
  }

  const getDate = (data:any) => {
    var date = new Date(data);
    return date.toLocaleDateString();
  }

  return (
    <div className='container-fluid pb-5'>
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='col-10 mx-auto'>
        <Table responsive className='orders_Heading rounded'>
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
              <tr key={index} className='orderRow' onClick={() => handleOrderRowClick(data.productList)}>
              <td>
                <div className=''>
                <FaBoxOpen size={60} />
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
                    <h5>{data.status === 'CREATED' ? 'Pending' : data.status}</h5>
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
                        props={{ styleName: 'danger px-3 p-0 mt-2', indexData: 'Cancel Order', btnType: 'btn-outline', clickHandler: displayModal}}
                    />
                  
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
       />
    </div>
  )
}

export default Order
