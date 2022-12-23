import React, { FC, useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/all'
import './Pagination.css'

const Pagination: FC<any> = ({ currPage, setCurrPage, pageCount}) =>{
  console.log('pageCount', pageCount);
  
  return (
    <>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item px-2  disabled">
            <a className="page-link "><FaArrowLeft /></a>
          </li>
          {
            Array.from({length: pageCount}, (_, index) => {
              const num = ++index;
              return (
                <li className="page-item px-2" >
                <a 
                  className="page-link" 
                  id={currPage === num ? 'active' : ''} 
                  onClick={() => setCurrPage(num)}
                >
                    {num}
                </a>
              </li>
              )
            })
          }
         
          {/* <li className="page-item px-2" aria-current="page">
            <a className="page-link" id={currPage === 2 ? 'active' : ''} >2</a>
          </li>
          <li className="page-item px-2">
            <a className="page-link" id={currPage === 3 ? 'active' : ''} >3</a>
          </li>
          <li className="page-item px-2">
            <a className="page-link" id={currPage === 4 ? 'active' : ''}>4</a>
          </li>
          <li className="page-item px-2">
            <a className="page-link" id={currPage === 5 ? 'active' : ''}>5</a>
          </li> */}
          <li className="page-item px-2">
            <a className="page-link" ><FaArrowRight /></a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Pagination