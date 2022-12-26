import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { PlusOutlined } from '@ant-design/icons';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import LoginInput from '../../../component/common-components/loginInput';
import ButtonComp from '../../../component/common-components/buttonComp/ButtonComp';
import Dropzone from "react-dropzone";
import { BiImageAdd } from 'react-icons/bi';
import { AddProductService } from '../../../services/product/productService';
import { UploadImageService } from '../../../services/imageUpload/uploadImage';
const initialState = {
    vegName: '',
    engVegName: '',
    image: '',
    quantity: '',
    categorieId: '',
    price: '',
    priceWithTax: '',
    unit: '',
    orderQuantity: '',
    totalQuantity: '',
    description: '',
}
const errorInitialState = {
    vegName: '',
    engVegName: '',
    image: '',
    quantity: '',
    categorieId: '',
    price: '',
    priceWithTax: '',
    unit: '',
    orderQuantity: '',
    totalQuantity: '',
    description: '',
}

export default function AddProductForm(props) {
    const [localError, setLocalError] = useState(errorInitialState);
    const [product, setProduct] = useState(initialState);
    const CategoreList = useSelector(state => state.categorie.categorieList);

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

    const handleAddProduct = async() => {
        const error = validation();
        const isErrorLength = Object.keys(error).filter(id => error[id] !== '').length;
        console.log('isErrorLength', isErrorLength);

        if (isErrorLength === 0) {
            console.log('Product', product);
            try {
                const res = await AddProductService(product);
                alert('Product Added Successfully !');
                props.onHide();
            } catch (error) {
                console.log('Error');
                alert(error.message);
            }
        }
    }

    const removeImage = () => {
        setProduct({
            ...product,
            image: ''
        })
    }

    const uploadImage = async(data) => {
        var bodyFormData = new FormData();
        bodyFormData.append('file', data);
        try {
            const res = UploadImageService(bodyFormData);
            console.log('response', res);
        } catch (error) {
            alert(error.message);
        }
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{overFlow: 'auto'}}>
                <div className='col-10 mx-auto pt-0 mt-3'>
                    <div
                        className="d-flex flex-1 me-3 justify-content-center align-item-center h-100"
                        style={!product.image ? {
                            borderWidth: 2,
                            borderRadius: 2,
                            borderColor: localError.image === '' ? '#eeeeee' : 'red',
                            borderStyle: 'dashed',
                            backgroundColor: '#fafafa',
                            color: '#bdbdbd',
                            outline: 'none',
                            transition: 'border .24s ease-in-out'
                        } : { overflow: 'hidden',marginBottom: 10, flexDirection: 'column', height: '100%' }}
                    >
                        {
                            product.image ? (
                                <>
                                    <img src={product.image} alt='shared media' style={{ width: '100%', height: '90%', marginBottom: '10' }} />
                                    <ButtonComp
                                        navigationHandler={removeImage}
                                        type='button'
                                        class=' btnRadius border border-0 w-100 h-100 mt-4 fontWeight-600 button themecolor text-light py-2 '
                                        btvalue='Remove'
                                    />
                                </>
                            ) : (
                                <Dropzone
                                    onDrop={acceptedFiles => {
                                        console.log('acceptedFiles', acceptedFiles[0].path);
                                        uploadImage(acceptedFiles[0]);
                                        // setProduct({
                                        //     ...product,
                                        //     image: URL.createObjectURL(acceptedFiles[0])
                                        // })
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
                    <Form.Select aria-label="Select Categorie" className='mt-4 mt-xl-2' 
                    onChange={(e) => 
                        setProduct(oldValue => {
                            return {
                                ...oldValue,
                                categorieId: e.target.value
                            }
                        })
                    }>
                        {
                            CategoreList.map(item => <option value={item._id}>{item.categoryName}</option>)
                        }
                    </Form.Select>
                    {localError.categorieId == '' ? null : (
                        <p className='text-danger mt-1'>{localError.categorieId}</p>
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
                        Price (Including TAX)
                    </label>
                    <LoginInput
                        type='number'
                        name='priceWithTax'
                        id='priceWithTax'
                        placeholder='Enter Product Price (Including Tax)'
                        class='form-control mt-4 mt-xl-2'
                        Input={product}
                        setInput={setProduct}
                    />

                    {localError.priceWithTax == '' ? null : (
                        <p className='text-danger mt-1'>{localError.priceWithTax}</p>
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
                        name='quantity'
                        id='quantity'
                        placeholder='Enter Product Quantity'
                        class='form-control mt-4 mt-xl-2'
                        Input={product}
                        setInput={setProduct}
                    />

                    {localError.quantity == '' ? null : (
                        <p className='text-danger mt-1'>{localError.quantity}</p>
                    )}

                    <ButtonComp
                        navigationHandler={handleAddProduct}
                        type='button'
                        class=' btnRadius border border-0 w-100 h-100 mt-4 fontWeight-600 button themecolor text-light py-2 '
                        btvalue='Add Product'
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
}
