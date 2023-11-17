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

const defaultQuestions = {
    one: {
        question: 'Filled Questionaries?',
        answer: 'it seems not yet.',
    },
    two: {
        question: "Weather's good today?",
        answer: 'very much',
    },
};

const defaultSteps = {
    one: {
        image: './images/Course/upschool-and-aurora.png',
        data: 'Steps is empty',
    },
};

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
    if (!courseInfo) return null;
    // if (!courseInfo.description) return null;
    // if (courseInfo.description) {
    //     console.log(courseInfo.description);
    // }
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
                    editorData={
                        courseInfo.description === null
                            ? 'enter description'
                            : courseInfo.description.description
                    }
                    title={
                        courseInfo.description === null
                            ? 'Enter title'
                            : courseInfo.description.title
                    }
                    subtitle={
                        courseInfo.description === null
                            ? 'enter subtitle'
                            : courseInfo.description.subtitle
                    }
                    theme={courseInfo.theme}
                />
                <CourseStaticVideo theme={courseInfo.theme} />
                <CourseStaticUpschool theme={courseInfo.theme} />
                <CourseTestimonial
                    theme={courseInfo.theme}
                    tstData={
                        courseInfo.description === null
                            ? 'enter testimonial'
                            : courseInfo.description.testimonials
                    }
                />
                <CourseSteps
                    steps={
                        courseInfo.description === null
                            ? defaultSteps
                            : courseInfo.description.steps
                    }
                    theme={courseInfo.theme}
                    objData={
                        courseInfo.description === null
                            ? 'enter objectives'
                            : courseInfo.description.objectives
                    }
                />
                <CourseStaticBottom
                    questionList={
                        courseInfo.description === null
                            ? defaultQuestions
                            : courseInfo.description.faq
                    }
                    theme={courseInfo.theme}
                />
            </div>
        </>
    );
}

export default CoursePage;
