import { NavLink } from 'react-router-dom';
import CourseTypes from './CourseTypes';
import FeaturedCourses from './FeaturedCourses';
import Features from './Features';
import SchoolSuccess from './SchoolSuccess';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';

export default function Home() {
    const { isXtraLargeScreen } = useScreenWidthAndHeight();
    return (
        <>
            <div className="text-center">
                <div
                    className="bg-cover  bg-center"
                    style={{
                        backgroundImage: `url('/images/homepage/main.jpg')`,
                    }}
                >
                    <div className="flex flex-col items-center justify-center bg-[#181739C0] p-10  ">
                        <div className="max-w-6xl text-center text-[#fff]">
                            <span className=" text-[40px] font-bold tracking-wide md:text-[67px] font-lexend">
                                Purposeful Education for a Better Tomorrow
                            </span>
                            <br />
                            <span className="text-[22px]">
                                Inspirational Courses, Resources and Tools for
                                Teachers, Parents and Learners, Everywhere.
                            </span>
                        </div>
                        <div className="text-[#fff]">
                            <button className="m-10 rounded-md border-2 border-solid border-white bg-[#b81242] px-10 py-3 duration-700 ease-in-out hover:scale-125 ">
                                Get Free Access
                                <i className="fa fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <CourseTypes />
                {/* Dear World Book Resiger Section  */}
                <div className="flex justify-center p-2 sm:p-6 md:px-8 md:py-6 w-full h-full ">
                    <div className="flex justify-center w-full sm:w-11/12 md:w-10/12">
                        {/* TODO provide correct route path */}
                        {/* /dear-world-book */}
                        <NavLink to="/courses">
                            {isXtraLargeScreen ? (
                                <img
                                    // TODO provide correct image path
                                    src="https://upschool.co/wp-content/uploads/2023/09/Book-Launch-Banner-1024x307.png"
                                    alt="Book Launch Banner"
                                    height="1024px"
                                    width="307px"
                                    className="h-full w-fit"
                                />
                            ) : (
                                <img
                                    // TODO provide correct image path
                                    src="https://upschool.co/wp-content/uploads/2023/09/Book-Launch-Banner-2.png"
                                    alt="Book Launch Banner"
                                    height="704px"
                                    width="599px"
                                    className=" min-h-[250px] xs:h-full w-fit"
                                />
                            )}
                        </NavLink>
                    </div>
                </div>
                <FeaturedCourses />
                {/* 4 ways to utilize upschool resources */}
                <div className="flex  justify-center px-2 py-5 w-full h-full">
                    <div className="flex flex-col md:flex-row justify-between gap-2  md:gap-7 w-full tab:w-3/4 xl:w-2/3">
                        <div className="flex justify-center p-2 w-full">
                            <img
                                src="https://upschool.co/wp-content/uploads/2023/10/4-ways-to-ulitise-upschool-1.png"
                                width="800px"
                                height="100px"
                                alt="four ways to utilize upschool resoureces"
                                className=" w-[400px]"
                            />
                        </div>
                        <div className=" p-2 flex items-center w-full text-font-color">
                            <div className="flex flex-col gap-2 md:gap-12 text-sm lg:text-base text-left ">
                                <p className="font-semibold text-2xl sm:text-4xl md:text-4xl font-lexend">
                                    4 Wasys to Utilise Upschool Courses and
                                    Resources
                                </p>
                                <div>
                                    <p>
                                        With over 180 countries now using the
                                        platform, a lot of people from around
                                        the world are asking how the Upschool
                                        platform can be used in their schools.
                                    </p>
                                    <br />
                                    <p>
                                        If you work in a school, are a teacher,
                                        a homeschool parent or a student, then
                                        we have got you all covered, with free
                                        courses, resources, lesson plans and
                                        even teacher training all with
                                        individual certificates for every
                                        participant.
                                    </p>
                                </div>
                                <div className="">
                                    {/* TODO provide correct route path */}
                                    {/* /4-ways-to-utilise-upschool */}
                                    <NavLink to="/courses">
                                        <p className="underline underline-offset-2 ">
                                            <span className="">Learn More</span>
                                            <span className="">
                                                {'\u2192'}
                                                {/* Learn More → */}
                                            </span>
                                        </p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Features />
                <SchoolSuccess />
            </div>
        </>
    );
}
