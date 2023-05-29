import React, { useEffect } from 'react'
import CartCom from '../../component/cart/CartCom'
import '../../assets/global/global.css';
const Cart = () => {
  useEffect(() => {
    scrollTo(0,0);
  },[]);
  
  return (
    <div className='col-12 mt-1 mt-lg-2'>
      <CartCom />
    </div>
  )
}

export default Cart
