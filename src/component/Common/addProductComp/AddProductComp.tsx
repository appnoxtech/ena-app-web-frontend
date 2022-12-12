import React from 'react'
import LoginInput from '../loginInput/index'
import './AddProductComp.css'
import '../addAddressComp/AddAddressComp.css'
import '../../../assets/global/global.css'
import { NavLink, useNavigate } from 'react-router-dom'
import DropZoneComp from '../dropZoneComp/DropZoneComp'


function AddProductComp() {
  const history = useNavigate()
  const ProductInfo = [
    {
      lable: 'Name',
      type: 'text',
      id: 'username',
      name: 'username',
      placeholder: 'Enter your name',
    },
    {
      lable: 'Price',
      type: 'text',
      id: 'price',
      name: 'price',
      placeholder: 'Enter price',
    },
    {
      lable: 'Unit',
      type: 'select',
      id: 'select',
      name: 'select',
      placeholder: 'Enter unit',
    },
    {
      lable: 'Minimum Order Quantity',
      type: 'number',
      id: 'MinimumOrder',
      name: 'MinimumOrder',
      placeholder: 'Enter quantity',
    },
    {
      lable: 'Product Description',
      type: 'text',
      id: 'product_desc',
      name: 'product_desc',
      placeholder: 'Enter product description here...',
    },
  ]

  return (
    <>
      <div className='row col-12 mx-auto px-lg-5 gx-0'>
        <div className='col-12 fontWeight-600 addAddress_heading'>Product Info</div>
        <hr className='mt-4' />
        <div className='col-11 col-md-12 mx-auto'>
          <>
            <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
              {ProductInfo[0].lable}
            </label>
            <LoginInput
              type={ProductInfo[0].type}
              name={ProductInfo[0].name}
              id={ProductInfo[0].id}
              placeholder={ProductInfo[0].placeholder}
              class='form-control  mt-3 d-none d-md-block'
            />
            <LoginInput
              type={ProductInfo[0].type}
              name={ProductInfo[0].name}
              id={ProductInfo[0].id}
              placeholder={ProductInfo[0].placeholder}
              class='form-control mt-3 d-md-none d-lg-none d-sm-block'
            />
          </>
          <div className='mx-auto row gx-0 d-flex justify-content-between'>
            <div className='col-6 gx-0 pe-4'>
              <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                {ProductInfo[1].lable}
              </label>
              <LoginInput
                type={ProductInfo[1].type}
                name={ProductInfo[1].name}
                id={ProductInfo[1].id}
                placeholder={ProductInfo[1].placeholder}
                class='form-control  mt-3 d-none d-md-block'
              />
              <LoginInput
                type={ProductInfo[1].type}
                name={ProductInfo[1].name}
                id={ProductInfo[1].id}
                placeholder={ProductInfo[1].placeholder}
                class='form-control mt-3 d-md-none d-lg-none d-sm-block'
              />
            </div>

            <div className='col-6 ps-4'>
              <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                {ProductInfo[2].lable}
              </label>
              <select className='form-select form-control mt-3' aria-label='Default select example'>
                <option selected disabled>
                  Unit
                </option>
                <option value='KG'>KG</option>
                <option value='Pound'>Pound</option>
                <option value='Ton'>Ton</option>
              </select>
            </div>
          </div>
          <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
            {ProductInfo[3].lable}
          </label>
          <LoginInput
            type={ProductInfo[3].type}
            name={ProductInfo[3].name}
            id={ProductInfo[3].id}
            placeholder={ProductInfo[3].placeholder}
            class='form-control  mt-3 d-none d-md-block'
          />
          <LoginInput
            type={ProductInfo[3].type}
            name={ProductInfo[3].name}
            id={ProductInfo[3].id}
            placeholder={ProductInfo[3].placeholder}
            class='form-control mt-3 d-md-none d-lg-none d-sm-block'
          />
          <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
            {ProductInfo[4].lable}
          </label>
          <textarea
            className='form-control mt-3 d-none d-md-block'
            placeholder={ProductInfo[4].placeholder}
            id='floatingTextarea'
            style={{height: "25vh"}}
          />
          <textarea
            className='form-control mt-3 d-md-none d-lg-none d-sm-block'
            placeholder='Leave a comment here'
            id='floatingTextarea'
          />
          <div className='col-12 fontWeight-600 addAddress_heading mt-3'>Upload Product Image</div>
        <hr className='mt-4' />


        {/* dropzoneComp import  */}

        <DropZoneComp />

        </div>

        <div className='col-12 row m-0 mt-5 p-0 my-3 d-flex justify-content-center justify-content-md-end'>
          <div className='col-6 col-md-3'>
            <button
              type='button'
              onClick={() => history(-1)}
              className='btn py-3 lh-1 border-3 w-100 fontWeight-600 button2 cancel_button'
            >
              Cancel
            </button>
          </div>

          <div className='col-6 col-md-3 p-0 p-sm-auto'>
              <button onClick={()=> history('/')} type='button' className='btn py-3 lh-1 border w-100 fontWeight-600 button1  '>
                Add Address
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProductComp
