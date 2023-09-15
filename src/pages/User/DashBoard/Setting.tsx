import SettingBoardBox from '../../../parts/UserDashboard/Boxes/SettingBoardBox';
import TeacherIcon from '../../../assets/TeacherIcon.png';
import Active from '../../../assets/Active.png';
import AddIcon from '../../../assets/AddIcon.png';
function Setting() {
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
            </div>
        </div>
    );
}

export default Setting;
