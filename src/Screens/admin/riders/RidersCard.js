import React, { useState } from 'react'
import { EditOutlined, EllipsisOutlined, DeleteFilled } from '@ant-design/icons';
import { Avatar, Card, notification, Modal } from 'antd';
import { DeleteRiderServive } from '../../../services/rider/RiderService';
const { Meta } = Card;

function RidersCard({ agent, updateHandler,getRiderList }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const deleteAgent = async() => {
        try {
            const data = {_id: agent._id}
            const res = await DeleteRiderServive(data)
            await getRiderList();
            openNotification('Agent Deleted Successfully !');
            setModalOpen(false);
        } catch (error) {
            openNotification(error.message);
        }
    }
    const openNotification = (message) => {
        api.info({
          message: `Error`,
          description: message,
          placement: 'topLeft',
        });
      };
    return (
        <>
        {contextHolder}
            <Card
                hoverable
                style={{ width: '100%', marginTop: 16 }}
                actions={[
                    <EditOutlined key="edit" onClick={() => updateHandler(agent)} />,
                    <DeleteFilled key="delete" onClick={() => setModalOpen(true)} />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://media.edgeprop.my/s3fs-public/editorial/my/2021/March/23/delivery-man-with-face-mask-delivering-order-motorcycle_154993-160.jpg" />}
                    title={`${agent.firstName} ${agent.lastName}`}
                    description={agent.email}
                />
            </Card>
            <Modal
                title="Are you sure you want to delete this Agent !"
                centered
                open={modalOpen}
                onOk={() => deleteAgent()}
                onCancel={() => setModalOpen(false)}
            >

            </Modal>
        </>

    )
}

export default RidersCard