import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Lottie from 'react-lottie';
import Searchbar from '../searchbar/Searchbar'
import './cart.css'
import infoIcon from '../../assets/images/info.svg'
import { GetCartDetailsService, UpdateCartService } from '../../services/cart/cartService'
import emptyCartData from '../../assets/animations/emptyCart.json';
import { updateUserCart } from '../../redux/reducer/cart/CartReducer'
import { useGetCartList } from '../../hooks/carts/getCartList';
import { useRemoveItemFromCart } from '../../hooks/carts/removeFromCart';
import { useUpdateCartItem } from '../../hooks/carts/updateCartItem';
import { useIsLoginHook } from '../../hooks/user/IsLoginHooks';
import LoginModal from '../common-components/modals/loginModal';
import { useDispatch } from 'react-redux';
import { decreaseCartCount } from '../../redux/reducer/cart/CartReducer';
import { useUpdateBidAmount } from '../../hooks/carts/updateBidAmount';
import ProductCard from '../ProductCard/ProductCard';

const CartCom = () => {
  const Message = 'Taxes and postage are calculated at checkout';
  const [modalShow, setModalShow] = React.useState(false);
  const history = useNavigate();
  const isLogin = useIsLoginHook();
  const updateBidAmount = useUpdateBidAmount();
  const dispatch = useDispatch()
  const updateCartItem = useUpdateCartItem();
  const cartData = useGetCartList();
  const handleRemoveItemFromCart = useRemoveItemFromCart();
  const [cartList, setCartList] = useState(cartData);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emptyCartData,
  };

  const handleRemoveCart = async (item: any) => {
    const data = {
      productId: item.productId,
      removeProduct: 1
    }
    const newList = await handleRemoveItemFromCart(data);
    setCartList(newList);
    dispatch(decreaseCartCount());
  }

  const calculateSubTotal = () => {
    const total = cartData.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0);
    return total;
  }

  const calculateBidSubTotal = () => {
    const total = cartData.reduce((total, item) => {
      return total + (item.bidAmount * item.quantity)
    }, 0);
    return total;
  }

  const handleBidAmountChange = (CardItem: any, bidAmount: any) => {
    const count = parseInt(bidAmount, 10);
    if (typeof count !== 'number' || isNaN(count)) {
      alert('Invalid Quantity')
    } else if (count < 0) {
      alert('Only Positive Quantity');
    } else {
      const data = {
        ...CardItem,
        productId: CardItem._id,
        bidAmount: bidAmount,
        price: CardItem.price,
      }
      const newList = updateBidAmount(data);
      setCartList(newList);
    }
  }

  const handleItemCountChange = (CardItem: any, ItemQuantity: any) => {
    console.log('itemQuantity', ItemQuantity);

    const count = parseInt(ItemQuantity, 10);
    if (typeof count !== 'number' || isNaN(count)) {
      alert('Invalid Quantity')
    } else if (count < 0) {
      alert('Only Positive Quantity');
    } else {
      const data = {
        ...CardItem,
        productId: CardItem._id,
        quantity: ItemQuantity,
        price: CardItem.price,
      }
      console.log('cart update data', data);

      const newList = updateCartItem(data);
      setCartList(newList);
    }
  }
  const handleCheckOut = () => {
    if (isLogin) {
      history('/checkoutWaddress');
    } else {
      setModalShow(true);
    }
  }

  return (
    <div className='container-fluid'>
      {/* <Searchbar /> */}
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='col-11 mx-auto'>
        <div className='text-center mb-4 mt-1'>
          <h2 style={{ color: '#51BC4A' }}>Shopping Cart</h2>
        </div>
        {
          cartList.length > 0 ?
            <div className="col-12 d-md-flex">
              <div className='col-12 col-md-8 px-2 px-md-4 pt-3' style={{ height: '65vh', overflow: 'scroll' }}>
                {
                  cartList.map(item => <ProductCard handleRemoveCart={handleRemoveCart} handleBidAmountChange={handleBidAmountChange} handleItemCountChange={handleItemCountChange} item={item} />)
                }
              </div>
              <div className="mt-3 col-12 col-md-4 px-3">
                {
                  cartData.length > 0 ?
                    <div>
                      <div className='subTotalCartVal'>
                        <h5>
                          Subtotal: <span>€ {calculateSubTotal().toFixed(2)}  </span>
                        </h5>
                        <h5>
                          BidSubtotal: <span>€ {calculateBidSubTotal().toFixed(2)}  </span>
                        </h5>
                        <div className='infoText'>
                          <img src={infoIcon} alt='info' className='img-fluid' />
                          <p>{Message}</p>
                        </div>
                      </div>
                      <div className='mt-3'>
                        <button className=' btnRadius border border-0 themecolor py-3 fw-bold text-light col-12' onClick={() => handleCheckOut()}>
                          Checkout
                        </button>
                      </div>
                    </div>
                    : null
                }
              </div>
            </div> : <div className='d-flex justify-content-center align-item-center' style={{height: '70vh'}}>
              <Lottie
                options={defaultOptions}
                height={400}
                width={400}
              />
            </div>
        }
      </div>
      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default CartCom
