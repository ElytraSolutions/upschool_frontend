import { NavLink, useParams } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import axiosInstance from '../../config/Axios';
import ChapterText from './LessonText';
import ChapterMedia from './LessonMedia';
import { useEffect, useState } from 'react';

type ChapterDetailProps = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: any;
    updateChapters: () => Promise<any>;
};
// const tempData = [
//     {
//         id: 1,
//         name: 'Chapter 1',
//         type: 'video',
//         media: {
//             youtubeId: 'https://www.youtube.com/embed/2g811Eo7K8U',
//             vimeoId: 'https://player.vimeo.com/video/76979871',
//         },
//         content: `In this learning sequence, we will delve into the geography of Antarctica and gain a deeper understanding of its unique features and challenges.From exploring its past to understanding its present and envisioning its future, this learning sequence will provide a comprehensive look at the frozen continent at the southernmost point on the planet.

// We will learn about the deep ice sheet that covers the landmass, its isolated location, and the impact it has on the surrounding environment and ecosystem.`,
//         teacherNotes: `Each week, we will help the children understand exactly where we are as we encounter the amazing sights and sounds of Antarctica. Your children may like to make a copy of the map and track the journey as we progress through the course.

// Hopefully we can all enjoy the journey together and your children may like to conduct further research as they move from place to place.`,
//     },
//     {
//         id: 2,
//         name: 'Chapter 2',
//         type: 'image',
//         media: {
//             image: 'https://source.unsplash.com/random',
//         },
//         content: `In this learning sequence, we will delve into the geography of Antarctica and gain a deeper understanding of its unique features and challenges.From exploring its past to understanding its present and envisioning its future, this learning sequence will provide a comprehensive look at the frozen continent at the southernmost point on the planet.`,
//         teacherNotes: `Each week, we will help the children understand exactly where we are as we encounter the amazing sights and sounds of Antarctica. Your children may like to make a copy of the map and track the journey as we progress through the course.

// Hopefully we can all enjoy the journey together and your children may like to conduct further research as they move from place to place. `,
//     },
//     {
//         id: 3,
//         name: 'Chapter 3',
//         type: 'flipbook',
//         media: {
//             images: [
//                 'https://source.unsplash.com/random',
//                 'https://source.unsplash.com/random',
//                 'https://source.unsplash.com/random',
//                 'https://source.unsplash.com/random',
//                 'https://source.unsplash.com/random',
//                 'https://source.unsplash.com/random',
//                 'https://source.unsplash.com/random',
//             ],
//         },
//         content: `In this learning sequence, we will delve into the geography of Antarctica and gain a deeper understanding of its unique features and challenges.From exploring its past to understanding its present and envisioning its future, this learning sequence will provide a comprehensive look at the frozen continent at the southernmost point on the planet.`,
//         teacherNotes: `Each week, we will help the children understand exactly where we are as we encounter the amazing sights and sounds of Antarctica. Your children may like to make a copy of the map and track the journey as we progress through the course.`,
//     },
//     {
//         id: 4,
//         name: 'Chapter 4',
//         type: 'carousel',
//         media: {
//             images: [
//                 'https://source.unsplash.com/random',
//                 'https://source.unsplash.com/random',
//                 'https://source.unsplash.com/random',
//                 'https://source.unsplash.com/random',
//             ],
//         },
//         content: `In this learning sequence, we will delve into the geography of Antarctica and gain a deeper understanding of its unique features and challenges.From exploring its past to understanding its present and envisioning its future, this learning sequence will provide a comprehensive look at the frozen continent at the southernmost point on the planet.`,
//         teacherNotes: `Each week, we will help the children understand exactly where we are as we encounter the amazing sights and sounds of Antarctica. Your children may like to make a copy of the map and track the journey as we progress through the course.`,
//     },
// ];
export default function LessonDetail({
    isSidebarOpen,
    setIsSidebarOpen,
    updateChapters,
}: ChapterDetailProps) {
    const { courseSlug, chapterSlug, lessonSlug } = useParams();
    const { isBigScreen } = useScreenWidthAndHeight();

    // const [lesson, setLesson] = useState<any>(null);
    const [lesson, setLesson] = useState<any>(null);
    const [chapterLessons, setChapterLessons] = useState<any>(null);
    useEffect(() => {
        (async () => {
            const res = await axiosInstance.get(`/data/lessons/${lessonSlug}`);
            setLesson(res.data.data);
            console.log('lesson', res.data.data);
        })();
        (async () => {
            const res = await axiosInstance.get(
                `/data/chapters/${chapterSlug}/lessons`,
            );
            setChapterLessons(res.data.data);
            // console.log(res.data.data);
            // console.log(lessonSlug);
        })();
    }, [chapterSlug, lessonSlug, setLesson]);
    // console.log('lesson', lesson);

    // const contentType = 'carousel'; //type of chapter [video,image, flipbook, carousel]
    return (
        lesson && (
            <>
                <div className="flex h-[90vh] flex-col overflow-auto pb-5 pl-[1px] pt-[0.4px]">
                    {/* ChapterDetail Header */}
                    <div className="mb-5 flex w-full bg-[#1e3050] ">
                        <div className="flex h-14 flex-1 flex-row items-center justify-between p-2 text-sm text-white">
                            <div className="flex-row flex items-center justify-between">
                                {/* Circle sidebar open and close option */}
                                <div
                                    className={`${
                                        isSidebarOpen ? 'absolute -left-6' : ''
                                    }  flex h-4 w-4 flex-row items-center justify-center rounded-full bg-yellow-400 text-white md:h-6 md:w-6 lg:h-8 lg:w-8 `}
                                >
                                    <KeyboardArrowLeftIcon
                                        className={`${
                                            !isSidebarOpen && 'rotate-180'
                                        } h-3 w-3 md:h-5 md:w-5 lg:h-7 lg:w-7`}
                                        // style={{ width: '40px', height: '40px' }}
                                        onClick={() => {
                                            setIsSidebarOpen(
                                                (oldState) => !oldState,
                                            );
                                        }}
                                    />
                                </div>
                                <div className="ml-2">
                                    <NavLink
                                        to={`/course/${courseSlug}`}
                                        className="text-xs flex flex-row items-center justify-start gap-0 md:gap-1 md:text-base"
                                    >
                                        Goto Course Home
                                        <span>
                                            <HomeIcon />
                                        </span>
                                    </NavLink>
                                </div>
                            </div>
                            {isBigScreen && (
                                <div className="min-w-[50%] text-left font-semibold text-[1.25rem]">
                                    {lesson.name}
                                </div>
                            )}
                        </div>
                    </div>
                    {/* ChapterDetail Chapters Section*/}
                    <div className="flex flex-col mx-4 items-center ">
                        {lesson.lesson_sections.map((section) => (
                            <div
                                key={section.id}
                                className="w-full border-b-[1px] border-black xxlarge:w-[70%] px-3"
                            >
                                <div className="w-full mt-12 pb-6  flex flex-col md:flex-row gap-1 md:gap-8 ">
                                    <div
                                        className={` ${
                                            section.lesson_section_contents
                                                .length === 0
                                                ? 'flex-auto w-full'
                                                : 'flex-1'
                                        } `}
                                    >
                                        <ChapterText
                                            key={section.id}
                                            chapter={section}
                                        />
                                    </div>
                                    <div
                                        className={` ${
                                            section.text === ''
                                                ? 'flex-auto w-full'
                                                : 'flex-1'
                                        } `}
                                    >
                                        <ChapterMedia
                                            section={
                                                section.lesson_section_contents
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 mb-4">
                                    <button
                                        className={`${
                                            section.downloadable
                                                ? 'flex gap-4 items-center justify-center '
                                                : 'hidden'
                                        } w-fit h-fit bg-red-custom text-white px-4  py-2 text-center`}
                                    >
                                        Download
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1em"
                                            viewBox="0 0 512 512"
                                            fill="currentColor"
                                        >
                                            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                                        </svg>
                                    </button>
                                    <button
                                        className={`${
                                            section.canva_template
                                                ? 'flex gap-4 items-center justify-center'
                                                : 'hidden'
                                        } max-w-fit h-fit bg-theme-color text-white px-4  py-2 text-center`}
                                    >
                                        Use canva Template
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1em"
                                            viewBox="0 0 512 512"
                                            fill="currentColor"
                                        >
                                            <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                                        </svg>
                                    </button>
                                    <button
                                        className={`${
                                            section.canva_template
                                                ? 'flex gap-4 items-center justify-center'
                                                : 'hidden'
                                        } max-w-fit h-fit bg-red-custom text-white px-4  py-2 text-center`}
                                    >
                                        Share With Upschool
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1em"
                                            viewBox="0 0 512 512"
                                            fill="currentColor"
                                        >
                                            <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* TODO check if chapter is already completed */}
                    <div className="w-full flex items-center justify-evenly pt-14">
                        {/* previous button, hide if lesson is the first element of chapterlessons*/}

                        <button
                            className={`${
                                chapterLessons &&
                                chapterLessons[0].slug === lessonSlug
                                    ? 'text-theme-color/60 pointer-events-none'
                                    : ''
                            } hidden md:block text-xs  p-0.5 text-theme-color font-semibold  text-center px-4 py-2 md:text-base underline underline-offset-4 `}
                        >
                            Previous Lesson
                        </button>
                        <button
                            className=" text-xs rounded-md bg-pink-700 p-0.5 text-white  text-center px-4 py-2 md:text-base "
                            onClick={async () => {
                                const res = await axiosInstance.post(
                                    `/data/lessons/${lessonSlug}/complete`,
                                );
                                if (res.status === 200) {
                                    await updateChapters();
                                }
                                console.log(res.data);
                            }}
                        >
                            Complete Lesson
                        </button>
                        <button
                            className={`${
                                chapterLessons &&
                                chapterLessons[chapterLessons.length - 1]
                                    .slug === lessonSlug
                                    ? 'text-theme-color/60 pointer-events-none'
                                    : ''
                            } hidden md:block text-xs  p-0.5 text-theme-color font-semibold  text-center px-4 py-2 md:text-base underline underline-offset-4 `}
                        >
                            Next Lesson
                        </button>
                    </div>
                </div>
            </>
        )
    );
}
