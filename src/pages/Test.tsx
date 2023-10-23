// import { useEffect } from 'react';
// import axiosInstance from '../config/Axios';
// import useUser from '../hooks/useUser';
import CharityProjectCard from './Charity/CharityProjectCard';

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
            <CharityProjectCard />
        </div>
    );
}

export default Test;
