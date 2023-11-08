import React, { useState } from 'react';
import DashboardContent from './DashboardContent';
import MyCourses from './MyCourses';
import MyBooks from './MyBooks';
import MyDonationsAndPurchases from './MyDonationsAndPurchases';
import Setting from './Setting';
import { useOutletContext } from 'react-router-dom';
import { UserDashboardSidebar as Sidebar } from '../../../parts/UserDashboard/UserDashboardSidebar';
import useScreenWidthAndHeight from '../../../hooks/useScreenWidthAndHeight';

interface DashboardProps {}

type OutletContextType = {
    isDashboardNavbarOpen: boolean;
};

const Dashboard: React.FC<DashboardProps> = () => {
    const { isTabScreen } = useScreenWidthAndHeight();

    const { isDashboardNavbarOpen } = useOutletContext<OutletContextType>();
    const [selectedOption, setSelectedOption] = useState<string>('Dashboard');

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className={`flex h-screen w-full pt-[3rem] md:pt-[4rem]`}>
            {/* Sidebar */}
            {isTabScreen ? (
                <Sidebar
                    selectedOption={selectedOption}
                    handleClick={handleOptionClick}
                />
            ) : (
                isDashboardNavbarOpen && (
                    <Sidebar
                        selectedOption={selectedOption}
                        handleClick={handleOptionClick}
                    />
                )
            )}

            {/* Content */}
            <div className=" h-full w-full tab:ml-[20%] tab:w-4/5 bg-[#cecece]/20  lg:ml-[17%] lg:w-[83%]">
                {/* p-2 md:px-4 xlarge:px-6 xxlarge:px-8 h-full w-full */}

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
            </div>
        </div>
    );
};

export default Dashboard;
