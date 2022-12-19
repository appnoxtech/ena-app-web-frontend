import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import './Desktop.css'
import Ena from '../../assets/images/enaLogoGreen.png'
import { Button, OverlayTrigger, Popover, PopoverHeader } from 'react-bootstrap'
import {useSelector} from 'react-redux';
import { GetCartDetailsService } from '../../services/cart/cartService'

const Desktop = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state: any) => state.user.isLogin);
  //const count = useSelector((state:any) => state.cart.count);
  const [count, setCount] = useState(0);

  const MenuItem = [
    {
      navName: '',
      path: '/',
    },
    {
      navName: '',
      path: '/shop',
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
    localStorage.removeItem('CUSTOMER_Token')
    navigate('#')
  }
  console.log('isLogin', isLogin);

  const getCart = async () => {
    const res = await GetCartDetailsService();
    const data = res.data[0].productList;
    if (data) {
      setCount(data.length);
    }
  }

  useEffect(() => {
    getCart();
  }, []);
  
  return (
    <div className='col-12 p-4'>
      <div className='  d-md-flex justify-content-between align-items-center  '>
        <NavLink to={'/'}>
          <div>
            <img className='imageProp ' src={Ena} alt='Ena' />
          </div>
        </NavLink>
        <div className='navOuter '>
          {MenuItem.map((item, index) => (
            <li className='navli  ' key={index}>
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
                    <NavLink to='#' onClick={() => Logout()}>
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink to='/login'>Log in</NavLink>
                  )}
                </Popover.Body>
              </Popover>
            }
          >
            <Button className='nav__link' variant=''>
              <i className='fa fa-user-o person-icon' aria-hidden='true'></i>
            </Button>
          </OverlayTrigger>
          <i className='fa fa-heart-o heart_icon' aria-hidden='true'></i>
          <NavLink to='/cart'>
            <div className="cart-container">
               <p className='cart-count'>{count}</p>
               <i className='fa fa-shopping-cart cart_icon' aria-hidden='true'></i>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Desktop
