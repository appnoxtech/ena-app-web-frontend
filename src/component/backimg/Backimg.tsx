import { useNavigate } from 'react-router-dom';
import Backpng from '../../Assets/Images/back.png';
import './Backimg.css'
import React from 'react'

function Backimg() {
    const history =useNavigate();
  return (
    <img className='backimg img-fluid' src={Backpng}  onClick={()=> history(-1)}/>
  )
}

export default Backimg;