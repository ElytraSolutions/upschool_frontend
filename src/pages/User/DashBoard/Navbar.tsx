import { useEffect, useState } from 'react';
import useScreenWidthAndHeight from '../../../hooks/useScreenWidthAndHeight';
import { NavLink } from 'react-router-dom';
import resolveImgURL from '../../../utlis/resolveImgURL';
import useUser from '../../../hooks/useUser';

type NavbarProps = {
    setIsopen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ setIsopen }: NavbarProps) {
    const { user } = useUser();
    const [isScrolled, setIsScrolled] = useState(false);
    const { isSmallHeight } = useScreenWidthAndHeight();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div
                className={`${
                    isScrolled && 'fixed'
                } z-10 flex justify-between px-1 py-2 sm:p-4 border items-center ${
                    isSmallHeight ? 'h-[15dvh]' : 'h-[10dvh]'
                }  w-full bg-white gap-2`}
            >
                <div className=" max-w-xs">
                    <NavLink to="/">
                        <img
                            src={resolveImgURL('/images/logo.png')}
                            className="h-10 w-full"
                            alt=""
                        />
                    </NavLink>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="flex justify-center items-center h-8 w-8 sm:w-10 sm:h-10 overflow-hidden bg-gray-400 rounded-full dark:bg-gray-600">
                        <svg //imported from tailwind components templates user
                            className="w-7 h-7 sm:w-9 sm:h-9 text-white "
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

                    <div className="hidden tab:block">
                        {user !== null && (
                            <>
                                <p>{`${user.first_name} ${user.last_name}`}</p>
                                <p className="text-sm">{user.email}</p>
                            </>
                        )}
                    </div>
                    <span
                        className="block tab:hidden hover:cursor-pointer"
                        onClick={() => {
                            setIsopen((oldstate) => !oldstate);
                        }}
                    >
                        <svg //hamburger
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#242254"
                            className="w-8 h-8 text-white hover:cursor-pointer"
                        >
                            <path
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
