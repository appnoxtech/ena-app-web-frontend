import axios from "axios";
import { API_URL } from "../../GlobalVariable";

export const AddProductService = async (data) => {
    const url = `${API_URL}/product/add-product`;
    const token = localStorage.getItem('@user_Token');
    console.log('token', token);
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

export const GetProductListService = async() => {
    const url = `${API_URL}/product/get-all-product`;
    return axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}