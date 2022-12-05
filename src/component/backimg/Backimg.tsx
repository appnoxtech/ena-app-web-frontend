import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Backimg.css'
import Backpng from '../../Assets/Images/back.png';


function Backimg() {
    const history =useNavigate();
  return (
    <img className='backimg img-fluid' src={Backpng}  onClick={()=> history(-1)}/>
  )
}

export default Backimg;