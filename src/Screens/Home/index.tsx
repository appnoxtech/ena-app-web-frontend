import React from 'react'
import Card from '../../component/Common/Card/Card'
import Searchbar from '../../component/searchbar/Searchbar'
import Category from '../../component/categorybar/Category'
import Filterbar from '../../component/filterbar/Filterbar'
import Footer from '../../component/footer/Footer'
import Navbar from '../../component/navbar/NavBar'

function Home() {
  return (
    <div className=' col-12'>
      <Navbar />
    <div className='col-12'>
      <Searchbar />
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='d-flex flex-column flex-md-row'>
        <div className='mt-5 col-12 col-md-2'>
          <Category />
        </div>
        <div className=' col-10'>
          <div className='row d-flex align-items-center justify-content-between px-1 bg-grey py-2 col-12 mt-5 '>
            
            {Array.from({ length: 12 }).map(() => (
              <div className='col-12 col-md-3 my-2' key={1}>
                <Card />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Home
