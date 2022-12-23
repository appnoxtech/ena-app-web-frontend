import React, { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { DownloadOutlined } from '@ant-design/icons';
import { Button,InputNumber, Radio, Space, Divider } from 'antd';
import { FaTrash } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import Card from 'react-bootstrap/Card';
import './Card.css';
import { decreaseCartCount, increaseCartCount } from '../../../redux/reducer/cart/CartReducer';
import { useAddItemToCartHooks } from '../../../hooks/carts/addintoCart';
import { useRemoveItemFromCart } from '../../../hooks/carts/removeFromCart';
import { useGetCartList } from '../../../hooks/carts/getCartList';
import { useUpdateCartItem } from '../../../hooks/carts/updateCartItem';

const CardComponent: FC<any> = ({ cardData, indexData, wishListHandler }) => {
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
    // navigate('/product/details',{state:cardData})
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

  const handleItemCountChange = async(value: any) => {
    setItemCount(value);
  }

  useEffect(() => {
    if (cartData.length > 0) {
      const item = cartData.find((item: any) => item.productId === cardData._id);
      if (item) {
        setItemCount(item.quantity);
        setIsItemAddedToCart(true)
      }
    }
  }, []);
  
  const handleCountChange = (count:any) => {
     setItemCount(count);
  }

  const decreseItemCount = () => {
    if(itemCount <= 1){
      return;
    }
    setItemCount(oldCount => --oldCount);
  }

  const handleStep = (value, info) => {
    const {type} = info;
    if(type === 'down'){
      decreseItemCount();
    }else{
      handleCountChange(value);
    }
    
    
  }


  return (
    <Card 
      // onMouseOver={() => setCardClassName('card-image-hover')}
      // onMouseLeave={() => setCardClassName('card-image')}
      className={'h-100'}
    >
    <Card.Img variant="top" className={'card-image'} src={cardData.image} />
    <Card.Body>
      <Card.Title>{cardData.engVegName}</Card.Title>
      <Card.Text>
        <p className='card-text'>
            kn {cardData.price}/kg
        </p>
      </Card.Text>
      <div 
        className="rounded-2 col-md-12 col-12 d-flex justify-content-md-end justify-content-between align-items-center">
        <div className="col-8 col-md-7">
        <InputNumber 
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
    </Card.Body>
    </Card>
  )
}

export default CardComponent
