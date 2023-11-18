import React from 'react';
import { NavLink } from 'react-router-dom';

const SmallScreenRightCornerBarBeforeLogin = () => {
    // determines if the icon is cilcked or not
    const [isClicked, setIsClicked] = React.useState(false);
    return (
        <div className=" w-7 h-7 xm:w-9 xm:h-9">
            <span
                className="relative flex items-center w-fit h-full overflow-hidden  rounded-full hover:cursor-pointer "
                onClick={() => setIsClicked((oldState) => !oldState)}
            >
                <svg //imported from heroicons
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="h-5 w-5 xm:w-8 xm:h-8 stroke-theme-color xm:stroke-white scale-125 md:scale-100 "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                </svg>
            </span>
            <ul
                className={`bg-white text-font-color text-sm rounded-md transform scale-0 ${
                    isClicked && 'scale-100'
                }  absolute transition duration-150 ease-in-out origin-top -translate-x-40 sm:-translate-x-40  md:-translate-x-44  overflow-hidden pl-2 pr-24 py-2 shadow-[0px_5px_12px_10px_rgba(0,0,0,0.1)]`}
            >
                <li className="hover:bg-red-upschool  hover:text-white ">
                    <NavLink
                        to="/login"
                        className="flex justify-center items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 640 512"
                            className="h-5 w-5 xm:w-8 xm:h-8 fill-theme-color xm:stroke-white "
                        >
                            <path d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                        </svg>
                        <p className="p-2 md:px-6 md:py-3">Login</p>
                    </NavLink>
                </li>
                <li className="hover:bg-red-upschool hover:text-white">
                    <NavLink
                        to="/register"
                        className="flex justify-center items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                            className=" ml-4 h-5 w-5 xm:w-8 xm:h-8 fill-theme-color xm:stroke-white"
                        >
                            <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z" />
                        </svg>
                        <p className="p-2 sm:p-2 md:px-6 md:py-3">Register</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};
export { SmallScreenRightCornerBarBeforeLogin };
