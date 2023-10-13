import { useEffect, useState } from 'react';
import axiosInstance from '../config/Axios';
import useUser from '../hooks/useUser';

function Test() {
    const [data, setData] = useState(null);
    const { user } = useUser();
    useEffect(() => {
        axiosInstance.get('/data/user').then((resp) => {
            setData(resp.data);
        });
    }, []);
    return (
        <div>
            {JSON.stringify(data)}
            <p>hello</p>
            <h1>heheh</h1>
            <br />
            <>This</>
            <>This is the test</>
            <br />
            {JSON.stringify(user)}
        </div>
    );
}

export default Test;
