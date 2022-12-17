import React from 'react'
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCom from '../../component/product/ProductCom'
import RelatedProduct from '../../component/product/RelatedProduct'

const Details:FC<any> = () => {
  const { state } = useLocation();
  console.log(state,'========<><><>><<><>')

  return (
    <div className=' col-12'>
      <div className='col-12'>
        <ProductCom data={state}/>
        <RelatedProduct data={state}/>
      </div>
    </div>
  )
}

export default Details
