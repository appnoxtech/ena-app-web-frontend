import React,{FC} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/all'
import './industry.css'

const IndustryCard:FC<any>=({cardData,key})=>{
  const navigate = useNavigate();
  return (
    <>
        <div onClick={() => navigate(cardData.routes)} role="button" className="d-flex border my-2 rounded-2 onHoverEffect">
            <div className='col-9 py-4'>
                <p className='cardP  my-5 p-0 m-0 px-4'>
                {cardData.detail}
                </p>
            </div>
            <div className='roundborder border'>
            <div className={`${cardData.bgClass} d-flex rounded-start align-items-center justify-content-end text-center  `}>
                <img src={`/${cardData.image}`} className="img-fluid col-5" alt="image1" />
            </div>
            </div>
        </div>
    </>
  )
}

export default IndustryCard
