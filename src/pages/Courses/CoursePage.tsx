import axiosInstance from '../../config/Axios';
import CourseStaticUpschool from '../../components/Course/CourseStaticUpschool';
import CourseStaticVideo from '../../components/Course/CourseStaticVideo';
import CourseStaticTop from '../../components/Course/CourseStaticTop';
import CourseEnrol from '../../components/Cards/Course/CourseEnrol';
// import CourseStaticBottom from '../../components/Course/CourseStaticBottom';
import CourseTestimonial from '../../components/Course/CourseTestimonial';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import resolveImgURL from '../../utlis/resolveImgURL';
import CourseSteps from '../../components/Course/CourseSteps';
import CourseDescription from '../../components/Course/CourseDescription';
import Loading from '../../components/Loading';

function CoursePage() {
    const { slug } = useParams();
    const [courseInfo, setCourseInfo] = useState<any>(null);
    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            const res = await axiosInstance.get(`/data/courses/${slug}`);
            setCourseInfo(res.data.data);
        })();
    }, [slug]);
    useEffect(() => {
        document.title = `${courseInfo?.name} | Upschool`;
    }, [courseInfo?.name]);
    if (!courseInfo) return <Loading />;
    // if (!courseInfo.description) return null;
    // if (courseInfo.description) {
    //     console.log(courseInfo.description);
    // }

    const testimonials = courseInfo?.description?.testimonials;
    const steps = courseInfo?.description?.steps;
    const objectives = courseInfo?.description?.objectives;
    // const questions = courseInfo?.description?.faq;
    return (
        <>
            <div className="grid gap-y-10">
                <CourseStaticTop courseInfo={courseInfo} />
                <div className="tab:hidden flex justify-center">
                    <CourseEnrol
                        thumbnail={
                            courseInfo.thumbnail ||
                            `${resolveImgURL(
                                './images/Course/courseEnrol.png',
                            )}`
                        }
                    />
                </div>
                <CourseDescription
                    editorData={courseInfo?.description?.description}
                    title={courseInfo?.description?.title}
                    subtitle={courseInfo?.description?.subtitle}
                    theme={courseInfo?.theme || '#000000'}
                />
                <CourseStaticVideo theme={courseInfo.theme} />
                <CourseStaticUpschool theme={courseInfo.theme} />
                {testimonials && (
                    <CourseTestimonial
                        theme={courseInfo.theme}
                        tstData={testimonials}
                    />
                )}
                {(steps || objectives) && (
                    <CourseSteps
                        steps={steps}
                        theme={courseInfo.theme}
                        objData={objectives}
                    />
                )}
                {/* {questions && (
                    <CourseStaticBottom
                        questionList={questions}
                        theme={courseInfo.theme}
                    />
                )} */}
            </div>
        </>
    );
}

export default CoursePage;
