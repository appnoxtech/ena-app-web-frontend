import React from 'react'
import Table from 'react-bootstrap/Table'
import Tomato from '../../assets/images/carrot.jpg'
import DynamicButton from '../button/Button'
import './Order.css'
const Order = () => {
  return (
    <div className='container-fluid pb-5'>
      <div className='side-Part rounded-4 bg-white'>
        <div className='col-12 mx-auto'>
          <Table responsive className='orders_Heading rounded table-hover'>
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
                    <h5 className='fw-bold'>kn 35560</h5>
                  </td>
                  <td>
                    {index == 0 ? (
                      <p className='approved_text'>
                        Approved
                        {/* <DynamicButton/> */}
                      </p>
                    ) : (
                      <p className='pending_text'>Pending</p>
                    )}
                  </td>
                  <td>
                    {index == 0 ? (
                      <div className='d- flex align-items-center justify-content-between'>
                        <DynamicButton
                          props={{ styleName: 'dark px-5  p-0', indexData: 'Track' }}
                        />

                        <DynamicButton
                          props={{ styleName: 'danger px-3 p-0 mt-2', indexData: 'Cancel Order' }}
                        />
                      </div>
                    ) : (
                      <div className=''>
                        <DynamicButton
                          props={{ styleName: 'danger py-1 p-0 px-3', indexData: 'Cancel Order' }}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>

    // <table className='table  table-hover '>
    //   <thead>
    //     <tr className="border">
    //       <th></th>
    //       <th scope='col' className='text-center'>
    //         Product
    //       </th>
    //       <th scope='col' className='text-center'>
    //         Price
    //       </th>
    //       <th scope='col' className='text-center'>
    //         Size
    //       </th>
    //       <th scope='col' className='text-center'>
    //         Subtotal
    //       </th>
    //       <th scope='col' className='text-center'>
    //         Status
    //       </th>
    //       <th scope='col' className='text-center'>
    //         Action
    //       </th>
    //     </tr>
    //   </thead>
    //   <tbody className='shopingCartTableBody'>
    //     {Array.from({ length: 2 }).map((data, index) => (
    //       <tr key={index}>
    //         {/* <td className='text-center'>
    //           <div className=' d-flex align-i'>
    //             <img src={Tomato} alt='img' className='img-fluid order_image' />
    //             <h5>Carrot</h5>
    //           <p className='order_Id'>Order id:1234</p>
    //           </div>
    //         </td> */}
    //         <td>
    //           <div className=''>
    //             <img src={Tomato} alt='img' className='img-fluid order_image' />
    //           </div>
    //         </td>
    //         <td>
    //           <h5>Carrot</h5>
    //           <p className='order_Id'>Order id:1234</p>
    //         </td>
    //         <td>
    //           <h6>kn 35.2/kg</h6>
    //         </td>
    //         <td>
    //           <div className=''>
    //             <h5>10 kg</h5>
    //           </div>
    //         </td>
    //         <td>
    //           <h5 className='fw-bold'>kn 35560</h5>
    //         </td>
    //         <td>
    //           {index == 0 ? (
    //             <p className='approved_text'>Approved</p>
    //           ) : (
    //             <p className='pending_text'>Pending</p>
    //           )}
    //         </td>
    //         <td>
    //           <div className=''>
    //             <h5>Remove</h5>
    //           </div>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  )
}

export default Order
