import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import Ena from '../../assets/images/enaLogoGreen.png'
import { Button, OverlayTrigger, Popover, PopoverHeader } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { GetCartDetailsService } from '../../services/cart/cartService'
import { useGetCartList } from '../../hooks/carts/getCartList'
import { useIsLoginHook } from '../../hooks/user/IsLoginHooks'
import { useDispatch } from 'react-redux';
import { resetCartCount, updateUserCart } from '../../redux/reducer/cart/CartReducer'
import { resetUserData } from '../../redux/reducer/UserDetails/userAction'
import './Desktop.css'

const Desktop = () => {
  const navigate = useNavigate();
  const UserType = useSelector((state: any) => state.user.userType);
  const cartData = useGetCartList();
  const dispatch = useDispatch();
  const isLogin = useIsLoginHook();
  const countGlobal = useSelector((state: any) => state.cart.count);
  const [count, setCount] = useState(cartData.length);

  useEffect(() => {
    dispatch(updateUserCart(cartData.length));
    setCount(countGlobal);
  }, [countGlobal]);

  const MenuItem = [
    {
      navName: '',
      path: '/',
    },
    {
      navName: '',
      path: '/order',
    },
    {
      navName: '',
      path: '/about',
    },
    {
      navName: '',
      path: '/contact',
    },
  ]

  // function for logout

  const Logout = () => {
    localStorage.clear();
    dispatch(resetCartCount());
    dispatch(resetUserData());
    navigate('/login');
  }


  return (
    <div className='col-12 px-4 pt-3' style={{ position: 'fixed', top: '0px', left: '0px', backgroundColor: 'white', zIndex: 500 }}>
      <div className='d-md-flex justify-content-between align-items-center  '>
        <NavLink to={'/'}>
          <div>
            <img className='imageProp ' src={Ena} alt='Ena' />
          </div>
        </NavLink>
        <div className='navOuter '>
          {MenuItem.map((item, index) => (
            <li className='navli' key={index}>
              <NavLink to={item.path} className='navli mx-4'>
                {item.navName}
              </NavLink>
            </li>
          ))}
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <OverlayTrigger
            trigger='focus'
            key='bottom'
            placement='bottom'
            overlay={
              <Popover id='popover-positioned-bottom'>
                <Popover.Body>
                  {isLogin ? (
                    <div role={'button'} onClick={() => Logout()}>
                      Logout
                    </div>
                  ) : (
                    <div role={'button'} onClick={() => navigate('/login')}>Log in</div>
                  )}
                </Popover.Body>
              </Popover>
            }
          >
            <Button className='nav__link' variant=''>
              <i style={{ fontSize: 46 }} className='fa fa-user-o person-icon' aria-hidden='true'></i>
            </Button>
          </OverlayTrigger>
          {/* <i className='fa fa-heart-o heart_icon' aria-hidden='true'></i> */}
          {
            UserType === 'customer' ?
              <NavLink to='/cart'>
                <div className="cart-container ms-3">
                  <p
                    style={{
                      fontSize: 'large',
                      position: 'absolute',
                      bottom: '15px',
                      left: '17px',
                      color: '#51BC4A'
                    }}>{count}</p>
                  <i className='fa fa-shopping-cart cart_icon' style={{ fontSize: 46 }} aria-hidden='true'></i>
                </div>
              </NavLink>
              : null
          }

        </div>
      </div>
    </div>
  )
}

export default Desktop
