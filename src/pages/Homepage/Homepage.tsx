import CourseTypes from './CourseTypes';
import Features from './Features';
import SchoolSuccess from './SchoolSuccess';

export default function Home() {
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
                            <span className=" text-[40px] font-bold tracking-wide md:text-[67px] ">
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
                                {' '}
                                Get Free Access{' '}
                                <i className="fa fa-arrow-right"></i>{' '}
                            </button>
                        </div>
                    </div>
                </div>
                <CourseTypes />
                <Features />
                <SchoolSuccess />
            </div>
        </>
    );
}
