import React, { useState } from 'react'
import ProductSlider from './ProductSlider'
import CartModal from '../cart/CartModal'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCom:FC<any>= ({data}) => {
  const navigate=useNavigate()
  const [showCartModal, setShowCartModal] = useState(false)
  const [productDetail,setProductDetail]=useState(data)
  const handleShowCartModal = () => {
    setShowCartModal(true)
  }
  const closeCartModal = () => {
    setShowCartModal(false)
  }
  const changeColorHandler=()=>{
    return showCartModal?'voliet':'themecolor'
  }
  return (
    <div className='container-fluid pb-5'>
      {/* <Searchbar /> */}
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='col-10 mx-auto'>
        <div className='row gx-md-5 gy-md-0 mt-3 mt-md-5'>
          <div className='col-12 col-md-7'>
            <ProductSlider productInfo={data} />
          </div>
          <div className='col-12 col-md-5 mt-3 mt-md-0'>
            <div className='prodcutDetailsData'>
              <div className='d-flex justify-content-between'>
                <div className='productName'>
                  <h5 className='card-title'>{data.vegName} </h5>
                  <p className='card-text w-2 '>
                    kn 35.2/kg <s className='CrossText'>kn 35.2/kg</s>
                  </p>
                </div>
                {/* <div className='wishListProduct'>
                  <div className='text-end px-2'>
                  <i className={true?'fa fa-heart red':'fa fa-heart-o heart_fav_icon mt-1'} aria-hidden='true'></i>
                  </div>
                </div> */}
              </div>
              <div className={` ${changeColorHandler()}  ' rounded-end mt-3 offerPercent col-3 btnRadius ' `}>
                <p className=' p-0 m-0 px-4 py-2 text-light  fw-bold'>10% off</p>
              </div>
              <div className='mt-3'>
                <h6>Product Description</h6>
                <p className='greentext'>Wholesale packing: 3-5 kg, 500*300*115, wood</p>
              </div>
              <div className='mt-3'>
                <h6>Size</h6>
                <div className='radius_container d-flex  align-items-center justify-content-between border'>
                <p className={`${changeColorHandler()} ' col-6  m-0 p-0 py-2 text-center text-light ' `}>kg</p>
                <input type={"number"} className=' col-6  border border-0 border-none m-0 p-0 text-center border border-none border-0 h-100'placeholder='10'/>
              </div>
              </div>
              <div className='mt-3'>
                <button onClick={()=>navigate('/cart')} className=' py-3 border   col-12 AddToCartBtnProduct'>Add To Cart</button>
              </div>
              <div className='mt-3'>
                <button className={`${changeColorHandler()} ' border border-0 btnRadius py-3 w-100  text-light fw-bold'`} onClick={handleShowCartModal}>
                  Buy Now
                </button>
              </div>
              <div className='mt-3'>
                <h6>Postage is calculated at checkout.</h6>
              </div>
              <div className='mt-5 d-flex align-content-center'>
                <h6 className='greentext'>Share :</h6>
                <div className='socialIconMain'>
                <i className="fa fa-facebook-square h4 mx-2" aria-hidden="true"></i>
                  <i className="fa fa-linkedin-square h4 mx-2" aria-hidden="true"></i>
                  <i className="fa fa-twitter-square h4 mx-2" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CartModal showCartModal={showCartModal} closeCartModal={closeCartModal} productData={data} />
    </div>
  )
}

export default ProductCom
