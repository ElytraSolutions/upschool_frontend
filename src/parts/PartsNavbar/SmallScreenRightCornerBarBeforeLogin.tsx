import React from 'react';
import { NavLink } from 'react-router-dom';

const SmallScreenRightCornerBarBeforeLogin = () => {
    // determines if the icon is cilcked or not
    const [isClicked, setIsClicked] = React.useState(false);
    return (
        <div className=" w-8 h-7 xm:w-9 xm:h-9">
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
                    className="h-7 w-7 xm:w-full xm:h-7 stroke-theme-color xm:stroke-white stroke-[1.5]"
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
                }  absolute transition duration-150 ease-in-out origin-top -translate-x-40 sm:-translate-x-40  md:-translate-x-44  overflow-hidden pl-3 pr-24 py-2 shadow-[0px_5px_12px_10px_rgba(0,0,0,0.1)]`}
            >
                <li className="hover:bg-red-upschool  hover:text-white ">
                    <NavLink
                        to="/login"
                        className="flex justify-start items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="20"
                            viewBox="0 0 512 512"
                        >
                            <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                        </svg>
                        <p className="p-2 md:px-6 md:py-3">Login</p>
                    </NavLink>
                </li>
                <li className="hover:bg-red-upschool hover:text-white ">
                    <NavLink
                        to="/register"
                        className="flex justify-start items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="20"
                            viewBox="0 0 640 512"
                        >
                            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                        </svg>
                        <p className="p-2 md:px-6 md:py-3">Register</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};
export { SmallScreenRightCornerBarBeforeLogin };
