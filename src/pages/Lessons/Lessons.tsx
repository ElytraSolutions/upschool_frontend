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
        //get body document object and set overflow to hidden
        const body = document.querySelector('body');
        body?.classList.add('overflow-hidden');
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
        <div className="h-[calc(100vh-96px)] md:h-[calc(100vh-96px)] flex">
            {isSidebarOpen && (
                <div className=" h-full pb-5 w-[75%] md:min-w-[30%] lg:min-w-[25%] xxlarge:min-w-[15%] max-w-[400px] bg-slate-50 overflow-hidden ">
                    <Sidebar courseSlug={courseSlug} chapters={chapters} />
                </div>
            )}
            <div
                className={`${
                    isSidebarOpen ? 'w-[calc(100vw-400px)] ' : ' w-full'
                } relative h-full `}
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
