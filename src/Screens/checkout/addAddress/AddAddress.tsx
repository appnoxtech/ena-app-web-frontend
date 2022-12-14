import React from 'react'
import Breadcrumb from '../../../component/common-components/breadcrumb/Breadcrumb'
import AddAddressComp from '../../../component/common-components/addAddressComp/AddAddressComp'

function AddAddress() {
  return (
    <div className='col-12'>
      <div className='row m-0 p-0'>
        <div className='col-12 d-none d-lg-block'>
          <Breadcrumb pathName='Shopping Cart &nbsp;/&nbsp;Checkout &nbsp;/&nbsp;Add Address'  />
        </div>
        <div className='col-12 my-2 my-md-4'>
        <div className='container-fluid col-12 col-md-8 pt-4 back-g-lightwhite border rounded-3'>
        <div className='row form_address_row p-sm-5 p-0 py-sm-3 py-0'>
          <AddAddressComp />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAddress