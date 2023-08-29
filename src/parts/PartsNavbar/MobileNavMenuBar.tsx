import { useState } from 'react';
import { data, navData } from '../../data/NavbarBoxData';
import { NavLink } from 'react-router-dom';
import upSchoolLogoMobile from '../../assets/Upschool_logo_Mobile_Navbar-300x57.png';
import './MobileNavMenuBar.css';

const MobileNavMenubar = ({ isOpen, setIsopen }) => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);

    return (
        <div
            className={`fixed z-10 bg-theme-color  h-screen  w-1/3 md:w-[32%] lg:w-[22%]  top-0 transition duration-1000 ease-in-out  overflow-y-auto flex justify-center text-white ${
                isOpen ? 'left-0' : 'left-[-100%]'
            }`}
            onMouseLeave={() => {
                function close() {
                    setIsopen((oldstate) => !oldstate);
                }
                setTimeout(close, 1500);
            }}
        >
            <div className="w-11/12  ">
                <div className="flex flex-row justify-between items-center  mx-0.5 h-[10vh]">
                    <span>
                        <NavLink to="/">
                            <img
                                src={upSchoolLogoMobile}
                                alt="upSchool"
                                width="150"
                                height="50"
                            />
                        </NavLink>
                    </span>
                    <button
                        onClick={() => {
                            setIsopen((oldstate) => !oldstate);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 text-white"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
                <div>
                    <ul className="rounded-md text-base">
                        {/* First list */}
                        <li className="rounded-md m-2">
                            <div className="w-full text-left flex items-center">
                                <span className="pr-1 flex-1  text-sm">
                                    <NavLink
                                        to={data[0].path ? data[0].path : '#'}
                                    >
                                        {data[0].title}
                                    </NavLink>
                                </span>
                                <span
                                    className={`mr-auto ${
                                        isOpen1 && 'clicked'
                                    }`}
                                    onClick={() => {
                                        setIsOpen1((oldstate) => !oldstate);
                                        setIsOpen2(false);
                                        setIsOpen3(false);
                                        setIsOpen4(false);
                                        setIsOpen5(false);
                                        setIsOpen6(false);
                                        setIsOpen7(false);
                                    }}
                                >
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </span>
                            </div>
                            <ul
                                className={`m-0 w-full border rounded-md transform relative transition duration-1000 ease-in-out origin-top ${
                                    isOpen1 ? 'block' : 'hidden'
                                } `}
                            >
                                {data[0].children.map((detail) => (
                                    <li>
                                        <NavLink to={detail.path || ''}>
                                            {detail.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        {/* second list */}
                        <li className="rounded-md m-2">
                            <div className="w-full text-left flex items-center">
                                <span className="pr-1 flex-1  text-sm">
                                    <NavLink
                                        to={data[1].path ? data[1].path : '#'}
                                    >
                                        {data[1].title}
                                    </NavLink>
                                </span>
                                <span
                                    className={`mr-auto ${
                                        isOpen2 && 'clicked'
                                    }`}
                                    onClick={() => {
                                        setIsOpen1(false);
                                        setIsOpen2((oldstate) => !oldstate);
                                        setIsOpen3(false);
                                        setIsOpen4(false);
                                        setIsOpen5(false);
                                        setIsOpen6(false);
                                        setIsOpen7(false);
                                    }}
                                >
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </span>
                            </div>
                            <ul
                                className={`m-0 w-full border rounded-md transform relative transition duration-1000 ease-in-out origin-top ${
                                    isOpen2 ? 'block' : 'hidden'
                                } `}
                            >
                                {data[1].children.map((detail) => (
                                    <li>
                                        <NavLink to={detail.path || ''}>
                                            {detail.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Third list */}
                        <li className="rounded-md m-2">
                            <div className="w-full text-left flex items-center">
                                <span className="pr-1 flex-1  text-sm">
                                    <NavLink
                                        to={data[2].path ? data[2].path : '#'}
                                    >
                                        {data[2].title}
                                    </NavLink>
                                </span>
                                <span
                                    className={`mr-auto ${
                                        isOpen3 && 'clicked'
                                    }`}
                                    onClick={() => {
                                        setIsOpen1(false);
                                        setIsOpen2(false);
                                        setIsOpen3((oldstate) => !oldstate);
                                        setIsOpen4(false);
                                        setIsOpen5(false);
                                        setIsOpen6(false);
                                        setIsOpen7(false);
                                    }}
                                >
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </span>
                            </div>
                            <ul
                                className={`m-0 w-full border rounded-md transform relative transition duration-1000 ease-in-out origin-top ${
                                    isOpen3 ? 'block' : 'hidden'
                                } `}
                            >
                                {data[2].children.map((detail) => (
                                    <li>
                                        <NavLink to={detail.path || ''}>
                                            {detail.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Fourth list */}
                        <li className="rounded-md m-2 ">
                            <div className="w-full text-left flex items-center">
                                <span className="pr-1 flex-1  text-sm">
                                    <NavLink
                                        to={data[3].path ? data[3].path : '#'}
                                    >
                                        {data[3].title}
                                    </NavLink>
                                </span>
                                <span
                                    className={`mr-auto ${
                                        isOpen4 && 'clicked'
                                    }`}
                                    onClick={() => {
                                        setIsOpen1(false);
                                        setIsOpen2(false);
                                        setIsOpen3(false);
                                        setIsOpen4((oldstate) => !oldstate);
                                        setIsOpen5(false);
                                        setIsOpen6(false);
                                        setIsOpen7(false);
                                    }}
                                >
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </span>
                            </div>
                            <ul
                                className={` m-0 w-full border rounded-md transform relative transition duration-1000 ease-in-out origin-top ${
                                    isOpen4 ? 'block' : 'hidden'
                                } `}
                            >
                                {data[3].children.map((detail) => (
                                    <li>
                                        <NavLink to={detail.path || ''}>
                                            {detail.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Fifth list */}
                        <li className="rounded-md m-2 ">
                            <div className="w-full text-left flex items-center">
                                <span className="pr-1 flex-1  text-sm">
                                    <NavLink
                                        to={data[4].path ? data[4].path : '#'}
                                    >
                                        {data[4].title}
                                    </NavLink>
                                </span>
                                <span
                                    className={`mr-auto ${
                                        isOpen5 && 'clicked'
                                    }`}
                                    onClick={() => {
                                        setIsOpen1(false);
                                        setIsOpen2(false);
                                        setIsOpen3(false);
                                        setIsOpen4(false);
                                        setIsOpen5((oldstate) => !oldstate);
                                        setIsOpen6(false);
                                        setIsOpen7(false);
                                    }}
                                >
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </span>
                            </div>
                            <ul
                                className={`m-0 w-full border rounded-md transform relative transition duration-1000 ease-in-out origin-top ${
                                    isOpen5 ? 'block' : 'hidden'
                                } `}
                            >
                                {data[4].children.map((detail) => (
                                    <li>
                                        <NavLink to={detail.path || ''}>
                                            {detail.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Sixth list */}
                        <li className="rounded-md m-2 ">
                            <div className="w-full text-left flex items-center">
                                <span className="pr-1 flex-1  text-sm">
                                    <NavLink
                                        to={data[5].path ? data[5].path : '#'}
                                    >
                                        {data[5].title}
                                    </NavLink>
                                </span>
                                <span
                                    className={`mr-auto ${
                                        isOpen6 && 'clicked'
                                    }`}
                                    onClick={() => {
                                        setIsOpen1(false);
                                        setIsOpen2(false);
                                        setIsOpen3(false);
                                        setIsOpen4(false);
                                        setIsOpen5(false);
                                        setIsOpen6((oldstate) => !oldstate);
                                        setIsOpen7(false);
                                    }}
                                >
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </span>
                            </div>
                            <ul
                                className={`m-0 w-full border rounded-md transform relative transition duration-1000 ease-in-out origin-top ${
                                    isOpen6 ? 'block' : 'hidden'
                                } `}
                            >
                                {data[5].children.map((detail) => (
                                    <li>
                                        <NavLink to={detail.path || ''}>
                                            {detail.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        {/* seventh list */}
                        <li className="rounded-md m-2">
                            <div className="w-full text-left flex items-center">
                                <span className="pr-1 flex-1  text-sm">
                                    <NavLink
                                        to={data[6].path ? data[6].path : '#'}
                                    >
                                        {data[6].title}
                                    </NavLink>
                                </span>
                                <span
                                    className={`mr-auto ${
                                        isOpen7 && 'clicked'
                                    }`}
                                    onClick={() => {
                                        setIsOpen1(false);
                                        setIsOpen2(false);
                                        setIsOpen3(false);
                                        setIsOpen4(false);
                                        setIsOpen5(false);
                                        setIsOpen6(false);
                                        setIsOpen7((oldstate) => !oldstate);
                                    }}
                                >
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </span>
                            </div>
                            <ul
                                className={`m-0 w-full border rounded-md transform relative transition duration-1000 ease-in-out origin-top ${
                                    isOpen7 ? 'block' : 'hidden'
                                } `}
                            >
                                {data[6].children.map((detail) => (
                                    <li>
                                        <NavLink to={detail.path || '#'}>
                                            {detail.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        {/* Eight List */}
                        <li className="rounded-md m-2 text-sm">
                            <NavLink to={navData.path || '#'}>
                                {navData.title}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export { MobileNavMenubar };
