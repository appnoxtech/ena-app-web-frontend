import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';


const SmallSearchBar = ({...prop}) => (
  <div className="col-12 d-flex px-0 justify-content-center align-item-center">
    <AutoComplete
    className='mb-3'
    popupClassName="certain-category-search-dropdown"
    style={{
      width: '100%',
    }}
  >
    <Input.Search 
      onChange={(e) => prop.setSearchText(e.target.value)} 
      size="large" 
      value={prop.searchText}
      placeholder="Search Fruit & Vegetables ..."
    />
  </AutoComplete>
  </div>
);
export default SmallSearchBar;