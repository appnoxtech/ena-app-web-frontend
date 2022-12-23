import React, { useState, FC, useEffect } from 'react';
import Category from '../../component/categorybar/Category';
import Filterbar from '../../component/filterbar/Filterbar';
import CardComponent from '../../component/common-components/card/Card';
import Pagination from '../../component/common-components/pagination/Pagination';
import { EnaAppData } from '../../component/dummyData';
import Searchbar from '../../component/searchbar/Searchbar';
import { GetAllCategory, GetProductListService } from '../../services/product/productService';

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
  const [productList, setProductList] :any = useState([]); 
  const [cardIndex, setCardIndex] = useState<any>()
  const [searchText, setSearchText] = useState('')
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


  const getProductList = async() => {
    try {
      let res:any;
      if(currCat){
        res = await GetProductListService(currCat);
      }else {
        res = await GetProductListService('');
      }
      
      const data = res.data.result;
      setProductList(data);
    } catch (error) {
      console.log(error.msg);
      return ;
    }
  }



  useEffect(() => {
    console.log('current category', currCat);
    
    getProductList();
  },[currCat]);
  

  return (
    <div className='col-12'>
      <Searchbar searchText={searchText} setSearchText={setSearchText} />
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='d-flex flex-column flex-md-row'>
        <div className='mt-5 pt-3 col-12 col-md-2 '>
          <Category 
            filterDatabyCategory={setCurrCat} 
            seletedCategory={setCurrCat}
            currCat={currCat}
          />
        </div>
        <div className='col-12 mx-auto mx-md-0 col-md-10 '>
          <div className='row d-flex mt-5 mx-auto m-0 p-0 pe-2'>
            {/* <Filterbar /> */}
            {/* search product by name */}
            {productList
              .filter((d, i) => {
                if (searchText == '') {
                  return d
                } else if (
                  d.engVegName.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase())
                ) {
                  return d
                }
              })
              .map((cardData: any) => (
                <div className='shadow-lg col-6 col-md-3 m-0 my-3 bg-light' key={cardData.productId}>
                  <CardComponent cardData={cardData} wishListHandler={wishListHandler} />
                </div>
              ))}
            <div className='col-12 d-flex justify-content-end mt-3'>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
