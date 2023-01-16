import React, { useContext, useEffect, useState } from "react";
import Lottie from 'react-lottie';
import { EditOutlined, DeleteFilled, } from '@ant-design/icons';
import { Card } from 'antd';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NoAddressAnimation from '../../../assets/animations/NoAddress.json';
import { deleteAddressService, getAddressList } from "../../../services/address/AddressService";
import useErrorHandler from '../../../services/handler/ErrorHandler';
import '../../../assets/global/global.css';
import { addressType } from "../../../types";
import AddressDialog from "../Dialogs/AddressDialog";
import NotificationContext from "../../../context/Notification/NotificationContext";

const AddressTab = () => {
    const Notification = useContext(NotificationContext);
    const [addressList, setAddressList] = useState(Array<addressType> || []);
    const [addressDialogOpen, setAddressDialogOpen] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState({});
    const [open, setOpen] = useState(false);
    const [addressId, setAddressId] = useState('');
    const showError = useErrorHandler();
    

    const handleClickOpen = () => {
        setOpen(true);
        
    };

    const handleClose = () => {
        setOpen(false);
    };

    const closeAddressDialog = () => {
        setAddressDialogOpen(false);
    }

    const getAddressData = async () => {
        try {
            const res = await getAddressList();
            const data = res.data.data;
            setAddressList(data);
        } catch (error) {
            showError(error);
        }
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: NoAddressAnimation,
    };

    useEffect(() => {
        getAddressData();
    }, [])

    const handleDeleteAddress = async () => {
        try {
           await deleteAddressService(addressId);
           await getAddressData();
           handleClose();
           Notification({
            title: 'Notification.',
            description: 'Address Deleted Successfully.',
            type: 'success'
           })
        } catch (error) {
           showError(error);
        }
    }

    const handleDeleteIconClick = (addressId: string) => {
        setAddressId(addressId);
        handleClickOpen();
    }

    const handleEditIconClick = (address: addressType) => {
        setSelectedAddress(address);
        setAddressDialogOpen(true);
    }

    const openAddressModal = () => {
        setSelectedAddress({});
        setAddressDialogOpen(true);
    }

    return (
        <div className="col-12">
            <div className="col-12 d-flex mb-2">
                <div className="col-6 d-flex align-items-center">
                    <p className='fs-7 fw-semibold mb-0'>Saved Address</p>
                </div>
                <div className="col-6 d-flex">
                    <Button className='ms-auto' variant="outlined" onClick={openAddressModal} startIcon={<AddIcon />}>
                        Add Address
                    </Button>
                </div>
            </div>
            <div className="col-12" style={{ height: '42vh', overflow: 'scroll' }}>
                {
                    addressList.length > 0 ?
                        addressList.map((address: addressType) => (
                            <Card
                                hoverable
                                key={address._id}
                                className="mb-2 mx-auto"
                                style={{
                                    width: '90%',
                                }}
                                actions={[
                                    <EditOutlined key="edit" onClick={() => handleEditIconClick(address)} />,
                                    <DeleteFilled key="ellipsis" color='red' onClick={() => handleDeleteIconClick(address._id)} />,
                                ]}
                            >
                                <div>
                                    <p className='fs-7 fw-bold opactity-50 mb-0'>{address.name}</p>
                                    <p className='fs-7 fw-semibold opacity-50 mb-0'>
                                        {address.addressInfo.buildingName}
                                    </p>
                                    <p className='fs-7 fw-semibold opacity-50 mb-0'>{address.addressInfo.street}</p>
                                    <p className='fs-7 fw-semibold opacity-50 mb-0'>{address.addressInfo.city} - {address.addressInfo.pincode}</p>
                                    <p className='fs-7 fw-semibold opacity-50'>{address.addressInfo.state}</p>
                                    <p className='fs-7 fw-semibold opacity-50'>Mobile Number - {address.phoneNumber}</p>
                                </div>
                            </Card>
                        )) :
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <Lottie
                                options={defaultOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                }

            </div>
            {/* Delete Confirmation Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Confirmation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this address.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => handleDeleteAddress()} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Address Form Dialog */}
            <AddressDialog 
             open={addressDialogOpen} 
             handleClose={closeAddressDialog} 
             address={selectedAddress}
             getAddressData={getAddressData}
            />
        </div>
    );
}

export default AddressTab;