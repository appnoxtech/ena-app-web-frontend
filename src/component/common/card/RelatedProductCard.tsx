import React, { FC, useState } from 'react'
import heartIcon from '../../../assets/images/hearticonred.svg'
import Carrot from '../../../assets/images/carrot.jpg'
import './Card.css'

const RelatedProductCard: FC<any> = ({ noutil,reletedProduct }) => {
  const [util, setUtil] = useState(noutil)
  return (
    <div className='card_container border-1  '>
      <div className='card '>
        <img src={reletedProduct.img} className='img_data mx-auto ' alt='...' />
        {Boolean(util) && (
          <div className='fabDiv'>
            <div className='rounded-end Off_container offContainerGreen'>
              <p className=' p-0 m-0 px-4 py-2'>10% off</p>
            </div>
            <a href='#' className='text-end px-2'>
              <img src={heartIcon} alt='wish' className='img-fluid' />
            </a>
          </div>
        )}

        <div className='card-body'>
          <h5 className='card-title'>{reletedProduct.vegName} </h5>
          <p className='card-text w-2 '>
            kn 35.2/kg <s className='crossTextRelated kg_container'>kn 35.2/kg</s>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RelatedProductCard
