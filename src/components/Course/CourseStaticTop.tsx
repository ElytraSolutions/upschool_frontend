import CourseEnrol from '../Cards/Course/CourseEnrol';
import useUser from '../../hooks/useUser';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import resolveImgURL from '../../utlis/resolveImgURL';
import { useState } from 'react';

function CourseStaticTop({ courseInfo }) {
    const { user } = useUser();
    const [registerHover, setRegisterHover] = useState(false);
    // const hextoDecimal = (hex: any) => parseInt(hex, 16);
    // ${
    //                                                             hextoDecimal(
    //                                                                 courseInfo.theme.slice(
    //                                                                     1,
    //                                                                 ),
    //                                                             ) >
    //                                                             hextoDecimal(
    //                                                                 '808080',
    //                                                             )
    //                                                                 ? 'text-black'
    //                                                                 : 'text-white'
    //                                                         }
    const handleHover = () => {
        setRegisterHover((oldstate) => !oldstate);
    };

    return (
        <>
            <div className=" flex items-center justify-center flex-col mb-[2.5rem]">
                <div className="w-full relative h-[650px]">
                    <div className="relative flex h-[650px]">
                        <div className="w-full h-full relative video overflow-hidden">
                            <img
                                src={
                                    resolveImgURL(courseInfo.image) ||
                                    resolveImgURL(
                                        './images/Course/pokhara_lake.jpg',
                                    )
                                }
                                alt="Cover Image"
                                className="w-full h-[650px] object-cover"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-theme-color opacity-80 z-0"></div>
                        </div>
                        <div className="absolute flex w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                            <div className="grid tab:grid-cols-5 grid-flow-row gap-12 px-4">
                                <div className="tab:col-start-1 tab:col-span-3 flex">
                                    <div className="grid h-fit justify-start font-poppins max-w-[490px] md:px-0 px-4">
                                        <div className="mb-[20px] xs:text-[32px] text-[26px] h-[37px] flex ">
                                            <span
                                                style={{
                                                    color: courseInfo.theme,
                                                }}
                                            >
                                                100% Free{' '}
                                                <svg
                                                    className="-mt-3  w-[10rem]"
                                                    height="32"
                                                    viewBox="0 0 793 46"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        className="path stroke-[15] "
                                                        d="M6 30.7841C21.7883 30.7841 37.2527 30.1065 52.962 28.6204C62.4639 27.7216 72.0356 27.5841 81.5326 26.6043C100.558 24.6413 119.415 21.3537 138.477 19.7198C161.885 17.7134 185.439 17.0059 208.896 15.5399C223.888 14.6029 238.838 12.415 253.841 11.3109C265.953 10.4196 278.022 10.8234 290.133 10.229C308.824 9.31165 327.611 7.50908 346.29 6.93432C371.774 6.1502 397.315 7.36705 422.806 6.83597C462.957 5.9995 503.108 6 543.285 6C578.051 6 612.837 7.70037 647.536 9.98317C674.214 11.7383 701.011 13.7916 727.396 18.5888C730.85 19.2168 733.929 20.8802 737.083 22.3261C741.49 24.346 746.53 24.5308 751.147 25.9158C755.883 27.3366 759.497 28.7439 763.736 31.1284C765.431 32.0818 767.827 31.8197 769.686 32.5544C772.002 33.4701 774.061 34.7369 776.472 35.4066C779.061 36.1258 786.701 42.8755 786.701 37.8653"
                                                        stroke={
                                                            courseInfo.theme
                                                        }
                                                        // stroke-width="8"
                                                        stroke-linecap="round"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="text-white">
                                                Program
                                            </span>
                                        </div>
                                        <div></div>
                                        <div
                                            className={`xs:text-[53px] text-[47px] font-extrabold font-kumbh`}
                                            style={{
                                                color: courseInfo.theme,
                                            }}
                                        >
                                            <h1>{courseInfo?.name}</h1>
                                        </div>
                                        <div className="xs:text-[20px] text-[14px] mb-[16px] text-white">
                                            {courseInfo?.intro}
                                        </div>
                                        <div
                                            className={`text-sm`}
                                            style={{
                                                color: courseInfo.theme,
                                            }}
                                        >
                                            <p>{courseInfo?.starredText}</p>
                                        </div>
                                        {user === null && (
                                            <>
                                                <div className="flex my-2">
                                                    <Link to="/register">
                                                        <button
                                                            className={`rounded-sm font-thin text-white text-[18px] px-11 py-2 hover:scale-[0.95] transition duration-400`}
                                                            style={{
                                                                backgroundColor:
                                                                    registerHover
                                                                        ? '#ec96b3'
                                                                        : courseInfo.theme,
                                                            }}
                                                            onMouseEnter={
                                                                handleHover
                                                            }
                                                            onMouseLeave={
                                                                handleHover
                                                            }
                                                        >
                                                            REGISTER
                                                            <span>
                                                                <KeyboardArrowRightIcon />
                                                            </span>
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="text-white text-sm font-semibold">
                                                    Register for a FREE Upschool
                                                    account to enrol in this
                                                    course.
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="tab:col-start-4 tab:col-span-2 tab:block hidden justify-center items-center">
                                    <CourseEnrol
                                        thumbnail={
                                            courseInfo.thumbnail ||
                                            resolveImgURL(
                                                './images/Course/courseEnrol.png',
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseStaticTop;
