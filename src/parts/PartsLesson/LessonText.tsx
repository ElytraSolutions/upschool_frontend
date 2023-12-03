import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from 'react';
import resolveImgURL from '../../utlis/resolveImgURL';

const ChapterText = ({ chapter }) => {
    const [isClicked, setIsClicked] = useState(false); //teacher's note
    const [clipBoard, setClipBoard] = useState<boolean>(false);

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
        <div className="flex flex-col gap-8">
            <div className="ChapterText flex flex-col gap-6">
                {/* Title */}
                <div
                    className="text-4xl font-bold text-theme-color"
                    style={{ fontFamily: 'arial' }}
                >
                    {chapter.name}
                </div>
                {/* teacher's note */}
                {chapter.teachers_note && (
                    <div className={`flex flex-col gap-3`}>
                        <div
                            className={` ml-2 flex w-full flex-col gap-6 text-base font-semibold ${
                                isClicked
                                    ? 'text-red-upschool'
                                    : 'text-theme-color'
                            }`}
                        >
                            <div
                                className="flex max-w-fit flex-row items-center justify-center gap-2 hover:cursor-pointer font-bold"
                                onClick={() => {
                                    setIsClicked((oldState) => !oldState);
                                }}
                            >
                                <PlayArrowIcon
                                    className={`${
                                        isClicked ? '-rotate-90' : ''
                                    }`}
                                    style={{
                                        width: '15px',
                                        height: '25px',
                                    }}
                                />
                                Teacher Notes
                            </div>
                            <div
                                className={`${
                                    isClicked
                                        ? 'block text-sm opacity-100'
                                        : 'hidden opacity-0 '
                                } transition-opacity ease-in-out delay-100 duration-200`}
                            >
                                <p className="text-base leading-7 font-normal text-red-upschool transition-opacity  duration-75 ">
                                    {chapter.teachers_note}
                                </p>
                            </div>
                        </div>
                        <div className="h-0 w-full border-[0.05px] border-gray-200 mt-3"></div>
                    </div>
                )}

                {/* Chapter description */}
                <div
                    className="text-base leading-7 text-theme-color"
                    dangerouslySetInnerHTML={{ __html: chapter.text }}
                >
                    {/* {chapter.text} */}
                </div>
                {/* <button className="max-w-fit bg-red-custom text-white px-3 py-1 text-center">
                    Download
                </button> */}
            </div>
            <div className="hidden md:flex flex-col gap-4 mb-4">
                <button
                    className={`${
                        chapter.downloadable
                            ? 'flex gap-4 items-center justify-center '
                            : 'flex gap-4 items-center justify-center'
                    } w-fit h-fit bg-red-custom text-white px-7  py-3 text-center`}
                    onClick={() => {
                        handleDownload(chapter.lesson_section_contents);
                    }}
                >
                    Download Lesson Plan
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
                        chapter.canva_template
                            ? 'flex gap-4 items-center justify-center'
                            : 'hidden'
                    } max-w-fit h-fit bg-theme-color text-white px-7  py-3 text-center cursor-pointer`}
                    href={chapter.canva_template}
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
                        chapter.canva_template
                            ? 'flex gap-4 items-center justify-center'
                            : 'hidden'
                    } max-w-fit h-fit bg-red-custom text-white px-7  py-3 text-center`}
                    onClick={() => {
                        //copy the current url to clipboard
                        navigator.clipboard.writeText(window.location.href);
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
    );
};

export default ChapterText;
