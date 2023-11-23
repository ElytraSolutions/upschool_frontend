import BoardBox from '../../../parts/UserDashboard/Boxes/BoardBox';
import CourseBox from '../../../parts/UserDashboard/Boxes/CourseBox';
import BookBox from '../../../parts/UserDashboard/Boxes/BookBox';
import useScreenWidthAndHeight from '../../../hooks/useScreenWidthAndHeight';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../config/Axios';
import resolveImgURL from '../../../utlis/resolveImgURL';
import axios from 'axios';

// TODO fetch data from backend according to the need (3 courses and books respectively)
// const courses = [
//     {
//         id: 1,
//         name: 'Build a Library & Change the world',
//         completedLessons: 20,
//         totalLessons: 40,
//         image: resolveImgURL('/images/Books/book5.png'),
//         url: '/dashboard',
//         status: 'In review',
//     },
//     {
//         id: 2,
//         name: 'Write a Book to Change the World',
//         completedLessons: 30,
//         totalLessons: 50,
//         image: resolveImgURL('/images/Books/book4.png'),
//         url: '/dashboard',
//         status: 'Published',
//     },
//     {
//         id: 3,
//         name: 'The Mission',
//         completedLessons: 10,
//         totalLessons: 70,
//         image: resolveImgURL('/images/Books/book3.png'),
//         url: '/dashboard',
//         status: 'Book Not Print Ready',
//     },
// ];

interface Course {
    id: string;
    slug: string;
    name: string;
}

interface CourseEnrollment {
    enrolled: Course[];
    completed: Course[];
}

type DashboardContentProps = {
    handleOptionClick: (option: string) => void;
};

function DashboardContent({ handleOptionClick }: DashboardContentProps) {
    // const { isSmallScreen } = useScreenWidthAndHeight();
    const [userCourseData, setUserCourseData] =
        useState<CourseEnrollment | null>(null);
    const [userBooksData, setUserBooksData] = useState<any[]>([]);
    useEffect(() => {
        (async () => {
            const resp = await axiosInstance.get('/data/user/courses');
            setUserCourseData(resp.data.data);
            const bookResp = await axiosInstance.get('/data/user/books');
            setUserBooksData(bookResp.data.data);
        })();
    }, []);
    console.log('userCourseData', userCourseData);
    return (
        <>
            <div className="h-full overflow-auto">
                <div className="p-2 md:py-4 md:px-4 xlarge:px-6 xxlarge:px-8 w-full">
                    <div className="flex flex-col gap-8 w-full text-theme-color ">
                        {/* First row : Enrolled, Active and Completed courses and Books uploaded by User */}
                        <div className="flex flex-col xs:grid xs:grid-cols-2 sm:flex sm:flex-row w-full gap-3 justify-start">
                            {/* TODO fetch number for each BoardBox as of particular User from backend */}
                            <BoardBox
                                icon={resolveImgURL(
                                    '/images/Dashboard/Enrolled.png',
                                )}
                                text="Enrolled Courses"
                                number={userCourseData?.enrolled?.length || 0}
                            />
                            {/* <BoardBox
                            icon={resolveImgURL('/images/Dashboard/Active.png')}
                            text="Active Courses"
                            number={userCourseData?.enrolled?.length || 0}
                        /> */}
                            <BoardBox
                                icon={resolveImgURL(
                                    '/images/Dashboard/Completed.png',
                                )}
                                text="Completed Courses"
                                number={userCourseData?.completed?.length || 0}
                            />
                            <BoardBox
                                icon={resolveImgURL(
                                    '/images/Dashboard/Book.png',
                                )}
                                text="Books Uploaded"
                                number={7}
                            />
                        </div>
                        {/* Second row : Active courses section */}
                        <div className="flex flex-col items-start w-full gap-3 max-w-[80rem]">
                            <h1 className=" text-base md:text-lg xl:text-xl 2xl:text-2xl font-bold font-lexend">
                                Continue Learning
                            </h1>

                            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 w-full ">
                                {userCourseData?.enrolled
                                    .slice(0, 3)
                                    .map((course, index) => (
                                        <CourseBox
                                            key={index}
                                            detail={course}
                                        />
                                    ))}
                            </div>

                            <div
                                className="rounded-lg block bg-theme-color text-white w-fit h-fit p-2 text-center text-sm hover:cursor-pointer "
                                onClick={() => {
                                    handleOptionClick('My Courses');
                                }}
                            >
                                See more {'>>'}
                            </div>
                        </div>

                        {/* Third row : Books uploaded by user */}
                        <div className="flex flex-col items-start w-full gap-3 max-w-[80rem]">
                            <h1 className=" text-base md:text-lg xl:text-xl 2xl:text-2xl font-bold font-lexend">
                                Your Books
                            </h1>

                            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 w-full">
                                {userBooksData
                                    ?.slice(0, 3)
                                    .map((course, index) => (
                                        <BookBox key={index} detail={course} />
                                    ))}
                            </div>

                            <div
                                className="rounded-lg block bg-theme-color text-white w-fit h-fit p-2 text-center text-sm hover:cursor-pointer"
                                onClick={() => {
                                    handleOptionClick('My Books');
                                }}
                            >
                                See more {'>>'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardContent;
