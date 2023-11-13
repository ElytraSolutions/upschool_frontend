import axiosInstance from '../../config/Axios';
import CourseStaticUpschool from '../../components/Course/CourseStaticUpschool';
import CourseStaticVideo from '../../components/Course/CourseStaticVideo';
import CourseStaticTop from '../../components/Course/CourseStaticTop';
import CourseEnrol from '../../components/Cards/Course/CourseEnrol';
import CourseStaticBottom from '../../components/Course/CourseStaticBottom';
import CourseTestimonial from '../../components/Course/CourseTestimonial';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CoursePage() {
    const { slug } = useParams();
    const [courseInfo, setCourseInfo] = useState<any>(null);
    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            const res = await axiosInstance.get(`/data/courses/${slug}`);
            console.log('faq', res.data.data.description.faq);
            setCourseInfo(res.data.data);
        })();
    }, [slug]);
    if (!courseInfo) return null;
    return (
        <>
            <div className="grid gap-y-10">
                <CourseStaticTop courseInfo={courseInfo} />
                <div className="tab:hidden flex justify-center">
                    <CourseEnrol thumbnail={courseInfo.thumbnail} />
                </div>
                <CourseStaticVideo theme={courseInfo.theme} />
                <CourseStaticUpschool theme={courseInfo.theme} />
                <CourseTestimonial theme={courseInfo.theme} />
                <CourseStaticBottom
                    questionList={courseInfo.description.faq}
                    theme={courseInfo.theme}
                />
            </div>
        </>
    );
}

export default CoursePage;
