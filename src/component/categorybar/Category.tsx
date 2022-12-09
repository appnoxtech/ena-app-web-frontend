import React,{FC} from 'react'
import './Category.css'
const category:FC<any> = ({filterDatabyCategory}) => {
  return (
    <div className='outer_navli '>
      <p className='navli_category fontWeight-700'>
        <li>Categories</li>
      </p>
      <div>
        <button onClick={()=>filterDatabyCategory()} className='navlist mx-4'>
          <li className='navlist  '>All</li>
        </button>
        <button onClick={()=>filterDatabyCategory('Vegetable')} className='navlist mx-4'>
          <li className='navlist  '>Vegetables</li>
        </button>
        <button onClick={()=>filterDatabyCategory('Fruit')} className='navlist mx-4'>
          <li className='navlist  '>Fruits</li>
        </button>
        <button onClick={()=>filterDatabyCategory('Dryfruit')} className='navlist mx-4'>
          <li className='navlist  '>Dry Fruits</li>
        </button>
        <button onClick={()=>filterDatabyCategory('Spices')} className='navlist mx-4'>
          <li className='navlist  '>Spices</li>
        </button>
        <button onClick={()=>filterDatabyCategory()} className='navlist mx-4'>
          <li className='navlist  '>Canned</li>
        </button>
      </div>
    </div>
  )
}

export default category
