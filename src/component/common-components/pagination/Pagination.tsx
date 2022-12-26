import React, { useEffect, useState, FC } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/all'
import './Pagination.css'

const Pagination: FC<any> = ({ currPage, setCurrPage, pageCount }) => {
  console.log('pageCount', pageCount);

  return (
    <>
      <nav aria-label="...">
        <ul className="pagination">
          {
            currPage === 1 
            ? null 
            : 
            <li onClick={() => {
              console.log('test log');
              setCurrPage(oldVal => --oldVal)
            }} role="button" className="page-item px-2  disabled">
              <a  className="page-link "><FaArrowLeft /></a>
            </li>
          }
          {
            Array.from({ length: pageCount }, (_, index) => {
              const num = ++index;
              return (
                <li role="button" className="page-item px-2" >
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
          {
            pageCount === currPage ? null
              : <li className="page-item px-2">
                <a role="button" onClick={() => setCurrPage(oldVal => ++oldVal)} className="page-link" ><FaArrowRight /></a>
              </li>
          }
        </ul>
      </nav>
    </>
  )
}

export default Pagination