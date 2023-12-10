import useScreenWidthAndHeight from '../../../hooks/useScreenWidthAndHeight';
import { NavLink } from 'react-router-dom';
import resolveImgURL from '../../../utlis/resolveImgURL';
import useUser from '../../../hooks/useUser';
import { ComputerMenu } from '../../../parts/PartsNavbar/LargeScreenMenuBar';

type NavbarProps = {
    setIsopen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ setIsopen }: NavbarProps) {
    const { user } = useUser();
    const { isTabScreen, isXtraMedium } = useScreenWidthAndHeight();
    return (
        <>
            <div
                className={`fixed z-10 flex items-center justify-between h-[65px] md:h-[96px] xlarge:h-[96px]  w-full bg-white xm:bg-theme-color px-1 py-2 md:py-3 md:px-2   flex-1  `}
            >
                <div className="flex flex-row items-center gap-5 ">
                    <div
                        className={` ${
                            isXtraMedium ? 'max-w-[10rem] ' : 'max-w-xs'
                        } `}
                    >
                        <NavLink to="/">
                            <img
                                src={resolveImgURL('/images/logo.png')}
                                className={` ${
                                    isXtraMedium ? '' : 'h-10'
                                }  w-full`}
                                alt=""
                            />
                        </NavLink>
                    </div>
                    {isTabScreen && <ComputerMenu />}
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="flex justify-center items-center h-8 w-8 sm:w-10 sm:h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg //imported from tailwind components templates user
                            className="w-7 h-7 sm:w-9 sm:h-9 text-gray-400 "
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
                    </div>

                    <div className="hidden tab:block text-white">
                        {user !== null && (
                            <>
                                <p>{`${user.first_name} ${user.last_name}`}</p>
                                <p className="text-sm">{user.email}</p>
                            </>
                        )}
                    </div>
                    <span
                        className="block tab:hidden hover:cursor-pointer fill-theme-color  text-theme-color"
                        onClick={() => {
                            setIsopen((oldstate) => !oldstate);
                        }}
                    >
                        <svg //hamburger
                            xmlns="http://www.w3.org/2000/svg"
                            // fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke={
                                isXtraMedium
                                    ? '#242254'
                                    : !isTabScreen
                                    ? '#fff'
                                    : '#242254'
                            }
                            style={{ fill: '#242254' }}
                            className="w-8 h-8 fill-red-500 text-red-500 hover:cursor-pointer "
                        >
                            <path
                                style={{ fill: '#242254' }}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Navbar;
