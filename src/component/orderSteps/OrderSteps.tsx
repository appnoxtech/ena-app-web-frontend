import React, {FC} from 'react';
import { Steps } from 'antd';
import { orderStepsProvider } from './OrderStepsProvider';

const stepCountProvider = (orderStatus: string) => {
  if(orderStatus === 'CREATED'){
    return 1;
  }else if(orderStatus === 'ASSIGNED') {
    return 2;
  }else if(orderStatus === 'OFD'){
    return 3;
  }else if(orderStatus === 'COMPLETED'){
    return 4;
  }else if(orderStatus === 'CANCELED'){
    return 3;
  }
}
const OrderSteps: FC<any> = ({orderStatus}) => (
  <Steps
    className='mx-auto'
    direction="vertical"
    current={stepCountProvider(orderStatus)}
    items={orderStepsProvider(orderStatus)}
  />
);

export default OrderSteps;