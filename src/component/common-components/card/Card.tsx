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
  const handleAddtoCart = async () => {
    // navigate('/product/details',{state:cardData})
    const data = {
      ...cardData,
      productId: cardData._id,
      quantity: itemCount,
      price: cardData.price,
    }
    await handleAddItemToCart(data);
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
    console.log('value', value);
    
    const data = {
      ...cardData,
      productId: cardData._id,
      quantity: value,
      price: cardData.price,
    }
    setItemCount(value);
  }

  console.log('cartData', cardData);
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
  //   <div className='overflow-hidden h-100' style={{borderRadius:'10px',border:'0.5px solid #efefef'}}>
  //     <div className='card border-0 col-12 overflow-hidden '>
  //       <div className='col-12 m-0 p-0 carrot_background px-2 px-md-0'>
  //         <div className='border-0 col-12 text-center text'>
  //           <img src={cardData.image} className='img_data' alt='...' />
  //         </div>
  //       </div>
  //       <div className='fabDiv'>
  //         {indexData % 2 == 0 ? (

  //         <div className='rounded-end Off_container mt-1 themecolor '>
  //           <p className=' p-0 m-0 px-2 py-1 text-light'>10% off</p>
  //         </div>
  //         ):''}

  //         {/* <button onClick={()=>wishListHandler(indexData)} className='ms-auto px-2 mr-5 bg-light border border-none border-0'>
  //           <i className={cardData.isFav?'fa fa-heart red':'fa fa-heart-o heart_fav_icon mt-1'} aria-hidden='true'></i>

  //         </button> */}
  //       </div>

  //       <div className='card-body ps-0 pe-0 col-12 px-2 px-md-2'>
  //         <p className='card-title'>{cardData.vegName} </p>
  //         <p className='card-text  '>
  //           kn 35.2/kg <s className='crossTextRelated kg_container'>kn 35.2/kg</s>
  //         </p>
  //         <div className='primary_quantity d-flex align-items-center justify-content-between'>
  //           <div className='radius_container d-flex  align-items-center justify-content-between border'>
  //             <p className=' col-6 font_container m-0 p-0 py-2 text-center'>kg</p>
  //             <input type={"number"} className=' col-6  border border-0 border-none m-0 p-0 text-center border border-none border-0 h-100'placeholder='10'/>
  //           </div>
  //           <div className=' btnRadius col-6 themecolor overflow-hidden mx-1 py-2 '>
  //             <button onClick={()=>navigate('/product/details',{state:cardData})} className='themecolor border border-0 w-100 text-light'>
  //               Add
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //  </div>
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
        {/* <div className="rounded-2 d-flex justify-content-center align-items-center me-3">
          <div className="width-20 add_quantity_container" onClick={increaseItemCount}>
            
            <FaPlus color='white' />
          </div>
          <div className="border border-secondary border-start-0 border-end-0 quantitiy-container h-100 width-40">
          <input
            type={"number"}
            className='col-8 w-100 border p-3 border-none text-center border border-none border-0 h-100'
            value={itemCount}
            onChange={(e) => handleItemCountChange(e.target.value)}
          />
          </div>
          <div className="border border-secondary border-end-0 unit-container width-20">
            <p className='unit-inp'>
              {cardData.unit}
            </p>
          </div>
          <div className="width-20  minus_quantity_container" onClick={decreseItemCount}>
            <FaMinus color='white' />
          </div>
        </div> */}
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
