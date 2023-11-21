import { useState } from 'react';
import SettingBoardBox from '../../../parts/UserDashboard/Boxes/SettingBoardBox';
import AddStudentsBox from '../../../parts/UserDashboard/Boxes/AddStudentsBox';
import { PersonalInformation } from '../../../parts/UserDashboard/Forms/PersonalInformation';
import { BillingDetails } from '../../../parts/UserDashboard/Forms/BiilingDetails';
import { ChangePassword } from '../../../parts/UserDashboard/Forms/ChangePassword';
import StudentList from '../../../parts/UserDashboard/StudentList/StudentList';
import resolveImgURL from '../../../utlis/resolveImgURL';
import useUser from '../../../hooks/useUser';

function Setting() {
    // TODO logic to determine whether user is (Teacher/Student/Parent)
    const { user } = useUser();
    // console.log('User', user);
    const userType: string = user?.type.name.split(' ')[0] as string;
    const iconBadge = resolveImgURL(user?.type.image as string);
    const [selectedOption, setSelectedOption] = useState<string>('My Profile');
    return (
        <div className="h-full overflow-auto">
            <div className="p-2 md:py-4 md:px-4 xlarge:px-6 xxlarge:px-8 w-full">
                <div className="flex flex-col gap-8 w-full text-theme-color">
                    <div className="flex flex-col xs:flex-row w-full gap-3 xs:justify-start h-full">
                        <SettingBoardBox
                            icon={iconBadge}
                            text={[`${userType} Account`, '']}
                        />

                        {/* displays only if account/user is  'Teacher' */}
                        {userType === 'School Teacher' && (
                            <>
                                <SettingBoardBox
                                    icon={resolveImgURL(
                                        '/images/Dashboard/Active.png',
                                    )}
                                    text={['', 'students']}
                                    number={295} // TODO fetch number of students from backend
                                />
                                <AddStudentsBox
                                    icon={resolveImgURL(
                                        '/images/Dashboard/AddIcon.png',
                                    )}
                                    text={'Add student(s)'}
                                />
                            </>
                        )}
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
                                } hover:cursor-pointer w-full text-center px-1 sm:px-4 md:px-6 lg:px-10 font-lexend`}
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
                        {/* displays only if account/user is  'Teacher' */}
                        {/*Students */}
                        {userType === 'School Teacher' && (
                            <div className="flex flex-col w-fit gap-2 ">
                                <div
                                    className={`${
                                        selectedOption === 'Students'
                                            ? 'text-theme-color'
                                            : 'text-gray-400'
                                    } hover:cursor-pointer text-center w-full px-1 sm:px-4 md:px-6 lg:px-10 font-lexend`}
                                    onClick={() =>
                                        setSelectedOption('Students')
                                    }
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
                        )}
                    </div>
                    {/* Detail section */}
                    <div className="w-full xl:w-10/12">
                        {/* My Profile section */}
                        {selectedOption === 'My Profile' && (
                            <div className="flex flex-col gap-12">
                                <PersonalInformation user={user} />
                                <BillingDetails />
                                <ChangePassword />
                            </div>
                        )}
                        {/* displays only if account/user is  'Teacher' */}
                        {/* Students section */}
                        {userType === 'School Teacher' &&
                            selectedOption === 'Students' && (
                                <div className=" ">
                                    {/* TODO fetch Students data from backend and use it inside this componet */}
                                    <StudentList />
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;
