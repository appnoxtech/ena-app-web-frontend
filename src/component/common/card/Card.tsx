import React, { FC } from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'

const Card: FC<any> = ({ cardData, indexData ,wishListHandler }) => {
  return (
    <div className=''>
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

            <button onClick={()=>wishListHandler(indexData)} className='ms-auto px-2 mr-5 bg-light border border-none border-0'>
              <i className={cardData.isFav?'fa fa-heart red':'fa fa-heart-o heart_fav_icon mt-1'} aria-hidden='true'></i>

            </button>
          </div>

          <div className='card-body ps-0 pe-0 col-12'>
            <h5 className='card-title'>{cardData.vegName} </h5>
            <p className='card-text w-2 '>
              kn 35.2/kg <s className='crossTextRelated kg_container'>kn 35.2/kg</s>
            </p>
            <div className='primary_quantity d-flex align-items-center justify-content-between'>
              <div className='radius_container d-flex  align-items-center justify-content-between border border-success '>
                <p className=' col-6 font_container '>kg</p>
                <input className=' col-6 number_container border border-0 border-none m-0 p-0 text-center border border-none border-0'placeholder='10'/>
              </div>
              <div className='outer_button  bg-light  '>
                <a href='#' className='btn btn1 add_button  '>
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card
