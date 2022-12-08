import React from 'react'
import CartCom from '../../Component/cart/CartCom'
import Navbar from '../../Component/navbar/NavBar'

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