import React from 'react'
import CartCom from '../../component/cart/CartCom'
import Navbar from '../../component/navbar/NavBar'

const Cart = () => {
  return (
    <div className=' col-12'>
            <Navbar />
            <div className='col-12'>
                <CartCom />
            </div>
        </div>
  )
}

export default Cart