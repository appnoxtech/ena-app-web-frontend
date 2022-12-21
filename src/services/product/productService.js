import axios from "axios";
import { API_URL } from "../../GlobalVariable";

export const AddProductService = async (data) => {
    const url = `${API_URL}/product/add-product`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
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
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'categoryId': id
            }
        });
    }else{
        return axios.get(url);
    }
    
}

export const getAllCategory = async () => {
    const url = `${API_URL}/product/get-all-category`;
    return axios.get(url);
    
}