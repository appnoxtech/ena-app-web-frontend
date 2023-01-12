import axios from "axios";
import { API_URL } from "../../GlobalVariable";

export const AddProductService = async (data) => {
    const url = `${API_URL}/product/add-product`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
            "x-auth-token": token,
        }
    });
}

export const UpdateProductService = async(data) => {
    const url = `${API_URL}/product/upate-product`;
    const token = localStorage.getItem('@user_Token');
    return axios.put(url, data, {
        headers: {
            "x-auth-token": token,
        }
    });
}

export const GetProductListService = async(id) => {
    const url = `${API_URL}/product/get-all-product`;
    return axios.post(url);
}

export const GetProductListViewService = async() => {
    const url = `${API_URL}/product/get-all-product-list-view`;
    return axios.get(url);
}

export const GetProductListWithDataService = async(data) => {
    const url = `${API_URL}/product/get-all-product`;
    return axios.post(url,data);
}

export const GetAllCategory = async () => {
    const url = `${API_URL}/product/get-all-category`;
    return axios.get(url);
}

export const DeleteProductServive = async (data) => {
    const url = `${API_URL}/product/delete-product`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data,{
        headers: {
            "x-auth-token": token,
        }
    });
}