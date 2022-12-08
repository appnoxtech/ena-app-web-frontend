import React from 'react'
import AddAddressComp from '../../../Component/common/addAddressComp/AddAddressComp'
import Breadcrumb from '../../../Component/common/breadcrumb/Breadcrumb'

function AddAddress() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <Breadcrumb />
        </div>
        <div className='col-12 mt-4'>
          <AddAddressComp />
        </div>
      </div>
    </div>
  )
}

export default AddAddress
