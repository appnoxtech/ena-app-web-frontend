import React, { useEffect } from 'react'
import CartCom from '../../component/cart/CartCom'

const Cart = () => {
  useEffect(() => {
    scrollTo(0,0);
  },[]);
  
  return (
    <div className='col-12'>
      <CartCom />
    </div>
  )
}

export default Cart
