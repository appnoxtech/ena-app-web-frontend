import React from 'react'
import { FaArrowLeft,FaArrowRight } from 'react-icons/all'
import './Pagination.css'

function Pagination() {
  return (
    <>
    <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item px-2  disabled">
      <a className="page-link "><FaArrowLeft /></a>
    </li>
    <li className="page-item px-2" ><a className="page-link" id='active' href="#">1</a></li>
    <li className="page-item px-2" aria-current="page">
      <a className="page-link" href="#">2</a>
    </li>
    <li className="page-item px-2"><a className="page-link" href="#">3</a></li>
    <li className="page-item px-2"><a className="page-link" href="#">4</a></li>
    <li className="page-item px-2"><a className="page-link" href="#">5</a></li>
    <li className="page-item px-2">
      <a className="page-link" href="#"><FaArrowRight /></a>
    </li>
  </ul>
</nav>
    </>
  )
}

export default Pagination