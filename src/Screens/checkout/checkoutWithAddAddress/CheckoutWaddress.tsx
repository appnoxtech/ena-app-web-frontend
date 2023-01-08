import React, { useEffect, useState } from 'react'
import AddAddressComp from '../../../component/common-components/addAddressComp/AddAddressComp'
import Breadcrumb from '../../../component/common-components/breadcrumb/Breadcrumb'
import OrderCard from '../../../component/common-components/orderCard/OrderCard'
import './CheckoutWaddress.css'
import '../../../assets/global/global.css'
import { GetCartDetailsService } from '../../../services/cart/cartService'
import AddressCard from '../../../component/common-components/addressCard/AddressCard'
import Lottie from 'react-lottie';
import LoadingAnimation from '../../../assets/animations/Loading.json';
import { getAddressList } from '../../../services/address/AddressService'
import useErrorHandler from '../../../services/handler/ErrorHandler'

function CheckoutWaddress() {
  const [address, setAddress] = useState([]);
  const ShowError = useErrorHandler();
  const [isLoading, setIsLoading] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
  };

  const getAddressListData = async() => {
    try {
      const res = await getAddressList();
      const addressData = res.data.data;
      if(addressData.length > 0){
        setAddress(addressData)
      }
    } catch (error) {
      ShowError(error);
    }
  };

  useEffect(() => {
    getAddressListData();
  }, []);


  console.log('Address', isLoading);
  
  return (
    <div className='container-fluid mx-0'>
      <div className='row d-flex justify-content-between m-0 p-0'>
        <div className='col-12 d-none d-md-block'>
          <Breadcrumb />
        </div>
        <div className='col-12 d-flex justify-content-center row mx-auto px-md-5'>
        <div className='col-12 col-lg-8 mx-auto border back-g-lightwhite py-4 border_radius1 px-md-5'>
          {
            address.length > 0 ? 
            <AddressCard address={address[address.length - 1]} setAddress={setAddress} />
            // address.map(item => {
            //   return <AddressCard address={item} setAddress={setAddress} />
            // })
            :
            <AddAddressComp setAddress={setAddress} />
          }
        </div>
          <div className="col-lg-4 col-12 mt-5 mt-lg-0">
          <div className="container-fluid px-4 border border_radius1 py-4 back-g-lightwhite">
            <OrderCard setIsLoading={setIsLoading}  />
            </div>
          </div>
        </div>
      </div>
      {
        isLoading ? <div className='loading-conatiner'>
                <Lottie
                  options={defaultOptions}
                  height={400}
                  width={400}
                />
        </div> : null
      }
    </div>
  )
}

export default CheckoutWaddress