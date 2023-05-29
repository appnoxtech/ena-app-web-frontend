import React from "react"
import { useIsLoginHook } from "../user/IsLoginHooks";
import { useSelector } from "react-redux";

const useGetNavList = () => {
    const isLogin = useIsLoginHook();
    const {userType} = useSelector((state: any) => state.user);
    let navList: any ;

    if(isLogin){
        if(userType === 'customer') {
            navList = [
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
                  }
            ]
        }else if(userType === 'admin') {
            navList = [
                {
                    navName: 'Home',
                    path: '/',
                },
                {
                    navName: 'Orders',
                    path: '/all-orders',
                },
                {
                    navName: 'Products',
                    path: '/all-category',
                },
                {
                    navName: 'Riders',
                    path: '/all-riders',
                },
                
            ]
        }else if(userType === 'driver') {
            navList = [
                {
                    navName: 'Home',
                    path: '/',
                },
            ]
        }
    }else {
        navList = [
            {
                navName: 'Home',
                path: '/',
              },
              {
                navName: 'Cart',
                path: '/cart',
              },
        ]
    }

    return navList;
}

export default useGetNavList;