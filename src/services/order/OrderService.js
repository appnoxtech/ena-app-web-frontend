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
