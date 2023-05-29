import React, { useEffect, useState} from 'react';
import "react-step-progress-bar/styles.css";
import { Card } from 'antd';
import Table from 'react-bootstrap/Table'
import './Order.css'
import '../../assets/global/global.css';
import OrderSteps from '../orderSteps/OrderSteps';


const OrderDetails: React.FC<any> = () => {
    const order = JSON.parse(localStorage.getItem('orderDetail'));
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('orderDetail');
        if (data) {
            const order = JSON.parse(data);
            setOrderList(order.productList);
        }
    }, []);

    return (
        <div className='container-fluid pb-5 mt-5'>
            <div className='side-Part rounded-4 bg-white'></div>
            <div className="col-12 d-flex flex-column flex-lg-row">
                <div className='fixedHeightTable-60 col-12 col-lg-9 mx-auto px-3'>
                    <Table responsive className='orders_Heading rounded mt-5 mt-md-0 min-width-646'>
                        <thead className="header">
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Bid Price</th>
                            </tr>
                        </thead>
                        <tbody className='shopingCartTableBody'>
                            {orderList.map((data, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className=''>
                                            <img src={data.image} alt='img' className='img-fluid order_image' />
                                        </div>
                                    </td>
                                    <td>
                                        <h5>{data.engVegName}</h5>
                                    </td>
                                    <td>
                                        <h6>€ {data.price}/kg</h6>
                                    </td>
                                    <td>
                                        <div className=''>
                                            <h5>{data.quantity} kg</h5>
                                        </div>
                                    </td>
                                    <td>
                                        <h5>€ {(data.quantity * data.price).toFixed(2)}</h5>
                                    </td>
                                    <td>
                                        <div className=''>
                                            <h5>€ {data.bidAmount ? data.bidAmount : data.price}</h5>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <div className="order-details col-12 col-lg-3 d-flex flex-column justify-content-around align-items-stretch mx-auto">
                <Card title="Tracking Details" bordered={true} className='col-12 mb-2'>
                    <OrderSteps orderStatus={order.status} />
                </Card>

                <Card title="Shipping Details" bordered={true} className='col-12 my-2'>
                    <p className='fs-5'>{`${order.addressInfo.buildingName} , ${order.addressInfo.street}, ${order.addressInfo.city} `}</p>
                    <p className='fs-5'>{`${order.addressInfo.state}, ${order.addressInfo.pincode}`}</p>
                    <p className='fs-5'>{`Phone: 9667699240`}</p>
                </Card>
                </div>
            </div>
            
           
        </div>
    )
}

export default OrderDetails
