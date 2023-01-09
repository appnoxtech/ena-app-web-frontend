import React, { useState, FC, useEffect } from 'react';
import { Button, InputNumber, Radio, Select } from 'antd';
import { FaTrash } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import type { RadioChangeEvent } from 'antd';
import Category from '../../component/categorybar/Category';
import Filterbar from '../../component/filterbar/Filterbar';
import CardComponent from '../../component/common-components/card/Card';
import Pagination from '../../component/common-components/pagination/Pagination';
import { EnaAppData } from '../../component/dummyData';
import Searchbar from '../../component/searchbar/Searchbar';
import { GetAllCategory, GetProductListService, GetProductListWithDataService } from '../../services/product/productService';
import SmallSearchBar from '../../component/searchbar/SmallSearchBar';
import Lottie from 'react-lottie';
import NothingFound from '../../assets/animations/nothing-found.json';
import './index.css';
import { increaseCartCount } from '../../redux/reducer/cart/CartReducer';
import ProductTable from '../../component/ProductTable/ProductTable';
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
  const [data, setData] = useState(EnaAppData);
  const [view, setView] = useState('Grid');
  const [categoryList, setCategoryList] = useState([{ value: '', label: 'All' }]);
  const [productList, setProductList]: any = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currPage, setCurrPage] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(0);
  const [currCat, setCurrCat] = useState('');
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth < 1200 ? true : false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NothingFound,
  };

  const wishListHandler = (index) => {
    console.log(index)
    let temp = [...data]
    temp[index].isFav = !temp[index].isFav
    setData(temp)
  }

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

  const getCategoryList = async () => {
    try {
      const res = await GetAllCategory();
      const catList = res.data.data;
      if (catList.length > 0) {
        const data = catList.map((item: any) => ({ value: item._id, label: item.categoryName.toUpperCase() }));
        setCategoryList([{ value: '', label: 'All' }, ...data]);
      }
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

  const handleScreenWidth = () => {
    if (window.innerWidth < 1200) {
      setIsMediumScreen(true)
    } else {
      setIsMediumScreen(false);
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

  useEffect(() => {
    getCategoryList();
    window.addEventListener('resize', handleScreenWidth);
    return (() => {
      window.removeEventListener('resize', handleScreenWidth);
    });
  }, []);

  const handleToggleView = (e: RadioChangeEvent) => {
    const { value } = e.target;
    setView(value);
  }

  const handleChange = (value: string) => {
    setCurrCat(value);
  }

  return (
    <div className='col-12 mt-0 mt-md-3'>
      <div className='col-12 d-flex rounded-4 bg-white mt-2'>
        {
          !isMediumScreen ?
            <div className="ms-auto d-flex col-4 col-lg-2 col-xl-2 me-2">
              <div className="ms-auto">
                <Radio.Group value={view} onChange={handleToggleView}>
                  <Radio.Button value="Grid">Grid</Radio.Button>
                  <Radio.Button value="List">List</Radio.Button>
                </Radio.Group>
              </div>
            </div> : null
        }
      </div>
      <div className='d-flex flex-column flex-md-column flex-xl-row flex-wrap'>
        {
          isMediumScreen ?
            <div className="col-12 p-2 d-flex flex-column flex-lg-row">
              <div className="col-12 col-lg-6">
                <SmallSearchBar setSearchText={setSearchText} searchText={searchText} />
              </div>
              <div className="col-12 col-lg-6 d-flex ps-lg-2 justify-content-space">
                <div className="col-6 col-lg-8">
                  <Select
                    size={'large'}
                    defaultValue=''
                    onChange={handleChange}
                    style={{ width: '100%' }}
                    options={categoryList}
                  />
                </div>
                <div className="col-6 col-lg-4 d-flex">
                  <div className="ms-auto">
                    <Radio.Group value={view} size={'large'} onChange={handleToggleView}>
                      <Radio.Button value="Grid">Grid</Radio.Button>
                      <Radio.Button value="List">List</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
              </div>

            </div>
            :
            <div className='mt-2 pt-2 col-md-12 col-xl-2 mt-3 px-2'>
              <SmallSearchBar setSearchText={setSearchText} searchText={searchText} />
              <Category
                filterDatabyCategory={setCurrCat}
                seletedCategory={setCurrCat}
                currCat={currCat}
              />
            </div>
        }

        {
          productList.length > 0 ?
            <div className='col-12 mx-auto mx-md-0 col-md-12 col-xl-10'>
              <div className={view === 'Grid' ? 'row d-flex mt-2 mx-auto m-0 p-0' : 'mt-3'}>
                {/* <Filterbar /> */}
                {/* search product by name */}
                {
                  view === 'Grid' ?
                    productList.map((cardData: any) => (

                      <div className='col-6 col-sm-6 col-lg-4 col-md-4 col-xl-3 mb-2 d-flex justify-content-center align-item-center p-1 p-md-3 pb-0' key={cardData.productId}>
                        <CardComponent currCat={currCat} cardData={cardData} wishListHandler={wishListHandler} view={view} />
                      </div>
                      // <CardComponent currCat={currCat} cardData={cardData} wishListHandler={wishListHandler} view={view} />
                    ))
                    : <ProductTable ProductList={productList} />

                }
                <div className='col-12 d-flex justify-content-end mt-3'>
                  <Pagination pageCount={totalPageNum} currPage={currPage} setCurrPage={setCurrPage} />
                </div>
                {/* {
                  view === 'Grid' ?
                    <div className='col-12 d-flex justify-content-end mt-3'>
                      <Pagination pageCount={totalPageNum} currPage={currPage} setCurrPage={setCurrPage} />
                    </div> : null
                } */}

              </div>
            </div>
            :
            <div className='col-12 d-flex justify-content-center align-item-center' style={{ height: '72vh' }}>
              <Lottie
                options={defaultOptions}
                height={400}
                width={400}
              />
            </div>
        }

      </div>
    </div>
  )
}

export default Admin
