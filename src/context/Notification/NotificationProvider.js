// myProvider.js
import React from 'react';
import NotificationContext from './NotificationContext';
import {notification} from 'antd';

const NotificationProvider = (props) => {
    const [api, contextHolder] = notification.useNotification();
    function openNotification ({title, description, type}) {
        api[type]({
          message: title,
          description: description,
          placement: 'topLeft',
        });
    };
    return (
        <NotificationContext.Provider value={openNotification}>
          {contextHolder}
          {props.children}
        </NotificationContext.Provider>
        )
};
export default NotificationProvider;