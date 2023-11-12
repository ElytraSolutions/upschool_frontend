import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { data } from '../../data/NavbarBoxData';
import { NavLink } from 'react-router-dom';
import resolveImgURL from '../../utlis/resolveImgURL';

const MobileNavMenubar = ({ isOpen, onClose }) => {
    useHotkeys('esc', (event) => {
        event.preventDefault();
        onClose();
    });
    const [navData, setNavData] = useState(0);

    return (
        <>
            <div
                className={`fixed  z-30 grid grid-cols-5 xs:grid-cols-2  sm:grid-cols-3 tab:grid-cols-4 gap-0 w-screen h-full top-0 transition duration-1000 ease-in-out  overflow-y-auto ${
                    isOpen ? 'left-0' : 'left-[-100%] '
                }`}
            >
                <div
                    className={` col-span-3 xs:col-span-1 bg-theme-color  h-full  w-full top-0 flex justify-center`}
                    // onMouseLeave={() => {
                    //     setTimeout(onClose, 5000);
                    // }}
                >
                    <div className="w-11/12 text-white ">
                        <div className="flex flex-row gap-3 justify-between items-center py-4 lg:py-6  mx-1 h-fit">
                            <span onClick={onClose} className="">
                                <NavLink to="/">
                                    <img
                                        src={resolveImgURL(
                                            '/images/Upschool_logo_Mobile_Navbar-300x57.png',
                                        )}
                                        alt="upSchool"
                                        width="150"
                                        height="50"
                                    />
                                </NavLink>
                            </span>
                            <button onClick={onClose}>
                                <svg //cross symbol
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 md:h-6 md:w-6 lg:w-8 lg:h-8 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full">
                            {data.map((detail, index) => (
                                <div
                                    className={`${
                                        navData === detail.id
                                            ? 'bg-red-upschool'
                                            : ''
                                    } rounded-md flex flex-col w-full `}
                                >
                                    {/* main menu */}
                                    <div
                                        key={index}
                                        className={` rounded-md p-2   flex w-full justify-between items-center`}
                                        onClick={() => {
                                            if (navData === detail.id) {
                                                setNavData(0);
                                            } else setNavData(detail.id);
                                        }}
                                    >
                                        <div>
                                            <NavLink
                                                to={detail.path || '#'}
                                                onClick={() => {
                                                    if (
                                                        detail.path &&
                                                        detail.path !== '#'
                                                    ) {
                                                        onClose();
                                                    }
                                                }}
                                            >
                                                {detail.title}
                                            </NavLink>
                                        </div>
                                        <div
                                            className={` ${
                                                navData === detail.id &&
                                                'rotate-180'
                                            }`}
                                        >
                                            <svg
                                                className="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* sub menu */}
                                    <div
                                        className={`pl-4 w-full ${
                                            navData === detail.id
                                                ? 'block'
                                                : 'hidden'
                                        } `}
                                    >
                                        <ul className="mb-4">
                                            {detail.children.map(
                                                (detail, index) => (
                                                    <li
                                                        key={index}
                                                        className="hover:text-font-color hover:scale-105 border border-theme-color bg-slate-50 text-theme-color p-1 rounded  m-1 w-[90%]"
                                                        onClick={onClose}
                                                    >
                                                        <NavLink
                                                            to={
                                                                detail.path ||
                                                                ''
                                                            }
                                                        >
                                                            <p className="p-1 hyphens-auto break-words  w-full">
                                                                {detail.title}
                                                            </p>
                                                        </NavLink>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Secound column */}
                <div
                    className={`col-span-2 xs:col-start-2 xs:col-span-1 sm:col-span-2 tab:col-span-3 h-full w-full  top-0  bg-black/70`}
                    onClick={onClose}
                >
                    <div className="h-full w-full "></div>
                </div>
            </div>
        </>
    );
};

export { MobileNavMenubar };
