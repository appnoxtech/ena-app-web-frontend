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
// import '../Auth.css'
const { Meta } = Card;


const AdminProductList: FC<any> = () => {
  const [productList, setProductList] = useState([]);
  const [categoryData, setCategoryItem] = useState({});
  const [totalPageNum, setTotalPageNum] = useState(0);
  const [currPage, setCurrPage] = useState(1);

  const getProductList = async(id:any) => {
     try {
      const data = {categoryId: id};
      const res = await GetProductListWithDataService(data);
      const list = res.data.result;
      setProductList(list);
      setTotalPageNum(res.data.pageCount);
     } catch (error) {
        alert(error.message);
     }
  }

  const handlePagination = async() => {
    try {
      const data = {pageNo: currPage}
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
    getProductList(SelectedCategory._id);
  },[]);

  useEffect(() => {
    handlePagination();
  },[currPage]);

  return (
    <>
      <div className='container-fluid d-flex flex-column align-items-center justify-content-center'>
        {/* HeadPartList */}
        <div className='col-12 d-flex align-items-center flex-column flex-lg-row justify-content-between'>
          <SelectCategory />
          <div className='my-4 my-lg-0'>
            <p className='p-0 m-0 headP '>
              Industrial Supplies <span className='text-dark fw-bold'>/Products</span>
            </p>
          </div>
          <div className='me-4'>
            <a className='btn btn-success text-light btnGreen'>Add Product</a>
          </div>
        </div>
        <div className='container-fluid border-top my-4'></div>
        <div className="container row">
          {productList.map((product:any,i :any)=>(
            <div className="col-12 col-lg-3 col-md-4 mb-3" style={{overFlow: 'hidden'}}>
               <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className='col-12 d-flex justify-content-end mt-3'>
            <Pagination pageCount={totalPageNum} currPage={currPage} setCurrPage={setCurrPage}  />
        </div>
      </div>
    </>
  )
}

export default AdminProductList
