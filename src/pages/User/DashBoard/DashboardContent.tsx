import BoardBox from '../../../parts/UserDashboard/Boxes/BoardBox';
import CourseBox from '../../../parts/UserDashboard/Boxes/CourseBox';
import BookBox from '../../../parts/UserDashboard/Boxes/BookBox';
import useScreenWidthAndHeight from '../../../hooks/useScreenWidthAndHeight';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../config/Axios';

// TODO fetch data from backend according to the need (3 courses and books respectively)
const courses = [
    {
        id: 1,
        name: 'Build a Library & Change the world',
        completedLessons: 20,
        totalLessons: 40,
        image: 'images/Books/book5.png',
        url: '/dashboard',
        status: 'In review',
    },
    {
        id: 2,
        name: 'Write a Book to Change the World',
        completedLessons: 30,
        totalLessons: 50,
        image: 'images/Books/book4.png',
        url: '/dashboard',
        status: 'Published',
    },
    {
        id: 3,
        name: 'The Mission',
        completedLessons: 10,
        totalLessons: 70,
        image: 'images/Books/book3.png',
        url: '/dashboard',
        status: 'Book Not Print Ready',
    },
];

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
    const { isSmallScreen } = useScreenWidthAndHeight();
    const [userCourseData, setUserCourseData] =
        useState<CourseEnrollment | null>(null);
    useEffect(() => {
        (async () => {
            const resp = await axiosInstance.get('/data/user/courses');
            setUserCourseData(resp.data.data);
        })();
    }, []);
    return (
        <>
            <div className="h-full overflow-auto">
                <div className="flex flex-col gap-8 w-full text-theme-color">
                    {/* First row : Enrolled, Active and Completed courses and Books uploaded by User */}
                    <div className="flex flex-col xs:grid xs:grid-cols-2 sm:flex sm:flex-row w-full gap-3 justify-start">
                        {/* TODO fetch number for each BoardBox as of particular User from backend */}
                        <BoardBox
                            icon="images/Dashboard/Enrolled.png"
                            text="Enrolled Courses"
                            number={userCourseData?.enrolled?.length || 0}
                        />
                        <BoardBox
                            icon="images/Dashboard/Active.png"
                            text="Active Courses"
                            number={userCourseData?.enrolled?.length || 0}
                        />
                        <BoardBox
                            icon="images/Dashboard/Completed.png"
                            text="Completed Courses"
                            number={userCourseData?.completed?.length || 0}
                        />
                        <BoardBox
                            icon="images/Dashboard/Book.png"
                            text="Books Uploaded"
                            number={7}
                        />
                    </div>
                    {/* Second row : Active courses section */}
                    <div className="flex flex-col items-start w-full gap-3">
                        <h1 className=" text-base md:text-lg xl:text-xl 2xl:text-2xl font-bold font-lexend">
                            Continue Learning
                        </h1>
                        {isSmallScreen ? (
                            <div className="flex flex-col items-center gap-3">
                                <CourseBox
                                    key={courses[0].id}
                                    detail={courses[0]}
                                />
                                <CourseBox
                                    key={courses[1].id}
                                    detail={courses[1]}
                                />
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 lg:gap-4 w-full ">
                                {courses.map((course, index) => (
                                    <CourseBox key={index} detail={course} />
                                ))}
                            </div>
                        )}

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
                    <div className="flex flex-col items-start w-full gap-3">
                        <h1 className=" text-base md:text-lg xl:text-xl 2xl:text-2xl font-bold font-lexend">
                            Your Books
                        </h1>
                        {isSmallScreen ? (
                            <div className="flex flex-col items-center gap-3">
                                <BookBox
                                    key={courses[0].id}
                                    detail={courses[0]}
                                />
                                <BookBox
                                    key={courses[1].id}
                                    detail={courses[1]}
                                />
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 lg:gap-4 w-full ">
                                {courses.map((course, index) => (
                                    <BookBox key={index} detail={course} />
                                ))}
                            </div>
                        )}
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
        </>
    );
}

export default DashboardContent;
