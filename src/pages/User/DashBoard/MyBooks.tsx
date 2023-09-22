import { useState } from 'react';

import book3 from '../../../assets/Books/book3.png';
import book4 from '../../../assets/Books/book4.png';
import book5 from '../../../assets/Books/book5.png';
import BookBox from '../../../parts/UserDashboard/Boxes/BookBox';

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
function MyBooks() {
    const [selectedOption, setSelectedOption] = useState<string>('All Books');
    return (
        <div className="h-full overflow-auto">
            <div className="p-4 w-full">
                <div className="flex flex-col gap-10 w-full">
                    <div className="flex flex-row justify-start w-full gap-4">
                        {/* All Books option */}
                        <div className="flex flex-col w-fit  gap-2">
                            <div
                                className={`${
                                    selectedOption === 'All Books'
                                        ? 'text-theme-color'
                                        : 'text-gray-400'
                                } hover:cursor-pointer w-full text-center px-1 sm:px-4 md:px-6 lg:px-10`}
                                onClick={() => setSelectedOption('All Books')}
                            >
                                {/* TODO fetch number form backend */}
                                All Books (2)
                            </div>
                            <div
                                className={`w-full h-1 ${
                                    selectedOption === 'All Books'
                                        ? 'bg-theme-color'
                                        : 'bg-gray-400'
                                }`}
                            ></div>
                        </div>
                        {/* In Review option */}
                        <div className="flex flex-col w-fit gap-2">
                            <div
                                className={`${
                                    selectedOption === 'In Review'
                                        ? 'text-theme-color'
                                        : 'text-gray-400'
                                } hover:cursor-pointer text-center w-full px-1 sm:px-4 md:px-6 lg:px-10`}
                                onClick={() => setSelectedOption('In Review')}
                            >
                                {/* TODO fetch number form backend */}
                                In Review (3)
                            </div>
                            <div
                                className={`w-full h-1 ${
                                    selectedOption === 'In Review'
                                        ? 'bg-theme-color'
                                        : 'bg-gray-400'
                                }`}
                            ></div>
                        </div>
                        {/* Published option */}
                        <div className="flex flex-col w-fit gap-2">
                            <div
                                className={`${
                                    selectedOption === 'Published'
                                        ? 'text-theme-color'
                                        : 'text-gray-400'
                                } hover:cursor-pointer text-center w-full px-1 sm:px-4 md:px-6 lg:px-10`}
                                onClick={() => setSelectedOption('Published')}
                            >
                                {/* TODO fetch number form backend */}
                                Published (1)
                            </div>
                            <div
                                className={`w-full h-1 ${
                                    selectedOption === 'Published'
                                        ? 'bg-theme-color'
                                        : 'bg-gray-400'
                                }`}
                            ></div>
                        </div>
                    </div>
                    {/* Detail section */}
                    <div className="w-full">
                        {/* All Books section */}
                        {selectedOption === 'All Books' && (
                            <div className="grid md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 md:gap-2 lg:gap-4 w-full ">
                                {/* TODO fetch all books data from backend and use it */}
                                {courses.map((course, index) => (
                                    <BookBox key={index} detail={course} />
                                ))}
                            </div>
                        )}
                        {/* In Review section */}
                        {selectedOption === 'In Review' && (
                            <div className="grid md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 md:gap-2 lg:gap-4 w-full ">
                                {/* TODO fetch in review books data from backend and use it */}
                                {courses.map((course, index) => (
                                    <BookBox key={index} detail={course} />
                                ))}
                            </div>
                        )}
                        {/* Published section */}
                        {selectedOption === 'Published' && (
                            <div className="grid md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 md:gap-2 lg:gap-4 w-full ">
                                {/* TODO fetch published books data from backend and use it */}
                                {courses.map((course, index) => (
                                    <BookBox key={index} detail={course} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyBooks;
