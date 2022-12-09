import React,{FC} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/all'
import './industry.css'


// import '../Auth.css'


const IndustryCard:FC<any>=({cardData,key})=>{
  return (
    <>
        <div className="d-flex align-items-center m-4 justify-content-between border rounded">
            <div className='col-8 my-5'>
                <p className='cardP border p-0 m-0'>
                {cardData.detail}
                </p>
            </div>
            <div className='col-4 border text-end'>
                <img src={`/${cardData.image}`} className="img-fluid col-4" alt="image1" />
            </div>
        </div>
    
    </>
  )
}

export default IndustryCard
