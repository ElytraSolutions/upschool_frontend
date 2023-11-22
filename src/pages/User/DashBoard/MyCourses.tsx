import { useEffect, useState } from 'react';
import CourseBoxEnrolled from '../../../parts/UserDashboard/Boxes/CourseBoxEnrolled';
import CourseBoxCompleted from '../../../parts/UserDashboard/Boxes/CourseBoxCompleted';
// import resolveImgURL from '../../../utlis/resolveImgURL';
import axiosInstance from '../../../config/Axios';

// TODO fetch data from backend according to the need
// TODO fetch necessary data from backend and use it
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
//     {
//         id: 2,
//         name: 'Write a Book to Change the World',
//         completedLessons: 40,
//         totalLessons: 50,
//         image: resolveImgURL('/images/Books/book4.png'),
//         url: '/dashboard',
//         status: 'Published',
//     },
// ];
function MyCourses() {
    const [selectedOption, setSelectedOption] =
        useState<string>('Enrolled Courses');
    const [myCourses, setMyCourses] = useState<{
        enrolled: Array<{
            name: string;
            slug: string;
            image: string;
            CompletedLessons: number;
            TotalLessons: number;
        }>;
        completed: Array<{
            id: string;
            name: string;
            slug: string;
            image: string;
        }>;
    }>({ enrolled: [], completed: [] });

    useEffect(() => {
        (async () => {
            // fetch data from  /data/user/courses
            // /data/courses/:slug/checkenrollment
            const res = await axiosInstance.get('/data/user/courses');
            console.log(res.data.data);
            setMyCourses(res.data.data);
            // {
            //     id: '9a5a38fe-c690-4854-8459-882261ae3806',
            //     slug: 'sunt-rerum-architecto-quae-eum-voluptatibus-explicabo-hic',
            //     name: 'Ut fugit odio quisquam.',
            //     pivot: {
            //       user_id: '9a03e615-b856-4352-83aa-ae32b0a54849',
            //       course_id: '9a5a38fe-c690-4854-8459-882261ae3806'
            //     }

            // Enrolled
            // name: 'Deserunt eos sapiente.',
            // slug: 'possimus-culpa-quasi-molestiae-consequuntur',
            // image: '',
            // TotalLessons: 2,
            // CompletedLessons: 0

            // Completed
            // id: '9a5a38fe-849c-4e88-8c60-66fd1d281bb3',
            // name: 'Enim quis.',
            // slug: 'quia-nemo-et-nihil-ipsum-deleniti-sed-in',
            // image: 'https://random.imagecdn.app/800/600'

            // {
            //     id: number;
            //     name: string;
            //     completedLessons: number;
            //     totalLessons: number;
            //     image: string;
            //     url: string;
            //     status?: string | undefined;
            // }
        })();
    }, []);
    console.log(myCourses);
    return (
        <div className="h-full overflow-auto">
            <div className="p-2 md:py-4 md:px-4 xlarge:px-6 xxlarge:px-8 w-full">
                <div className="flex flex-col gap-10 w-full">
                    <div className=" grid grid-cols-3 justify-items-center xs:flex xs:flex-row xs:justify-center md:justify-start text-sm sm:text-base lg:text-lg w-full gap-0 xs:gap-2  sm:gap-4">
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
                                Enrolled Courses {myCourses.enrolled?.length}
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
                                Completed Courses {myCourses.completed?.length}
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
                        {/* Enrolled courses section */}
                        {selectedOption === 'Enrolled Courses' && (
                            <div className="grid xm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 md:gap-2 lg:gap-4 w-full ">
                                {/* TODO fetch enrolled courses data from backend and use it */}
                                {myCourses.enrolled ? (
                                    myCourses.enrolled.length > 0 ? (
                                        myCourses.enrolled.map(
                                            (course, index) => (
                                                <CourseBoxEnrolled
                                                    key={index}
                                                    detail={course}
                                                />
                                            ),
                                        )
                                    ) : (
                                        <div className="col-span-full text-center text-sm sm:text-2xl font-bold text-theme-color w-full p-1 sm:p-4">
                                            No Enrolled Courses Found
                                        </div>
                                    )
                                ) : (
                                    <div className="col-span-full text-center text-sm sm:text-2xl font-bold text-theme-color w-full p-1 sm:p-4">
                                        No Enrolled Courses Found
                                    </div>
                                )}
                            </div>
                        )}
                        {/* Completed courses section */}
                        {selectedOption === 'Completed Courses' && (
                            <div className="grid xm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 md:gap-2 lg:gap-4 w-full">
                                {/* TODO fetch completed courses data from backend and use it */}
                                {myCourses.completed ? (
                                    myCourses.completed.length > 0 ? (
                                        myCourses.completed.map(
                                            (course, index) => (
                                                <CourseBoxCompleted
                                                    key={index}
                                                    detail={course}
                                                />
                                            ),
                                        )
                                    ) : (
                                        <div className="col-span-full text-center text-sm sm:text-2xl font-bold text-theme-color w-full p-1 sm:p-4">
                                            No Completed Courses Found
                                        </div>
                                    )
                                ) : (
                                    <div className="col-span-full text-center text-sm sm:text-2xl font-bold text-theme-color w-full p-1 sm:p-4">
                                        No Completed Courses Found
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCourses;
