import React, { useState } from 'react';
import DashboardContent from './DashboardContent';
import MyCourses from './MyCourses';
import MyBooks from './MyBooks';
import MyDonationsAndPurchases from './MyDonationsAndPurchases';
import Logout from './Logout';
import Setting from './Setting';
import { useOutletContext } from 'react-router-dom';
import { UserDashboardSidebar as Sidebar } from '../../../parts/UserDashboard/UserDashboardSidebar';
import useScreenWidth from '../../../hooks/useScreenWidth';
interface DashboardProps {}

type OutletContextType = {
    isDashboardNavbarOpen: boolean;
};
const Dashboard: React.FC<DashboardProps> = () => {
    const { isTabScreen } = useScreenWidth();

    const { isDashboardNavbarOpen } = useOutletContext<OutletContextType>();
    const [selectedOption, setSelectedOption] = useState<string>('Dashboard');

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className="flex fixed h-[90vh] w-full">
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
            <div className=" w-full tab:w-4/5 bg-[#cecece]/20 p-4 pt-8 lg:w-5/6">
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
