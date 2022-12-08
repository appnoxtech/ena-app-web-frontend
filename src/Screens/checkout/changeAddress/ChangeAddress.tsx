import React from 'react'
import AddAddressComp from '../../../Component/common/addAddressComp/AddAddressComp'
import Breadcrumb from '../../../Component/common/breadcrumb/Breadcrumb'

function AddAddress() {
  return (
    <div className='col-12'>
      <div className='row m-0 p-0'>
        <div className='col-12 d-none d-md-block'>
          <Breadcrumb />
        </div>
        <div className='col-12 my-2 my-md-4'>
        <div className='container-fluid col-12 col-md-8 pt-4 back-g-lightwhite'>
        <div className='row form_address_row '>
          <AddAddressComp />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAddress
