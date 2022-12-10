import React from 'react'
import { useState } from 'react'
import { FC } from 'react'
import RelatedProductCard from '../Common/card/RelatedProductCard'
import { EnaAppData } from '../dummyData'

const RelatedProduct: FC<any> = ({ data }) => {
  const [dummyData, setDummyData] = useState(EnaAppData)
  return (
    <div className='container-fluid py-4'>
      <div className='col-10 mx-auto'>
        <div className='relatedProductMain'>
          <div className='text-center mb-4'>
            <h4>You may also like</h4>
          </div>
          <div className='row'>
            {/* {Array.from({ length: 8 }).map((data, index) => (
              <div className='col-6 col-md-4 col-lg-3' key={index}>
                <RelatedProductCard noutil={false} />
              </div>
            ))} */}

            {dummyData
              .filter((d, i) => {
                if (data.category ==d.category) {
                  return d
                } 
              })
              .map((cardData: any, index) => (
                <div className='col-6 col-md-3 my-3 m-0 px-2 ' key={index}>
                  <RelatedProductCard noutil={false} reletedProduct={cardData} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedProduct
