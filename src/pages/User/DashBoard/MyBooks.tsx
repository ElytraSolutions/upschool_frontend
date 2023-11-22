import { useState } from 'react';
import BookBox from '../../../parts/UserDashboard/Boxes/BookBox';
import resolveImgURL from '../../../utlis/resolveImgURL';

// TODO fetch data from backend according to the need
const courses = [
    {
        id: 1,
        name: 'Build a Library & Change the world',
        completedLessons: 20,
        totalLessons: 40,
        image: resolveImgURL('/images/Books/book5.png'),
        url: '/dashboard',
        status: 'In review',
    },
    {
        id: 2,
        name: 'Write a Book to Change the World',
        completedLessons: 30,
        totalLessons: 50,
        image: resolveImgURL('/images/Books/book4.png'),
        url: '/dashboard',
        status: 'Published',
    },
    {
        id: 3,
        name: 'The Mission',
        completedLessons: 10,
        totalLessons: 70,
        image: resolveImgURL('/images/Books/book3.png'),
        url: '/dashboard',
        status: 'Book Not Print Ready',
    },
    {
        id: 2,
        name: 'Write a Book to Change the World',
        completedLessons: 40,
        totalLessons: 50,
        image: resolveImgURL('/images/Books/book4.png'),
        url: '/dashboard',
        status: 'Published',
    },
];
function MyBooks() {
    const [selectedOption, setSelectedOption] = useState<string>('All Books');
    return (
        <div className="h-full overflow-auto">
            <div className="p-2 md:py-4 md:px-4 xlarge:px-6 xxlarge:px-8 w-full">
                <div className="flex flex-col gap-10 w-full">
                    <div className="grid grid-cols-3 justify-items-center xs:flex xs:flex-row xs:justify-center md:justify-start text-sm sm:text-base lg:text-lg w-full gap-0 xs:gap-2  sm:gap-4">
                        {/* All Books option */}
                        <div className="flex flex-col w-fit  gap-2">
                            <div
                                className={`${
                                    selectedOption === 'All Books'
                                        ? 'text-theme-color'
                                        : 'text-gray-400'
                                } hover:cursor-pointer w-full h-full text-center px-1 sm:px-4 md:px-6 lg:px-10 font-lexend`}
                                onClick={() => setSelectedOption('All Books')}
                            >
                                {/* TODO fetch number form backend */}
                                All Books (2)
                            </div>
                            <div
                                className={`w-full h-1.5 ${
                                    selectedOption === 'All Books'
                                        ? 'bg-theme-color'
                                        : 'bg-gray-400'
                                }`}
                            ></div>
                        </div>
                        {/* In Review option */}

                        {/* <div className="flex flex-col w-fit gap-2">
                            <div
                                className={`${
                                    selectedOption === 'In Review'
                                        ? 'text-theme-color'
                                        : 'text-gray-400'
                                } hover:cursor-pointer text-center w-full h-full px-1 sm:px-4 md:px-6 lg:px-10 font-lexend`}
                                onClick={() => setSelectedOption('In Review')}
                            >
                                In Review (3)
                            </div>
                            <div
                                className={`w-full h-1.5 ${
                                    selectedOption === 'In Review'
                                        ? 'bg-theme-color'
                                        : 'bg-gray-400'
                                }`}
                            ></div>
                        </div> */}
                        {/* Published option */}

                        {/* <div className="flex flex-col w-fit gap-2">
                            <div
                                className={`${
                                    selectedOption === 'Published'
                                        ? 'text-theme-color'
                                        : 'text-gray-400'
                                } hover:cursor-pointer text-center w-full h-full px-1 sm:px-4 md:px-6 lg:px-10 font-lexend`}
                                onClick={() => setSelectedOption('Published')}
                            >
                                TODO fetch number form backend
                                Published (1)
                            </div>
                            <div
                                className={`w-full h-1.5 ${
                                    selectedOption === 'Published'
                                        ? 'bg-theme-color'
                                        : 'bg-gray-400'
                                }`}
                            ></div>
                        </div> */}
                    </div>
                    {/* Detail section */}
                    <div className="w-full">
                        {/* All Books section */}
                        {selectedOption === 'All Books' && (
                            <div className="grid xm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 md:gap-2 lg:gap-4 w-full ">
                                {/* TODO fetch all books data from backend and use it */}
                                {courses.map((course, index) => (
                                    <BookBox key={index} detail={course} />
                                ))}
                            </div>
                        )}
                        {/* In Review section */}
                        {selectedOption === 'In Review' && (
                            <div className="grid xm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 md:gap-2 lg:gap-4 w-full ">
                                {/* TODO fetch in review books data from backend and use it */}
                                {courses.map((course, index) => (
                                    <BookBox key={index} detail={course} />
                                ))}
                            </div>
                        )}
                        {/* Published section */}
                        {selectedOption === 'Published' && (
                            <div className="grid xm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 md:gap-2 lg:gap-4 w-full ">
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
