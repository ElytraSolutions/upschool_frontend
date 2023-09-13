import BoardBox from '../../../parts/UserDashboard/Boxes/BoardBox';
import Enrolled from '../../../assets/Enrolled.png';
import Active from '../../../assets/Active.png';
import Completed from '../../../assets/Completed.png';
import Book from '../../../assets/Book.png';

import book3 from '../../../assets/Books/book3.png';
import book4 from '../../../assets/Books/book4.png';
import book5 from '../../../assets/Books/book5.png';

import CourseBox from '../../../parts/UserDashboard/Boxes/CourseBox';

const courses = [
    {
        id: 1,
        name: 'Build a Library & Change the world',
        completedLessons: 20,
        totalLessons: 40,
        image: `${book5}`,
        status: 'In review',
    },
    {
        id: 2,
        name: 'Write a Book to Change the World',
        completedLessons: 30,
        totalLessons: 50,
        image: `${book4}`,
        status: 'Published',
    },
    {
        id: 3,
        name: 'The Mission',
        completedLessons: 10,
        totalLessons: 70,
        image: `${book3}`,
        status: 'Book Not Print Ready',
    },
];

function DashboardContent() {
    return (
        <>
            <div>
                <div className="flex flex-col gap-4 w-full text-theme-color">
                    {/* First row : Enrolled, Active and Completed courses and Books uploaded by User */}
                    <div className="flex flex-row w-full gap-3 justify-start">
                        {/* TODO fetch number for each BoardBox as of User from backend */}
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
                    <div className="flex flex-col items-start w-full">
                        <h1 className="text-2xl font-bold">
                            Continue Learning
                        </h1>
                        <div className="flex flex-row gap-2 w-full ">
                            {courses.map((course, index) => (
                                <CourseBox key={index} detail={course} />
                            ))}
                        </div>
                    </div>

                    {/* Third row : Books uploaded by user */}
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default DashboardContent;
