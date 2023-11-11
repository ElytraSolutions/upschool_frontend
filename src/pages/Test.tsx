// import { useEffect } from 'react';
// import axiosInstance from '../config/Axios';
// import useUser from '../hooks/useUser';
// import CharityProjectCard from './Charity/CharityProjectCard';
// import CanvaPage from './Canva/CanvaPage';
import CourseStaticUpschool from '../components/Course/CourseStaticUpschool';
import CourseEnrol from '../components/Cards/Course/CourseEnrol';

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
        <>
            <div className="grid">
                <div className="flex justify-center">
                    <CourseEnrol />
                </div>
                <CourseStaticUpschool />
            </div>
        </>
    );
}

export default Test;
