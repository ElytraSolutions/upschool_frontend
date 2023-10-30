import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Faq = ({ question, answer, isTerm }) => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div>
            <div className="flex flex-col gap-3">
                <div
                    className={` ml-2 flex w-full flex-col gap-6 text-base font-semibold ${
                        isClicked && isTerm
                            ? 'text-red-600'
                            : 'text-theme-color'
                    }`}
                >
                    <div
                        className="flex max-w-fit flex-row items-center justify-start hover:cursor-pointer"
                        onClick={() => {
                            setIsClicked((oldState) => !oldState);
                        }}
                    >
                        <PlayArrowIcon
                            className={`${isClicked ? '-rotate-90' : ''} ${
                                isTerm ? 'text-red-600' : 'text-theme-color'
                            } mr-[10px]`}
                            style={{
                                width: '15px',
                                height: '25px',
                            }}
                        />
                        <h2
                            className={` ${
                                isTerm ? 'text-red-600' : 'text-theme-color'
                            } text-[20px] py-[15px]`}
                        >
                            {question}
                        </h2>
                    </div>
                    <div
                        className={`${
                            isClicked
                                ? 'block text-sm opacity-100'
                                : 'hidden opacity-0 '
                        } transition-opacity ease-in-out delay-100 duration-200`}
                    >
                        <p
                            className={`text-base leading-7 font-normal text-font-color
                             transition-opacity  duration-75`}
                        >
                            {answer}
                        </p>
                    </div>
                </div>
                <div className="h-0 w-full border border-gray-300 "></div>
            </div>
        </div>
    );
};

export default Faq;
