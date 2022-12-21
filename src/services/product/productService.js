import axios from "axios";
import { API_URL } from "../../GlobalVariable";

export const AddProductService = async (data) => {
    const url = `${API_URL}/product/add-product`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            "x-auth-token": token,
        }
    });
}

export const UpdateProductService = async(data) => {
    const url = `${API_URL}/product/upate-product`;
    const token = localStorage.getItem('@user_Token');
    return axios.put(url, data, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            "x-auth-token": token,
        }
    });
}

export const GetProductListService = async(id) => {
    const url = `${API_URL}/product/get-all-product`;
    if(id){
        return axios.get(url,  {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers':
                'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': '*',
                'X-Requested-With': '*',
                'Content-Type': 'application/json',
                'categoryId': id
            }
        });
    }else{
        return axios.get(url, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers':
            'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Methods': 'OPTIONS,POST',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*',
            'X-Requested-With': '*',
        });
    }
    
}

export const getAllCategory = async () => {
    const url = `${API_URL}/product/get-all-category`;
    return axios.get(url, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
    
}