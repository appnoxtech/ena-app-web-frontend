import React from 'react';
import './ProductCard.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;


const ProductCard = ({product}) => (
  <Card
    hoverable
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="vegetable"
        src={product.image}
        height={297}
        style={{objectFit: 'contain', objectPosition: 'center'}}
      />
    }
    actions={[
    //   <SettingOutlined key="setting" />,
      <EditOutlined size={'large'} key="edit" />,
      <EllipsisOutlined size={'large'} key="ellipsis" />,
    ]}
  >
    <Meta
    //   avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={product.engVegName}
      description="This is the description"
    />
  </Card>
);
export default ProductCard;