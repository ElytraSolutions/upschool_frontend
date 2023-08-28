import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://zuy.tqd.mybluehost.me/',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: true,
});

export default axiosInstance;
