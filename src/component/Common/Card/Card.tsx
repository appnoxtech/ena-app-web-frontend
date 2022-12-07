import React from 'react'
import './Card.css'
import Carrot from '../../../Assets/Images/carrot.jpg'
import heartIcon from '../../../Assets/Images/hearticonred.svg'
import { NavLink } from 'react-router-dom'
const Card = () => {
  
  return (
    <div className=''>
      <NavLink to='product/details'>
      <div className='card border-0 '>
        <img src={Carrot} className='card-img-top ' alt='...' />
        <div className='fabDiv'>
          <div className='rounded Off_container offContainerGreen'>
            <p className=' p-0 m-0 px-4 py-2'>10% off</p>
          </div>

          <a href='#' className='text-end px-2'>
            <img src={heartIcon} alt='wish' className='img-fluid' />
          </a>
        </div>
        <div className='card-body ps-0 pe-0'>
          <h5 className='card-title'>Carrot </h5>
          <p className='card-text w-2 '>
            kn 35.2/kg <s className='crossTextRelated kg_container'>kn 35.2/kg</s>
          </p>
          <div className='primary_quantity d-flex align-items-center justify-content-between'>
            <div className='radius_container d-flex  align-items-center justify-content-between border border-success '>
              <p className=' py-1 font_container '>kg</p>
              <p className='number_container bg-green'>10</p>
            </div>
            <div className='outer_button '>
              <a href='#' className='btn add_button'>
                Add
              </a>
            </div>
          </div>
        </div>
      </div>
      </NavLink>
    </div>
  )
}

export default Card
