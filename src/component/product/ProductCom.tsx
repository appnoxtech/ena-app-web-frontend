import React, { useState } from 'react'
import ProductSlider from './ProductSlider'
import Searchbar from '../searchbar/Searchbar'
import heartIcon from '../../assets/images/hearticonred.svg'
import facebookIcon from '../../assets/images/facebook.svg'
import linkedInIcon from '../../assets/images/linkedin.svg'
import twitterIcon from '../../assets/images/twitter.svg'
import CartModal from '../cart/CartModal'


const ProductCom = () => {
    const [showCartModal, setShowCartModal] = useState(false)
    const handleShowCartModal = () => {
        setShowCartModal(true)
    }
    const closeCartModal = () => {
        setShowCartModal(false)
    }
    return (
        <div className='container-fluid pb-5'>
            <Searchbar />
            <div className='side-Part rounded-4 bg-white'></div>
            <div className="col-10 mx-auto">
                <div className="row gx-md-5 gy-md-0 mt-3 mt-md-5">
                    <div className="col-12 col-md-7">
                        <ProductSlider />
                    </div>
                    <div className="col-12 col-md-5 mt-3 mt-md-0">
                        <div className="prodcutDetailsData">
                            <div className="d-flex justify-content-between">
                                <div className="productName">
                                    <h5 className='card-title'>Carrot </h5>
                                    <p className='card-text w-2 '>kn 35.2/kg <s className='CrossText'>kn 35.2/kg</s></p>
                                </div>
                                <div className="wishListProduct">
                                    <a href='#' className='text-end px-2'>
                                        <img src={heartIcon} alt="wish" className='img-fluid' />
                                    </a>
                                </div>
                            </div>
                            <div className='rounded-end mt-3 offerPercent'>
                                <p className=' p-0 m-0 px-4 py-2'>10% off</p>
                            </div>
                            <div className="mt-3">
                                <h6>Product Description</h6>
                                <p className='greentext'>Wholesale packing: 3-5 kg, 500*300*115, wood</p>
                            </div>
                            <div className="mt-3">
                                <h6>Size</h6>
                                <div className='radius_container d-flex  align-items-center justify-content-between border border-success '>
                                    <p className=' py-1 font_container '>kg</p>
                                    <p className='number_container bg-green'>10</p>
                                </div>
                            </div>
                            <div className="mt-3">
                                <button className='btn AddToCartBtnProduct'>Add To  Cart</button>
                            </div>
                            <div className="mt-3">
                                <button className='btn w-100' onClick={handleShowCartModal}>Buy Now</button>
                            </div>
                            <div className="mt-3">
                                <h6>Postage is calculated at checkout.</h6>
                            </div>
                            <div className="mt-5 d-flex align-content-center">
                                <h6 className='greentext'>Share :</h6>
                                <div className="socialIconMain">
                                    <img src={facebookIcon} alt="facebookIcon" className='img-fluid' />
                                    <img src={linkedInIcon} alt="linkedInIcon" className='img-fluid' />
                                    <img src={twitterIcon} alt="twitterIcon" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CartModal
            showCartModal ={showCartModal}
            closeCartModal={closeCartModal}
            />
        </div>
    )
}

export default ProductCom
