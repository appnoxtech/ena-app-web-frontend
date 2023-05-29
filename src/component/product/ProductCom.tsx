import React, { useEffect, useState } from 'react'
import ProductSlider from './ProductSlider'
import CartModal from '../cart/CartModal'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useRemoveItemFromCart } from '../../hooks/carts/removeFromCart'
import { decreaseCartCount, increaseCartCount } from '../../redux/reducer/cart/CartReducer'
import { useAddItemToCartHooks } from '../../hooks/carts/addintoCart'

const ProductCom: FC<any> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddItemToCart = useAddItemToCartHooks();
  const handleRemoveItemFromCart = useRemoveItemFromCart();
  const [itemCount, setItemCount] = useState(data.quantity);
  const [showCartModal, setShowCartModal] = useState(false);
  const [isItemAddedToCart, setIsItemAddedToCart] = useState(false);
  const { isLogin } = useSelector((state: any) => state.user);

  const handleShowCartModal = () => {
    setShowCartModal(true)
  }
  const closeCartModal = () => {
    setShowCartModal(false)
  }
  // const changeColorHandler = () => {
  //   return showCartModal ? 'voliet' : 'themecolor'
  // }
  useEffect(() => {
    const list = localStorage.getItem('cartData');

    if (list) {
      const cartList = JSON.parse(list);
      const item = cartList.find((item: any) => item.productId === data._id);
      if (item) {
        setItemCount(item.quantity);
        setIsItemAddedToCart(true)
      } else {
        setItemCount(10);
        setIsItemAddedToCart(false);
      }
    } else {
      setItemCount(10);
      setIsItemAddedToCart(false);
    }
  }, [data, isLogin]);

  const handleRemoveFromCart = async (e: any) => {
    e.stopPropagation();
    const cartData = {
      productId: data._id,
      removeProduct: 1
    };
    await handleRemoveItemFromCart(cartData);
    dispatch(decreaseCartCount());
    setIsItemAddedToCart(false);
    setItemCount(10);
  }

  const handleAddtoCart = (e: any) => {
    e.stopPropagation();
    const cartData = {
      ...data,
      productId: data._id,
      quantity: itemCount,
      bidAmount: data.price,
      price: data.price,
    }
    handleAddItemToCart(cartData);
    dispatch(increaseCartCount());
    setIsItemAddedToCart(true);
  }

  return (
    <div className='container-fluid pb-5'>
      {/* <Searchbar /> */}
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='col-10 mx-auto'>
        <div className='row gx-md-5 gy-md-0 mt-3 mt-md-5'>
          <div className='col-12 col-md-7 d-flex justify-content-center align-items-center'>
            {/* <ProductSlider productInfo={data} /> */}
            <img src={data.image} className='img-fluid mx-auto'/>
          </div>
          <div className='col-12 col-md-5 mt-3 mt-md-0'>
            <div className='prodcutDetailsData'>
              <div className='d-flex justify-content-between'>
                <div className='productName'>
                  <h5 className='card-title'>{data.vegName} </h5>
                  <p className='card-text w-2 '>
                    € {data.price}/kg <s className='CrossText'>€ {data.price + 10}/kg</s>
                  </p>
                </div>
              </div>
              <div className={`'themecolor' rounded-end mt-3 offerPercent col-3 btnRadius`}>
                <p className=' p-0 m-0 px-4 py-2 text-light  fw-bold'>10% off</p>
              </div>
              <div className='mt-3'>
                <h6>Product Description</h6>
                <p className='greentext'>Wholesale packing: 3-5 kg, 500*300*115, wood</p>
              </div>
              <div className='mt-3'>
                <h6>Size</h6>
                <div className='radius_container d-flex  align-items-center justify-content-between border'>
                  <p className={`themecolor col-6  m-0 p-0 py-2 text-center text-light`}>kg</p>
                  <input type={"number"} className=' col-6  border border-0 border-none m-0 p-0 text-center border border-none border-0 h-100' placeholder={itemCount} />
                </div>
              </div>
              <div className='mt-3'>
                {
                  isItemAddedToCart ?
                    <button className={`danger border border-0 btnRadius py-3 w-100 text-light fw-bold`} onClick={handleRemoveFromCart}>
                      Remove from Cart
                    </button>
                    :
                    <button className={`themecolor border border-0 btnRadius py-3 w-100  text-light fw-bold`} onClick={handleAddtoCart}>
                      Add to Cart
                    </button>
                }
              </div>
              {
                isItemAddedToCart ? <div className='mt-3'>
                  <button className={`themecolor border border-0 btnRadius py-3 w-100  text-light fw-bold`} onClick={handleShowCartModal}>
                    Buy Now
                  </button>
                </div> : null
              }


              {/* <div className='mt-3'>
                <h6>Postage is calculated at checkout.</h6>
              </div> */}
              {/* <div className='mt-5 d-flex align-content-center'>
                <h6 className='greentext'>Share :</h6>
                <div className='socialIconMain'>
                  <i className="fa fa-facebook-square h4 mx-2" aria-hidden="true"></i>
                  <i className="fa fa-linkedin-square h4 mx-2" aria-hidden="true"></i>
                  <i className="fa fa-twitter-square h4 mx-2" aria-hidden="true"></i>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <CartModal showCartModal={showCartModal} closeCartModal={closeCartModal} productData={data} />
    </div>
  )
}

export default ProductCom
