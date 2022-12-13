import axios from "axios";


import { API_URL } from "../../GlobalVariable";

export const LoginServices = async (data) => {
    const url = `${API_URL}/user/login`
    console.log(data, 'is colliect')
    return axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}