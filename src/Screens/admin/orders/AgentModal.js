import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'react-bootstrap';
import { Avatar, Divider, List, Skeleton } from 'antd';
import { AssignOrderService } from '../../../services/order/OrderService';

function AgentModal(props) {
    const { riderList } = props;
    const {orderId} = props;

    const AssignOrder = async(rider) => {
       try {
        const param = {agentId: rider._id, orderId}
        const res = await AssignOrderService(param);
        await props.updateOrderDetails()
        props.onHide();
        alert('Agent Assigned');
       } catch (error) {
          alert(error.message);
       }
    };

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