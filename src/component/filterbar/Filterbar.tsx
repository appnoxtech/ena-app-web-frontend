import React from 'react'
import './Filterbar.css'
const Filterbar = () => {
  return (
    <div className='d-flex flex-column flex-md-row justify-content-between align-items-center py-4'>
      <p className='count_pages ms-2'>Showing 1-40 of 145 items</p>
      <div className='d-flex align-items-center me-2  '>
        <p className='sort_text col-4 m-0 p-0 py-2 ms-4  text-center'>Sort By</p>
        <div className='d-flex bg-white align-items-center justify-content-between'>
          <input type='text' placeholder='A-Z' className='search_bar me-1  border-0  p-3 ' />
          <i className='fa fa-chevron-down arow me-2' aria-hidden='true'></i>
        </div>
      </div>
    </div>
  )
}

export default Filterbar
