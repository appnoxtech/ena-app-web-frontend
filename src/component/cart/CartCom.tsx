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

const CartCom = () => {
  const Message = 'Taxes and postage are calculated at checkout';
  const [modalShow, setModalShow] = React.useState(false);
  const history = useNavigate();
  const isLogin = useIsLoginHook();
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

  const handleRemoveCart = async (item:any) => {
     const data = {
       productId: item.productId,
       removeProduct: 1
     }
     const newList = await handleRemoveItemFromCart(data);
     setCartList(newList);
     dispatch(decreaseCartCount());
  }

  const calculateSubTotal = () => {
    const total = cartData.reduce((total, item ) => {
      return total + (item.price * item.quantity)
    }, 0);
    return total;
  }

  console.log('cartData', cartData);
  
  const handleItemCountChange = async(value: any, cardData:any) => {
    const count = parseInt(value, 10);
    if(typeof count !== 'number' || isNaN(count)) {
      alert('Invalid Quantity')
    }else if(count < 0) {
      alert('Only Positive Quantity');
    }else {
      const data = {
        ...cardData,
        productId: cardData._id,
        quantity: count,
        price: cardData.price,
      }
      const newList = await updateCartItem(data);
      setCartList(newList);
    }
  }

  const handleCheckOut = () => {
    console.log('isLogin', isLogin);
    
    if(isLogin) {
      history('/checkoutWaddress');
    }else{
      setModalShow(true);
    }
  }
  return (
    <div className='container-fluid pb-5'>
      {/* <Searchbar /> */}
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='col-11 mx-auto'>
        <div className='text-center mb-4 mt-5'>
          <h2>Shopping Cart</h2>
        </div>
        <div style={{ overflowX: 'scroll' }} className='col-12'>
          {
            cartList.length > 0 ?
              <Table className='shopingCartMain  w-100'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className='shopingCartTableBody'>
                  {
                    cartList.map((item:any) => {
                      return (
                        <>
                          <tr key={item.productId}>
                            <td>
                              <div className=''>
                                <img src={item.image} alt='img' className='img-fluid col-4 col-md-3' />
                              </div>
                            </td>
                            <td>
                              <h5>{item.engVegName}</h5>
                            </td>
                            <td>
                              <h5>{`kn ${item.price}`}</h5>
                            </td>
                            <td>
                              <div className='ProductSizeCart'>
                                <input type='number' value={item.quantity} onChange={(e) => handleItemCountChange(e.target.value, item)} />
                                <h5>(kg)</h5>
                              </div>
                            </td>
                            <td>
                              <h5>kn {item.price * item.quantity}</h5>
                            </td>
                            <td>
                            <button type="button" className="btn btn-outline-danger" onClick={() => handleRemoveCart(item)}>
                               Remove
                            </button>
                              {/* <div className='removeProductCart' >
                                <h5></h5>
                              </div> */}
                            </td>
                          </tr>

                        </>
                      )
                    })
                  }
                </tbody>
              </Table>
              : <div>
                <Lottie
                  options={defaultOptions}
                  height={400}
                  width={400}
                />
              </div>
          }

        </div>

        {/* <div className='col-12 border bg-danger  d-flex' style={{width:'100%'}}>
                  <div className='col-12 col-md-4 bg-dark' style={{width:''}}>
                        <h1>sachin</h1>
                  </div>
                  <div className='col-12 col-md-4 bg-dark' style={{width:''}} >

                  </div>
                  <div className='col-12 col-md-4 bg-dark' style={{width:''}}>

                  </div>
                </div> */}
        {
          cartData.length > 0 ?
            <>
              <div className='subTotalCartVal'>
                <h5>
                  Subtotal: <span>kn {calculateSubTotal()} HRK</span>
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
            </>
            : null
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
