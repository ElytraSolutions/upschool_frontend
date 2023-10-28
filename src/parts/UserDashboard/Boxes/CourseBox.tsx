import { NavLink } from 'react-router-dom';
import { ProgressBar } from '../../../utlis/ProgressBar/ProgressBar';

// TODO change type as requrired variables
type CourseBoxProps = {
    detail: {
        id: number;
        name: string;
        completedLessons: number;
        totalLessons: number;
        image: string;
        url: string;
        status?: string;
    };
};
export default function CourseBox({ detail }: CourseBoxProps) {
    return (
        <>
            <div>
                <div className="p-4 bg-white h-full w-fit">
                    <div className="flex flex-col h-full w-full gap-4 justify-between">
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex justify-center">
                                <img
                                    src={detail.image}
                                    alt={detail.name}
                                    width="350"
                                    height="250"
                                />
                            </div>

                            <h1 className=" text-base sm:text-lg md:text-xl font-bold font-lexend text-font-color">
                                {detail.name}
                            </h1>
                        </div>
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex flex-col w-full gap-1">
                                <div className="text-base sm:text-lg">
                                    {detail.completedLessons}/
                                    {detail.totalLessons} Lessons
                                </div>
                                <ProgressBar
                                    completedLessons={detail.completedLessons}
                                    totalLessons={detail.totalLessons}
                                />
                            </div>

                            <NavLink
                                to={detail.url}
                                className="text-white bg-theme-color px-4 py-2 w-fit"
                            >
                                Continue Learning
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
