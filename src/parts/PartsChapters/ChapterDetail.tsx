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
    const [isClicked, setIsClicked] = useState(false); //teacher's note
    return (
        <>
            <div className="flex h-[90vh] flex-col overflow-auto pb-5">
                {/* ChapterDetail Header */}
                <div className="mb-5 flex w-full  bg-blue-900">
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
                                    to={`/course/${slug}`}
                                    className="text-xs flex flex-row items-center justify-start gap-0 md:gap-1 md:text-base"
                                >
                                    Goto Course Home{' '}
                                    <span>
                                        <HomeIcon />
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                        {isBigScreen && <div>{learn}</div>}
                        <button className=" text-xs rounded-md bg-pink-700 p-0.5  text-center md:px-4 md:py-2 md:text-base ">
                            Compelete Lesson
                        </button>
                    </div>
                </div>
                {/* ChapterDetail Chapters Section*/}
                <div className="ml-6 flex-1 divide-y divide-slate-400">
                    {/* Section I */}
                    <div className="m-4 flex flex-col justify-start gap-2">
                        <div>
                            {/* TODO Data to be fetched from backend and mange its logic */}
                            <div className="mt-12 grid grid-cols-2">
                                <div className="col-span-1 flex flex-col gap-6">
                                    {/* Title */}
                                    <div className="text-2xl font-semibold text-theme-color">
                                        Introduction with Gavin
                                    </div>
                                    {/* teacher's note */}
                                    <div className="flex flex-col gap-3">
                                        <div
                                            className={` ml-2 flex w-full flex-col gap-6 text-base font-semibold ${
                                                isClicked
                                                    ? 'text-red-600'
                                                    : 'text-theme-color'
                                            }`}
                                        >
                                            <div
                                                className="flex max-w-fit flex-row items-center justify-start hover:cursor-pointer"
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
                        <button className="max-w-fit rounded-md bg-pink-700 px-3 py-1 text-center">
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
