import axios from "axios";

const baseUrl = "http://localhost:8000/api"

const instance = axios.create({
    baseURL: baseUrl
});

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });

export default instance;