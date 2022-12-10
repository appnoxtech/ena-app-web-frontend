import React, { useState } from 'react'
import Searchbar from '../searchbar/Searchbar'
import Table from 'react-bootstrap/Table'
// import Image1 from '../../assets/images/one.png';
import './cart.css'
import infoIcon from '../../assets/images/info.svg'

const CartCom = () => {
  const [size, setSize] = useState('1')
  let Image1 = 'https://drhealthbenefits.com/wp-content/uploads/2017/06/carrot-leaves.jpg'
  return (
    <div className='container-fluid pb-5'>
      {/* <Searchbar /> */}
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='col-11 mx-auto'>
        <div className='text-center mb-4 mt-5'>
          <h2>Shopping Cart</h2>
        </div>
        <div style={{overflowX:'scroll'}} className='col-12'>
        <Table  className='shopingCartMain  w-100'>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Size</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='shopingCartTableBody'>
            {Array.from({ length: 2 }).map((data, index) => (
              <>
                <tr key={index}>
                  <td>
                    <div className=''>
                      <img src={Image1} alt='img' className='img-fluid col-4 col-md-3'  />
                    </div>
                  </td>
                  <td>
                    <h5>Carrot</h5>
                  </td>
                  <td>
                    <h5>kn 35.2</h5>
                  </td>
                  <td>
                    <div className='ProductSizeCart'>
                      <input type='number' value={size} onChange={(e) => setSize(e.target.value)} />
                      <h5>(kg)</h5>
                    </div>
                  </td>
                  <td>
                    <h5>kn 35560</h5>
                  </td>
                  <td>
                    <div className='removeProductCart'>
                      <h5>Remove</h5>
                    </div>
                  </td>
                </tr>
                
              </>
            ))}
          </tbody>
        </Table>
        </div>

        {/* <div className='col-12 border bg-danger  d-flex' style={{width:'100%'}}>
                  <div className='col-12 col-md-4 bg-dark' style={{width:''}}>
                        <h1>sachin</h1>
                  </div>
                  <div className='col-12 col-md-4 bg-dark' style={{width:''}} >

                  </div>
                  <div className='col-12 col-md-4 bg-dark' style={{width:''}}>

                  </div>
                </div> */}
        <div className='subTotalCartVal'>
          <h5>
            Subtotal: <span>kn 68723 HRK</span>
          </h5>
          <div className='infoText'>
            <img src={infoIcon} alt='info' className='img-fluid' />
            <p>Taxes and postage are calculated at checkout</p>
          </div>
        </div>
        <div className='mt-3'>
          <button className=' btnRadius border border-0 themecolor py-3 fw-bold text-light col-12'>
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartCom
