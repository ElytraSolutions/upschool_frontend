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
                    className={` col-span-4 xs:col-span-1 bg-white h-full  w-full top-0 flex justify-center `}
                    // onMouseLeave={() => {
                    //     setTimeout(onClose, 5000);
                    // }}
                >
                    <div className="w-full text-theme-color relative ">
                        <div className="flex flex-row gap-3 justify-between items-center py-2 lg:py-6 h-11 bg-slate-100 px-2">
                            <span onClick={onClose} className="">
                                <NavLink to="/">
                                    <img
                                        src={resolveImgURL(
                                            '/images/Upschool_logo_Mobile_Navbar-300x57.png',
                                        )}
                                        alt="upSchool"
                                        width="120"
                                        height="50"
                                    />
                                </NavLink>
                            </span>
                            <button
                                onClick={onClose}
                                className="flex items-center justify-center bg-theme-color p-2 absolute top-0 right-0 h-11 w-11"
                            >
                                <svg //cross symbol
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="h-6 w-6 lg:w-8 lg:h-8 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full px-2">
                            {data.map((detail, index) => (
                                <div
                                    className={` flex flex-col w-full border-b-2 p-2 `}
                                >
                                    {/* main menu */}
                                    <div
                                        key={index}
                                        className={` p-2 flex w-full justify-between items-center `}
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
                                                className="text-base font-bold hover:text-font-color"
                                            >
                                                {detail.title}
                                            </NavLink>
                                        </div>
                                        <div>
                                            {navData != detail.id ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1em"
                                                    viewBox="0 0 448 512"
                                                >
                                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1em"
                                                    viewBox="0 0 448 512"
                                                >
                                                    {' '}
                                                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                                </svg>
                                            )}
                                            {/* <svg
                                                className="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg> */}
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
                                                        className="hover:text-font-color text-theme-color opacity-70  rounded  m-1 w-[90%]"
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
                    className={`col-span-1 xs:col-start-2 xs:col-span-1 sm:col-span-2 tab:col-span-3 h-full w-full  top-0  bg-black/70`}
                    onClick={onClose}
                >
                    <div className="h-full w-full "></div>
                </div>
            </div>
        </>
    );
};

export { MobileNavMenubar };
