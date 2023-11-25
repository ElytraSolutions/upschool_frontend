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
    const { courseSlug, lessonSlug } = useParams();
    const { isBigScreen } = useScreenWidthAndHeight();

    // const [lesson, setLesson] = useState<any>(null);
    const [lesson, setLesson] = useState<any>(null);
    useEffect(() => {
        (async () => {
            const res = await axiosInstance.get(`/data/lessons/${lessonSlug}`);
            setLesson(res.data.data);
        })();
    }, [lessonSlug, setLesson]);
    console.log('lesson', lesson);

    // const contentType = 'carousel'; //type of chapter [video,image, flipbook, carousel]
    return (
        lesson && (
            <>
                <div className="flex h-[90vh] flex-col overflow-auto pb-5">
                    {/* ChapterDetail Header */}
                    <div className="mb-5 flex w-full bg-[#1e3050]">
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
                                <div className="min-w-[50%] text-left">
                                    {lesson.name}
                                </div>
                            )}
                            {/* TODO check if chapter is already completed */}
                            {/* <button
                                className=" text-xs rounded-md bg-pink-700 p-0.5  text-center md:px-4 md:py-2 md:text-base "
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
                            </button> */}
                        </div>
                    </div>
                    {/* ChapterDetail Chapters Section*/}
                    <div className="flex flex-col">
                        {lesson.lesson_sections.map((section) => (
                            <div
                                className="mt-12 pb-6 mx-3 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-1 md:gap-8 border-b-[1px] border-black"
                                key={section.id}
                            >
                                <div
                                    className={`${
                                        section.lesson_section_contents
                                            .length == 0 && 'col-span-2'
                                    }`}
                                >
                                    <ChapterText
                                        key={section.id}
                                        chapter={section}
                                    />
                                </div>
                                <div
                                    className={`
                                    ${
                                        section.text === null &&
                                        'col-span-2 w-full'
                                    }
                                `}
                                >
                                    <ChapterMedia
                                        section={
                                            section.lesson_section_contents
                                        }
                                    />
                                </div>
                                <button className="max-w-fit bg-red-custom text-white px-3 my-8 py-1 text-center">
                                    Download
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* TODO check if chapter is already completed */}
                    <div className="w-full flex justify-center pt-14">
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
                    </div>
                </div>
            </>
        )
    );
}
