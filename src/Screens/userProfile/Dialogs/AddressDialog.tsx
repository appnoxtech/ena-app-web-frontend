import React, { useContext, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from "@mui/material";
import { addressType } from "../../../types";
import { AddAddressService, updateAddressService } from "../../../services/address/AddressService";
import useErrorHandler from "../../../services/handler/ErrorHandler";
import NotificationContext from "../../../context/Notification/NotificationContext";
import './Style.css';

interface propsType {
    open: boolean,
    handleClose: any,
    address?: addressType,
}
const initialState = {
    name: '',
    phoneNumber: '',
    buildingName: '',
    pincode: '',
    state: '',
    street: '',
    city: '',
}
const errorInitialState = {
    name: '',
    phoneNumber: '',
    buildingName: '',
    pincode: '',
    state: '',
    street: '',
    city: '',
}
const AddressDialog = ({ open, handleClose, address, getAddressData }) => {
    const showError = useErrorHandler();
    const Notification = useContext(NotificationContext);
    const descriptionElementRef = React.useRef<HTMLElement>(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const [addressData, setAddressData] = useState(initialState);
    const [errors, setError] = useState(errorInitialState);

    const Validation = (): boolean => {
        const error = {...errorInitialState};
        Object.keys(addressData).map(key => {
            if (addressData[key].length === 0) {
                error[key] = 'Required !'
            }
        });
        setError({...error});
        const errorList = Object.keys(error).filter(key => error[key].length > 0);
        if (errorList.length === 0) {
            return true;
        } else {
            return false;
        }
    };

    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setAddressData({
            ...addressData,
            [name]: value,
        })
    };

    const SaveAddress = async () => {
        const data = {
            name: addressData.name,
            phoneNumber: addressData.phoneNumber,
            addressInfo: {
                pincode: addressData.pincode,
                city: addressData.city,
                street: addressData.street,
                state: addressData.state,
                buildingName: addressData.buildingName,
                country: 'Croatia'
            }
        }
        try {
            if(isUpdate){
                await updateAddressService(data, address._id);
            }else{
                await AddAddressService(data);
            }
            await getAddressData();
            setAddressData(initialState);
            modalClose();
            Notification({
                title: 'Notification',
                description: isUpdate ? 'Address Updted Sucessfully !' : 'Address Added Sucessfully !',
                type: 'success'
            });
        } catch (error) {
            showError(error);
        }
    };

    const handleSaveAddressClick = () => {
        console.log('Fn. was runned');
        if (Validation()) {
            SaveAddress();
        }else{
            console.log('Error is Present');             
        }
    };

    const addressInfo = () => {
        if (Object.keys(address).length > 0) {
            const data = {
                name: address.name,
                phoneNumber: address.phoneNumber,
                buildingName: address.addressInfo.buildingName,
                pincode: address.addressInfo.pincode,
                state: address.addressInfo.state,
                street: address.addressInfo.street,
                city: address.addressInfo.city,
            }

            console.log('address', data);
            setAddressData(data);
            setIsUpdate(true);
        } else {
            setAddressData(initialState);
            setIsUpdate(false);
        }
    };

    useEffect(() => {
        addressInfo();
        setError(errorInitialState);
        return () => {
            setError(errorInitialState);
        }
    }, [address]);

    const modalClose = () => {
        setIsUpdate(false);
        setAddressData(initialState);
        setError(errorInitialState);
        handleClose();
    }

    return (
        <Dialog
            open={open}
            onClose={modalClose}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">{isUpdate ? 'Update Address' : 'Add Address'}</DialogTitle>
            <DialogContent dividers>
                <DialogContentText
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                >
                    <div className="col-12">
                        <div className="my-3">
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                name='name'
                                value={addressData.name}
                                onChange={changeHandler}
                                fullWidth
                            />
                            {errors.name.length === 0 ? null : (
                                <p className='text-danger mt-1'>{errors.name}</p>
                            )}
                        </div>
                        <div className="my-3">
                            <TextField
                                id="outlined-basic"
                                label="Mobile"
                                variant="outlined"
                                name='phoneNumber'
                                value={addressData.phoneNumber}
                                onChange={changeHandler}
                                fullWidth
                            />
                            {errors.phoneNumber == '' ? null : (
                                <p className='text-danger mt-1'>{errors.phoneNumber}</p>
                            )}
                        </div>
                        <div className="d-flex flex-column flex-md-row">
                            <div className="my-3 col-12 col-md-6 px-1">
                                <TextField
                                    id="outlined-basic"
                                    label="Pincode"
                                    variant="outlined"
                                    name='pincode'
                                    value={addressData.pincode}
                                    onChange={changeHandler}
                                    fullWidth
                                />
                                {errors.pincode == '' ? null : (
                                    <p className='text-danger mt-1'>{errors.pincode}</p>
                                )}
                            </div>
                            <div className="my-3 col-12 col-md-6 px-1">
                                <TextField
                                    id="outlined-basic"
                                    label="state"
                                    variant="outlined"
                                    name='state'
                                    value={addressData.state}
                                    onChange={changeHandler}
                                    fullWidth
                                />
                                {errors.state == '' ? null : (
                                    <p className='text-danger mt-1'>{errors.state}</p>
                                )}
                            </div>
                        </div>
                        <div className="my-3">
                            <TextField
                                id="outlined-basic"
                                label="Address (House No., Street, Area)"
                                variant="outlined"
                                name='buildingName'
                                value={addressData.buildingName}
                                onChange={changeHandler}
                                fullWidth
                            />
                            {errors.buildingName == '' ? null : (
                                <p className='text-danger mt-1'>{errors.buildingName}</p>
                            )}
                        </div>
                        <div className="my-3">
                            <TextField
                                id="outlined-basic"
                                label="Locality/ Town"
                                variant="outlined"
                                name='street'
                                value={addressData.street}
                                onChange={changeHandler}
                                fullWidth
                            />
                            {errors.street == '' ? null : (
                                <p className='text-danger mt-1'>{errors.street}</p>
                            )}
                        </div>
                        <div className="my-3">
                            <TextField
                                id="outlined-basic"
                                label="City/ District"
                                variant="outlined"
                                name='street'
                                value={addressData.city}
                                onChange={changeHandler}
                                fullWidth
                            />
                            {errors.city == '' ? null : (
                                <p className='text-danger mt-1'>{errors.city}</p>
                            )}
                        </div>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={modalClose}>Cancel</Button>
                <Button
                    onClick={handleSaveAddressClick}
                >
                    {isUpdate ? 'SAVE' : 'ADD'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddressDialog;