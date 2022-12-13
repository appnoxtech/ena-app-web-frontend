import axios from "axios";
import { API_URL } from "../../GlobalVariable";

export const LoginServices = async (data) => {
    const url = `${API_URL}/api/access/sign-in`
    return axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}