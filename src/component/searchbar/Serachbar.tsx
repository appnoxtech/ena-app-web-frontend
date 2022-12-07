import React from 'react'
import './Searchbar.css'
function Searchbar() {
  return (
    <div className='search_background d-flex justify-content-center align-item-center border bg-dark col-12'>
      <div>
        <div className='text d-flex justify-content-center  align-item-center w-75 mx-auto text-center py-1'>
          Get the best deal for your business
        </div>
        <div className='d-flex border_outer justify-content-center align-items-center w-75  mx-auto  bg-light'>
          <input
            type='text'
            placeholder='Search for products or brands.....'
            className='search_bar bg-light border-0'
          />
          <i className='fa fa-search search-icon mt-3 mb-3 ' aria-hidden='true'></i>
        </div>
      </div>
    </div>
  )
}
export default Searchbar