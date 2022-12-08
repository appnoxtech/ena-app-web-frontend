import React from 'react'
import LoginInput from '../loginInput'
import './AddAddressComp.css'
import '../../../assets/global/global.css'

function AddAddress() {
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
      <div className='container-fluid form_address'>
        <div className='row form_address_row rounded-3'>
          <div className='row col-12 mx-lg-3 px-lg-5 gx-0'>
            <div className='col-12 fontWeight-600 addAddress_heading'>Contact Info</div>
            <hr className='mt-4' />
            <div className='col-12'>
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
                    class='form-control mt-3 d-none d-md-block d-lg-block'
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
            <div className='col-12 row gx-0 d-flex justify-content-between'>
                <div className='col-6 gx-0 pe-4'>
              <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                {shippingAddressSelect[0].lable}
              </label>
              <select className='form-select form-control mt-3' aria-label='Default select example'>
                <option selected disabled>Country</option>
                <option value='USA'>USA</option>
                <option value='INDIA'>India</option>
                <option value='UK'>UK</option>
              </select>
              </div>
              <div className='col-6 ps-4'>
              <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                {shippingAddressSelect[1].lable}
              </label>
              <select className='form-select form-control mt-3' aria-label='Default select example'>
                <option className='option' selected disabled>State</option>
                <option className='option' value='USA'>USA</option>
                <option value='INDIA'>India</option>
                <option value='UK'>UK</option>
              </select>
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
                    class='form-control mt-3 d-none d-md-block d-lg-block'
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
            <div className="col-12 text-end">
                <button type='button' className='btn w-25 h-75 mt-4 fontWeight-600 button rounded border-2 cancel_button'>
                  Cancel
                </button>
                <button type='button' className='btn w-25 h-75 ms-4 mt-4 fontWeight-600 rounded border-2 button'>
                  Save Address
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddAddress
