import React, { FC, useEffect, useState } from 'react'
import { Card } from 'antd';
import IndustryCard from '../../../component/admin/industryCard'
import RelatedProductCard from '../../../component/common-components/card/RelatedProductCard'
import { wareHouse } from '../../../component/dummyData'
import './productList.css'
import { GetProductListService, GetProductListWithDataService } from '../../../services/product/productService'
import Pagination from '../../../component/common-components/pagination/Pagination'
import ProductCard from '../productCard/ProductCard';
import SelectCategory from '../../../component/common-components/SelectCategory/SelectCategory';
import AddProductForm from '../../../forms/Products/Add/AddProduct';
// import '../Auth.css'
const { Meta } = Card;


const AdminProductList: FC<any> = () => {
  const [productList, setProductList] = useState([]);
  const [categoryData, setCategoryItem] = useState({});
  const [totalPageNum, setTotalPageNum] = useState(0);
  const [currPage, setCurrPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [currId, setCurrId] = useState('');

  const getProductList = async(id:any) => {
     try {
      const data = {categoryId: id};
      setCurrId(id);
      const res = await GetProductListWithDataService(data);
      const list = res.data.result;
      setProductList(list);
      setTotalPageNum(res.data.pageCount);
     } catch (error) {
        alert(error.message);
     }
  }

//   const refreshProductList = async() => {
//     try {
//      const data = {categoryId: currId, pageNo};
//      const res = await GetProductListWithDataService(data);
//      const list = res.data.result;
//      setProductList(list);
//      setTotalPageNum(res.data.pageCount);
//     } catch (error) {
//        alert(error.message);
//     }
//  }

  const handlePagination = async() => {
    try {
      const data = {categoryId: currId, pageNo: currPage}
      const res = await GetProductListWithDataService(data);
      const list = res.data.result;
      setProductList(list);
      // setTotalPageNum(res.data.pageCount);
    } catch (error) {
      alert(error.message);
    }
  }
  
  useEffect(() => {
    const SelectedCategory = JSON.parse(localStorage.getItem('category'));
    setCategoryItem(SelectedCategory);
    setCurrId(SelectedCategory._id);
    getProductList(SelectedCategory._id);
  },[]);

  useEffect(() => {
    if(currId){
      handlePagination();
    }
   
  },[currPage]);

  const handleCardEditClick = (data:any) => {
    console.log('bsvhbfjdhb', data);
    setIsEdit(true);
    setSelectedProduct(data);
    setModalShow(true);
  }

  return (
    <>
      <div className='container-fluid d-flex flex-column align-items-center justify-content-center'>
        {/* HeadPartList */}
        <div className='col-12 d-flex align-items-center flex-column flex-lg-row justify-content-between'>
          <SelectCategory  changeCategorie={getProductList} />
          <div className='my-4 my-lg-0'>
            <p className='p-0 m-0 headP '>
              Industrial Supplies <span className='text-dark fw-bold'>/Products</span>
            </p>
          </div>
          <div className='me-4'>
            <a onClick={() => {
               setSelectedProduct({});
               setModalShow(true)
            }} className='btn btn-success text-light btnGreen'>Add Product</a>
          </div>
        </div>
        <div className='container-fluid border-top my-4'></div>
        <div className="container row">
          {productList.map((product:any,i :any)=>(
            <div className="col-12 col-lg-4 col-md-6 col-xl-3 mb-3 d-flex justify-content-center align-item-center">
               <ProductCard 
                product={product} 
                handleCardEditClick={handleCardEditClick} 
                getProductList={handlePagination} 
                changeCategorie={getProductList}
               />
            </div>
          ))}
        </div>
        <div className='col-12 d-flex justify-content-end mt-3'>
            <Pagination pageCount={totalPageNum} currPage={currPage} setCurrPage={setCurrPage}  />
        </div>
      </div>
      <AddProductForm
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={selectedProduct}
        getProductList={handlePagination}
      />
    </>
  )
}

export default AdminProductList
