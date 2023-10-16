import { useState } from 'react';

import book3 from '../../../assets/Books/book3.png';
import book4 from '../../../assets/Books/book4.png';
import book5 from '../../../assets/Books/book5.png';
import CourseBox from '../../../parts/UserDashboard/Boxes/CourseBox';

// TODO fetch data from backend according to the need
const courses = [
    {
        id: 1,
        name: 'Build a Library & Change the world',
        completedLessons: 20,
        totalLessons: 40,
        image: `${book5}`,
        url: '/dashboard',
        status: 'In review',
    },
    {
        id: 2,
        name: 'Write a Book to Change the World',
        completedLessons: 30,
        totalLessons: 50,
        image: `${book4}`,
        url: '/dashboard',
        status: 'Published',
    },
    {
        id: 3,
        name: 'The Mission',
        completedLessons: 10,
        totalLessons: 70,
        image: `${book3}`,
        url: '/dashboard',
        status: 'Book Not Print Ready',
    },
    {
        id: 2,
        name: 'Write a Book to Change the World',
        completedLessons: 40,
        totalLessons: 50,
        image: `${book4}`,
        url: '/dashboard',
        status: 'Published',
    },
];
function MyCourses() {
    const [selectedOption, setSelectedOption] =
        useState<string>('Active Courses');
    return (
        <div className="h-full overflow-auto">
            <div className="sm:p-4 w-full ">
                <div className="flex flex-col gap-10 w-full">
                    <div className=" grid grid-cols-3 justify-items-center xs:flex xs:flex-row xs:justify-center md:justify-start text-sm sm:text-base lg:text-lg w-full gap-0 xs:gap-2  sm:gap-4">
                        {/* Active courses option */}
                        <div className="flex flex-col w-fit gap-2">
                            <div
                                className={`${
                                    selectedOption === 'Active Courses'
                                        ? 'text-theme-color'
                                        : 'text-gray-400'
                                } hover:cursor-pointer w-full h-full text-center px-1 sm:px-4 md:px-6 lg:px-10 font-lexend`}
                                onClick={() =>
                                    setSelectedOption('Active Courses')
                                }
                            >
                                {/* TODO fetch number form backend */}
                                Active Courses (2)
                            </div>
                            <div
                                className={`w-full h-1.5 ${
                                    selectedOption === 'Active Courses'
                                        ? 'bg-theme-color'
                                        : 'bg-gray-400'
                                }`}
                            ></div>
                        </div>
                        {/* Enrolled courses option */}
                        <div className="flex flex-col w-fit gap-2">
                            <div
                                className={`${
                                    selectedOption === 'Enrolled Courses'
                                        ? 'text-theme-color'
                                        : 'text-gray-400'
                                } hover:cursor-pointer text-center w-full h-full px-1 sm:px-4 md:px-6 lg:px-10 font-lexend`}
                                onClick={() =>
                                    setSelectedOption('Enrolled Courses')
                                }
                            >
                                {/* TODO fetch number form backend */}
                                Enrolled Courses (3)
                            </div>
                            <div
                                className={`w-full h-1.5 ${
                                    selectedOption === 'Enrolled Courses'
                                        ? 'bg-theme-color'
                                        : 'bg-gray-400'
                                }`}
                            ></div>
                        </div>
                        {/* Completed courses option */}
                        <div className="flex flex-col w-fit gap-2">
                            <div
                                className={`${
                                    selectedOption === 'Completed Courses'
                                        ? 'text-theme-color'
                                        : 'text-gray-400'
                                } hover:cursor-pointer text-center w-full h-full px-1 sm:px-4 md:px-6 lg:px-10 font-lexend`}
                                onClick={() =>
                                    setSelectedOption('Completed Courses')
                                }
                            >
                                {/* TODO fetch number form backend */}
                                Completed Courses (1)
                            </div>
                            <div
                                className={`w-full h-1.5 ${
                                    selectedOption === 'Completed Courses'
                                        ? 'bg-theme-color'
                                        : 'bg-gray-400'
                                }`}
                            ></div>
                        </div>
                    </div>
                    {/* Detail section */}
                    <div className="w-full">
                        {/* Active courses section */}
                        {selectedOption === 'Active Courses' && (
                            <div className="grid xm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 md:gap-2 lg:gap-4 w-full ">
                                {/* TODO fetch active courses data from backend and use it */}
                                {courses.map((course, index) => (
                                    <CourseBox key={index} detail={course} />
                                ))}
                            </div>
                        )}
                        {/* Enrolled courses section */}
                        {selectedOption === 'Enrolled Courses' && (
                            <div className="grid xm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 md:gap-2 lg:gap-4 w-full ">
                                {/* TODO fetch enrolled courses data from backend and use it */}
                                {courses.map((course, index) => (
                                    <CourseBox key={index} detail={course} />
                                ))}
                            </div>
                        )}
                        {/* Completed courses section */}
                        {selectedOption === 'Completed Courses' && (
                            <div className="grid xm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 md:gap-2 lg:gap-4 w-full">
                                {/* TODO fetch completed courses data from backend and use it */}
                                {courses.map((course, index) => (
                                    <CourseBox key={index} detail={course} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCourses;
