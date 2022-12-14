import React, { useState, FC } from 'react'
import AddProductComp from '../../component/common-components/addProductComp/AddProductComp'
import Breadcrumb from '../../component/common-components/breadcrumb/Breadcrumb'

const AddProduct: FC<any> = () => {
    return (
        <div className='col-12'>
          <div className='row m-0 p-0'>
            <div className='col-12 d-none d-lg-block'>
              <Breadcrumb pathName='Shopping Cart &nbsp;/&nbsp;Checkout &nbsp;/&nbsp;Change Address' />
            </div>
            <div className='col-12 my-2 my-md-4'>
            <div className='container-fluid col-12 col-md-8 pt-4 back-g-lightwhite border rounded-3'>
            <div className='row form_address_row p-sm-5 p-0 py-sm-3 py-0 '>
              <AddProductComp />
              </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

export default AddProduct
