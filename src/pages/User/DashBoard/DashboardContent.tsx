import BoardBox from '../../../parts/UserDashboard/Boxes/BoardBox';
import Enrolled from '../../../assets/Enrolled.png';
import Active from '../../../assets/Active.png';
import Completed from '../../../assets/Completed.png';
import Book from '../../../assets/Book.png';

function DashboardContent() {
    return (
        <>
            <div>
                <div className="flex flex-col gap-4 w-full text-theme-color">
                    {/* First row : Enrolled, Active and Completed courses and Books uploaded by User */}
                    <div className="flex flex-row w-full gap-3 justify-start">
                        {/* TODO fetch number for each BoardBox as of User from backend */}
                        <BoardBox
                            icon={Enrolled}
                            text="Enrolled Courses"
                            number={1}
                        />
                        <BoardBox
                            icon={Active}
                            text="Active Courses"
                            number={5}
                        />
                        <BoardBox
                            icon={Completed}
                            text="Completed Courses"
                            number={3}
                        />
                        <BoardBox
                            icon={Book}
                            text="Books Uploaded"
                            number={7}
                        />
                    </div>
                    {/* Second row : Active courses section */}
                    <div className="flex flex-col items-start">
                        <h1 className="text-2xl font-bold">
                            Continue Learning
                        </h1>
                        <div className="grid col-auto"></div>
                    </div>

                    {/* Third row : Books uploaded by user */}
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default DashboardContent;
