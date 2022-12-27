import React, { FC, useState } from 'react';
import { Button, Modal } from 'antd';
import { Alert, Space } from 'antd';
import './ProductCard.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { Avatar, Card, notification } from 'antd';
import { DeleteProductServive } from '../../../services/product/productService';
const { Meta } = Card;



const ProductCard = ({ product, handleCardEditClick, getProductList, changeCategorie }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const deleteProduct = async() => {
    try {
      const data = {productId: product._id}
      const res = await DeleteProductServive(data);
      await getProductList();
      setModalOpen(false)
    } catch (error) {
      openNotification(error.message);
    }
 }

const openNotification = (message) => {
  api.info({
    message: `Error`,
    description: message,
    placement: 'topLeft',
  });
};
  return (
    <>
    {contextHolder}
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
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        }
        actions={[
          //   <SettingOutlined key="setting" />,
          <EditOutlined size={'large'} key="edit" onClick={() => handleCardEditClick(product)} />,
          <DeleteFilled onClick={() => setModalOpen(true)} size={'large'} key="ellipsis" color='red' />,
        ]}
      >
        <Meta
          //   avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={product.engVegName}
          description={product.description ? `${product.description.substring(0,28)}...` : "This is the description"}
        />
      </Card>
      <Modal
        title="Are you sure you want to delete this product !"
        centered
        open={modalOpen}
        onOk={() => deleteProduct()}
        onCancel={() => setModalOpen(false)}
      >
        
      </Modal>
    </>
  
  )
};
export default ProductCard;