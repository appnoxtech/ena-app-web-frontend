import axios from "axios";
import { API_URL } from "../../GlobalVariable";

export const ChangePasswordService = async(data) => {
    const url = `${API_URL}/access/update-old-password`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
            "x-auth-token": token,
        }
    });
}

export const UpdateProfileService = async(data) => {
    const url = `${API_URL}/agent/update-user`;
    const token = localStorage.getItem('@user_Token');
    return axios.post(url, data, {
        headers: {
            "x-auth-token": token,
        }
    });
}