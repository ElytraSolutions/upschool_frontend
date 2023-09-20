import SettingBoardBox from '../../../parts/UserDashboard/Boxes/SettingBoardBox';
import TeacherIcon from '../../../assets/TeacherIcon.png';
import Active from '../../../assets/Active.png';
import AddIcon from '../../../assets/AddIcon.png';
import { TeacherPersonalInformation as PersonalInformation } from '../../../parts/UserDashboard/Forms/TeacherPersonalInformation';

import { useState } from 'react';
import { TeacherBillingDetails as BillingDetails } from '../../../parts/UserDashboard/Forms/TeacherBiilingDetails';
import { TeacherChangePassword as ChangePassword } from '../../../parts/UserDashboard/Forms/TeacherChangePassword';
import StudentList from '../../../parts/UserDashboard/TestFolder/StudentList';
function Setting() {
    const [selectedOption, setSelectedOption] = useState<string>('My Profile');
    return (
        <div>
            <div className="flex flex-col gap-8 w-full text-theme-color">
                <div className="flex flex-row w-full gap-3 justify-start h-full">
                    <SettingBoardBox
                        icon={TeacherIcon}
                        text={['Teacher Account', '', 'TeacherIcon']}
                    />
                    <SettingBoardBox
                        icon={Active}
                        text={['', 'students', 'Active']}
                        number={295} // TODO fetch number of students from backend
                    />
                    <SettingBoardBox
                        icon={AddIcon}
                        text={['', 'Add student(s)', 'AddIcon']}
                    />
                </div>
                {/* options */}
                <div className="flex flex-row justify-start w-full gap-4 text-lg md:text-xl lg:text-2xl">
                    {/* My Profile */}
                    <div className="flex flex-col w-fit  gap-2">
                        <div
                            className={`${
                                selectedOption === 'My Profile'
                                    ? 'text-theme-color'
                                    : 'text-gray-400'
                            } hover:cursor-pointer w-full text-center px-1 sm:px-4 md:px-6 lg:px-10`}
                            onClick={() => setSelectedOption('My Profile')}
                        >
                            My Profile
                        </div>
                        <div
                            className={`w-full h-1 ${
                                selectedOption === 'My Profile'
                                    ? 'bg-theme-color'
                                    : 'bg-gray-400'
                            }`}
                        ></div>
                    </div>
                    {/*Students */}
                    <div className="flex flex-col w-fit gap-2 ">
                        <div
                            className={`${
                                selectedOption === 'Students'
                                    ? 'text-theme-color'
                                    : 'text-gray-400'
                            } hover:cursor-pointer text-center w-full px-1 sm:px-4 md:px-6 lg:px-10`}
                            onClick={() => setSelectedOption('Students')}
                        >
                            {/* TODO fetch number form backend */}
                            Students (3)
                        </div>
                        <div
                            className={`w-full h-1 ${
                                selectedOption === 'Students'
                                    ? 'bg-theme-color'
                                    : 'bg-gray-400'
                            }`}
                        ></div>
                    </div>
                </div>
                {/* Detail section */}
                <div className="w-full xl:w-10/12">
                    {/* My Profile section */}
                    {selectedOption === 'My Profile' && (
                        <div className="flex flex-col gap-12">
                            <PersonalInformation />
                            <BillingDetails />
                            <ChangePassword />
                        </div>
                    )}
                    {/* Students section */}
                    {selectedOption === 'Students' && (
                        <div className=" ">
                            {/* TODO fetch Students data from backend and use it inside this componet */}
                            <StudentList />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Setting;
