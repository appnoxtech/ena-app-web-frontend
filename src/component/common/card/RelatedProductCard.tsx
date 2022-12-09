import React, { FC, useState } from 'react'
import heartIcon from '../../../assets/images/hearticonred.svg'
import Carrot from '../../../assets/images/carrot.jpg'
import './relatedProduct.css'

const RelatedProductCard: FC<any> = ({ noutil }) => {
  const [isShown, setIsShown] = useState(false)
  const [util, setUtil] = useState(noutil)
  return (
    <div className='card_container border-1'>
      <div className='card'>
        <img src={Carrot} className='card-img-top ' alt='...' />
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
          <div className='d-flex align-items-center jusity-content-center'>
            <h5 className='card-title p-0 m-0'>Carrot </h5>
            {Boolean(!util) && (
              <>
                <a
                  className='btn ms-auto border-0 btn-default fs-3 mb-3 hoverClass'
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  ...
                </a>
              </>
            )}
          </div>
          {/* Delete */}
          {Boolean(isShown) && (
            <div className='text-end'>
              <a className='btn btn-light text-danger '>Delete</a>
            </div>
          )}
          {/* DElete */}
          <p className='card-text w-2 '>
            kn 35.2/kg <s className='crossTextRelated kg_container'>kn 35.2/kg</s>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RelatedProductCard
