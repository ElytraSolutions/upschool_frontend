import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export default axiosInstance;
