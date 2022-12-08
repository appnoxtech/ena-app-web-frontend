import React from 'react'
import Searchbar from '../searchbar/Searchbar'
import Table from 'react-bootstrap/Table';
import Image1 from '../../assets/images/product/1.png';
import "./cart.css"

const CartCom = () => {
    return (
        <div className='container-fluid pb-5'>
            <Searchbar />
            <div className='side-Part rounded-4 bg-white'></div>
            <div className="col-10 mx-auto">
                <div className="text-center mb-4 mt-5">
                    <h4>Shopping Cart</h4>
                </div>
                <Table responsive className='shopingCartMain'>
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
                        {
                            Array.from({ length: 2 }).map((data, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="cartTableImg">
                                            <img src={Image1} alt="img" className='img-fluid' />
                                        </div>
                                    </td>
                                    <td>
                                        <h5>Carrot</h5>
                                    </td>
                                    <td>
                                        <h5>kn 35.2</h5>
                                    </td>
                                    <td>
                                        <div className="ProductSizeCart">
                                            <input type="number" value={"1"} />
                                            <h5>(kg)</h5>
                                        </div>
                                    </td>
                                    <td>
                                        <h5>kn 35560</h5>
                                    </td>
                                    <td>
                                        <div className="removeProductCart">
                                            <h5>Remove</h5>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default CartCom