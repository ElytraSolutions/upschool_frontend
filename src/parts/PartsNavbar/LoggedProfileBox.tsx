import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';

type ChildObject = {
    title: string;
    path: string;
    iconClass: string;
    children?: ChildObject[];
};

type BoxProps = {
    inf: {
        id: number;
        title?: string;
        path?: string;
        children?: ChildObject[];
    };
    name?: string;
};

const LoggedProfileBox: React.FC<BoxProps> = ({ inf, name }) => {
    const menuRef = useRef<HTMLDivElement>(null);
    // determines if the option is cilcked or not
    const [isClicked, setIsClicked] = React.useState(false);
    const { isTabScreen } = useScreenWidthAndHeight();

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsClicked(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="font-light w-fit text-font-color" ref={menuRef}>
                <div
                    className=" py-1 text-white  flex items-center"
                    onClick={() => setIsClicked((oldState) => !oldState)}
                >
                    {isTabScreen ? (
                        <span className="p-1">
                            <ProfileIcon />
                        </span>
                    ) : (
                        <span className="relative flex items-center justify-center w-full h-full overflow-hidden rounded-full ">
                            {/* */}
                            <svg //imported from tailwind components templates user
                                className="h-5 w-5 xm:w-8 xm:h-8 text-theme-color  xm:text-white -left-0.5 hover:cursor-pointer"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    )}

                    {isTabScreen && (
                        <>
                            {name && (
                                <span className="pr-1  text-sm ">
                                    {/*TODO: What is this Navlink doing?*/}
                                    {/* <NavLink to={inf.path ? inf.path : '#'}> */}
                                    <p className="truncate hover:cursor-pointer">
                                        {name}
                                    </p>
                                    {/* </NavLink> */}
                                </span>
                            )}

                            <span>
                                <svg
                                    className={`fill-current h-4 w-4  ${
                                        isClicked && '-rotate-180 '
                                    } transition  duration-300 ease-in-out`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </span>
                        </>
                    )}
                </div>
                <ul
                    className={`bg-white  rounded-md scale-0 ${
                        isClicked && 'scale-100'
                    }  absolute transition duration-300 ease-in-out origin-top right-1 xm:right-2 sm:right-3 md:right-5  w-fit `}
                >
                    {inf.children?.map((detail, index) => {
                        return (
                            <li
                                key={index}
                                className="first:rounded-t-md last:rounded-b-md  text-sm  hover:bg-red-upschool hover:text-white"
                            >
                                <NavLink to={detail.path ? detail.path : '#'}>
                                    <div className="flex flex-row gap-2 items-center p-1 sm:p-2 sm:pr-4 md:pl-6 md:pr-12 md:py-3 ">
                                        <div className=" flex justify-center items-center h-6 w-6">
                                            <i
                                                className={detail.iconClass}
                                                aria-hidden="true"
                                            ></i>
                                        </div>

                                        <p className="">{detail.title}</p>
                                    </div>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default LoggedProfileBox;
