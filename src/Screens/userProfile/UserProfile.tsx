import { Avatar } from 'antd'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../../types';
import './style.css';
import UserTabs from './UserTabs';
import ButtonComp from '../../component/common-components/buttonComp/ButtonComp';
import { resetUserData } from '../../redux/reducer/UserDetails/userAction';
import { resetCartCount } from '../../redux/reducer/cart/CartReducer';
import { useNavigate } from 'react-router';

function stringToColor(string: string) {
  let hash = 0;
  let i: number;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function UserProfile() {
  const user: user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.clear();
    dispatch(resetUserData());
    dispatch(resetCartCount());
    navigate('/login');
  }
  return (
    <div className="col-12 mt-md-4">
      <div className="col-10 d-flex flex-column flex-md-row mx-auto mt-5">
        <div className="">
          <Avatar
            {...stringAvatar(`${user.firstName} ${user.lastName}`)}
            style={{
              backgroundColor: '#51bc4a9e',
              width: '120px',
              height: '120px',
            }}
          />
        </div>
        <div className="col-12 col-md-6 ps-4 pt-2">
          <p className='fs-5 fs-md-3 fw-semibold'>{`${user.firstName} ${user.lastName}`}</p>
          <p className='fs-7 fs-md-5 fw-semibold text-muted'>{user.email}</p>
        </div>
        <div className="col-12 col-md-3 pt-md-5">
          <ButtonComp
            navigationHandler={Logout}
            type='button'
            class=' btnRadius border border-0 w-100 mt-4 fontWeight-600 button themecolor text-light py-2 '
            btvalue='Logout'
          />
        </div>
      </div>
      <div className="col-10 mx-auto mt-4">
        <UserTabs user={user} />
      </div>
    </div>
  )
}

export default UserProfile