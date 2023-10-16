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
    const { isSmallHeight, isTabScreen } = useScreenWidthAndHeight();

    const { isDashboardNavbarOpen } = useOutletContext<OutletContextType>();
    const [selectedOption, setSelectedOption] = useState<string>('Dashboard');

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div
            className={`flex fixed ${
                isSmallHeight ? 'h-[85dvh]' : 'h-[90dvh]'
            }  w-full`}
        >
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
            <div className=" h-full w-full tab:w-4/5 bg-[#cecece]/20 p-4 pt-8 pb-5 lg:w-5/6">
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
