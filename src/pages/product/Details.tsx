import React from 'react'
import ProductCom from '../../component/product/ProductCom'
import RelatedProduct from '../../component/product/RelatedProduct'

const Details = () => {
    return (
        <div className=' col-12'>
            <div className='col-12'>
                <ProductCom />
                <RelatedProduct />
            </div>
        </div>
    )
}

export default Details
