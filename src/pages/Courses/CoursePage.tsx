import axiosInstance from '../../config/Axios';
import CourseStaticUpschool from '../../components/Course/CourseStaticUpschool';
import CourseStaticVideo from '../../components/Course/CourseStaticVideo';
import CourseStaticTop from '../../components/Course/CourseStaticTop';
import CourseEnrol from '../../components/Cards/Course/CourseEnrol';
import CourseStaticBottom from '../../components/Course/CourseStaticBottom';
import CourseTestimonial from '../../components/Course/CourseTestimonial';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const commQuestions = [
    {
        question: 'Is the program really free?',
        answer: "It's 100% free - yes. Nothing to pay to be involved.",
    },
    {
        question: 'What ages is the program suitable for?',
        answer: 'We have 5 year old children right through to adults participating. It’s differentiated and open to everyone.',
    },
    {
        question:
            'Do schools run this as a whole school project or can it be done as a class?',
        answer: 'Either. Whole school engagement is the best way to have maximum impact, but it certainly can be done by one class or by one year level. You can even use it as an extension program for a small number of students too if that works for you.',
    },
    {
        question: "I'm homeschooling my children. Can I participate?",
        answer: 'Absolutely. Anyone can join!',
    },
    {
        question: 'Do I need to be involved with a school to participate?',
        answer: 'No, not at all. Individuals (adults and children) can go through the course.',
    },
];

function CoursePage() {
    const { slug } = useParams();
    console.log(slug);
    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            const res = await axiosInstance.get(`/data/courses/`);
            console.log(res.data.data);
        })();
    }, []);

    return (
        <>
            <div className="grid gap-y-10">
                <CourseStaticTop />
                <div className="tab:hidden flex justify-center my-6 mx-6">
                    <CourseEnrol />
                </div>
                <CourseStaticVideo />
                <CourseStaticUpschool />
                <CourseTestimonial />
                <CourseStaticBottom questionList={commQuestions} />
            </div>
        </>
    );
}

export default CoursePage;
