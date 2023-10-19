import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from 'react';

const ChapterText = ({ chapter }) => {
    const [isClicked, setIsClicked] = useState(false); //teacher's note
    return (
        <>
            <div className="ChapterText flex flex-col gap-6">
                {/* Title */}
                <div className="text-4xl font-semibold text-theme-color">
                    {chapter.name}
                </div>
                {/* teacher's note */}
                <div className="flex flex-col gap-3">
                    <div
                        className={` ml-2 flex w-full flex-col gap-6 text-base font-bold ${
                            isClicked ? 'text-red-upschool' : 'text-theme-color'
                        }`}
                    >
                        <div
                            className="flex max-w-fit flex-row items-center justify-start hover:cursor-pointer"
                            onClick={() => {
                                setIsClicked((oldState) => !oldState);
                            }}
                        >
                            <PlayArrowIcon
                                className={`${isClicked ? '-rotate-90' : ''}`}
                                style={{
                                    width: '15px',
                                    height: '25px',
                                }}
                            />
                            Teacher's note
                        </div>
                        <div
                            className={`${
                                isClicked
                                    ? 'block text-sm opacity-100'
                                    : 'hidden opacity-0 '
                            } transition-opacity ease-in-out delay-100 duration-200`}
                        >
                            <p className="text-base leading-7 font-normal text-red-custom transition-opacity  duration-75 ">
                                {chapter.teacherNotes}
                            </p>
                        </div>
                    </div>
                    <div className="h-0 w-full border border-gray-400"></div>
                </div>

                {/* Chapter description */}
                <div className="text-base leading-7 font-no text-theme-color">
                    {chapter.content}
                </div>
                <button className="max-w-fit bg-red-custom text-white px-3 py-1 text-center">
                    Download
                </button>
            </div>
        </>
    );
};

export default ChapterText;
