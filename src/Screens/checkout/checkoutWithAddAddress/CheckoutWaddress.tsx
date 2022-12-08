import React from 'react'
import AddAddressComp from '../../../Component/common/addAddressComp/AddAddressComp'
import Breadcrumb from '../../../Component/common/breadcrumb/Breadcrumb'
import OrderCard from '../../../Component/common/orderCard/OrderCard'
import './CheckoutWaddress.css'
import '../../../Assets/global/global.css'

function checkoutWaddress() {
  return (
    <div className='container-fluid mx-0'>
      <div className='row d-flex justify-content-between m-0 p-0'>
        <div className='col-12 d-none d-md-block'>
          <Breadcrumb />
        </div>
        <div className='col-12 d-flex justify-content-center row mx-auto px-md-5'>
        <div className='col-12 col-md-8 mx-auto border back-g-lightwhite py-4 border_radius1 px-md-5'>
          <AddAddressComp />
        </div>
          <div className="col-md-4 col-12 mt-5 mt-md-0">
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