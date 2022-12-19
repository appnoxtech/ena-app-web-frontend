import React, { useState, FC, useEffect } from 'react'
import './Searchbar.css'
import {useSelector} from 'react-redux';


const Searchbar:FC<any>=({searchText,setSearchText })=> {
  const isLogin = useSelector((state: any) => state.user.isLogin);
  return (
    <>
    <div className='search_background d-flex justify-content-center align-item-center border bg-dark col-12 d-none d-md-block'>
      <div>
        <h2 className='text d-flex justify-content-center align-item-center w-75 mx-auto text-center py-1'>
          Get the best deal for your business
        </h2>
        <div className='d-flex border_outer justify-content-center align-items-center w-75  mx-auto  bg-light'>
          <input
            // onChange={(val)=>setSearchText(val)}
            // value={searchText}
            onChange={e=>setSearchText(e.target.value)}
            type='text'
            placeholder='Search for products or brands.....'
            className='search_bar bg-light border-0'
          />
          <i className='fa fa-search search-icon mt-3 mb-3 ' aria-hidden='true'></i>
        </div>
      </div>
    </div>

<div className='d-block d-md-none mx-auto border  col-11 btnRadius my-2'>
  <input
    // onChange={(val)=>setSearchText(val)}
    // value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    type='text'
    placeholder='Search for products or brands.....'
    className='search_bar  border-0 mx-auto'
  />
  <i className='fa fa-search search-icon mt-3 mb-3 ' aria-hidden='true'></i>
</div>
</>
  )
}
export default Searchbar