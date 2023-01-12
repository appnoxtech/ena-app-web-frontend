import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { PlusOutlined } from '@ant-design/icons';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import LoginInput from '../../../component/common-components/loginInput';
import ButtonComp from '../../../component/common-components/buttonComp/ButtonComp';
import Dropzone from "react-dropzone";
import { BiImageAdd } from 'react-icons/bi';
import { AddProductService, UpdateProductService } from '../../../services/product/productService';
import { UploadImageService } from '../../../services/imageUpload/uploadImage';
import './AddProduct.css';
import useErrorHandler from '../../../services/handler/ErrorHandler';
import NotificationContext from '../../../context/Notification/NotificationContext';

const initialState = {
    vegName: '',
    engVegName: '',
    image: '',
    categoryId: '',
    totalQuantity: '',
    price: '',
    orderQuantity: '',
    description: '',
}
const errorInitialState = {
    vegName: '',
    engVegName: '',
    image: '',
    categoryId: '',
    price: '',
    orderQuantity: '',
    totalQuantity: '',
    description: '',
}

export default function AddProductForm(props) {
    const showError = useErrorHandler();
    const [localError, setLocalError] = useState(errorInitialState);
    const [product, setProduct] = useState(initialState);
    const CategoreList = useSelector(state => state.categorie.categorieList);
    const [isUpdate, setIsUpdate] = useState(false);
    const Notification = useContext(NotificationContext);

    const productInfo = () => {
        if (Object.keys(props.product).length > 0) {
            console.log('props.product', props.product);
            setProduct(props.product)
            setIsUpdate(true);
        } else {
            setProduct(initialState);
            setIsUpdate(false);
        }
    }

    const validation = () => {
        const error = {};
        Object.keys(product).forEach(id => {
            if (product[id] === '') {
                return error[id] = 'Required'
            }
            else {
                return error[id] = ''
            }
        });
        setLocalError(error);
        return error;
    }

    console.log('CategoreList', CategoreList);

    const handleAddProduct = async () => {
        const error = validation();
        const isErrorLength = Object.keys(error).filter(id => error[id] !== '').length;
        console.log('isErrorLength', isErrorLength);

        if (isErrorLength === 0) {
            try {
                if (isUpdate) {
                    const data = {
                        ...product,
                        price: parseInt(product.price, 10),
                        orderQuantity: parseInt(product.orderQuantity, 10),
                        totalQuantity: parseInt(product.totalQuantity, 10),
                        unit: 'KG',
                    }
                    console.log('data', data);
                    const res = await UpdateProductService(data);
                    await props.getProductList();
                    Notification({
                        title: 'Notification',
                        description: 'Product Updated Successfully !',
                        type: 'success'
                    })
                } else {
                    const data = {
                        ...product,
                        price: parseInt(product.price, 10),
                        orderQuantity: parseInt(product.orderQuantity, 10),
                        totalQuantity: parseInt(product.totalQuantity, 10),
                        unit: 'KG',
                    }
                    const res = await AddProductService(data);
                    await props.getProductList();
                    Notification({
                        title: 'Notification',
                        description: 'Product Added Successfully',
                        type: 'success'
                    })
                }
                props.onHide();
            } catch (error) {
                showError(error);
            }
        }
    }

    const removeImage = () => {
        setProduct({
            ...product,
            image: ''
        })
    }


    useEffect(() => {
        productInfo();
        return () => {
            setLocalError(errorInitialState);
        }
    }, [props.product])

    const uploadImage = async (data) => {
        var bodyFormData = new FormData();
        bodyFormData.append('file', data);
        try {
            const res = await UploadImageService(bodyFormData);
            const urlPath = res.data.result.baseUrl + res.data.result.imagePath;
            console.log('urlPath', urlPath);
            if (urlPath) {
                setProduct({
                    ...product,
                    image: urlPath
                })
            }
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
                    {!isUpdate ? `Add Product` : 'Update Product'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ overFlow: 'auto' }}>
                <div className='col-10 mx-auto pt-0 mt-3'>
                    <div
                        className="d-flex me-3 justify-content-center align-item-center"
                        style={!product.image ? {
                            borderWidth: 2,
                            borderRadius: 2,
                            borderColor: localError.image === '' ? '#eeeeee' : 'red',
                            borderStyle: 'dashed',
                            backgroundColor: '#fafafa',
                            color: '#bdbdbd',
                            outline: 'none',
                            transition: 'border .24s ease-in-out'
                        } : { overflow: 'hidden', marginBottom: 10, flexDirection: 'column', height: '30%' }}
                    >
                        {
                            product.image ? (
                                <>
                                    <img className='dynamicImage' src={product.image} alt='shared media' style={{ marginBottom: '10' }} />
                                    <ButtonComp
                                        navigationHandler={removeImage}
                                        type='button'
                                        class=' btnRadius border border-0 w-100 h-100 mt-4 fontWeight-600 button themecolor text-light py-2 '
                                        btvalue='Remove'
                                    />
                                </>
                            ) : (
                                <Dropzone
                                    onDrop={async (acceptedFiles) => {
                                        console.log('acceptedFiles', acceptedFiles[0].path);
                                        await uploadImage(acceptedFiles[0]);
                                    }}
                                    accept={{ 'image/jpeg': ['.png', '.jpg', '.jpeg'] }}

                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            <div {...getRootProps()} className="">
                                                <input {...getInputProps()} />
                                                < BiImageAdd style={{ fontSize: 150 }} />
                                                <p>Add Product Image</p>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            )
                        }
                    </div>


                    <label className='form-label mt-5 h6 d-none d-lg-block d-md-block'>Product Name</label>
                    <LoginInput
                        type='text'
                        name='vegName'
                        id='vegName'
                        placeholder='Enter Product Name'
                        class='form-control mt-4 mt-xl-2'
                        Input={product}
                        setInput={setProduct}
                    />
                    {localError.vegName == '' ? null : (
                        <p className='text-danger'>{localError.vegName}</p>
                    )}

                    <label className='form-label mt-4 h6 h3 d-none d-lg-block d-md-block'>
                        Product Name (English)
                    </label>
                    <LoginInput
                        type='text'
                        name='engVegName'
                        id='engVegName'
                        placeholder='Enter Product Name (English)'
                        class='form-control mt-4 mt-xl-2'
                        Input={product}
                        setInput={setProduct}
                    />
                    {localError.engVegName == '' ? null : (
                        <p className='text-danger mt-1'>{localError.engVegName}</p>
                    )}

                    <label className='form-label mt-4 h6 h3 d-none d-lg-block d-md-block'>
                        Select Category
                    </label>
                    <Form.Select
                        aria-label="Select Categorie"
                        className='mt-4 mt-xl-2'
                        value={product.categoryId}
                        onChange={(e) =>
                            setProduct(oldValue => {
                                return {
                                    ...oldValue,
                                    categoryId: e.target.value
                                }
                            })
                        }
                    >
                        <option>Select Category</option>
                        {
                            CategoreList.map(item => <option value={item._id}>{item.categoryName}</option>)
                        }
                    </Form.Select>
                    {localError.categoryId == '' ? null : (
                        <p className='text-danger mt-1'>{localError.categoryId}</p>
                    )}

                    <label className='form-label mt-4 h6 h3 d-none d-lg-block d-md-block'>
                        Description
                    </label>

                    <Form.Control
                        onChange={(e) => setProduct(oldValue => {
                            return {
                                ...oldValue,
                                description: e.target.value,
                            }
                        })}
                        as="textarea"
                        aria-label="With textarea"
                        value={product.description}
                    />
                    {localError.description == '' ? null : (
                        <p className='text-danger mt-1'>{localError.description}</p>
                    )}

                    <label className='form-label mt-4 h6 h3 d-none d-lg-block d-md-block'>
                        Price
                    </label>
                    <LoginInput
                        type='number'
                        name='price'
                        id='price'
                        placeholder='Enter Product Price'
                        class='form-control mt-4 mt-xl-2'
                        Input={product}
                        setInput={setProduct}
                    />

                    {localError.price == '' ? null : (
                        <p className='text-danger mt-1'>{localError.price}</p>
                    )}

                    <label className='form-label mt-4 h6 h3 d-none d-lg-block d-md-block'>
                        Minimum Quantity
                    </label>
                    <LoginInput
                        type='number'
                        name='orderQuantity'
                        id='orderQuantity'
                        placeholder='Enter Minimum Quantity'
                        class='form-control mt-4 mt-xl-2'
                        Input={product}
                        setInput={setProduct}
                    />

                    {localError.orderQuantity == '' ? null : (
                        <p className='text-danger mt-1'>{localError.orderQuantity}</p>
                    )}

                    <label className='form-label mt-4 h6 h3 d-none d-lg-block d-md-block'>
                        Quantity
                    </label>
                    <LoginInput
                        type='number'
                        name='totalQuantity'
                        id='totalQuantity'
                        placeholder='Enter Product Quantity'
                        class='form-control mt-4 mt-xl-2'
                        Input={product}
                        setInput={setProduct}
                    />

                    {localError.totalQuantity == '' ? null : (
                        <p className='text-danger mt-1'>{localError.totalQuantity}</p>
                    )}

                    <ButtonComp
                        navigationHandler={handleAddProduct}
                        type='button'
                        class=' btnRadius border border-0 w-100 h-100 mt-4 fontWeight-600 button themecolor text-light py-2 '
                        btvalue={isUpdate ? 'Update Product' : 'Add Product'}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
}
