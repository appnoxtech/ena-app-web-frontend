import React from 'react'
import Navbar from '../../Component/navbar/NavBar'
import ProductCom from '../../Component/product/ProductCom'
import RelatedProduct from '../../Component/product/RelatedProduct'

const Details = () => {
    return (
        <div className=' col-12'>
            <Navbar />
            <div className='col-12'>
                <ProductCom />
                <RelatedProduct />
            </div>
        </div>
    )
}

export default Details
