import React from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import CrossMark from '../../assets/CrossMark.png';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';

type SidebarProps = {
    selectedOption: string;
    handleClick: (option: string) => void;
};

type OutletContextType = {
    setIsDashboardNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserDashboardSidebar: React.FC<SidebarProps> = ({
    selectedOption,
    handleClick,
}) => {
    const { isTabScreen } = useScreenWidthAndHeight();
    const { setIsDashboardNavbarOpen } = useOutletContext<OutletContextType>();
    return (
        <>
            <div
                className={`${
                    isTabScreen ? '' : 'absolute z-20'
                }  bg-white border p-4 text-[#cecece] w-[80%]  xs:w-2/3 xm:w-1/3 tab:w-1/5 xl:w-1/6 h-full flex flex-row justify-between  overflow-auto`}
            >
                <ul className="mt-4 flex flex-col gap-4">
                    <li
                        className={`flex cursor-pointer flex-row items-center gap-3 rounded-lg border-2 border-white p-2 ${
                            selectedOption === 'Dashboard'
                                ? 'border-[#242254] text-[#242254]'
                                : 'hover:border-[#242254] hover:text-[#242254]'
                        }`}
                        onClick={() => {
                            handleClick('Dashboard');
                            {
                                !isTabScreen && setIsDashboardNavbarOpen(false);
                            }
                        }}
                    >
                        <i className="fa fa-dashboard"></i> Dashboard
                    </li>
                    <li
                        className={`flex cursor-pointer flex-row items-center gap-3 rounded-lg border-2 border-white p-2 ${
                            selectedOption === 'My Courses'
                                ? 'border-[#242254] text-[#242254]'
                                : 'hover:border-[#242254] hover:text-[#242254]'
                        }`}
                        onClick={() => {
                            handleClick('My Courses');
                            {
                                !isTabScreen && setIsDashboardNavbarOpen(false);
                            }
                        }}
                    >
                        {' '}
                        <i className="fa fa-desktop"></i> My Courses
                    </li>
                    <li
                        className={`flex cursor-pointer flex-row items-center gap-3 rounded-lg border-2 border-white p-2 ${
                            selectedOption === 'My Books'
                                ? 'border-[#242254] text-[#242254]'
                                : 'hover:border-[#242254] hover:text-[#242254]'
                        }`}
                        onClick={() => {
                            handleClick('My Books');
                            {
                                !isTabScreen && setIsDashboardNavbarOpen(false);
                            }
                        }}
                    >
                        <i className="fa fa-book"></i> My Books
                    </li>
                    <li
                        className={`flex cursor-pointer flex-row items-center gap-3 rounded-lg border-2 border-white p-2 ${
                            selectedOption === 'My Donations & Purchase'
                                ? 'border-[#242254] text-[#242254]'
                                : 'hover:border-[#242254] hover:text-[#242254]'
                        }`}
                        onClick={() => {
                            handleClick('My Donations & Purchase');
                            {
                                !isTabScreen && setIsDashboardNavbarOpen(false);
                            }
                        }}
                    >
                        <i className="fa fa-table"></i> My Donations & Purchase
                    </li>
                    <li
                        className={`flex cursor-pointer flex-row items-center gap-3 rounded-lg border-2 border-white p-2 ${
                            selectedOption === 'Setting'
                                ? 'border-[#242254] text-[#242254]'
                                : 'hover:border-[#242254] hover:text-[#242254]'
                        }`}
                        onClick={() => {
                            handleClick('Setting');
                            {
                                !isTabScreen && setIsDashboardNavbarOpen(false);
                            }
                        }}
                    >
                        <i className="fa fa-gear"></i> Setting
                    </li>
                    <li
                        className={`flex cursor-pointer flex-row items-center gap-3 rounded-lg border-2 border-white p-2 ${
                            selectedOption === 'Logout'
                                ? 'border-[#242254] text-[#242254]'
                                : 'hover:border-[#242254] hover:text-[#242254]'
                        }`}
                        onClick={() => {
                            handleClick('Logout');
                            {
                                !isTabScreen && setIsDashboardNavbarOpen(false);
                            }
                        }}
                    >
                        <i className="fa fa-power-off"></i>{' '}
                        <NavLink to="/logout">Logout</NavLink>
                    </li>
                </ul>
                <div
                    className=" block tab:hidden hover:cursor-pointer"
                    onClick={() => setIsDashboardNavbarOpen(false)}
                >
                    <img
                        src={CrossMark}
                        width="40px"
                        height="40px"
                        alt="close"
                    />
                </div>
            </div>
        </>
    );
};
