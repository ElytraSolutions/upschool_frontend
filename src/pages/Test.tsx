// import { useEffect } from 'react';
// import axiosInstance from '../config/Axios';
// import useUser from '../hooks/useUser';
// import CharityProjectCard from './Charity/CharityProjectCard';

// import BulkEnrolSection from '../parts/PartsBulkRegistration/BulkEnrolSection';
import BulkExpect from '../parts/PartsBulkRegistration/BulkExpect';
import BulkImageSection from '../parts/PartsBulkRegistration/BulkImageSection';
// import CanvaPage from './Canva/CanvaPage';

function Test() {
    // test string123
    // const [data, setData] = useState(null);
    // const { user } = useUser();
    // useEffect(() => {
    //     axiosInstance.get('/data/user').then((resp) => {
    //         // setData(resp.data);
    //     });
    // }, []);
    return (
        <div className="grid grid-cols-6 gap-y-10">
            <div className="row-span-full col-span-full">
                <BulkImageSection />
            </div>
            <div className="xm:col-span-4 xm:col-start-2 col-span-full xm:p-0 p-4 grid gap-4">
                {/* {JSON.stringify(data)}
                <></>
                {JSON.stringify(user)} */}
                <BulkEnrolSectin />
                <BulkExpect />
            </div>
        </div>
    );
}

export default Test;
