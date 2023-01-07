import React from 'react'
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import SuccessAnimation from '../../../assets/animations/Success.json';
import ButtonComp from '../../../component/common-components/buttonComp/ButtonComp';
import './OrderSuccess.css';

export default function OrderSuccess() {
  const navigation = useNavigate();
  const navigationHandler = () => {
    navigation('/order');
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SuccessAnimation,
  };

  return (
    <div className='orderSuccessConatiner'>
        <div className="successBody col-12 d-flex flex-column justify-content-center align-items-center">
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
            />
            <p className='mt-1 h3 fontWeight-700'>Order Placed</p>
            <p className='mt-1 h6 fontWeight-200'>You can check your order status under order section.</p>
            <ButtonComp
                navigationHandler={navigationHandler}
                type='button'
                class='btn w-60 fontWeight-600 order_button1'
                btvalue='Continue Shopping'
              />
        </div>
    </div>
  )
}
