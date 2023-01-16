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

const getStatus = (status: string) => {
    if(status === 'CANCELED'){
       return 'Cancelled'
    }else if(status === 'CREATED'){
      return 'Created'
    }else if(status === 'OFD') {
      return 'Out For Delivery'
    }else if(status === 'COMPLETED'){
      return 'Delivered'
    }else {
      return status;
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
          Order Status: {getStatus(order.status)}
        </p>
        <p className='h6 fontWeight-500'>
          Order Total: {order.netAmount}
        </p>
      </Card>
  )
};

export default OrderCard;