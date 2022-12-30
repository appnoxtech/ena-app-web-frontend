import React,{FC} from 'react';
import { Card } from 'antd';
import { orderType } from '../../../types';
import { useNavigate } from 'react-router-dom';

type PropTypes = {
 order: orderType
};

const getDate = (data: number) => {
  var date = new Date(data);
  return date.toLocaleDateString();
}

const setCardBgColor = (status: string) => {
  if(status === 'CREATED') {
     return 'bgGreen';
  } else if (status === 'CANCELED') {
     return 'bgOrange'
  } else {
    return 'bgblue'
  }
}

const OrderCard:FC<PropTypes> = ({order}) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate('/orderDetails', {state: {order: order}})
      }} 
      className={`${setCardBgColor(order.status)}`}
      hoverable
      title={`Order id # ${order._id}`} 
      bordered={false} 
      style={{ width: '100%' }}
    >
        <p className='h6 fontWeight-500'>
          Ordered on: {getDate(order.createdAt)}
        </p>
        <p className='h6 fontWeight-500'>
          Total Product: {order.productList.length}
        </p>
        <p className='h6 fontWeight-500'>
          Order Status: {order.status}
        </p>
        <p className='h6 fontWeight-500'>
          Order Total: {order.netAmount}
        </p>
        {/* <div className="col-12 d-flex justify-content-between align-item-center">
         <p>Total: {order.netAmount}</p>
         <div className='me-4'>
            <a 
              onClick={() => {
                navigate('/orderDetails', {order: order})
              }} 
              className='btn btn-success text-light btnGreen'
            >
              View Order
            </a>
          </div>
        </div> */}
        
      </Card>
  )
};

export default OrderCard;