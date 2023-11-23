import CourseEnrol from '../Cards/Course/CourseEnrol';
import useUser from '../../hooks/useUser';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import resolveImgURL from '../../utlis/resolveImgURL';

function CourseStaticTop({ courseInfo }) {
    const { user } = useUser();
    const hextoDecimal = (hex: any) => parseInt(hex, 16);
    return (
        <>
            <div className=" flex items-center justify-center flex-col">
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
                            <div className="absolute top-0 left-0 w-full h-full bg-theme-color opacity-60 z-0"></div>
                        </div>
                        <div className="absolute flex w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                            <div className="grid tab:grid-cols-5 grid-flow-row gap-12">
                                <div className="tab:col-start-1 tab:col-span-3 flex">
                                    <div className="grid h-fit justify-start font-poppins max-w-[490px] md:px-0 px-4">
                                        <div className="mb-[20px] xs:text-[32px] text-[26px] h-[37px]">
                                            <span
                                                style={{
                                                    color: courseInfo.theme,
                                                }}
                                            >
                                                100% Free{' '}
                                            </span>
                                            <span className="text-white">
                                                Program
                                            </span>
                                        </div>
                                        <div></div>
                                        <div
                                            className={`xs:text-[53px] text-[47px] font-extrabold`}
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
                                                            className={`rounded-sm font-thin ${
                                                                hextoDecimal(
                                                                    courseInfo.theme.slice(
                                                                        1,
                                                                    ),
                                                                ) >
                                                                hextoDecimal(
                                                                    '808080',
                                                                )
                                                                    ? 'text-black'
                                                                    : 'text-white'
                                                            } text-[18px] px-11 py-2`}
                                                            style={{
                                                                backgroundColor:
                                                                    courseInfo.theme,
                                                            }}
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
