import React, { useState } from 'react'
import LoginInput from '../loginInput/index'
import './AddAddressComp.css'
import '../../../assets/global/global.css'
import { NavLink, useNavigate } from 'react-router-dom'
import ButtonComp from '../buttonComp/ButtonComp'
import { AddAddressService } from '../../../services/address/AddressService'

function AddAddress({...prop}) {
  const navigate = useNavigate()
  const [isInputDisable, setIsInputDisable] = useState(false);
  const [input,setinput]=useState({
    username : '',
    phone: '',
    state:'',
    city:'',
    country: '',
    pincode:'',
    addressLine1:'',
    addressLine2:'',
  });
  
  console.log(input)

  // console.log(Object.keys(input), 'keyofAllBoect ')
  
  const contactInfoItem = [
    {
      lable: 'Name',
      type: 'text',
      id: 'username',
      name: 'username',
      placeholder: 'Enter your name',
    },
    {
      lable: 'Phone Number',
      type: 'number',
      id: 'phone',
      name: 'phone',
      placeholder: 'Enter your phone number',
    },
  ]

  const shippingAddressSelect = [
    {
      lable: 'Country',
      name: 'country',
      country: [
        {
          name: 'USA',
          value: 'USA',
        },
        {
          name: 'India',
          value: 'India',
        },
        {
          name: 'UK',
          value: 'UK',
        },
      ],
    },
    {
      lable: 'State',
      States: [
        {
          name: 'USA',
          value: 'USA',
        },
        {
          name: 'India',
          value: 'India',
        },
        {
          name: 'UK',
          value: 'UK',
        },
      ],
    },
  ]
  const shippingAddress1 = [
    {
      lable: 'City',
      type: 'text',
      id: 'city',
      name: 'city',
      placeholder: 'Enter city',
    },
    {
      lable: 'Pincode',
      type: 'number',
      id: 'pincode',
      name: 'pincode',
      placeholder: 'Enter pincode',
    },
  ]
  const shippingAddress = [
    {
      lable: 'Locality / Area / Street',
      type: 'text',
      id: 'addressLine1',
      name: 'addressLine1',
      placeholder: 'Enter locality / area / street',
    },
    {
      lable: 'Flat No. / Building Name',
      type: 'text',
      id: 'addressLine2',
      name: 'addressLine2',
      placeholder: 'Enter flat no. / building name',
    },
  ]

  //#region all function here
  const navigationHandler = async() => {
    const data = {
      name: input.username,
      phoneNumber: input.phone,
      addressInfo: {
        pincode: input.pincode,
        country: input.country,
        state: input.state,
        city: input.city,
        street: input.addressLine1,
        buildingName: input.addressLine2,
      }
    }
    try {
      const res = await AddAddressService(data);
      // localStorage.setItem('address', JSON.stringify({...data, _id: res.data.addressId}));
      // prop.setAddress((oldData:any) => [...oldData, {...data, _id: res.data.addressId}]);
      window.location. reload();
      setIsInputDisable(true)
    } catch (error) {
       alert(error.message);
    }
  }

  const navigationBack = () => {
    navigate(-1)
  }

  const onChangeHandler = (e:any) => {
     const {name, value} = e.target;
     console.log('name', name);
     console.log('value', value);
     
     setinput({...input, [name]: value});
  }

  return (
    <>
      <form className='row col-12 mx-auto px-lg-5 gx-0'>
        <div className='col-12 fontWeight-600 addAddress_heading'>Contact Info</div>
        <hr className='mt-4' />
        <div className='col-11 col-md-12 mx-auto'>
          {contactInfoItem.map((item) => (
            <>
              <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                {item.lable}
              </label>
              <LoginInput
                type={item.type}
                name={item.name}
                id={item.id}
                isInputDisable={setIsInputDisable}
                placeholder={item.placeholder}
                class='form-control  mt-3'
                Input={input}
                setInput={setinput}
              />
            </>
          ))}
        </div>
        <div className='col-12 fontWeight-600 mt-4 addAddress_heading'>Shipping Address</div>
        <hr className='mt-4' />
        <div className='col-11 col-md-12 mx-auto row gx-0 d-flex justify-content-between'>
          <div className='col-6 gx-0 pe-4'>
            <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
              {shippingAddressSelect[0].lable}
            </label>
            <select 
              className='form-select form-control mt-3' 
              aria-label='Default select example'
              name='country'
              onChange={(e) => onChangeHandler(e)}
            >
              <option selected disabled>
                Select Country
              </option>
              <option value='USA'>USA</option>
              <option value='INDIA'>India</option>
              <option value='UK'>UK</option>
            </select>
          </div>
          <div className='col-6 ps-4'>
            <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
              {shippingAddressSelect[1].lable}
            </label>
            <LoginInput
              type='text'
              name='state'
              id='state'
              placeholder='Enter State'
              class='form-control  mt-3'
              Input={input}
              setInput={setinput}
            />
          </div>
          <div className='col-6 gx-0 pe-4'>
            <>
              <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                {shippingAddress1[0].lable}
              </label>
              <LoginInput
                type={shippingAddress1[0].type}
                name={shippingAddress1[0].name}
                id={shippingAddress1[0].id}
                placeholder={shippingAddress1[0].placeholder}
                class='form-control mt-3'
                Input={input}
                setInput={setinput}
              />
            </>
          </div>
          <div className='col-6 ps-4'>
            <>
              <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                {shippingAddress1[1].lable}
              </label>
              <LoginInput
                type={shippingAddress1[1].type}
                name={shippingAddress1[1].name}
                id={shippingAddress1[1].id}
                placeholder={shippingAddress1[1].placeholder}
                class='form-control mt-3'
                Input={input}
                setInput={setinput}
              />
            </>
          </div>
            <>
              <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                {shippingAddress[0].lable}
              </label>
              <LoginInput
                type={shippingAddress[0].type}
                name={shippingAddress[0].name}
                id={shippingAddress[0].id}
                placeholder={shippingAddress[0].placeholder}
                class='form-control  mt-3'
                Input={input}
                setInput={setinput}
              />
              <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                {shippingAddress[1].lable}
              </label>
              <LoginInput
                type={shippingAddress[1].type}
                name={shippingAddress[1].name}
                id={shippingAddress[1].id}
                placeholder={shippingAddress[1].placeholder}
                class='form-control  mt-3'
                Input={input}
                setInput={setinput}
              />
            </>
        </div>
        <div className='col-12 row m-0 mt-5 p-0 my-3 d-flex justify-content-center justify-content-md-end'>
          <div className='col-6 col-md-3'>
            <ButtonComp
              navigationHandler={navigationBack}
              type='button'
              class='btn py-3 lh-1 border-3 w-100 fontWeight-600 button2 cancel_button'
              btvalue='Cancel'
            />
          </div>

          <div className='col-6 col-md-3 p-0 p-sm-auto'>
            <ButtonComp
              navigationHandler={navigationHandler}
              type='button'
              class='btn py-3 lh-1 border w-100 fontWeight-600 button1 '
              btvalue='Add Address'
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default AddAddress
