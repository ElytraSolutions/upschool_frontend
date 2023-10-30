import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import resolveImgURL from '../../utlis/resolveImgURL';

const Goals = ({ title, goalImage, goalGraphic, index, youtube_url }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById('form-main');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`${index % 2 == 1 ? 'bg-white' : 'bg-[#f4f4f4]'}`}>
            <div className="flex md:flex-row md:justify-between flex-col gap-3 max-w-[1100px] ml-auto mr-auto pt-[4rem] pb-[4rem] min-h-[450px]">
                <div className="grow ml-[1rem] mr-[1rem]">
                    <img src={resolveImgURL(goalImage)} />
                    <h1 className="text-theme-color lg:text-[1.8rem] text-[1.6rem] font-semibold font-lexend mt-3">
                        Goal {index}: {title}
                    </h1>

                    <div
                        className={` ml-2 flex w-full flex-col gap-6 text-base font-semibold mt-5 ${
                            isClicked ? 'text-red-600' : 'text-theme-color'
                        }`}
                    >
                        <div
                            className="flex max-w-fit flex-row items-center justify-start hover:cursor-pointer"
                            onClick={() => {
                                setIsClicked((oldState) => !oldState);
                            }}
                        >
                            <PlayArrowIcon
                                className={`${
                                    isClicked ? '-rotate-90' : ''
                                }  mr-[8px]`}
                                style={{
                                    width: '15px',
                                    height: '25px',
                                }}
                            />
                            <p className="font-semibold font-lexend">
                                See Graphic
                            </p>
                        </div>
                        <div
                            className={`${
                                isClicked
                                    ? 'block text-sm opacity-100'
                                    : 'hidden opacity-0 '
                            } transition-opacity ease-in-out delay-100 duration-200`}
                        >
                            {/* <p className="text-base leading-7 font-normal text-red-400 transition-opacity  duration-75 ">
                            This is the content
                        </p> */}
                            <img src={resolveImgURL(goalGraphic)} />
                        </div>
                    </div>
                    <div className="h-0 border-[0.5px] w-full  border-theme-color opacity-40 mt-2"></div>
                    <div
                        className="bg-white border-[0.5px] border-theme-color text-center w-fit py-[10px] px-[30px] rounded-full mt-4 
                    hover:origin-center cursor-pointer hover:scale-90  transition-all"
                        onClick={handleScroll}
                    >
                        Make a Dear World Submission
                    </div>
                </div>
                <div className="mr-[1rem] ml-[1rem]">
                    <iframe
                        width="100%"
                        className="lg:h-[280px] lg:w-[500px] md:h-[230px] md:w-[400px] sm:h-[400px] h-[60vw]"
                        src={youtube_url}
                        title="UN Sustainable Development Goals - Overview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Goals;
