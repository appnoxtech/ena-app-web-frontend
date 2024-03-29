import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Button, Card, InputNumber, Space } from 'antd';
import '../../assets/global/global.css';
import { useUpdateBidAmount } from '../../hooks/carts/updateBidAmount';
import { useUpdateCartItem } from '../../hooks/carts/updateCartItem';
import { orderType, products } from '../../types';

interface propsType {
    item: products,
    handleItemCountChange: (item: products, ItemQuantity: number) => {},
    handleBidAmountChange: (item: products, bidAmount: number) => {},
    handleRemoveCart: (item: products) => {}
}
const ProductCard: React.FC<propsType> = (
    { item,
      handleItemCountChange, 
      handleBidAmountChange, 
      handleRemoveCart 
    }) => {
    const [ItemQuantity, setItemQuantity] = useState(item.quantity);
    const [bidAmount, setBidAmount] = useState(item.bidAmount);

    return (
        <Card
            title={item.vegName}
            className="shadow-lg my-3"
            extra={
                <Button
                    type="primary"
                    danger
                    shape="circle"
                    icon={<FaTrash />}
                    onClick={() => handleRemoveCart(item)}
                />
            }
        >
            <div className="col-12 d-lg-flex justify-content-between align-item-center">
                <div className="col-12 col-lg-6 d-flex justify-content-center align-item-center">
                    <div className="col-4 pt-3">
                        <img src={item.image} alt='img' className='img-fluid col-8 col-lg-8' />
                    </div>
                    <div className="col-8 pt-3">
                        <div className="">
                            <h4 className='font-green'>Seller Price: {`€ ${item.price}`}</h4>
                        </div>
                        <div className="d-flex">
                            <p className='fs-7 mb-0 me-2 fontWeight-600'>Quanity: </p>
                            <p className='fs-7 mb-0'>{`${item.quantity} KG`}</p>
                        </div>
                        <div className="d-flex">
                            <p className='fs-7 mb-0 me-2 fontWeight-600'>Total: </p>
                            <p className='fs-7 mb-0'>{`${(item.price * item.quantity).toFixed(2)}`}</p>
                        </div>
                        <div className="d-flex">
                            <p className='fs-7 mb-0 me-2 fontWeight-600'>Bid Total: </p>
                            <p className='fs-7 mb-0'>{`${(item.bidAmount * item.quantity).toFixed(2)}`}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 pt-3">
                    <div className="d-flex justify-content-end mb-3 mb-lg-5">
                        <div className='d-flex col-12 justify-content-between'>
                            <div className="col-4 col-lg-5">
                                <InputNumber type={'number'} min={1} value={ItemQuantity} onChange={(value) => {
                                    setItemQuantity(value)
                                }} />
                            </div>
                            <div className="col-6">
                                <Button
                                    style={{ width: '100%' }}
                                    type="primary"
                                    onClick={() => {
                                        handleItemCountChange(item, ItemQuantity);
                                    }}
                                >
                                    Update Qty.
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className='d-flex col-12 justify-content-between'>
                            <div className="col-4">
                                <InputNumber type={'number'} min={1} value={bidAmount} onChange={(value) => setBidAmount(value)} />
                            </div>
                            <div className="col-6">
                                <Button
                                    style={{ width: '100%' }}
                                    type="primary"
                                    onClick={() => {
                                        handleBidAmountChange(item, bidAmount);
                                    }}
                                >
                                    Place Your Bid
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Card>
    )
}
export default ProductCard;