import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Searchbar from '../searchbar/Searchbar'

// import Image1 from '../../assets/images/one.png';
import './cart.css'
import infoIcon from '../../assets/images/info.svg'
import { GetCartDetailsService, UpdateCartService } from '../../services/cart/cartService'
import Lottie from 'react-lottie';
import emptyCartData from '../../assets/animations/emptyCart.json';
import { updateUserCart } from '../../redux/reducer/cart/CartReducer'

const CartCom = () => {
  const Message = 'Taxes and postage are calculated at checkout';
  const history = useNavigate();
  const [size, setSize] = useState('1')
  const [cartData, setCartData] = useState([]);
  const getCart = async () => {
    const res = await GetCartDetailsService();
    const data = res.data[0].productList;
    if (data) {
      setCartData(data);
    }
  }

  useEffect(() => {
    getCart();
  },[]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emptyCartData,
  };

  const handleRemoveCart = async (item:any) => {
    console.log('this call', item);
    
     const data = {
       productId: item.productId,
       removeProduct: 1
     }
     const res = await UpdateCartService(data);
     getCart();
  }

  const calculateSubTotal = () => {
    const total = cartData.reduce((total, item ) => {
      return total + item.price
    }, 0);
    return total;
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
            cartData.length > 0 ?
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
                    cartData.map((item) => {
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
                                <input type='number' value={size} onChange={(e) => setSize(e.target.value)} />
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
                <button className=' btnRadius border border-0 themecolor py-3 fw-bold text-light col-12' onClick={() => history('/checkoutWaddress')}>
                  Checkout
                </button>
              </div>
            </>
            : null
        }
      </div>
    </div>
  )
}

export default CartCom
