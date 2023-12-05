import { useEffect, useState } from 'react';
import CourseTop from '../components/Course/Short course/CourseTop';
import axiosInstance from '../config/Axios';
import CourseContent from '../components/Course/Short course/CourseContent';
import Loading from '../components/Loading';

function Test() {
    const [info, setInfo] = useState<any>(null);
    useEffect(() => {
        (async () => {
            const resp = await axiosInstance.get(
                `/data/courses/this-is-course`,
            );
            console.log(resp.data.data);
            setInfo(resp.data.data);
        })();
    }, []);
    if (!info) return <Loading />;
    return (
        <>
            <div className="grid w-full">
                <CourseTop
                    title={info.name}
                    subtitle={info.intro}
                    thumbnail={'/images/Course/courseEnrol.png'}
                />
                <CourseContent
                    susDetails={info?.description?.sustainability_details}
                    editorData={info?.description.description}
                />
            </div>
        </>
    );
}

export default Test;
