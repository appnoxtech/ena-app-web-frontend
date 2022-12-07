import React from 'react'
import LoginInput from '../loginInput'
import './AddAddress.css'

function AddAddress() {


    const contactInfoItem = [
        {
            lable:'Name',
            type:'text',
            id:'username',
            name:'username',
            placeholder:'Enter text here'
        },
        {
            lable:'Phone Number',
            type:'number',
            id:'phone',
            name:'phone',
            placeholder:'Enter text here'
        },
    ]
    const shippingAddress = [
        {
            lable:'Country',
            type:'text',
            id:'country',
            name:'country',
            placeholder:'Enter text here'
        },
        {
            lable:'State',
            type:'text',
            id:'state',
            name:'state',
            placeholder:'Enter text here'
        },
        {
            lable:'City',
            type:'text',
            id:'city',
            name:'city',
            placeholder:'Enter text here'
        },
        {
            lable:'Pincode',
            type:'number',
            id:'pincode',
            name:'pincode',
            placeholder:'Enter text here'
        },
        {
            lable:'Locality / Area / Street',
            type:'text',
            id:'address',
            placeholder:'Enter text here'
        },
        {
            lable:'Flat No. / Building Name',
            type:'text',
            id:'address',
            placeholder:'Enter text here'
        },
    ]
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    Contact info
                </div>
                <div className="col-12">
                    {
                        contactInfoItem.map((item)=>(
                            <>
                                <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>Email</label>
                <LoginInput
                  type={item.type}
                  name={item.name}
                  id={item.id}
                  placeholder={item.placeholder}
                  class='form-control mt-3 d-none d-md-block d-lg-block'
                />
                <LoginInput
                  type={item.type}
                  name={item.name}
                  id={item.id}
                  placeholder={item.placeholder}
                  class='form-control mt-3 d-md-none d-lg-none d-sm-block'
                />
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default AddAddress