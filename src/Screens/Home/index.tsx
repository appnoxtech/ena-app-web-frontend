import React from 'react'
import Card from '../../Component/Common/card/Card'
import Searchbar from '../../Component/searchbar/Searchbar'
import Category from '../../Component/categorybar/Category'
import Filterbar from '../../Component/filterbar/Filterbar'
import Pagination from '../../Component/Common/pagination/Pagination'

function Home() {
  return (
    <div className='col-12'>
      <Searchbar />
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='d-flex flex-column flex-md-row'>
        <div className='mt-5 col-12 col-md-2'>
          <Category />
        </div>
        <div className=' col-11 mx-auto mx-md-0 col-md-10'>
          <div className='row d-flex align-items-center justify-content-between  mt-5'>
            <Filterbar/>
            {Array.from({ length: 12 }).map(() => (
              <div className='col-12 col-md-3 my-2' key={1}>
                <Card />
              </div>
            ))}
            <div className='col-12 d-flex justify-content-end'>
                <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
