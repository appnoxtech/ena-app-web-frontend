import React from 'react'
import AddAddressComp from '../../../component/Common/addAddressComp/AddAddressComp'
import Breadcrumb from '../../../component/Common/breadcrumb/Breadcrumb'
import OrderCard from '../../../component/Common/orderCard/OrderCard'
import './CheckoutWaddress.css'
import '../../../assets/global/global.css'

function checkoutWaddress() {
  return (
    <div className='container-fluid mx-0'>
      <div className='row d-flex justify-content-between m-0 p-0'>
        <div className='col-12 d-none d-md-block'>
          <Breadcrumb />
        </div>
        <div className='col-12 d-flex justify-content-center row mx-auto px-md-5'>
        <div className='col-12 col-lg-8 mx-auto border back-g-lightwhite py-4 border_radius1 px-md-5'>
          <AddAddressComp />
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

export default checkoutWaddress