import React from 'react'
import AddressCard from '../../../component/common/addressCard/AddressCard'
import Breadcrumb from '../../../component/common/breadcrumb/Breadcrumb'
import OrderCard from '../../../component/common/orderCard/OrderCard'
import '../../../assets/global/global.css'

function Checkout() {
  return (
    <div className='container-fluid mx-0'>
      <div className='row d-flex justify-content-between m-0 p-0'>
        <div className='col-12 d-none d-md-block'>
          <Breadcrumb />
        </div>
        <div className='col-12 d-flex justify-content-center row mx-auto px-md-5'>
        <div className='col-12 col-lg-8'>
          <AddressCard />
          <AddressCard />
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