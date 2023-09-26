import BoardBox from '../../../parts/UserDashboard/Boxes/BoardBox';
import Enrolled from '../../../assets/Enrolled.png';
import Active from '../../../assets/Active.png';
import Completed from '../../../assets/Completed.png';
import Book from '../../../assets/Book.png';

import book3 from '../../../assets/Books/book3.png';
import book4 from '../../../assets/Books/book4.png';
import book5 from '../../../assets/Books/book5.png';

import CourseBox from '../../../parts/UserDashboard/Boxes/CourseBox';
import BookBox from '../../../parts/UserDashboard/Boxes/BookBox';

import useScreenWidthAndHeight from '../../../hooks/useScreenWidthAndHeight';

// TODO fetch data from backend according to the need (3 courses and books respectively)
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
];

type DashboardContentProps = {
    handleOptionClick: (option: string) => void;
};

function DashboardContent({ handleOptionClick }: DashboardContentProps) {
    const { isSmallScreen } = useScreenWidthAndHeight();
    return (
        <>
            <div className="h-full overflow-auto">
                <div className="flex flex-col gap-8 w-full text-theme-color">
                    {/* First row : Enrolled, Active and Completed courses and Books uploaded by User */}
                    <div className="flex flex-col xs:grid xs:grid-cols-2 sm:flex sm:flex-row w-full gap-3 justify-start">
                        {/* TODO fetch number for each BoardBox as of particular User from backend */}
                        <BoardBox
                            icon={Enrolled}
                            text="Enrolled Courses"
                            number={1}
                        />
                        <BoardBox
                            icon={Active}
                            text="Active Courses"
                            number={5}
                        />
                        <BoardBox
                            icon={Completed}
                            text="Completed Courses"
                            number={3}
                        />
                        <BoardBox
                            icon={Book}
                            text="Books Uploaded"
                            number={7}
                        />
                    </div>
                    {/* Second row : Active courses section */}
                    <div className="flex flex-col items-start w-full gap-3">
                        <h1 className="text-2xl font-bold">
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
                            className="rounded-lg block bg-theme-color text-white w-fit h-fit p-2 text-center hover:cursor-pointer"
                            onClick={() => {
                                handleOptionClick('My Courses');
                            }}
                        >
                            See more {'>>'}
                        </div>
                    </div>

                    {/* Third row : Books uploaded by user */}
                    <div className="flex flex-col items-start w-full gap-3">
                        <h1 className="text-2xl font-bold">Your Books</h1>
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
                            className="rounded-lg block bg-theme-color text-white w-fit h-fit p-2 text-center hover:cursor-pointer"
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
