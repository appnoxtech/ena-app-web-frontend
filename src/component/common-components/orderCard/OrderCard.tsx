import React, { useContext, useEffect, useState } from 'react'
import carrot from '../../../assets/images/carrot.jpg'
import '../../../assets/global/global.css'
import './OrderCard.css'
import { useNavigate } from 'react-router-dom'
import ButtonComp from '../buttonComp/ButtonComp'
import { GetCartDetailsService } from '../../../services/cart/cartService'
import { useGetCartList } from '../../../hooks/carts/getCartList'
import { AddToCartService } from '../../../services/cart/cartService'
import { CreateOrderService } from '../../../services/order/OrderService'
import { useDispatch } from 'react-redux'
import { resetCartCount } from '../../../redux/reducer/cart/CartReducer'
import NotificationContext from '../../../context/Notification/NotificationContext'
import useErrorHandler from '../../../services/handler/ErrorHandler'

function OrderCard({...prop}) {
  const navigate = useNavigate()
  const Notification = useContext(NotificationContext);
  const ShowError = useErrorHandler();
  const cartData = useGetCartList();
  const dispatch = useDispatch();
  const navigationHandler = async() => {
    const addressId = localStorage.getItem('addressId');
    if(!addressId){
      return Notification({
        title: 'Address',
        description: 'Select Address',
        type: 'info'
      })
    }
    try {
      prop.setIsLoading(true);
      cartData.forEach(async(item: any) => {
        const data = {
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
          bidAmount: item.bidAmount
        }
        await AddToCartService(data);
      });
      const res = await GetCartDetailsService();
      const cartId = res.data[0].cartId;
      const addressId = localStorage.getItem('addressId');
      await createOrder({cartId, addressId});
      prop.setIsLoading(false);
    } catch (error:any) {
      ShowError(error);
       prop.setIsLoading(false);
    }
  }

  const createOrder = async (data:any) => {
     try {
      await CreateOrderService(data);
      localStorage.removeItem('cartData');
      dispatch(resetCartCount());
      navigate('/orderSuccess');
     } catch (error) {
      alert(error.message)
     }
  }


  const calculateSubTotoal = () => {
    const total = cartData.reduce((total, item ) => {
      return total + (item.price * item.quantity);
    }, 0);
    return total;
  }
  return (
    <>
      <div className='col-12 row g-0'>
        <div className='col-12 fontWeight-600 addAddress_heading'>Your Order</div>
        <hr className='mt-4' />
        <div className='col-12 row fixedHeight' >
          {
            cartData.map(item => {
              return (
                <div className='mb-2 d-flex justify-content-between'>
                  <div className='col-6'>
                    <img src={item.image} className='img-fluid' />
                  </div>
                  <div className='col-6 ps-2'>
                    <div className='col-12 fontWeight-600'>{item.engVegName}</div>
                    <div className='col-12'>Quantity: {item.quantity} KG</div>
                    <div className='col-12'>€ {item.price}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <hr />
        <div className='col-12 m-0 p-0'>
          <div className='col-12 row gx-0'>
            <div className='col fontWeight-500'>Subtotal</div>
            <div className='col text-end'>{`€ ${calculateSubTotoal().toFixed(2)}`}</div>
          </div>
          {/* <div className='col-12 row gx-0'>
            <div className='col fontWeight-500'>
              Taxes <i className='fa fa-question-circle' aria-hidden='true'></i>
            </div>
            <div className='col text-end'>Kn253</div>
          </div>
          <div className='col-12 row gx-0'>
            <div className='col fontWeight-500'>
              Delivery <i className='fa fa-question-circle' aria-hidden='true'></i>
            </div>
            <div className='col text-end'>Kn25</div>
          </div> */}
        </div>
        <hr className='mt-3' />
        <div className='col-12 m-0 p-0'>
          <div className='col-12 row gx-0'>
            <div className='col h5 fontWeight-700'>Total</div>
            <div className='col h5 text-end'>€ {calculateSubTotoal().toFixed(2)}</div>
          </div>
          <div className='col-12 mt-3'>
            <div className='col text-end'>
              <ButtonComp
                navigationHandler={navigationHandler}
                type='button'
                class='btn w-100 fontWeight-600 order_button1'
                btvalue='Place Order'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderCard
