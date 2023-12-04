import { useEffect, useState } from 'react';
import useUser from '../../../hooks/useUser';
import resolveImgURL from '../../../utlis/resolveImgURL';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axiosInstance from '../../../config/Axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function CourseEnrol({ thumbnail }) {
    const { slug } = useParams();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const [enrollmentStatus, setEnrollmentStatus] = useState<{
        enrolled: boolean;
        // course: number | null;
        firstChapter: string | null;
        firstLesson: string | null;
        totalCompletedLessonCount?: number;
        totalLessons?: number;
    }>({
        enrolled: false,
        // course: null,
        firstChapter: null,
        firstLesson: null,
    });

    const checkEnrollmentStatus = async () => {
        if (!slug) return;
        const resp = await axiosInstance.get(
            `/data/courses/${slug}/checkEnrollment`,
        );
        // console.log(resp.data.data, 'enrollment');
        setEnrollmentStatus({
            enrolled: resp.data.data.enrolled,
            firstChapter: resp.data.data.firstChapter?.slug,
            firstLesson: resp.data.data.firstLesson?.slug,
            totalCompletedLessonCount: resp.data.data.totalCompletedLessonCount,
            totalLessons: resp.data.data.totalLessons,
        });
    };
    useEffect(() => {
        checkEnrollmentStatus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    const handleEnroll = async () => {
        try {
            const resp = await axiosInstance.post(
                `/data/courses/${slug}/enroll`,
            );
            await checkEnrollmentStatus();
            if (resp.data.success) {
                navigate(
                    `${location.pathname}/${resp.data.data.firstChapter.slug}/${resp.data.data.firstLesson.slug}`,
                );
            }
        } catch (error) {
            toast.error((error as any).response.data.message);
        }
    };
    // console.log('User Information', user);

    const handleClick = async () => {
        if (user && user.id) {
            if (enrollmentStatus.enrolled) {
                if (checkAllLessonCompleted()) {
                    console.log('reset');
                    const resp = await axiosInstance.post(
                        `/data/courses/${slug}/reset`,
                    );
                    if (resp) {
                        console.log(resp.data, 'reset');
                    }
                    if (resp.data.success) {
                        handleGoToCourse();
                    }
                } else await handleGoToCourse();
            } else {
                await handleEnroll();
            }
        } else {
            navigate(`/login`, { state: { course: slug } });
        }
    };

    const handleGoToCourse = async () => {
        navigate(
            `${location.pathname}/${enrollmentStatus.firstChapter}/${enrollmentStatus.firstLesson}`,
        );
    };
    //function to check if all lesson completed
    const checkAllLessonCompleted = () => {
        // console.log(chapters, 'chapters');
        if (
            enrollmentStatus.totalCompletedLessonCount ===
            enrollmentStatus.totalLessons
        ) {
            return true;
        }
        return false;
    };
    return (
        <>
            <div className="shrink grid border-1 border-gray-300 rounded-lg overflow-hidden shadow-2xl hover:transition hover:duration-200">
                <img
                    src={resolveImgURL(thumbnail)}
                    alt="courseEnrol"
                    className="xs:max-w-[340px] xs:max-h-[408px] max-w-[260px] max-h-[328px]"
                />
                <div className="flex flex-col gap-4 justify-center bg-[#F4F4F4] px-9 py-4 xs:max-w-[340px] max-w-[260px] ">
                    <button
                        className="w-full bg-theme-color text-white px-8 py-2 rounded-sm flex-grow sm:text-base text-[0.9rem] my-2 hover:bg-theme-color/80 "
                        onClick={handleClick}
                    >
                        {enrollmentStatus.enrolled
                            ? checkAllLessonCompleted()
                                ? 'Revisit Course'
                                : 'Continue to Course'
                            : 'Enrol Now'}
                    </button>
                    {enrollmentStatus.enrolled && checkAllLessonCompleted() && (
                        <Link
                            className=" w-full bg-theme-color text-white px-8 py-2  mb-2 rounded-sm flex-grow sm:text-base text-[0.9rem] hover:bg-theme-color/80 cursor-pointer text-center "
                            onClick={handleGoToCourse}
                            to={`/certificate`}
                        >
                            Get Certificate
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}

export default CourseEnrol;
