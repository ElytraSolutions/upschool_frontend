import { NavLink } from 'react-router-dom';

const LearningFramework = () => {
    return (
        <>
            <div className="flex justify-center px-2 py-5 lg:py-8  h-full w-full">
                <div className="w-full sm:p-2  lg:w-10/12 xl:w-2/3 h-full ">
                    <div className="flex flex-col gap-6  items-center h-full w-full">
                        <div className=" bg-red-upschool px-2 py-1 w-full">
                            <p className="text-center text-2xl lg:text-3xl font-lexend font-medium text-white">
                                Purposeful Learning Framework
                            </p>
                        </div>
                        <div className="flex justify-center px-2 ">
                            <img
                                // TODO provide correct image path
                                src="https://upschool.co/wp-content/uploads/2023/05/PLF-600x219.png"
                                alt="Learning Framework"
                                width="900"
                            />
                        </div>
                        <p className="text-left text-font-color text-base sm:text-lg px-4">
                            Upschool's 'Purposeful Learning Framework'
                            {` (PLF) `}
                            is a unique educational philosophy that goes beyond
                            traditional education by emphasising the importance
                            of intention-based learning.
                        </p>
                        <div className="px-4">
                            <NavLink to="/our-framework">
                                <p className="text-left text-font-color underline underline-offset-2 font-semibold text-base sm:text-lg ">
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
        </>
    );
};

export default LearningFramework;
