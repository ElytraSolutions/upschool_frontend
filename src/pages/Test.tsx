import { useEffect, useState } from 'react';
import axiosInstance from '../config/Axios';

function Test() {
    const [data, setData] = useState(null);
    useEffect(() => {
        axiosInstance.get('/user').then((resp) => {
            setData(resp.data);
        });
    }, []);
    return <div>{JSON.stringify(data)}</div>;
}

export default Test;
