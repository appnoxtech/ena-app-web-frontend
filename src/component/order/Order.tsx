import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap/lib/InputGroup'
import Table from 'react-bootstrap/Table'
import Tomato from '../../assets/images/6-tomato-png-image.png'
import CustomButton from '../Button/Button';
import WarningModal from '../WarningModal/WarningModal';
import './Order.css'
import { GetCartDetailsService } from '../../services/cart/cartService';
import { GetOrderLiveStatus } from '../../services/order/OrderService';

const Order = () => {
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

  const getOrderList = async() => {
    try {
      const res = await GetOrderLiveStatus();
      const list = res.data.result;

      if(list.length > 0) {
        list.map((item:any) => {
          setOrderList([...orderList, ...item.productList]);
        })
      }
    } catch (error) {
       alert(error.message);
    }
  };

  useEffect(() => {
    getOrderList();
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
              <th>Size</th>
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
                <h5>Carrot</h5>
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
                <h5>kn {(data.quantity*data.price).toFixed(2)}</h5>
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
                        props={{ styleName: 'danger px-3 p-0 mt-2', indexData: 'Cancel Order', btnType: 'btn-outline', clickHandler: displayModal}}
                    />
                  
                </div>
              </td>
            </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <WarningModal
          message="Are you sure you want to cancel the order ?"
          show={showModal}
          closeModal={hideModal}
          showReason={true}
         />
    </div>
  )
}

export default Order
