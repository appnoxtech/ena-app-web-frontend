import React, { useState, FC, useEffect } from 'react';
import Category from '../../component/categorybar/Category';
import Filterbar from '../../component/filterbar/Filterbar';
import CardComponent from '../../component/common-components/card/Card';
import Pagination from '../../component/common-components/pagination/Pagination';
import { EnaAppData } from '../../component/dummyData';
import Searchbar from '../../component/searchbar/Searchbar';
import { GetAllCategory, GetProductListService, GetProductListWithDataService } from '../../services/product/productService';
import SmallSearchBar from '../../component/searchbar/SmallSearchBar';

interface product {
  id: number,
  vegName: string,
  engVegName: string,
  price: number,
  orderQuantity: number,
  unit: number,
  image: string,
};

interface Response {
  result: Array<product>
};


const Admin: FC<any> = () => {
  const [data, setData] = useState(EnaAppData)
  const filterData = EnaAppData
  const [productList, setProductList]: any = useState([]);
  const [cardIndex, setCardIndex] = useState<any>();
  const [searchText, setSearchText] = useState('');
  const [currPage, setCurrPage] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(0);
  //const [seletedCategory,setSletedCategorey]=useState()
  const [currCat, setCurrCat] = useState('');

  const wishListHandler = (index) => {
    console.log(index)
    let temp = [...data]
    temp[index].isFav = !temp[index].isFav
    setData(temp)
  }

  // const filterDatabyCategory = (name) => {
  //   setSletedCategorey(name)
  //   const temp2 = filterData.filter((item) => {
  //     if (name == 'All') {
  //       return item
  //     } else if (item.category == name) {
  //       return item
  //     }
  //   })
  //   setData(temp2)
  // }


  const getProductList = async () => {
    try {
      let res: any;
      if (currCat) {
        const data = { categoryId: currCat }
        res = await GetProductListWithDataService(data);
        setCurrPage(1);
      } else {
        res = await GetProductListService();
      }
      const data = res.data.result;
      setProductList(data);
      setTotalPageNum(res.data.pageCount);
    } catch (error) {
      console.log(error.msg);
      return;
    }
  }

  const handlePagination = async () => {
    try {
      let data: any;
      if (currCat) {
        data = { categoryId: currCat, pageNo: currPage }
      } else if (searchText) {
        data = { subStr: searchText, pageNo: currPage }
      } else {
        data = { pageNo: currPage }
      }
      const res = await GetProductListWithDataService(data);
      const list = res.data.result;
      setProductList(list);
      // setTotalPageNum(res.data.pageCount);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleSearch = async () => {
    try {
      const data = { 'subStr': searchText };
      const res = await GetProductListWithDataService(data);
      const list = res.data.result;
      setProductList(list);
      setTotalPageNum(res.data.pageCount);
    } catch (error) {
      alert(error.message);
    }
  }



  useEffect(() => {
    getProductList();
  }, [currCat]);

  useEffect(() => {
    handlePagination();
  }, [currPage]);

  useEffect(() => {
    handleSearch();
  }, [searchText]);


  return (
    <div className='col-12'>
      {/* <div className='d-flex border_outer justify-content-center align-items-center w-75  mx-auto  bg-light'>
        <input
          // onChange={(val)=>setSearchText(val)}
          // value={searchText}
          onChange={e => setSearchText(e.target.value)}
          type='text'
          placeholder='Search Fruits & Vegetables...'
          className='search_bar bg-light border-0'
        />
        <i className='fa fa-search search-icon mt-3 mb-3 ' aria-hidden='true'></i>
      </div> */}
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='d-flex flex-column flex-md-row'>
        <div className='mt-2 pt-2 col-12 col-xl-2 mt-3'>
          <SmallSearchBar setSearchText={setSearchText} searchText={searchText}  />
          <Category
            filterDatabyCategory={setCurrCat}
            seletedCategory={setCurrCat}
            currCat={currCat}
          />
        </div>
        <div className='col-12 mx-auto mx-md-0 col-md-10 '>
          <div className='row d-flex mt-2 mx-auto m-0 p-0 pe-2'>
            {/* <Filterbar /> */}
            {/* search product by name */}
            {productList.map((cardData: any) => (
              <div className='col-12 col-lg-4 col-md-4 col-xl-3 m-0 mb-1 d-flex justify-content-center align-item-center p-3' key={cardData.productId}>
                <CardComponent currCat={currCat} cardData={cardData} wishListHandler={wishListHandler} />
              </div>
            ))}
            <div className='col-12 d-flex justify-content-end mt-3'>
              <Pagination pageCount={totalPageNum} currPage={currPage} setCurrPage={setCurrPage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
