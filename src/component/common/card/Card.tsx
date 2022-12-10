import React, { FC } from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Card: FC<any> = ({ cardData, indexData ,wishListHandler }) => {

  const navigate = useNavigate();

  return (
    <div className='overflow-hidden h-100' style={{borderRadius:'10px',border:'0.5px solid #efefef'}}>
        <div className='card border-0 col-12 overflow-hidden '>
          <div className='col-12 m-0 p-0 carrot_background px-2 px-md-0'>
            <div className='border-0 col-12 text-center text'>
              <img src={cardData.img} className='img_data' alt='...' />
            </div>
          </div>
          <div className='fabDiv'>
            {indexData % 2 == 0 ? (

            <div className='rounded-end Off_container mt-1 themecolor '>
              <p className=' p-0 m-0 px-2 py-1 text-light'>10% off</p>
            </div>
            ):''}

            <button onClick={()=>wishListHandler(indexData)} className='ms-auto px-2 mr-5 bg-light border border-none border-0'>
              <i className={cardData.isFav?'fa fa-heart red':'fa fa-heart-o heart_fav_icon mt-1'} aria-hidden='true'></i>

            </button>
          </div>

          <div className='card-body ps-0 pe-0 col-12 px-2 px-md-2'>
            <p className='card-title'>{cardData.vegName} </p>
            <p className='card-text  '>
              kn 35.2/kg <s className='crossTextRelated kg_container'>kn 35.2/kg</s>
            </p>
            <div className='primary_quantity d-flex align-items-center justify-content-between'>
              <div className='radius_container d-flex  align-items-center justify-content-between border'>
                <p className=' col-6 font_container m-0 p-0 py-2 text-center'>kg</p>
                <input type={"number"} className=' col-6  border border-0 border-none m-0 p-0 text-center border border-none border-0 h-100'placeholder='10'/>
              </div>
              <div className=' btnRadius col-6 themecolor overflow-hidden mx-1 py-2 '>
                <button onClick={()=>navigate('/product/details',{state:cardData})} className='themecolor border border-0 w-100 text-light'>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card
