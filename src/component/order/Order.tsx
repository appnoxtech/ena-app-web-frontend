import React from 'react'
import Table from 'react-bootstrap/Table'
import Tomato from '../../assets/images/6-tomato-png-image.png'

import './Order.css'
const Order = () => {
  return (
    <div className='container-fluid pb-5'>
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='col-10 mx-auto'>
        <Table responsive className='orders_Heading rounded'>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Size</th>
              <th>Subtotal</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='shopingCartTableBody'>
            {Array.from({ length: 2 }).map((data, index) => (
              <tr key={index}>
                <td>
                  <div className=''>
                    <img src={Tomato} alt='img' className='img-fluid order_image' />
                  </div>
                </td>
                <td>
                  <h5>Carrot</h5>
                  <p className='order_Id'>Order id:1234</p>
                </td>
                <td>
                  <h6>kn 35.2/kg</h6>
                </td>
                <td>
                  <div className=''>
                    <h5>10 kg</h5>
                  </div>
                </td>
                <td>
                  <h5>kn 35560</h5>
                </td>
                <td>
                  {index  == 0 ? (
                    <div className=''>
                      <h5>Approved</h5>
                    </div>
                  ) : (
                    <div className=''>
                      <h5>Pending</h5>
                    </div>
                  )}
                </td>
                <td>
                  <div className=''>
                    <h5>Remove</h5>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Order
