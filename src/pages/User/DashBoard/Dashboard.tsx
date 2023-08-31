import React, { useState } from 'react';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
    const [selectedOption, setSelectedOption] = useState<string>('Dashboard');

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="md:w-1/5 p-4 border text-[#cecece] xl:w-1/6">
                <ul className="mt-4 flex flex-col gap-4">
                    <li
                        className=" cursor-pointer p-2 border-2 border-white hover:text-[#242254] hover:border-[#242254] rounded-lg"
                        onClick={() => handleOptionClick('Dashboard')}
                    >
                        {' '}
                        <i className="fa fa-dashboard"></i> Dashboard
                    </li>
                    <li
                        className=" cursor-pointer p-2 border-2 border-white hover:text-[#242254] hover:border-[#242254] rounded-lg"
                        onClick={() => handleOptionClick('My Courses')}
                    >
                        {' '}
                        <i className="fa fa-desktop"></i> My Courses
                    </li>
                    <li
                        className=" cursor-pointer p-2 border-2 border-white hover:text-[#242254] hover:border-[#242254] rounded-lg"
                        onClick={() => handleOptionClick('My Books')}
                    >
                        <i className="fa fa-book"></i> My Books
                    </li>
                    <li
                        className=" cursor-pointer p-2 border-2 border-white hover:text-[#242254] hover:border-[#242254] rounded-lg"
                        onClick={() =>
                            handleOptionClick('My Donations & Purchase')
                        }
                    >
                        <i className="fa fa-table"></i> My Donations & Purchase
                    </li>
                    <li
                        className=" cursor-pointer p-2 border-2 border-white hover:text-[#242254] hover:border-[#242254] rounded-lg"
                        onClick={() => handleOptionClick('Setting')}
                    >
                        <i className="fa fa-gear"></i> Setting
                    </li>
                    <li
                        className=" cursor-pointer p-2 border-2 border-white hover:text-[#242254] hover:border-[#242254] rounded-lg"
                        onClick={() => handleOptionClick('Logout')}
                    >
                        <i className="fa fa-power-off"></i> Logout
                    </li>
                </ul>
            </div>

            {/* Content */}
            <div className="w-4/5 lg:w-5/6 p-4 bg-[#cecece]">
                <h1 className="text-2xl">{selectedOption}</h1>
                {/* Content specific to the selected option */}
                {selectedOption === 'Dashboard' && (
                    <p>Dashboard content goes here.</p>
                )}
                {selectedOption === 'My Courses' && (
                    <p>My Courses content goes here.</p>
                )}
                {selectedOption === 'My Books' && (
                    <p>My Books content goes here.</p>
                )}
                {selectedOption === 'My Donations & Purchase' && (
                    <p>My Donations & Purchase content goes here.</p>
                )}
                {selectedOption === 'Setting' && (
                    <p>Setting content goes here.</p>
                )}
                {selectedOption === 'Logout' && (
                    <p>Logout content goes here.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
