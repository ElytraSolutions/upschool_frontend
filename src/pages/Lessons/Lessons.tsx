import { useEffect, useState } from 'react';
import LessonDetail from '../../parts/PartsLesson/LessonDetail';
import Sidebar from '../../parts/PartsLesson/Sidebar';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../config/Axios';
import IChapter from '../../types/IChapter';

export default function Lessons() {
    const { isBigScreen } = useScreenWidthAndHeight();
    const [isSidebarOpen, setIsSiderbarOpen] = useState<boolean>(true);
    const [chapters, setChapters] = useState<IChapter[] | null>(null);
    const { courseSlug } = useParams();
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
        console.log(res.data.data, 'res.data.data');
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
        console.log(chaptersData);
        return chaptersData;
    };

    useEffect(() => {
        (async () => {
            await updateChapters();
        })();
    }, [courseSlug, setChapters]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="mb-6  grid h-[90vh] grid-cols-2 xm:grid-cols-5 lg:grid-cols-4">
            {isSidebarOpen && (
                <div className=" h-[90vh] w-full pb-5 xm:col-span-2 lg:col-span-1">
                    <Sidebar courseSlug={courseSlug} chapters={chapters} />
                </div>
            )}
            <div
                className={`${
                    isSidebarOpen
                        ? ' col-span-1 xm:col-span-3'
                        : 'col-span-5 lg:col-span-4'
                } relative h-[90vh] w-full`}
            >
                <LessonDetail
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSiderbarOpen}
                    updateChapters={updateChapters}
                />
            </div>
        </div>
    );
}
