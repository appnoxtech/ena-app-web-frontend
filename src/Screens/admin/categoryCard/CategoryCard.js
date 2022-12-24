import React,{FC} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/all'
import './CategoryCard.css'

const CategoryCard = ({cardData}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem('category', JSON.stringify(cardData));
    navigate('/admin-ProductList');
  };
  return (
    <>
        <div onClick={handleClick} role="button" className="bgGradient d-flex border my-2 rounded-2 onHoverEffect">
            <div className='col-9 py-4'>
                <h3 className='my-5 p-0 m-0 px-4 text-capitalize'>
                {cardData.categoryName}
                </h3>
            </div>
            {/* <div className='roundborder border'>
            <div className={`${bgblue} d-flex rounded-start align-items-center justify-content-end text-center  `}>
                <img src={`/${cardData.image}`} className="img-fluid col-5" alt="image1" />
            </div>
            </div> */}
        </div>
    </>
  )
}

export default CategoryCard 
