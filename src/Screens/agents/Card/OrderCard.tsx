import React,{FC, useEffect, useState} from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { orderType } from '../../../types';

type PropTypes = {
 order: orderType,
};

const getDate = (data: number) => {
  var date = new Date(data);
  return date.toLocaleDateString();
}

const setCardBgColor = (status: string) => {
  if(status === 'ASSIGNED') {
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
      </Card>
  )
};

export default OrderCard;