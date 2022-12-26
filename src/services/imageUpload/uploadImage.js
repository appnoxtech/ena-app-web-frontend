import axios from "axios";
import { API_URL } from "../../GlobalVariable";

export const UploadImageService = async(data) => {
    const url = `${API_URL}/imageUpload/image-upload`;
    //const token = localStorage.getItem('@user_Token');
    return axios.post(url, data);
}