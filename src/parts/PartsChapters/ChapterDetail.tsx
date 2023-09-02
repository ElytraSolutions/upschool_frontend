import { NavLink, useParams } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import useScreenWidth from '../../hooks/useScreenWidth';

type ChapterDetailProps = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: any;
};

export default function ChapterDetail({
    isSidebarOpen,
    setIsSidebarOpen,
}: ChapterDetailProps) {
    const { slug, learn } = useParams();
    const { isBigScreen } = useScreenWidth();
    const [isClicked, setIsClicked] = useState(false);
    return (
        <>
            <div className="flex flex-col overflow-auto pb-5 h-[90vh]">
                {/* ChapterDetail Header */}
                <div className="flex w-full bg-blue-900  mb-5">
                    <div className="flex flex-1 flex-row justify-between items-center p-2 text-white text-sm h-14">
                        <div className="flex felx-row justify-between items-center">
                            {/* Circle sidebar open and close option */}
                            <div
                                className={`${
                                    isSidebarOpen ? 'absolute -left-6' : ''
                                }  h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 rounded-full bg-yellow-400 flex flex-row items-center justify-center text-white `}
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
                                    to={`/course/${slug}`}
                                    className="flex flex-row items-center justify-start gap-0 md:gap-1 tex-xs md:text-base"
                                >
                                    Goto Course Home{' '}
                                    <span>
                                        <HomeIcon />
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                        {isBigScreen && <div>{learn}</div>}
                        <button className=" bg-pink-700 text-center px-0.5 md:px-4  py-0.5 md:py-2 rounded-md tex-xs md:text-base ">
                            Compelete Lesson
                        </button>
                    </div>
                </div>
                {/* ChapterDetail Chapters Section*/}
                <div className="flex-1 divide-y divide-slate-400 ml-6">
                    {/* Section I */}
                    <div className="flex flex-col m-4 justify-start gap-2">
                        <div>
                            {/* TODO Data to be fetched from backend and mange its logic */}
                            <div className="grid grid-cols-2 mt-12">
                                <div className="col-span-1 flex flex-col gap-6">
                                    {/* Title */}
                                    <div className="text-2xl font-semibold text-theme-color">
                                        Introduction with Gavin
                                    </div>
                                    {/* teacher's note */}
                                    <div className="flex flex-col gap-3">
                                        <div
                                            className={` text-base font-semibold w-full ml-2 flex flex-col gap-6 ${
                                                isClicked
                                                    ? 'text-red-600'
                                                    : 'text-theme-color'
                                            }`}
                                        >
                                            <div
                                                className="flex flex-row items-center justify-start hover:cursor-pointer max-w-fit"
                                                onClick={() => {
                                                    setIsClicked(
                                                        (oldState) => !oldState,
                                                    );
                                                }}
                                            >
                                                <PlayArrowIcon
                                                    className={`${
                                                        isClicked
                                                            ? '-rotate-90'
                                                            : ''
                                                    }`}
                                                    style={{
                                                        width: '15px',
                                                        height: '25px',
                                                    }}
                                                />
                                                Teacher's node
                                            </div>
                                            <div
                                                className={`${
                                                    isClicked
                                                        ? 'block text-sm'
                                                        : 'hidden'
                                                } transition duration-150 ease-in-out`}
                                            >
                                                <p>
                                                    Watch the video with John
                                                    and Gavin on the wandering
                                                    albatross. In this lesson,
                                                    we explore the rich
                                                    biodiversity of birds in the
                                                    Great Southern Ocean,
                                                    highlighting their unique
                                                    adaptations for survival. We
                                                    focus on the wandering
                                                    albatross, known for its
                                                    incredible flying abilities,
                                                    and draw connections between
                                                    their physiological features
                                                    and sustainable living. By
                                                    studying these remarkable
                                                    creatures, we can gain
                                                    valuable insights into
                                                    innovative ways to adapt and
                                                    thrive in challenging
                                                    environments.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="h-0 w-full border border-gray-400"></div>
                                    </div>

                                    {/* Chapter description */}
                                    <div className="text-sm text-theme-color">
                                        <p>
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit.
                                            Perspiciatis asperiores nulla in
                                            excepturi quo explicabo error
                                            laborum officia odit eveniet, quam
                                            maxime pariatur. Commodi itaque
                                            numquam minima sint nihil officiis!
                                        </p>
                                        <br />
                                        <p>
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit.
                                            Quibusdam animi, temporibus quam
                                            inventore ipsam earum blanditiis.
                                            Nulla ipsa perferendis impedit nemo
                                            totam quisquam voluptate consectetur
                                            quibusdam exercitationem eaque! Est,
                                            mollitia!
                                        </p>
                                    </div>
                                </div>
                                {/* TODO second column: Data to be fetched and manage logic */}
                                <div className="col-span-1"></div>
                            </div>
                        </div>
                        <button className="bg-pink-700 text-center px-3 py-1 max-w-fit rounded-md">
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
