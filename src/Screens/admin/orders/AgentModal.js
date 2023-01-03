import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'react-bootstrap';
import { Avatar, Divider, List, Skeleton } from 'antd';
import { AssignOrderService } from '../../../services/order/OrderService';
import { hostname } from '../../../GlobalVariable';
import { useDispatch } from 'react-redux';
import { UpdateAssignedOrderId } from '../../../redux/reducer/order/OrderAssignedReducer';

const socket = io(hostname);

function AgentModal(props) {
    const dispatch = useDispatch();
    const [isConnected, setIsConnected] = useState(socket.connected);
    const { riderList } = props;
    const {orderId} = props;
    
    const AssignOrder = async(rider) => {
       try {
        socket.emit("SUBSCRIBE_TO_ORDER", {
            orderId: orderId,
        });
        dispatch(UpdateAssignedOrderId(orderId));
        // socket.on('ORDER_UPDATED', (data) => {
        //     console.log('Agent Socket Fn. runned');
        //     try {
        //       console.log('Agent Data', {...data});
        //     //   if(data){
        //     //     setOrderList(data);
        //     //    }
        //     } catch (error) {
        //       console.error('Socket Error', error);
        //     }
        // });
        const param = {agentId: rider._id, orderId}
        const res = await AssignOrderService(param);
        await props.updateOrderDetails();
        props.onHide();
        alert('Agent Assigned');
       } catch (error) {
          alert(error.message);
       }
    };

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Hi connection is runned');
            setIsConnected(true);
          });
      
          socket.on('disconnect', () => {
            setIsConnected(false);
          });

          return () => {
            socket.off('connect');
            socket.off('disconnect');
          };
    }, []);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Agent List
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="col-12">
                    <List
                        dataSource={riderList}
                        renderItem={(item) => (
                            <List.Item key={item._id}>
                                <List.Item.Meta
                                    avatar={<Avatar size={'large'} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />}
                                    title={<a>{item.firstName + ' ' + item.lastName}</a>}
                                    description={item.email}
                                />
                                <Button onClick={() => AssignOrder(item)} variant="link">Assign</Button>
                            </List.Item>
                        )}
                    />
                </div>

            </Modal.Body>
        </Modal>
    );
}

export default AgentModal