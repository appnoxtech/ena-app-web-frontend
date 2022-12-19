import React, { FC, useState, useEffect } from 'react'
import './Category.css'

const category: FC<any> = ({ filterDatabyCategory }) => {
  //#region  all state define here
  const [showdropdown, setShowDropdown] = useState(window.innerWidth < 768 ? false : true)
  const [isMobile, setIsMobile] = useState(false)

  //#region  defilne all function here

  const dropDowntoggleHandler=()=>{
    if (isMobile) {
      setShowDropdown(!showdropdown)
    }
  }
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else setIsMobile(false)
  }, [isMobile])
  return (
    <div className='outer_navli col-12 '>
      <div className={'col-6 col-md-8 col-sm-12 ms-auto mx-md-auto py-2 bgWhite'}>
        <p
          onClick={() => {dropDowntoggleHandler()}}
          className='fontWeight-700 bgWhite m-0 p-0 linone text-center bgWhite d-flex justify-content-center align-item-center'
        >
          <li className={isMobile ? 'iconcolor' : 'textblack'}>Categories</li>
          {isMobile && (
            <i
              className={`${
                showdropdown ? 'fa fa-chevron-circle-up' : 'fa fa-chevron-circle-down dropDownicon'
              } mt-1 mx-4 iconcolor`}
              aria-hidden='true'
            ></i>
          )}
        </p>
        {showdropdown && (
          <div className='text-start d-flex flex-column'>
            <button
              onClick={() => {filterDatabyCategory('All');dropDowntoggleHandler()}}
              className={'navlist py-2 py-md-3 border border-0 border-none bgWhite'}
            >
              <li className='navlist  '>All</li>
            </button>
            <button
              onClick={() => {filterDatabyCategory('Vegetable');dropDowntoggleHandler()}}
              className='navlist py-2 py-md-3 border border-0 border-none bgWhite'
            >
              <li className='navlist  '>Vegetables</li>
            </button>
            <button
              onClick={() => {filterDatabyCategory('Fruit');dropDowntoggleHandler()}}
              className='navlist py-2 py-md-3 border border-0 border-none bgWhite'
            >
              <li className='navlist  '>Fruits</li>
            </button>
            <button
              onClick={() => {filterDatabyCategory('Dryfruit');dropDowntoggleHandler()}}
              className='navlist py-2 py-md-3 border border-0 border-none bgWhite'
            >
              <li className='navlist  '>Dry Fruits</li>
            </button>
            <button
              onClick={() => {filterDatabyCategory('Spices');dropDowntoggleHandler()}}
              className='navlist py-2 py-md-3 border border-0 border-none bgWhite'
            >
              <li className='navlist  '>Spices</li>
            </button>
            <button
              onClick={() => {filterDatabyCategory();dropDowntoggleHandler()}}
              className='navlist py-2 py-md-3 border border-0 border-none bgWhite'
            >
              <li className='navlist  '>Canned</li>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default category
