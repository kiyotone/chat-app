import axios from "axios";
import Cookies from 'js-cookie';

// Create Axios API instance
export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5 * 60 * 1000,
    headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
});

// Add authentication to Axios instance
export const authenticated = (apiInstance) => {
    const token = Cookies.get('token');
    if (!token) return apiInstance;

    // Set Authorization token for Axios requests
    apiInstance.defaults.headers.common.Authorization = `Token ${token}`;
    apiInstance.defaults.withCredentials = false;

    return apiInstance;
};
