import axios from "axios";
import { API_URL } from "../../GlobalVariable";

export const AddAddressService = async(data) => {
    const url = `${API_URL}/access/add-address`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
            "x-auth-token": token,
        }
    });
}

export const getAddressList = async() => {
    const url = `${API_URL}/access/get-address`;
    const token = localStorage.getItem('@user_Token');
    return axios.get(url, {
        headers: {
            "x-auth-token": token,
        }
    });
}