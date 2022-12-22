import React from 'react';
import { Steps } from 'antd';
const description = 'This is a description.';
const App = () => (
  <Steps
    direction="vertical"
    size="small"
    current={1}
    items={[
      {
        title: 'Ordered',
        description,
      },
      {
        title: 'Shipped',
        description,
      },
      {
        title: 'Out For Delivery',
        description,
      },
      {
        title: 'Delivered',
        description,
      },
    ]}
  />
);
export default App;