import { Breadcrumb, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import CategoryCard from '../categoryCard/CategoryCard';
import { GetAllCategory } from '../../../services/product/productService';
import { useDispatch } from 'react-redux';
import { updateProductCategory } from '../../../redux/reducer/categorie/categorieReducer';

function CategoryList() {
    const [categoryList, setCategoryList] = useState([]);
    const dispatch = useDispatch();

    const getCategoryList = async() => {
        try {
            const res = await GetAllCategory();
            const catList = res.data.data;
            setCategoryList(catList);
            dispatch(updateProductCategory(catList));
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        getCategoryList();
    }, []);


    return (
        <div className='mt-1 mt-lg-4'>
            <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
                <div className='col-12 d-flex align-items-center flex-column flex-lg-row justify-content-between'>
                    <div></div>
                    <div className='my-4 my-lg-0'>
                        <p className='p-0 m-0 headP '>
                            Products <span className='text-dark fw-bold'>/Category</span>
                        </p>
                    </div>
                    <div className='me-4'>
                        <a className='btn btn-success text-light btnGreen'>Add Category</a>
                    </div>
                </div>
            </div>
            <div className="container row mx-auto">
               {
                 categoryList.length > 0 ? 
                   categoryList.map(item => (
                     <div className="col-12 col-lg-6 p-3">
                         <CategoryCard  cardData={item} />
                     </div>
                   ))
                 : <div>
                 </div>
               }
            </div>
        </div>
    )
}

export default CategoryList