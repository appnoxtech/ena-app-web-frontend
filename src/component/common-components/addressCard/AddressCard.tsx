import React from 'react'
import { NavLink } from 'react-router-dom'
import './AddressCard.css'
import { addressType } from '../../../types';

function AddressCard(prop:any) {
  const selectedId = localStorage.getItem('addressId');
  const handleRadioClick = (address: addressType) => {
    localStorage.setItem('addressId', address._id);
    prop.setSelectedAddress(address);
    prop.setShowAddressList(false);
  }
  return (
    <>
      <div className={`col-12 border_radius1 ${prop.selected} height_address_card border back-g-lightwhite mb-4 py-4 px-md-5 mx-auto`}>
        <div className='col-12 d-flex justify-content-between'>
          <p className='addressCard_heading'>Address</p>
        </div>
        <div className='col-12'>
          <p className=''>{prop.address.name}</p>
          <p className='address'>
            {`${prop.address.addressInfo.buildingName}, ${prop.address.addressInfo.street}, ${prop.address.addressInfo.city}, ${prop.address.addressInfo.pincode}`}
          </p>
        </div>
        <div className='col-12 d-flex justify-content-between'>
          <p>Phone : {prop.address.phoneNumber}</p>
          <div className='form-check '>
            <label className='mt-2 form-check-label make_default' htmlFor='flexRadioDefault2'>
              Default
            </label>
            <input
              className='form-check-input form_radio p-3'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault2'
              checked={prop.address._id === selectedId}
              onClick={() => handleRadioClick(prop.address)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AddressCard
