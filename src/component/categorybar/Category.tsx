import React, { FC, useState, useEffect } from 'react'
import './Category.css'
import { GetAllCategory } from '../../services/product/productService'

const category: FC<any> = ({ filterDatabyCategory, currCat }) => {
  //#region  all state define here
  const [showdropdown, setShowDropdown] = useState(window.innerWidth < 768 ? false : true)
  const [isMobile, setIsMobile] = useState(false)
  const [categoryList, setCategoryList] = useState([]);
  //#region  defilne all function here

  const dropDowntoggleHandler=()=>{
    if (isMobile) {
      setShowDropdown(!showdropdown)
    }
  }
  useEffect(() => {
    if (window.innerWidth < 992) {
      setIsMobile(true)
    } else setIsMobile(false)
  }, [isMobile]);

  const getCategoryList = async() => {
    try {
      const res = await GetAllCategory();
      const catList = res.data.data;
      console.log('catList', catList);
      setCategoryList(catList);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getCategoryList();
  }, []);

  const highlightName = (id: any) => {
      if(id && id === currCat){
        return {
          color: '#51BC4A'
        }
      } else if (!id && !currCat){
        return {
          color: '#51BC4A'
        }
      } else {
         return {
          color: 'black'
         }
      }
  }

  return (
    <div className='outer_navli col-12 d-flex justify-content-center align-item-center'>
      <div className={'col-12 py-2 bgWhite'}>
        <p
          onClick={() => {dropDowntoggleHandler()}}
          className='fontWeight-700 bgWhite m-0 p-0 linone text-center bgWhite d-flex justify-content-center align-item-center'
        >
          <li className={isMobile ? 'iconcolor' : 'textblack'}>Categories</li>
          {isMobile && (
            <i
              className={`${
                showdropdown ? 'fa fa-chevron-circle-up' : 'fa fa-chevron-circle-down dropDownicon'
              } mt-1 mx-4 iconcolor`}
              aria-hidden='true'
            ></i>
          )}
        </p>
        {showdropdown && (
          <div className='text-start d-flex flex-column'>
            <button
              onClick={() => {
                filterDatabyCategory('');
                dropDowntoggleHandler()
              }}
              className='navlist py-2 py-md-3 border border-0 border-none bgWhite'
            >
              <li className='navlist' style={highlightName('')}>All</li>
            </button>
            {
              categoryList.map(item => {
                return (
                  <button
                    onClick={() => {
                      filterDatabyCategory(item._id);
                      dropDowntoggleHandler();
                    }
                  }
                    className={'navlist py-2 py-md-3 border border-0 border-none bgWhite'}
                  >
                    <li className='navlist' style={highlightName(item._id)}>
                      {item.categoryName.toUpperCase()}
                    </li>
                  </button>
                )
              })
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default category
