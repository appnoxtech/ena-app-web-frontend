import React from 'react'
import Card from '../../Component/Common/Card/Card'
import Searchbar from '../../Component/Searchbar/Searchbar'
import Category from '../../Component/Categorybar/Category'
import Filterbar from '../../Component/Filterbar/Filterbar'
import DesktopFooter from '../../Component/DsFooter/DesktopFooter';
import Navbar from '../../Component/Navbar/NavBar'

function Home() {
  return (
    <div className=' col-12'>
      <Navbar />
      <Searchbar />
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='d-flex flex-column flex-md-row'>
        <div className='mt-5 col-12 col-md-2'>
          <Category />
        </div>
        <div className=' col-10'>
          <div className='row d-flex align-items-center justify-content-between px-1 bg-grey py-2 col-12 mt-5 '>
            <Filterbar />
            {Array.from({ length: 12 }).map(() => (
              <div className='col-12 col-md-3 my-2' key={1}>
                <Card />
              </div>
            ))}
          </div>
        </div>
      </div>
      <DesktopFooter />
    </div>
  )
}

export default Home
