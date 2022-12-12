import React from 'react'
import AddressCard from '../../../component/Common/addressCard/AddressCard'
import Breadcrumb from '../../../component/Common/breadcrumb/Breadcrumb'
import OrderCard from '../../../component/Common/orderCard/OrderCard'
import '../../../assets/global/global.css'
import { NavLink } from 'react-router-dom'

function Checkout() {
  return (
    <div className='container-fluid mx-0'>
      <div className='row d-flex justify-content-between m-0 p-0'>
        <div className='col-12 d-none d-md-block mb-4'>
          <Breadcrumb pathName='Shopping Cart &nbsp;/&nbsp;Checkout' />
        </div>
        <div className='col-12 d-flex justify-content-center row mx-auto px-md-5'>
        <div className='col-12 col-lg-8'>
          <AddressCard username='Gorann' address='822 Stewart Street, croatia, 445566' selected='selected'/>
          <AddressCard username='Vijay Mahesh Singh' address='822 Stewart Street, Indianapolis, 445566' />
          <div className='col-12 col-lg-3 mt-2 float-end'>
          <NavLink to='/addAddress'>
                <button type='button' className='btn py-3 lh-1 border w-100 fontWeight-600 button1  '>
                  Add Address
                </button>
                </NavLink>
                </div>
        </div>
          <div className="col-lg-4 col-12 mt-5 mt-lg-0">
          <div className="container-fluid px-4 border border_radius1 py-4 back-g-lightwhite">
            <OrderCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout