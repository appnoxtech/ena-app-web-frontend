import React, { FC, useState } from 'react'

import IndustryCard from '../../../component/admin/industryCard'
import RelatedProductCard from '../../../component/common-components/card/RelatedProductCard'
import { wareHouse } from '../../../component/dummyData'
import './productList.css'
// import '../Auth.css'

const AdminProductList: FC<any> = () => {
  const [cardsData, setCardsData] = useState(wareHouse)
  return (
    <>
      <div className='container-fluid d-flex flex-column align-items-center justify-content-center'>
        {/* HeadPartList */}
        <div className='col-12 d-flex align-items-center flex-column flex-lg-row justify-content-between'>
          <div></div>
          <div className='my-4 my-lg-0'>
            <p className='p-0 m-0 headP '>
              Industrial Supplies <span className='text-dark fw-bold'>/Products</span>
            </p>
          </div>
          <div className='me-4'>
            <a className='btn btn-success text-light btnGreen'>Add Product</a>
          </div>
        </div>
        <div className='container-fluid border-top my-4'></div>
        {/* HeadpartListEnd */}
        <div className='col-10  my-4'>
          <div className='container-fluid px-4 d-flex align-items-center justify-content-center justify-content-lg-end'>
            <p className='p-0 m-0 me-4 lh-sm sortBy'>Sort By </p>
            <div className='btn-group'>
              <button
                type='button'
                className='btn btn-light dropdown-toggle'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Price
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* CardProductList */}
          <div className="container-fluid my-2">
                <div className="row">
                    {Array.from({length:8}).map((v,i)=>(
                    <div className="col-12 col-lg-3 my-2" key={i}>
                        <RelatedProductCard />
                    </div>
                    ))}
                </div>
          </div>
          {/* CardProductListEnd */}
        </div>
      </div>
    </>
  )
}

export default AdminProductList
