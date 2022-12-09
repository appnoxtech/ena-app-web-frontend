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
      <div className='container-fluid d-flex flex-column my-5 align-items-center justify-content-center'>
        <div className="container row">
          
        {cardsData.map((v :any,i :any)=>(
          <div className="col-12 col-lg-6 ">
          <IndustryCard cardData={v} key={i}/>
          </div>
        ))}
          
        </div>
        <div className="col-lg-6 col-12  my-5 roundedDash d-flex flex-column align-items-center justify-content-center p-5">
              <span className='btn btn-default'><i className='fa fa-thin fa-plus text-success fs-1 lh-sm' aria-hidden='true'></i></span>
            <p className='pButtonInput my-2'>Add new Warehouse</p>
        </div>
      </div>
    </>
  )
}

export default AdminHome
