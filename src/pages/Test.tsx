// import { useEffect } from 'react';
// import axiosInstance from '../config/Axios';
// import useUser from '../hooks/useUser';
// import CharityProjectCard from './Charity/CharityProjectCard';

import CanvaPage from './Canva/CanvaPage';

function Test() {
    // const [data, setData] = useState(null);
    // const { user } = useUser();
    // useEffect(() => {
    //     axiosInstance.get('/data/user').then((resp) => {
    //         // setData(resp.data);
    //     });
    // }, []);
    return (
        <div>
            {/* {JSON.stringify(data)}
            <></>
            {JSON.stringify(user)} */}
            <CanvaPage />
        </div>
    );
}

export default Test;
