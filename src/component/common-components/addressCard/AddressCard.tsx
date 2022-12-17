import React from 'react'
import { NavLink } from 'react-router-dom'
import './AddressCard.css'

function AddressCard(prop:any) {
  return (
    <>
      <div className={`col-12 border_radius1 ${prop.selected} height_address_card border back-g-lightwhite mb-4 py-4 px-md-5 mx-auto`}>
        <div className='col-12 d-flex justify-content-between'>
          <p className='addressCard_heading'>Address</p>
          <NavLink to='/changeAddress'><p className='change_addressbtn'>Change Address</p></NavLink>
        </div>
        <div className='col-12'>
          <p className=''>{prop.username}</p>
          <p className='address'>{prop.address}</p>
        </div>
        <div className='col-12 d-flex justify-content-between'>
          <p>Phone : 3225456683</p>
          <div className='form-check'>
            <label className='form-check-label make_default' htmlFor='flexRadioDefault2'>
              Default
            </label>
            <input
              className='form-check-input form_radio'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault2'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AddressCard
