import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import EnaLogo from '../../assets/images/enaLogoGreen.png'
import '../../assets/global/global.css'
import './Mobilenav.css'
import { Button, OverlayTrigger, Popover, PopoverBody } from 'react-bootstrap'
import { useIsLoginHook } from '../../hooks/user/IsLoginHooks'
import { useGetCartList } from '../../hooks/carts/getCartList'
import { useDispatch, useSelector } from 'react-redux'
import { resetCartCount, updateUserCart } from '../../redux/reducer/cart/CartReducer'
import { resetUserData } from '../../redux/reducer/UserDetails/userAction'

const Mobilenav = ({ }) => {
  const navigate = useNavigate();
  const isLogin = useIsLoginHook();
  const cartData = useGetCartList();
  const UserType = useSelector((state: any) => state.user.userType);
  const dispatch = useDispatch();
  const countGlobal = useSelector((state: any) => state.cart.count);
  const [count, setCount] = useState(cartData.length);
  const MenuItem = isLogin ? [
    {
      navName: 'Home',
      path: '/',
    },
    {
      navName: 'Orders',
      path: '/order',
    },
    {
      navName: 'Cart',
      path: '/cart',
    },
  ] : [
    {
      navName: 'Home',
      path: '/',
    },
    {
      navName: 'Cart',
      path: '/cart',
    },
  ]

  // function for logout

  const Logout = () => {
    localStorage.clear();
    dispatch(resetUserData());
    dispatch(resetCartCount());
    navigate('/login');
  }
  useEffect(() => {
    dispatch(updateUserCart(cartData.length));
    setCount(countGlobal);
  }, [countGlobal]);

  return (
    <>
      <div className=' d-flex-column w-100 border'>
        <div className='d-flex justify-content-between p-2'>
          <button
            className='bg-light border-0'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasExample'
            aria-controls='offcanvasExample'
          >
            <i className='fa fa-bars fs-2 font-green' aria-hidden='true'></i>
          </button>
          <div
            className='offcanvas offcanvas-start'
            id='offcanvasExample'
            aria-labelledby='offcanvasExampleLabel'
          >
            <div className='offcanvas-header border'>
              <img src={EnaLogo} className='offcanvas-title w-25 ms-4' id='offcanvasExampleLabel' />
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              <div className='mt-3'>
                <ul className=''>
                  {MenuItem.map((item, index) => (
                    <li className='py-2' key={index}>
                      <NavLink className='h3' to={item.path}>
                        {item.navName}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='d-flex flex-row  mx-2 justify-content-center align-item-center '>
            <OverlayTrigger
              trigger='focus'
              key='bottom'
              placement='bottom'
              overlay={
                <Popover id='popover-positioned-bottom'>
                  <PopoverBody>
                    {isLogin ? (
                      <NavLink to='/' onClick={() => Logout()}>
                        Logout
                      </NavLink>
                    ) : (
                      <NavLink to='/login'>Log in</NavLink>
                    )}
                  </PopoverBody>
                </Popover>
              }
            >
              <Button className='nav__link' variant=''>
                <i className='fa fa-user-o fs-2 font-green' aria-hidden='true'></i>
              </Button>
            </OverlayTrigger>
            {
              UserType === 'customer' ?
                <NavLink to='/cart'>
                  <div className="ms-4 cart-container">
                    <p className='cart-count'>{count}</p>
                    <i className='mt-2 fa fa-shopping-cart font-green cart_icon' aria-hidden='true'></i>
                  </div>
                </NavLink> : null
            }

            {/* <i className='fa fa-heart-o heart_icon' aria-hidden='true'></i> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Mobilenav
