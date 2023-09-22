import React, { useState } from 'react';
import DashboardContent from './DashboardContent';
import MyCourses from './MyCourses';
import MyBooks from './MyBooks';
import MyDonationsAndPurchases from './MyDonationsAndPurchases';
import Logout from './Logout';
import Setting from './Setting';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
    const [selectedOption, setSelectedOption] = useState<string>('Dashboard');

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="border p-4 text-[#cecece] md:w-1/5 xl:w-1/6">
                <ul className="mt-4 flex flex-col gap-4">
                    <li
                        className={`flex cursor-pointer flex-row items-center gap-3 rounded-lg border-2 border-white p-2 ${
                            selectedOption === 'Dashboard'
                                ? 'border-[#242254] text-[#242254]'
                                : 'hover:border-[#242254] hover:text-[#242254]'
                        }`}
                        onClick={() => handleOptionClick('Dashboard')}
                    >
                        {' '}
                        <i className="fa fa-dashboard"></i> Dashboard
                    </li>
                    <li
                        className={`flex cursor-pointer flex-row items-center gap-3 rounded-lg border-2 border-white p-2 ${
                            selectedOption === 'My Courses'
                                ? 'border-[#242254] text-[#242254]'
                                : 'hover:border-[#242254] hover:text-[#242254]'
                        }`}
                        onClick={() => handleOptionClick('My Courses')}
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
                        onClick={() => handleOptionClick('My Books')}
                    >
                        <i className="fa fa-book"></i> My Books
                    </li>
                    <li
                        className={`flex cursor-pointer flex-row items-center gap-3 rounded-lg border-2 border-white p-2 ${
                            selectedOption === 'My Donations & Purchase'
                                ? 'border-[#242254] text-[#242254]'
                                : 'hover:border-[#242254] hover:text-[#242254]'
                        }`}
                        onClick={() =>
                            handleOptionClick('My Donations & Purchase')
                        }
                    >
                        <i className="fa fa-table"></i> My Donations & Purchase
                    </li>
                    <li
                        className={`flex cursor-pointer flex-row items-center gap-3 rounded-lg border-2 border-white p-2 ${
                            selectedOption === 'Setting'
                                ? 'border-[#242254] text-[#242254]'
                                : 'hover:border-[#242254] hover:text-[#242254]'
                        }`}
                        onClick={() => handleOptionClick('Setting')}
                    >
                        <i className="fa fa-gear"></i> Setting
                    </li>
                    <li
                        className={`flex cursor-pointer flex-row items-center gap-3 rounded-lg border-2 border-white p-2 ${
                            selectedOption === 'Logout'
                                ? 'border-[#242254] text-[#242254]'
                                : 'hover:border-[#242254] hover:text-[#242254]'
                        }`}
                        onClick={() => handleOptionClick('Logout')}
                    >
                        <i className="fa fa-power-off"></i> Logout
                    </li>
                </ul>
            </div>

            {/* Content */}
            <div className="h-screen w-4/5 bg-[#cecece]/20 p-4 pt-8 lg:w-5/6">
                {/* Content specific to the selected option */}
                {selectedOption === 'Dashboard' && (
                    <DashboardContent handleOptionClick={handleOptionClick} />
                )}
                {selectedOption === 'My Courses' && <MyCourses />}
                {selectedOption === 'My Books' && <MyBooks />}
                {selectedOption === 'My Donations & Purchase' && (
                    <MyDonationsAndPurchases />
                )}
                {selectedOption === 'Setting' && <Setting />}
                {selectedOption === 'Logout' && <Logout />}
            </div>
        </div>
    );
};

export default Dashboard;
