import { NavLink, useParams, useNavigate } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import axiosInstance from '../../config/Axios';
import ChapterText from './LessonText';
import ChapterMedia from './LessonMedia';
import { useEffect, useState, useRef } from 'react';
import resolveImgURL from '../../utlis/resolveImgURL';

type ChapterDetailProps = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: any;
    chapters: any;
    updateChapters: () => Promise<any>;
};

export default function LessonDetail({
    isSidebarOpen,
    setIsSidebarOpen,
    chapters,
    updateChapters,
}: ChapterDetailProps) {
    const { courseSlug, chapterSlug, lessonSlug } = useParams();
    const navigate = useNavigate();
    const divRef = useRef<HTMLDivElement>(null);
    const { isBigScreen } = useScreenWidthAndHeight();
    const [clipBoard, setClipBoard] = useState<boolean>(false);

    // const [lesson, setLesson] = useState<any>(null);
    const [lesson, setLesson] = useState<any>(null);
    const [islessonCompleted, setIsLessonCompleted] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        // console.log('lesson', lesson);
        document.title = `${lesson ? lesson.name : 'Loading'} | Upschool`;
    }, [lesson]);
    useEffect(() => {
        if (chapters) {
            for (let i = 0; i < chapters.length; i++) {
                const chapter = chapters[i];
                for (let j = 0; j < chapter.lessons.length; j++) {
                    const lesson = chapter.lessons[j];
                    if (lesson.slug === lessonSlug) {
                        setIsLessonCompleted(lesson.isCompleted);
                    }
                }
            }
        }
    }, [chapters, lessonSlug]);
    useEffect(() => {
        (async () => {
            const res = await axiosInstance.get(`/data/lessons/${lessonSlug}`);
            setLesson(res.data.data);
            // console.log('lesson', res.data.data);
        })();
    }, [chapterSlug, lessonSlug, setLesson]);

    useEffect(() => {
        window.scrollTo(0, 0);
        //scroll to top
        if (divRef.current) {
            divRef.current.scrollTo(0, 0);
        }
    }, [lessonSlug]);

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

    const handlePrev = () => {
        // console.log('prev');
        //navigate to prev lesson
        if (chapters) {
            for (let i = 0; i < chapters.length; i++) {
                const chapter = chapters[i];
                for (let j = 0; j < chapter.lessons.length; j++) {
                    const lesson = chapter.lessons[j];
                    if (lesson.slug === lessonSlug) {
                        if (j > 0) {
                            navigate(
                                `/course/${courseSlug}/${chapter.slug}/${
                                    chapter.lessons[j - 1].slug
                                }`,
                            );
                        } else if (i > 0) {
                            navigate(
                                `/course/${courseSlug}/${
                                    chapters[i - 1].slug
                                }/${
                                    chapters[i - 1].lessons[
                                        chapters[i - 1].lessons.length - 1
                                    ].slug
                                }`,
                            );
                        }
                    }
                }
            }
        }
    };
    const handleNext = () => {
        // console.log('next');
        //navigate to next lesson
        if (chapters) {
            for (let i = 0; i < chapters.length; i++) {
                const chapter = chapters[i];
                for (let j = 0; j < chapter.lessons.length; j++) {
                    const lesson = chapter.lessons[j];
                    if (lesson.slug === lessonSlug) {
                        if (j < chapter.lessons.length - 1) {
                            navigate(
                                `/course/${courseSlug}/${chapter.slug}/${
                                    chapter.lessons[j + 1].slug
                                }`,
                            );
                        } else if (i < chapters.length - 1) {
                            navigate(
                                `/course/${courseSlug}/${
                                    chapters[i + 1].slug
                                }/${chapters[i + 1].lessons[0].slug}`,
                            );
                        }
                    }
                }
            }
        }
    };
    const handleDownload = (contents) => {
        // console.log('download', contents);
        //download all images on click stored as image_content

        const link = document.createElement('a');
        document.body.appendChild(link);
        contents.forEach((content, index) => {
            if (content.image_content) {
                setTimeout(() => {
                    link.href = resolveImgURL(
                        content.image_content +
                            '?response-content-disposition=attachment',
                    );
                    console.log('link', link.href);
                    link.download = `${content.image_content}`;
                    link.id = 'download-link';
                    try {
                        link.click();
                        console.log('downloaded');
                    } catch (e) {
                        console.log('error in downloading image', e);
                    }
                }, 1000 * index);

                // document.body.removeChild(link)s;
            }
        });
    };

    return (
        lesson && (
            <>
                <div
                    ref={divRef}
                    className="flex w-full h-full flex-col pl-[1px] pt-[0.4px]"
                >
                    {/* ChapterDetail Header */}
                    <div className=" flex w-full bg-[#1e3050]  ">
                        <div className="flex h-14 flex-1 flex-row items-center justify-between p-4 text-sm text-white">
                            <div className="flex-row flex items-center justify-between">
                                {/* Circle sidebar open and close option */}
                                <div
                                    className={`${
                                        isSidebarOpen ? 'absolute -left-4' : ''
                                    }  flex h-4 w-4 flex-row items-center justify-center rounded-full bg-yellow-400 text-white md:h-6 md:w-6 lg:h-8 lg:w-8 z-50 `}
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
                                        Go to Course Home
                                        <span>
                                            <HomeIcon className="scale-[0.8] origin-top" />
                                        </span>
                                    </NavLink>
                                </div>
                            </div>
                            {isBigScreen && (
                                <div className="min-w-[50%] text-left md:text-base ]">
                                    {lesson.name}
                                </div>
                            )}
                        </div>
                    </div>
                    {/* ChapterDetail Chapters Section*/}
                    <div className="overflow-y-auto overflow-x-visible">
                        <div
                            className={` ${
                                isSidebarOpen
                                    ? 'hidden xm:block'
                                    : '  flex flex-col mx-4 items-center'
                            } `}
                        >
                            {lesson.lesson_sections.map((section, index) => (
                                <div
                                    key={section.id}
                                    className="w-full md:px-8  xlarge:w-[1110px] m-auto border-b-[1px] border-black md:border-none  "
                                >
                                    <div className="w-full md:border-b-[1px] md:border-black mt-12 pb-6  flex flex-col md:flex-row gap-4 md:gap-8 ">
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
                                                index={index}
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
                                    <div className="md:hidden flex flex-col gap-4 mb-4">
                                        <button
                                            className={`${
                                                section.downloadable
                                                    ? 'flex gap-4 items-center justify-center '
                                                    : 'flex gap-4 items-center justify-center'
                                            } w-fit h-fit bg-red-custom text-white px-[8px] py-[20px] text-[14px] text-center`}
                                            onClick={() => {
                                                handleDownload(
                                                    section.lesson_section_contents,
                                                );
                                            }}
                                        >
                                            {index === 0
                                                ? 'Download Lesson Plan'
                                                : 'Download'}

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1em"
                                                viewBox="0 0 512 512"
                                                fill="currentColor"
                                            >
                                                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                                            </svg>
                                        </button>
                                        <a
                                            className={`${
                                                section.canva_template
                                                    ? 'flex gap-4 items-center justify-center'
                                                    : 'hidden'
                                            } max-w-fit h-fit bg-theme-color text-white px-7  py-3 text-center cursor-pointer`}
                                            href={section.canva_template}
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
                                        </a>
                                        <button
                                            className={`${
                                                section.canva_template
                                                    ? 'flex gap-4 items-center justify-center'
                                                    : 'hidden'
                                            } max-w-fit h-fit bg-red-custom text-white px-7  py-3 text-center`}
                                            onClick={() => {
                                                //copy the current url to clipboard
                                                navigator.clipboard.writeText(
                                                    window.location.href,
                                                );
                                                setClipBoard(true);
                                                setTimeout(() => {
                                                    setClipBoard(false);
                                                }, 3000);
                                            }}
                                        >
                                            {clipBoard ? (
                                                'Copied to Clipboard'
                                            ) : (
                                                <>
                                                    Share With Upschool
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1em"
                                                        viewBox="0 0 512 512"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* TODO check if chapter is already completed */}
                        <div
                            className={` ${
                                isSidebarOpen ? 'hidden xm:flex' : ''
                            } w-full flex items-center justify-evenly pt-14 gap-4 pb-10`}
                        >
                            {/* previous button, hide if lesson is the first element of chapterlessons*/}

                            <button
                                className={`${
                                    chapters &&
                                    chapters[0].lessons[0].slug === lessonSlug
                                        ? 'opacity-0 pointer-events-none'
                                        : ''
                                } flex items-center gap-2 text-xs  p-0.5 text-theme-color font-semibold  text-center px-4 py-2 md:text-base underline underline-offset-4 `}
                                onClick={() => {
                                    handlePrev();
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="16"
                                    width="14"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                                </svg>
                                Previous
                            </button>
                            <button
                                className={`${
                                    chapters && checkAllLessonCompleted()
                                        ? 'bg-[#32cd49]'
                                        : islessonCompleted
                                        ? ' bg-[#32cd80] pointer-events-none'
                                        : 'bg-[#32cd49]'
                                } text-xs rounded-md  p-0.5 text-white  text-center px-4 py-2 md:text-base `}
                                onClick={async () => {
                                    if (!islessonCompleted) {
                                        setLoading(true);
                                        const res = await axiosInstance.post(
                                            `/data/lessons/${lessonSlug}/complete`,
                                        );
                                        if (res.status === 200) {
                                            await updateChapters();
                                        }
                                    }
                                    setIsLessonCompleted(true);
                                    setLoading(false);

                                    //goto certificate page if all lessons are completed
                                    if (chapters && checkAllLessonCompleted()) {
                                        // Certificate path
                                        navigate(`/certificate`);
                                    }

                                    // console.log(res.data);
                                }}
                            >
                                {chapters && checkAllLessonCompleted()
                                    ? 'Get Certificate'
                                    : islessonCompleted
                                    ? 'Completed'
                                    : loading
                                    ? 'Marking as Completed...'
                                    : 'Mark as Completed'}
                            </button>
                            <button
                                className={`${
                                    chapters &&
                                    chapters[chapters.length - 1].lessons[
                                        chapters[chapters.length - 1].lessons
                                            .length - 1
                                    ].slug === lessonSlug
                                        ? 'opacity-0 pointer-events-none'
                                        : ''
                                } flex text-xs  p-0.5 text-theme-color font-semibold  text-center px-4 py-2 md:text-base underline underline-offset-4 items-center  gap-2`}
                                onClick={() => {
                                    handleNext();
                                }}
                            >
                                Next
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="16"
                                    width="14"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    );
}
