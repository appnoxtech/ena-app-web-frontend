import React,{FC, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/all'
import IndustryCard from '../../../component/admin/industryCard'
import {wareHouse} from '../../../component/dummyData'
import './adminhome.css'
// import '../Auth.css'

const AdminHome:FC<any> =() => {

  const [cardsData,setCardsData] = useState(wareHouse)
  return (
    <>
      <div className='container-fluid d-flex flex-column my-5 align-items-center justify-content-center  border'>
        <div className="container row border">
          
        {cardsData.map((v :any,i :any)=>(
          <div className="col-6">
          <IndustryCard cardData={v} key={i}/>
          </div>
        ))}
          
        </div>
        <div className="col-6 my-5 roundedDash">
            
        </div>
      </div>
    </>
  )
}

export default AdminHome
