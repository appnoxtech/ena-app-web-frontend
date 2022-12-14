import React, { useEffect, useState } from 'react'
import AddressCard from '../../../component/common-components/addressCard/AddressCard'
import Breadcrumb from '../../../component/common-components/breadcrumb/Breadcrumb'
import OrderCard from '../../../component/common-components/orderCard/OrderCard'
import '../../../assets/global/global.css'
import { NavLink } from 'react-router-dom'
import { getAddressList } from '../../../services/address/AddressService'
import AddAddressComp from '../../../component/common-components/addAddressComp/AddAddressComp'

function Checkout() {
  const [address, setAddress] = useState([]);
  const getAddressListData = async () => {
    try {
      const res = await getAddressList();
      const addressData = res.data.data;
      console.log('addressData', addressData);
      if (addressData.length > 0) {
        setAddress(addressData)
      }
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    getAddressListData();
  }, []);
  return (
    <div className='container-fluid mx-0'>
      <div className='row d-flex justify-content-between m-0 p-0'>
        <div className='col-12 d-none d-md-block mb-4'>
          <Breadcrumb pathName='Shopping Cart &nbsp;/&nbsp;Checkout' />
        </div>
        <div className='col-12 d-flex justify-content-center row mx-auto px-md-5'>
          <div className='col-12 col-lg-8'>
            {
              address.length > 0 ?
                address.map(item => {
                  return <AddressCard address={item} setAddress={setAddress} />
                })
                :
                <AddAddressComp setAddress={setAddress} />
            }
            <div className='col-12 col-lg-3 mt-2 float-end'>
              <NavLink to='/addAddress'>
                <button type='button' className='btn py-3 lh-1 border w-100 fontWeight-600 button1  '>
                  Add Address
                </button>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-4 col-12 mt-5 mt-lg-0">
            <div className="container-fluid px-4 border border_radius1 py-4 back-g-lightwhite">
              <OrderCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout