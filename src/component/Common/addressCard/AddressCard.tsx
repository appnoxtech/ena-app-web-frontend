import React from 'react'
import './AddressCard.css'

function AddressCard() {
  return (
    <>
      <div className='col-12 border_radius1 border_color_green height_address_card border back-g-lightwhite mb-4 py-4 px-md-5 mx-auto'>
        <div className='col-12 d-flex justify-content-between'>
          <p className='addressCard_heading'>Address</p>
          <p>Change Address</p>
        </div>
        <div className='col-12 d-flex'>
          <p>Vijay Mahesh Singh</p>
          <p>B22 Stewart Street, Indianpolis, 445566</p>
        </div>
        <div className='col-12 d-flex justify-content-between'>
          <p>Phone : 3225456683</p>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault2'
              checked
            />
            <label className='form-check-label' htmlFor='flexRadioDefault2'>
              Default
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddressCard
