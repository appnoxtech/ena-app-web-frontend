import React, {FC} from 'react';
import { Steps } from 'antd';

const description = 'This is a description.';
const OrderSteps: FC<any> = () => (
  <Steps
    direction="vertical"
    current={1}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);

export default OrderSteps;