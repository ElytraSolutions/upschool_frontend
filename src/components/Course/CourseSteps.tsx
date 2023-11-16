import { Link } from 'react-router-dom';
import resolveImgURL from '../../utlis/resolveImgURL';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import useUser from '../../hooks/useUser';

function CourseSteps({ steps, theme }) {
    const { user } = useUser();
    return (
        <>
            <div className="flex w-full justify-center">
                <div className="grid max-w-[550px]">
                    <div className="grid gap-4">
                        <p
                            className="text-[38px] text-center font-extrabold"
                            style={{ color: theme }}
                        >
                            Main Objectives of the Course
                        </p>
                        {/*insert the objective content here*/}
                    </div>
                    {Object.values(steps).map((step: any, index) => (
                        <div
                            key={index}
                            className="grid border-b-2 border-gray-200"
                        >
                            <img
                                src={resolveImgURL(step.image)}
                                alt={`Step ${index + 1}`}
                                className="mt-8 mb-6"
                            />
                            <div className="text-theme-color text-lg font-bold mt-6 mb-8">
                                {step.data}
                            </div>
                        </div>
                    ))}
                    <div className="grid gap-y-4 text-lg font-bold text-theme-color mb-4">
                        <img
                            src={resolveImgURL(
                                './images/Course/upschool-and-aurora.png',
                            )}
                            alt="aurora"
                        />
                        {user === null && (
                            <div className="grid gap-y-2">
                                <div className="flex justify-center my-2">
                                    <Link to="/register">
                                        <button
                                            className={`rounded-sm font-thin text-white text-[18px] px-11 py-2`}
                                            style={{
                                                backgroundColor: theme,
                                            }}
                                        >
                                            REGISTER
                                            <span>
                                                <KeyboardArrowRightIcon />
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                                <p className="text-center">
                                    Register for a FREE Upschool account to
                                    enrol in this course.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseSteps;
