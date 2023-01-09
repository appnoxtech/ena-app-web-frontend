import axios from "axios";
import { API_URL } from "../../GlobalVariable";

export const CreateOrderService = async(data) => {
    const url = `${API_URL}/order/create-order`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
            "x-auth-token": token,
        }
    });
};

export const GetOrderLiveStatus = async() => {
    const url = `${API_URL}/order/get-live-order-details`;
    const token = localStorage.getItem('@user_Token');
    return axios.get(url, {
        headers: {
            "x-auth-token": token,
        }
    });
}

export const CancelOrder = async(data) => {
    const url = `${API_URL}/order/cancel-order`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
            "x-auth-token": token,
        }
    });
}

export const AssignOrderService = async(data) => {
    const url = `${API_URL}/order/assign-order`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
            "x-auth-token": token,
        }
    });
}

export const GetOrderById = async(id) => {
    const url = `${API_URL}/order/get-order-details/${id}`;
    const token = localStorage.getItem('@user_Token');
    return axios.get(url, {
        headers: {
            "x-auth-token": token,
        }
    });
}

export const DeassignOrderService = async(data) => {
    const url = `${API_URL}/order/de-assign-order`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
            "x-auth-token": token,
        }
    });
}

export const OutForDeliveryService = async(data) => {
    const url = `${API_URL}/order/out-for-delivery`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
            "x-auth-token": token,
        }
    });
}

export const GetOrderHistory = async() => {
    const url = `${API_URL}/order/get-order-history`;
    const token = localStorage.getItem('@user_Token');
    return axios.get(url, {
        headers: {
            "x-auth-token": token,
        }
    });
}