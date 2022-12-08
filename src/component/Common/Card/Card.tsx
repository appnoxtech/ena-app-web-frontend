import React, { FC } from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'

const Card: FC<any> = ({ cardData, indexData }) => {
  return (
    <div className=''>
      <NavLink to='product/details'>
        <div className='card border-0 col-12  '>
          <div className='col-12 m-0 p-0 carrot_background '>
            <div className='border-0 col-12 text-center '>
              <img src={cardData.img} className='img_data ' alt='...' />
            </div>
          </div>
          <div className='fabDiv '>
            {indexData % 2 == 0 ? (

            <div className='rounded-end Off_container mt-1 '>
              <p className=' p-0 m-0 px-2 py-1'>10% off</p>
            </div>
            ):''}

            <a href='#' className='ms-auto px-2 mr-5'>
              <i className='fa fa-heart-o heart_fav_icon mt-1' aria-hidden='true'></i>

            </a>
          </div>

          <div className='card-body ps-0 pe-0 col-12'>
            <h5 className='card-title'>{cardData.vegName} </h5>
            <p className='card-text w-2 '>
              kn 35.2/kg <s className='crossTextRelated kg_container'>kn 35.2/kg</s>
            </p>
            <div className='primary_quantity d-flex align-items-center justify-content-between'>
              <div className='radius_container d-flex  align-items-center justify-content-between border border-success '>
                <p className='  font_container '>kg</p>
                <p className='number_container bg-green '>10</p>
              </div>
              <div className='outer_button  bg-light  '>
                <a href='#' className='btn add_button  '>
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
