import CourseTypes from "./CourseTypes";
import Features from "./Features";
import SchoolSuccess from "./SchoolSuccess";

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
                    <div className="flex flex-col bg-[#181739C0] justify-center items-center p-10  ">
                        <div className="text-[#fff] max-w-6xl text-center">
                        <span className=" text-[40px] md:text-[67px] font-bold tracking-wide ">
                        Purposeful Education for a Better Tomorrow
                        </span>
                        <br />
                            <span className="text-[22px]" >Inspirational Courses, Resources and Tools for Teachers, Parents and Learners, Everywhere.</span>
                        </div>
                        <div className="text-[#fff]">
                            <button className="bg-[#b81242] px-10 py-3 m-10 rounded-md border-solid border-2 border-white hover:scale-125 ease-in-out duration-700 "> Get Free Access <i className="fa fa-arrow-right"></i> </button>
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
