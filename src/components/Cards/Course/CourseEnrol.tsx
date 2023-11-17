import { useEffect, useState } from 'react';
import useUser from '../../../hooks/useUser';
import resolveImgURL from '../../../utlis/resolveImgURL';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../../config/Axios';
import { toast } from 'react-toastify';

function CourseEnrol({ thumbnail }) {
    const { slug } = useParams();
    const { user } = useUser();
    const navigate = useNavigate();
    const [enrollmentStatus, setEnrollmentStatus] = useState<{
        enrolled: boolean;
        // course: number | null;
        firstChapter: string | null;
        firstLesson: string | null;
    }>({
        enrolled: false,
        // course: null,
        firstChapter: null,
        firstLesson: null,
    });

    const checkEnrollmentStatus = async () => {
        const resp = await axiosInstance.get(
            `/data/courses/${slug}/checkEnrollment`,
        );
        setEnrollmentStatus({
            enrolled: resp.data.data.enrolled,
            firstChapter: resp.data.data.firstChapter?.slug,
            firstLesson: resp.data.data.firstLesson?.slug,
        });
    };

    useEffect(() => {
        (async () => {
            await checkEnrollmentStatus();
        })();
    }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

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
                await handleGoToCourse();
            } else {
                await handleEnroll();
            }
        } else {
            navigate(`/login`);
        }
    };

    const handleGoToCourse = async () => {
        navigate(
            `${location.pathname}/${enrollmentStatus.firstChapter}/${enrollmentStatus.firstLesson}`,
        );
    };
    return (
        <>
            <div className="shrink grid border-1 border-gray-300 rounded-lg overflow-hidden shadow-2xl hover:scale-[1.05] hover:transition hover:duration-200">
                <img
                    src={resolveImgURL(thumbnail)}
                    alt="courseEnrol"
                    className="max-w-[340px] max-h-[408px]"
                />
                <div className="flex justify-center bg-[#F4F4F4] px-9 py-4 w-[340px]">
                    <button
                        className="bg-theme-color text-white px-8 py-2 rounded-sm flex-grow"
                        onClick={handleClick}
                    >
                        {enrollmentStatus.enrolled
                            ? 'GO TO COURSE'
                            : 'ENROLL NOW'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default CourseEnrol;
