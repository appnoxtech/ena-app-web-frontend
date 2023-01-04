import axios from "axios";
import { API_URL } from "../../GlobalVariable";

export const AddRiderService = async (data) => {
    const url = `${API_URL}/agent/add-agent`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
            "x-auth-token": token,
        }
    });
}

export const UpdateRiderService = async(data) => {
    const url = `${API_URL}/agent/add-agent`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
            "x-auth-token": token,
        }
    });
}

export const GetRiderListService = async() => {
    const url = `${API_URL}/utils/get-rider-list`;
    const token = localStorage.getItem('@user_Token');
    return axios.get(url,{
        headers: {
            "x-auth-token": token,
        }
    });
}

export const GetRiderListWithDataService = async(data) => {
    const url = `${API_URL}/rider/get-all-rider`;
    console.log('data', data);
    return axios.post(url,data);
}

export const GetAllCategory = async () => {
    const url = `${API_URL}/rider/get-all-category`;
    return axios.get(url);
}

export const DeleteRiderServive = async (data) => {
    const url = `${API_URL}/agent/delete-agent`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data,{
        headers: {
            "x-auth-token": token,
        }
    });
}

export const GetAssignedOrderList = async() => {
    const url = `${API_URL}/agent/delete-agent`;
    const token = localStorage.getItem('@user_Token');
    return axios.get(url, {
        headers: {
            "x-auth-token": token,
        }
    })
}

export const GetRiderDetailsById = async (id) => {
    const url = `${API_URL}/utils/get-profile/${id}`;
    const token = localStorage.getItem('@user_Token');
    return axios.get(url, {
        headers: {
            "x-auth-token": token,
        }
    });
}
