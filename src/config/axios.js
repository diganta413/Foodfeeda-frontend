import axios from "axios";
import { getCookie } from "../helpers/cookie";

const baseUrl = "http://localhost:8000/api";
const token = getCookie("access_token");

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getCookie("access_token")}`,
    },
});

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;
