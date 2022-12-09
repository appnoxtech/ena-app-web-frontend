import React,{FC} from 'react'
import './Category.css'
const category:FC<any> = ({filterDatabyCategory}) => {
  return (
    <div className='outer_navli col-12'>
      <div className=' col-8 mx-auto pt-4 bgWhite'>
      <p className='fontWeight-700 bgWhite m-0 p-0 linone text-center bgWhite'>
        <li>Categories</li>
      </p>
      <div className='text-start d-flex flex-column' >
        <button onClick={()=>filterDatabyCategory('All')} className={'navlist py-2 py-md-3 border border-0 border-none bgWhite'}>
          <li className='navlist  '>All</li>
        </button>
        <button onClick={()=>filterDatabyCategory('Vegetable')} className='navlist py-2 py-md-3 border border-0 border-none bgWhite'>
          <li className='navlist  '>Vegetables</li>
        </button>
        <button onClick={()=>filterDatabyCategory('Fruit')} className='navlist py-2 py-md-3 border border-0 border-none bgWhite'>
          <li className='navlist  '>Fruits</li>
        </button>
        <button onClick={()=>filterDatabyCategory('Dryfruit')} className='navlist py-2 py-md-3 border border-0 border-none bgWhite'>
          <li className='navlist  '>Dry Fruits</li>
        </button>
        <button onClick={()=>filterDatabyCategory('Spices')} className='navlist py-2 py-md-3 border border-0 border-none bgWhite'>
          <li className='navlist  '>Spices</li>
        </button>
        <button onClick={()=>filterDatabyCategory()} className='navlist py-2 py-md-3 border border-0 border-none bgWhite'>
          <li className='navlist  '>Canned</li>
        </button>
      </div>
      </div>
    </div>
  )
}

export default category
