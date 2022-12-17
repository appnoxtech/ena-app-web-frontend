import React, { useState, FC } from 'react'
import Category from '../../component/categorybar/Category'
import Filterbar from '../../component/filterbar/Filterbar'
import Card from '../../component/Common/card/Card'
import Pagination from '../../component/Common/pagination/Pagination'
import { EnaAppData } from '../../component/dummyData'
import Searchbar from '../../component/searchbar/Searchbar'

const Admin: FC<any> = () => {
  const [data, setData] = useState(EnaAppData)
  return (
    <div className='col-12'>
      <Searchbar />
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='d-flex flex-column flex-md-row'>
        <div className='mt-5 col-12 col-md-2'>
          <Category />
        </div>
        <div className=' col-11 mx-auto mx-md-0 col-md-10'>
          <div className='row d-flex align-items-center justify-content-center  mt-5'>
            <Filterbar />
            {data.map((cardData: any, index: any) => (
              <div className='col-10 col-md-3 my-3' key={1}>
                <Card cardData={cardData} indexData={index} />
              </div>
            ))}
            <div className='col-12 d-flex justify-content-end mt-3'>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
