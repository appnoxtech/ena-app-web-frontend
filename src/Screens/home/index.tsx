import React, { useState, FC } from 'react'
import Category from '../../component/categorybar/Category'
import Card from '../../component/common/card/Card'
import Pagination from '../../component/common/pagination/Pagination'
import { EnaAppData } from '../../component/dummyData'
import Searchbar from '../../component/searchbar/Searchbar'

const Admin: FC<any> = () => {
  const [data, setData] = useState(EnaAppData)
  const filterData = EnaAppData
  const [cardIndex, setCardIndex] = useState<any>()
  const [searchText, setSearchText] = useState('')
  const [seletedCategory,setSletedCategorey]=useState('All')

  const wishListHandler = (index) => {
    console.log(index)
    let temp = [...data]
    temp[index].isFav = !temp[index].isFav
    setData(temp)
  }

  const filterDatabyCategory = (name) => {
    setSletedCategorey(name)
    const temp2 = filterData.filter((item) => {
      if (name == 'All') {
        return item
      } else if (item.category == name) {
        return item
      }
    })
    setData(temp2)
  }

  console.log(data)
  return (
    <div className='col-12'>
      <Searchbar searchText={searchText} setSearchText={setSearchText} />
      <div className='side-Part rounded-4 bg-white'></div>
      <div className='d-flex flex-column flex-md-row'>
        <div className='mt-5 col-12 col-md-2 '>
          <Category filterDatabyCategory={filterDatabyCategory} seletedCategory={seletedCategory}/>
        </div>
        <div className=' col-12 mx-auto mx-md-0 col-md-10 '>
          <div className='row d-flex    mt-5 mx-auto m-0 p-0'>
            {/* <Filterbar /> */}
            {/* search product by name */}
            {data
              .filter((d, i) => {
                if (searchText == '') {
                  return d
                } else if (
                  d.engVegName.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase())
                ) {
                  return d
                }
              })
              .map((cardData: any, index) => (
                <div className='col-6 col-md-3 my-3 m-0 px-2 overflow-hidden' key={index}>
                  <Card cardData={cardData} indexData={index} wishListHandler={wishListHandler} />
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
