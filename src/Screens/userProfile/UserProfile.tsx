import { Avatar } from 'antd'
import React from 'react';
import { useSelector } from 'react-redux';
import { user } from '../../types';
import './style.css';
import UserTabs from './UserTabs';

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
        <div className="col-12 col-md-8 ps-4 pt-2">
            <p className='fs-5 fs-md-3 fw-semibold'>{`${user.firstName} ${user.lastName}`}</p>
            <p className='fs-7 fs-md-5 fw-semibold text-muted'>{user.email}</p>
        </div>
      </div>
      <div className="col-10 mx-auto mt-4">
          <UserTabs user={user} />
      </div>
    </div>
  )
}

export default UserProfile