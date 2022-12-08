import React from 'react'
import Breadcrumb from '../../../component/common/breadcrumb/Breadcrumb'
import AddAddressComp from '../../../component/common/breadcrumb/Breadcrumb'

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
