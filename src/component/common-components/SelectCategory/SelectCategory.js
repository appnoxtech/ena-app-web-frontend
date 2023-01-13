import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import { GetAllCategory } from '../../../services/product/productService';

const SelectCategory = ({changeCategorie}) => {
    const [categoryList, setCategoryList] = useState([{}]);
    const [currCat, setCurrCat] = useState('');
    const items = [
        {
          key: '63a01973291ae32acdb68d06',
          label: 'Vegetables',
        },
        {
          key: '63a01980291ae32acdb68d08',
          label: 'Fruits',
        },
        {
          key: '63a0198f291ae32acdb68d0a',
          label: 'Dry fruits',
        },
        {
            key: '63a0198f291ae32acdb68d0c',
            label: 'Spices',
        },
        {
            key: '63a0199f291ae32acdb68d0e',
            label: 'Canned',
        },
      ];
    const getCategoryList = async() => {
        try {
            const res = await GetAllCategory();
            const catList = res.data.data.map(item => {
                return {key: item._id, label: item.categoryName}
            });

            setCategoryList(catList);
        } catch (error) {
            alert(error.message);
        }
    }

    const handleCurrentCategory = () => {
        const localCurrCat = localStorage.getItem('category');
        if(localCurrCat){
            const CurrentCategory = JSON.parse(localCurrCat);
            setCurrCat(CurrentCategory._id);
        }
    }

    useEffect(() => {
        getCategoryList();
        handleCurrentCategory();
    }, []);

    console.log('categoryList', categoryList);
    console.log('currCat', typeof currCat);

    return (
        <Dropdown
            menu={{
                items,
                slot: categoryList.length,
                selectable: true,
                defaultSelectedKeys: [`${currCat}`],
                onClick: ({ item, key, keyPath, domEvent }) => changeCategorie(key)
            }}
        >
            <Typography.Link>
                <Space>
                    Change Category
                    <DownOutlined />
                </Space>
            </Typography.Link>
        </Dropdown>
    )
}
export default SelectCategory;