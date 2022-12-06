import React from 'react'
import DesktopFooter from '../../Component/footer/Footer'
import Navbar from '../../Component/navbar/NavBar'
import ProductCom from '../../Component/product/ProductCom'
import RelatedProduct from '../../Component/product/RelatedProduct'

const Details = () => {
    return (
        <>
            <Navbar />
            <ProductCom />
            <RelatedProduct />
            <DesktopFooter/>
        </>
    )
}

export default Details