import React from 'react'
import Navbar from '../../component/navbar/NavBar'
import ProductCom from '../../component/product/ProductCom'
import RelatedProduct from '../../component/product/RelatedProduct'

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