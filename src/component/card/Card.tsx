import React from 'react'
import './Card.css'
import Carrot from '../../assets/images/carrot.jpg'
const Card = () => {
  return (
    <div className='card_container '>
      <div className='d-flex justify-content-center align-item-center'>
        <div>
          <p className="Off_container">10% off</p>
        </div>
        <div>
          <a href='#' className='heart_container'>
            <i className='fa fa-heart-o heart_icon' aria-hidden='true'></i>
          </a>
        </div>
      </div>
      <div className='card'>
        <img src={Carrot} className='card-img-top w-2' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Carrot </h5>
          <p className='card-text w-2 '>kn 35.2/kg</p>
          <div className='primary_quantity d-flex align-items-center justify-content-between'>
            <div className='radius_container d-flex  align-items-center justify-content-between border border-success '>
              <p className=' py-1 font_container '>kg</p>
              <p className='number_container bg-green'>10</p>
            </div>
            <div className='outer_button '>
              <a href='#' className='btn'>
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
