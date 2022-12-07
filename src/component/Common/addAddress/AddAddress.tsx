import React from 'react'
import LoginInput from '../loginInput'
import './AddAddress.css'

function AddAddress() {


    const contactInfoItem = [
        {
            lable:'Name',
            type:'text',
            id:'username'
        },
        {
            lable:'Phone Number',
            type:'number',
            id:''
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
                        
                        
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default AddAddress