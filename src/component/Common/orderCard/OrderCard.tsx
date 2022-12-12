import React from 'react'
import carrot from '../../../assets/images/carrot.jpg'
import '../../../assets/global/global.css'
import './OrderCard.css'
import { useNavigate } from 'react-router-dom'

function OrderCard() {
    const history = useNavigate();
  return (
    <>
            <div className="col-12 row g-0">
                <div className="col-12 fontWeight-600 addAddress_heading">Your Order</div>
                <hr className='mt-4'/>
                    <div className="col-12 row">
                        <div className="col-6">
                            <img src={carrot} className='img-fluid' />
                        </div>
                        <div className="col-6">
                            <div className="col-12 fontWeight-600">Carrot</div>
                            <div className="col-12">Size: 1 KG</div>
                            <div className="col-12">kn 35.2</div>
                        </div>
                        <div className="col-6">
                            <img src={carrot} className='img-fluid' />
                        </div>
                        <div className="col-6">
                            <div className="col-12 fontWeight-600">Carrot</div>
                            <div className="col-12">Size: 1 KG</div>
                            <div className="col-12">kn 35.2</div>
                        </div>
                    </div>
                <hr />
                <div className="col-12 m-0 p-0">
                    <div className="col-12 row gx-0">
                        <div className="col fontWeight-500">
                        Subtotal
                        </div>
                        <div className="col text-end">
                        Kn253
                        </div>
                    </div>
                    <div className="col-12 row gx-0">
                        <div className="col fontWeight-500">
                        Taxes <i className="fa fa-question-circle" aria-hidden="true"></i>
                        </div>
                        <div className="col text-end">
                        Kn253
                        </div>
                    </div>
                    <div className="col-12 row gx-0">
                        <div className="col fontWeight-500">
                        Delivery <i className="fa fa-question-circle" aria-hidden="true"></i>
                        </div>
                        <div className="col text-end">
                        Kn25
                        </div>
                    </div>
                </div>
                <hr className='mt-3'/>
                <div className="col-12 m-0 p-0">
                    <div className="col-12 row gx-0">
                        <div className="col h5 fontWeight-700">Total</div>
                        <div className="col h5 text-end">Kn 52456</div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="col text-end">
                        <button className="btn w-100 fontWeight-600 order_button1" onClick={()=> history('/checkout')}>Place Order</button>
                        </div></div>
                </div>
                
            </div>

    
    </>
  )
}

export default OrderCard