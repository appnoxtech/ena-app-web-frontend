import React, { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, InputNumber, Radio, Space, Divider } from 'antd';
import { FaTrash } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
// import Card from 'react-bootstrap/Card';
import { Card } from 'antd';
import './Card.css';
import { decreaseCartCount, increaseCartCount } from '../../../redux/reducer/cart/CartReducer';
import { useAddItemToCartHooks } from '../../../hooks/carts/addintoCart';
import { useRemoveItemFromCart } from '../../../hooks/carts/removeFromCart';
import { useGetCartList } from '../../../hooks/carts/getCartList';
import { useUpdateCartItem } from '../../../hooks/carts/updateCartItem';

const { Meta } = Card;

const CardComponent: FC<any> = ({ cardData, indexData, wishListHandler, currCat }) => {
  const [itemCount, setItemCount] = useState(10);
  const [cardClassName, setCardClassName] = useState('product-card');
  const [isItemAddedToCart, setIsItemAddedToCart] = useState(false);
  const handleAddItemToCart = useAddItemToCartHooks();
  const updateCartItem = useUpdateCartItem();
  const cartData = useGetCartList();
  const handleRemoveItemFromCart = useRemoveItemFromCart();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleAddtoCart = () => {
    //navigate('/product/details',{state:cardData})
    const data = {
      ...cardData,
      productId: cardData._id,
      quantity: itemCount,
      bidAmount: cardData.price,
      price: cardData.price,
    }
    handleAddItemToCart(data);
    dispatch(increaseCartCount());
    setIsItemAddedToCart(true);
  }

  const handleRemoveFromCart = async () => {
    //dispatch(decreaseCartCount());
    const data = {
      productId: cardData._id,
      removeProduct: 1
    };
    await handleRemoveItemFromCart(data);
    dispatch(decreaseCartCount());
    setIsItemAddedToCart(false);
    setItemCount(10);
  }

  const handleItemCountChange = async (value: any) => {
    setItemCount(value);
  }

  useEffect(() => {
    const list = localStorage.getItem('cartData');

    if (list) {
      const cartList = JSON.parse(list);
      const item = cartList.find((item: any) => item.productId === cardData._id);
      if (item) {
        setItemCount(item.quantity);
        setIsItemAddedToCart(true)
      } else {
        setIsItemAddedToCart(false)
      }
    }
  }, [cardData]);

  const handleCountChange = (count: any) => {
    setItemCount(count);
  }

  const decreseItemCount = () => {
    if (itemCount <= 1) {
      return;
    }
    setItemCount(oldCount => --oldCount);
  }

  const handleStep = (value, info) => {
    const { type } = info;
    if (type === 'down') {
      decreseItemCount();
    } else {
      handleCountChange(value);
    }


  }


  return (
    <Card
      hoverable
      style={{ width: '100%' }}
      cover={
        <img alt="example" height={240} width={240} style={{ objectFit: 'contain', objectPosition: 'center' }} src={cardData.image} />
      }
    >
      <Meta className='ms-1' title={cardData.engVegName} />
      <Meta className='ms-1' title={`kn ${cardData.price}/kg`} />
      <div
        className="rounded-2 col-md-12 col-12 d-flex justify-content-between align-items-center mt-3">
        <div className="col-8 col-md-7">
          <InputNumber
            type={'number'}
            addonAfter={'Kg'}
            width={25}
            height={30}
            disabled={isItemAddedToCart}
            size="large"
            value={itemCount}
            min={1}
            max={100000}
            defaultValue={3}
            onChange={(value) => handleItemCountChange(value)}
            onStep={(value, info) => handleStep(value, info)}
          />
        </div>
        <div className="ps-2">
          {
            isItemAddedToCart ?
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<FaTrash />}
                size={'large'}
                onClick={handleRemoveFromCart}
              />
              :

              <Button
                type="primary"
                shape="circle"
                icon={<FaCartPlus />}
                size={'large'}
                onClick={handleAddtoCart}
              />
          }
        </div>


      </div>
    </Card>
  )
}

export default CardComponent
