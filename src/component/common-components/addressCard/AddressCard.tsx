import React from 'react'
import { NavLink } from 'react-router-dom'
import './AddressCard.css'

function AddressCard(prop:any) {
  return (
    <>
      <div className={`col-12 border_radius1 ${prop.selected} height_address_card border back-g-lightwhite mb-4 py-4 px-md-5 mx-auto`}>
        <div className='col-12 d-flex justify-content-between'>
          <p className='addressCard_heading'>Address</p>
          {/* <NavLink to='/changeAddress'><p className='change_addressbtn'>Change Address</p></NavLink> */}
          <p className='change_addressbtn' onClick={() => prop.setAddress({})}>Change Address</p>
        </div>
        <div className='col-12'>
          <p className=''>{prop.address.name}</p>
          <p className='address'>
            {`${prop.address.addressInfo.buildingName}, ${prop.address.addressInfo.street}, ${prop.address.addressInfo.city}, ${prop.address.addressInfo.pincode}`}
          </p>
        </div>
        <div className='col-12 d-flex justify-content-between'>
          <p>Phone : {prop.address.phoneNumber}</p>
          <div className='form-check'>
            <label className='form-check-label make_default' htmlFor='flexRadioDefault2'>
              Default
            </label>
            <input
              className='form-check-input form_radio'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault2'
              onClick={() => localStorage.setItem('addressId', prop.address._id)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AddressCard
