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
            <div className="p-4 bg-white w-fit">
                <div className="flex flex-col w-full gap-4">
                    <div className="flex justify-center">
                        <img
                            src={detail.image}
                            alt={detail.name}
                            width="350px"
                            height="250px"
                        />
                    </div>

                    <h1 className="text-xl font-bold">{detail.name}</h1>
                    <div className="flex flex-col w-full gap-1">
                        <div className="text-lg">
                            {detail.completedLessons}/{detail.totalLessons}{' '}
                            Lessons
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
        </>
    );
}
