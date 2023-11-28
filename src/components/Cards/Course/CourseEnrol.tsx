import { useEffect, useState } from 'react';
import useUser from '../../../hooks/useUser';
import resolveImgURL from '../../../utlis/resolveImgURL';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axiosInstance from '../../../config/Axios';
import { toast } from 'react-toastify';
import IChapter from '../../../types/IChapter';

function CourseEnrol({ thumbnail }) {
    const { slug } = useParams();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const [chapters, setChapters] = useState<IChapter[] | null>(null);
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
        if (!slug) return;
        const resp = await axiosInstance.get(
            `/data/courses/${slug}/checkEnrollment`,
        );
        // console.log(resp.data.data, 'enrollment');
        setEnrollmentStatus({
            enrolled: resp.data.data.enrolled,
            firstChapter: resp.data.data.firstChapter?.slug,
            firstLesson: resp.data.data.firstLesson?.slug,
        });
    };

    useEffect(() => {
        // console.log('slug', slug);
        (async () => {
            await checkEnrollmentStatus();
        })();
    }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

    const updateChapters = async () => {
        const res = await axiosInstance.get(`/data/courses/${slug}/chapters`);
        // console.log(res.data.data, 'res.data.data');
        const chaptersData = res.data.data;
        for (let i = 0; i < chaptersData.length; i++) {
            const chapter = chaptersData[i];
            const lessonsRes = await axiosInstance.get(
                `/data/chapters/${chapter.slug}/lessons`,
            );
            const lessonsData = lessonsRes.data.data;
            let total = 0,
                completed = 0;
            for (let j = 0; j < lessonsData.length; j++) {
                total++;
                const completeRes = await axiosInstance.get(
                    `/data/lessons/${lessonsData[j].slug}/checkCompletion`,
                );
                if (completeRes.data.data) {
                    completed++;
                    lessonsData[j].isCompleted = true;
                }
            }
            chaptersData[i].totalLessons = total;
            chaptersData[i].completedLessons = completed;
            chaptersData[i].lessons = lessonsData;
        }
        setChapters(chaptersData);
        // console.log(chaptersData, 'chaptersData');
        return chaptersData;
    };

    useEffect(() => {
        (async () => {
            await updateChapters();
        })();
    }, [slug, setChapters]); // eslint-disable-line react-hooks/exhaustive-deps

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
                    // Certificate path
                    navigate(`/course/${slug}/certificate`);
                    return;
                } else {
                    await handleGoToCourse();
                }
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
        if (chapters) {
            for (let i = 0; i < chapters.length; i++) {
                const chapter = chapters[i];
                if (chapter.completedLessons !== chapter.totalLessons)
                    return false;
            }
            return true;
        }
        return false;
    };
    return (
        <>
            <div className="shrink grid border-1 border-gray-300 rounded-lg overflow-hidden shadow-2xl hover:scale-[1.05] hover:transition hover:duration-200">
                <img
                    src={resolveImgURL(thumbnail)}
                    alt="courseEnrol"
                    className="xs:max-w-[340px] xs:max-h-[408px] max-w-[260px] max-h-[328px]"
                />
                <div className="flex justify-center bg-[#F4F4F4] px-9 py-4 xs:max-w-[340px] max-w-[260px] ">
                    <button
                        className="bg-theme-color text-white px-8 py-2 rounded-sm flex-grow"
                        onClick={handleClick}
                    >
                        {enrollmentStatus.enrolled
                            ? (checkAllLessonCompleted() &&
                                  'GET CERTIFICATE') ||
                              'GO TO COURSE'
                            : 'ENROLL NOW'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default CourseEnrol;
