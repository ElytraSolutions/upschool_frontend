import { useEffect, useState } from 'react';
import LessonDetail from '../../parts/PartsLesson/LessonDetail';
import Sidebar from '../../parts/PartsLesson/Sidebar';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../config/Axios';
import IChapter from '../../types/IChapter';
import Loading from '../../components/Loading';

export default function Lessons() {
    const { isBigScreen } = useScreenWidthAndHeight();
    const [isSidebarOpen, setIsSiderbarOpen] = useState<boolean>(true);
    const [chapters, setChapters] = useState<IChapter[] | null>(null);
    const { courseSlug } = useParams();

    const [dataFetchComplete, setDataFetchComplete] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        if (isBigScreen) {
            setIsSiderbarOpen(true);
        } else {
            setIsSiderbarOpen(false);
        }
    }, [isBigScreen]);

    const updateChapters = async () => {
        const res = await axiosInstance.get(
            `/data/courses/${courseSlug}/chapters`,
        );
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
        setDataFetchComplete(true);
        return chaptersData;
    };

    useEffect(() => {
        (async () => {
            await updateChapters();
        })();
    }, [courseSlug, setChapters]); // eslint-disable-line react-hooks/exhaustive-deps

    if (!dataFetchComplete) return <Loading />;

    return (
        <div className="mb-6 h-[90vh] flex">
            {isSidebarOpen && (
                <div className=" h-[90vh] pb-5 w-[75%] md:w-[30%] lg:w-[25%] xxlarge:w-[15%] ">
                    <Sidebar courseSlug={courseSlug} chapters={chapters} />
                </div>
            )}
            <div
                className={`${
                    isSidebarOpen
                        ? 'w-[25%] md:w-[70%] lg:w-[75%] xxlarge:w-[85%] '
                        : ' w-full'
                } relative h-[90vh] w-full`}
            >
                <LessonDetail
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSiderbarOpen}
                    updateChapters={updateChapters}
                    chapters={chapters}
                />
            </div>
        </div>
    );
}
