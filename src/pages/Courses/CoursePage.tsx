import axiosInstance from '../../config/Axios';
import CourseStaticUpschool from '../../components/Course/CourseStaticUpschool';
import CourseStaticVideo from '../../components/Course/CourseStaticVideo';
import CourseStaticTop from '../../components/Course/CourseStaticTop';
import CourseEnrol from '../../components/Cards/Course/CourseEnrol';
import CourseStaticBottom from '../../components/Course/CourseStaticBottom';
import CourseTestimonial from '../../components/Course/CourseTestimonial';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import resolveImgURL from '../../utlis/resolveImgURL';
import CourseSteps from '../../components/Course/CourseSteps';
import CourseDescription from '../../components/Course/CourseDescription';
import Loading from '../../components/Loading';
import CourseContent from '../../components/Course/Short course/CourseContent';
import CourseTop from '../../components/Course/Short course/CourseTop';

function CoursePage() {
    const { slug } = useParams();
    const [courseInfo, setCourseInfo] = useState<any>(null);
    const [courseCategory, setCourseCategory] = useState(0);
    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            const res = await axiosInstance.get(`/data/courses/${slug}`);
            setCourseInfo(res.data.data);
            setCourseCategory(res.data.data.course_category_id);
        })();
    }, [slug]);
    useEffect(() => {
        document.title = `${
            courseInfo?.name ? courseInfo.name : 'loading...'
        } | Upschool`;
    }, [courseInfo?.name]);
    if (!courseInfo && courseCategory === 0) return <Loading />;
    if (courseInfo) {
        console.log('Course Data: ', courseInfo);
    }

    const testimonials = courseInfo?.description?.testimonials;
    const steps = courseInfo?.description?.steps;
    const objectives = courseInfo?.description?.objectives;
    const questions = courseInfo?.description?.faq;
    return (
        <>
            {/*Long Course Page */}
            {courseCategory === 1 && (
                <div className="grid">
                    <CourseStaticTop courseInfo={courseInfo} />
                    <div className="tab:hidden flex justify-center tab:mb-[2.5rem]">
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
                    {questions && (
                        <CourseStaticBottom
                            questionList={questions}
                            theme={courseInfo.theme}
                        />
                    )}
                </div>
            )}
            {/*Short Course Page */}
            {courseCategory !== 1 && (
                <div className="grid w-full">
                    <CourseTop
                        title={courseInfo?.name}
                        subtitle={courseInfo?.intro}
                        thumbnail={courseInfo?.thumbnail}
                    />
                    <CourseContent
                        susDetails={
                            courseInfo?.description?.sustainability_details
                                ? courseInfo?.description
                                      ?.sustainability_details
                                : '{}',
                        }
                        editorData={courseInfo?.description?.description}
                    />
                </div>
            )}
        </>
    );
}

export default CoursePage;
