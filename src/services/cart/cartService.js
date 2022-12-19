import axios from "axios";
import { API_URL } from "../../GlobalVariable";

export const AddToCartService = async(data) => {
    const url = `${API_URL}/cart/add-into-cart`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json',
            "x-auth-token": token,
        }
    });

};

export const GetCartDetailsService = async() => {
    const url = `${API_URL}/cart/get-cart`;
    const token = localStorage.getItem('@user_Token');
    return axios.get(url,{
        headers: {
            'Content-Type': 'application/json',
            "x-auth-token": token,
        }
    });
};

export const UpdateCartService = async(data) => {
    const url = `${API_URL}/cart/update-cart`;
    const token = localStorage.getItem('@user_Token');
    return axios.put(url, data, {
        headers: {
            'Content-Type': 'application/json',
            "x-auth-token": token,
        }
    });
};