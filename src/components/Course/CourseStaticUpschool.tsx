function CourseStaticUpschool({ theme }) {
    return (
        <>
            <div className="grid bg-[#f4f4f4] py-[2.5rem]">
                <div className="max-w-[1400px] mx-auto">
                    <div
                        className={`flex justify-center 2xl:text-[54px] text-[45px] font-caveat font-semibold mb-[20px] mt-5 `}
                        style={{
                            color: theme,
                        }}
                    >
                        <p className="text-center">
                            Everything we do at Upschool:
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-5 gap-x-4 text-theme-color xl:mx-32 lg:mx-8 tab:grid-flow-row">
                        <div className="lg:row-start-1 tab:row-start-1 lg:col-start-1 lg:col-span-1 mb-[40px] flex lg:justify-start justify-center">
                            <img
                                src="../../images/Course/globe.png"
                                alt="globe"
                                className="w-[69px] h-[69px]"
                            />
                        </div>
                        <div className="lg:row-start-2 tab:row-start-2 lg:col-start-1 lg:col-span-1 flex lg:justify-start justify-center mb-[20px] ">
                            <h1 className="text-[25px] font-extrabold lg:text-left text-center">
                                Real-World Learning
                            </h1>
                        </div>
                        <div className="lg:row-start-3 tab:row-start-3 lg:col-start-1 lg:col-span-1 flex justify-center mb-5 lg:mx-0 mx-4">
                            <p>
                                We take 'real-world' to the next level by
                                designing projects with 'real' outcomes.
                            </p>
                        </div>
                        <div className="lg:row-start-1 tab:row-start-4 lg:col-start-2 lg:col-span-1 flex lg:justify-start justify-center mb-[40px]">
                            <img
                                src="../../images/Course/idea.png"
                                alt="idea"
                                className="w-[69px] h-[69px]"
                            />
                        </div>
                        <div className="lg:row-start-2 tab:row-start-5 lg:col-start-2 lg:col-span-1 flex lg:justify-start justify-center mb-[20px]">
                            <h1 className="text-[25px] font-extrabold lg:text-left text-center">
                                Entrepreneurship With Purpose
                            </h1>
                        </div>
                        <div className="lg:row-start-3 tab:row-start-6 lg:col-start-2 lg:col-span-1 flex justify-center mb-5 lg:mx-0 mx-4">
                            <p>
                                We want to teach the entrepreneurs of tomorrow
                                to operate with purpose and ethics.
                            </p>
                        </div>
                        <div className="lg:row-start-1 tab:row-start-7 lg:col-start-3 lg:col-span-1 flex lg:justify-start justify-center tab:justify-center mb-[40px]">
                            <img
                                src="../../images/Course/ladder.png"
                                alt="ladder"
                                className="w-[69px] h-[69px]"
                            />
                        </div>
                        <div className="lg:row-start-2 tab:row-start-8 lg:col-start-3 lg:col-span-1 flex lg:justify-start justify-center mb-[20px]">
                            <h1 className="text-[25px] font-extrabold lg:text-left text-center">
                                Team Players & Collaborators
                            </h1>
                        </div>
                        <div className="lg:row-start-3 tab:row-start-9 lg:col-start-3 lg:col-span-1 flex justify-center mb-5 lg:mx-0 mx-4">
                            <p>
                                Our projects bring children, teachers and
                                communities together to work towards a common
                                goal.
                            </p>
                        </div>
                        <div className="lg:row-start-1 tab:row-start-10 lg:col-start-4 lg:col-span-1 flex lg:justify-start justify-center tab:justify-center mb-[40px]">
                            <img
                                src="../../images/Course/package.png"
                                alt="package"
                                className="w-[69px] h-[69px]"
                            />
                        </div>
                        <div className="lg:row-start-2 tab:row-start-11 lg:col-start-4 lg:col-span-1 flex w-full lg:justify-start justify-center mb-[20px]">
                            <h1 className="text-[25px] font-extrabold lg:text-left text-center">
                                Creativity & Problem Solving
                            </h1>
                        </div>
                        <div className="lg:row-start-3 tab:row-start-12 lg:col-start-4 lg:col-span-1 flex justify-center mb-5 lg:mx-0 mx-4">
                            <p>
                                We inspire creative thinking and dynamic problem
                                solving. These are the skills for tomorrow.
                            </p>
                        </div>
                        <div className="lg:row-start-1 tab:row-start-13 lg:col-start-5 lg:col-span-1 flex lg:justify-start justify-center mb-[40px]">
                            <img
                                src="../../images/Course/learning.png"
                                alt="learning"
                                className="w-[69px] h-[69px]"
                            />
                        </div>
                        <div className="lg:row-start-2 tab:row-start-14 lg:col-start-5 lg:col-span-1 flex w-full lg:justify-start justify-center mb-[20px]">
                            <h1 className="text-[25px] font-extrabold lg:text-left text-center">
                                Skill Based Learning
                            </h1>
                        </div>
                        <div className="lg:row-start-3 tab:row-start-15 lg:col-start-5 lg:col-span-1 flex justify-center mb-5 lg:mx-0 mx-4">
                            <p>
                                From graphic design & film making to creative
                                writing and storytelling (and everything in
                                between)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseStaticUpschool;
