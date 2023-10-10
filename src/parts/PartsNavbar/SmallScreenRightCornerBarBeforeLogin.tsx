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
                    className="h-5 w-5 xm:w-8 xm:h-8 "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                </svg>
            </span>
            <ul
                className={`bg-white text-font-color text-xs sm:text-sm rounded-md transform scale-0 ${
                    isClicked && 'scale-100'
                }  absolute transition duration-150 ease-in-out origin-top -translate-x-4 sm:-translate-x-5  md:-translate-x-7  overflow-hidden`}
            >
                <li className="hover:bg-red-upschool  hover:text-white p-1 sm:p-2 md:px-6 md:py-3">
                    <NavLink to="login">Login</NavLink>
                </li>
                <li className="hover:bg-red-upschool hover:text-white p-1 sm:p-2 md:px-6 md:py-3">
                    <NavLink to="register">register</NavLink>
                </li>
            </ul>
        </div>
    );
};
export { SmallScreenRightCornerBarBeforeLogin };
