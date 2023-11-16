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

const commQuestions = {
    one: {
        question: 'Is the program really free?',
        answer: "It's 100% free - yes. Nothing to pay to be involved.",
    },
    two: {
        question: 'What ages is the program suitable for?',
        answer: 'We have 5 year old children right through to adults participating. It’s differentiated and open to everyone.',
    },
    three: {
        question:
            'Do schools run this as a whole school project or can it be done as a class?',
        answer: 'Either. Whole school engagement is the best way to have maximum impact, but it certainly can be done by one class or by one year level. You can even use it as an extension program for a small number of students too if that works for you.',
    },
    four: {
        question: "I'm homeschooling my children. Can I participate?",
        answer: 'Absolutely. Anyone can join!',
    },
    five: {
        question: 'Do I need to be involved with a school to participate?',
        answer: 'No, not at all. Individuals (adults and children) can go through the course.',
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
    if (!courseInfo.description) return null;
    if (courseInfo.description) {
        console.log(courseInfo.description);
    }
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
                    editorData={courseInfo.description.description}
                    title={courseInfo.description.title}
                    subtitle={courseInfo.description.subtitle}
                    theme={courseInfo.theme}
                />
                <CourseStaticVideo theme={courseInfo.theme} />
                <CourseStaticUpschool theme={courseInfo.theme} />
                <CourseTestimonial theme={courseInfo.theme} />
                <CourseSteps
                    steps={
                        courseInfo.description === null
                            ? defaultSteps
                            : courseInfo.description.steps
                    }
                    theme={courseInfo.theme}
                />
                <CourseStaticBottom
                    questionList={
                        courseInfo.description === null
                            ? commQuestions
                            : courseInfo.description.faq
                    }
                    theme={courseInfo.theme}
                />
            </div>
        </>
    );
}

export default CoursePage;
