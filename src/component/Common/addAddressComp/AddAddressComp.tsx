import React from 'react'
import LoginInput from '../LoginInput'
import './AddAddressComp.css'
import '../../../Assets/global/global.css'
import { NavLink, useNavigate } from 'react-router-dom'

function AddAddress() {

  const history = useNavigate();
  const contactInfoItem = [
    {
      lable: 'Name',
      type: 'text',
      id: 'username',
      name: 'username',
      placeholder: 'Enter your name',
    },
    {
      lable: 'Phone Number',
      type: 'number',
      id: 'phone',
      name: 'phone',
      placeholder: 'Enter your phone number',
    },
  ]

  const shippingAddressSelect = [
    {
        lable: 'Country',
        country: [
            {
                name: 'USA',
                value: 'USA',
            },
            {
                name: 'India',
                value: 'India',
            },
            {
                name: 'UK',
                value: 'UK',
            }
        ],
    },
    {
        lable: 'State',
        States:[
            {
                name: 'USA',
                value: 'USA',
            },
            {
                name: 'India',
                value: 'India',
            },
            {
                name: 'UK',
                value: 'UK',
            }
        ]
    }
    
  ]
  const shippingAddress1 = [
    {
      lable: 'City',
      type: 'text',
      id: 'city',
      name: 'city',
      placeholder: 'Enter city',
    },
    {
      lable: 'Pincode',
      type: 'number',
      id: 'pincode',
      name: 'pincode',
      placeholder: 'Enter pincode',
    },
  ]
  const shippingAddress = [
    {
      lable: 'Locality / Area / Street',
      type: 'text',
      id: 'address',
      name: 'address',
      placeholder: 'Enter locality / area / street',
    },
    {
      lable: 'Flat No. / Building Name',
      type: 'text',
      id: 'address',
      name: 'address',
      placeholder: 'Enter flat no. / building name',
    },
  ]
  return (
    <>
          <div className='row col-12 mx-auto px-lg-5 gx-0'>
            <div className='col-12 fontWeight-600 addAddress_heading'>Contact Info</div>
            <hr className='mt-4' />
            <div className='col-11 col-md-12 mx-auto'>
              {contactInfoItem.map((item) => (
                <>
                  <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                    {item.lable}
                  </label>
                  <LoginInput
                    type={item.type}
                    name={item.name}
                    id={item.id}
                    placeholder={item.placeholder}
                    class='form-control  mt-3 d-none d-md-block'
                  />
                  <LoginInput
                    type={item.type}
                    name={item.name}
                    id={item.id}
                    placeholder={item.placeholder}
                    class='form-control mt-3 d-md-none d-lg-none d-sm-block'
                  />
                </>
              ))}
            </div>
            <div className='col-12 fontWeight-600 mt-4 addAddress_heading'>Shipping Address</div>
            <hr className='mt-4' />
            <div className='col-11 col-md-12 mx-auto row gx-0 d-flex justify-content-between'>
                <div className='col-6 gx-0 pe-4'>
              <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                {shippingAddressSelect[0].lable}
              </label>
              <select className='form-select form-control mt-3' aria-label='Default select example'>
                <option selected disabled>Select Country</option>
                <option value='USA'>USA</option>
                <option value='INDIA'>India</option>
                <option value='UK'>UK</option>
              </select>
              </div>
              <div className='col-6 ps-4'>
              <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                {shippingAddressSelect[1].lable}
              </label>
              <LoginInput
                    type='text'
                    name="state"
                    id='state'
                    placeholder='Enter State'
                    class='form-control  mt-3 d-none d-md-block'
                  />
                  <LoginInput
                    type='text'
                    name="state"
                    id='state'
                    placeholder='Enter state'
                    class='form-control mt-3 d-md-none d-lg-none d-sm-block'
                  />
              </div>
              <div className='col-6 gx-0 pe-4'>
              <>
                  <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                    {shippingAddress1[0].lable}
                  </label>
                  <LoginInput
                    type={shippingAddress1[0].type}
                    name={shippingAddress1[0].name}
                    id={shippingAddress1[0].id}
                    placeholder={shippingAddress1[0].placeholder}
                    class='form-control mt-3 d-none d-md-block d-lg-block'
                  />
                  <LoginInput
                    type={shippingAddress1[0].type}
                    name={shippingAddress1[0].name}
                    id={shippingAddress1[0].id}
                    placeholder={shippingAddress1[0].placeholder}
                    class='form-control mt-3 d-md-none d-lg-none d-sm-block'
                  />
                </>
              </div>
              <div className='col-6 ps-4'>
              <>
                  <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                    {shippingAddress1[1].lable}
                  </label>
                  <LoginInput
                    type={shippingAddress1[1].type}
                    name={shippingAddress1[1].name}
                    id={shippingAddress1[1].id}
                    placeholder={shippingAddress1[1].placeholder}
                    class='form-control mt-3 d-none d-md-block d-lg-block'
                  />
                  <LoginInput
                    type={shippingAddress1[1].type}
                    name={shippingAddress1[1].name}
                    id={shippingAddress1[1].id}
                    placeholder={shippingAddress1[1].placeholder}
                    class='form-control mt-3 d-md-none d-lg-none d-sm-block'
                  />
                </>
              </div>
              {shippingAddress.map((item) => (
                <>
                  <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                    {item.lable}
                  </label>
                  <LoginInput
                    type={item.type}
                    name={item.name}
                    id={item.id}
                    placeholder={item.placeholder}
                    class='form-control  mt-3 d-none d-md-block'
                  />
                  <LoginInput
                    type={item.type}
                    name={item.name}
                    id={item.id}
                    placeholder={item.placeholder}
                    class='form-control mt-3 d-md-none d-lg-none d-sm-block'
                  />
                </>
              ))}
            </div>
            <div className="col-12 row m-0 mt-5 p-0 my-3 d-flex justify-content-center justify-content-md-end">
              <div className='col-6 col-md-3'>
                <button type='button' onClick={()=>history(-1)} className='btn py-3 lh-1 border-3 w-100 fontWeight-600 button cancel_button'>
                  Cancel
                </button>
              </div>
              
              <div className='col-6 col-md-3 p-0 p-sm-auto'>
                <NavLink to='/addAddress'>
                <button type='button' className='btn py-3 lh-1 border w-100 fontWeight-600 button1  '>
                  Add Address
                </button>
                </NavLink>
              </div>
            </div>
          </div>
    </>
  )
}

export default AddAddress
