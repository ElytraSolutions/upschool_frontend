import { NavLink } from 'react-router-dom';
// import { ProgressBar } from '../../../utlis/ProgressBar/ProgressBar';

// TODO change type as requrired variables
type CourseBoxCompletedProps = {
    detail: {
        id: string;
        name: string;
        slug: string;
        image: string;
    };
};
export default function CourseBoxCompleted({
    detail,
}: CourseBoxCompletedProps) {
    return (
        <>
            <div>
                <div className="p-4 bg-white h-full w-fit">
                    <div className="flex flex-col h-full w-full gap-4 justify-between">
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex justify-center">
                                <img
                                    src={
                                        detail.image.length > 0
                                            ? detail.image
                                            : 'https://source.unsplash.com/tloFnD-7EpI'
                                    }
                                    alt={detail.name}
                                    width="350"
                                    height="250"
                                    className=" bg-stone-300"
                                />
                            </div>

                            <h1 className=" text-base sm:text-lg md:text-xl font-bold font-lexend text-font-color">
                                {detail.name}
                            </h1>
                        </div>
                        <div className="flex flex-col w-full gap-4">
                            {/* Progess Section */}
                            {/* <div className="flex flex-col w-full gap-1">
                                <div className="text-base sm:text-lg">
                                    {detail.CompletedLessons}/
                                    {detail.TotalLessons} Lessons
                                </div>
                                <ProgressBar
                                    completedLessons={detail.CompletedLessons}
                                    totalLessons={detail.TotalLessons}
                                />
                            </div> */}
                            {/* TODO link to 'Revisit Course' or 'Get Certificate' is nedded */}
                            <div className="flex flex-wrap gap-3 justify-center">
                                <NavLink
                                    to={'/'}
                                    className="text-white bg-theme-color px-4 py-2 w-fit"
                                >
                                    Revisit Course
                                </NavLink>
                                <NavLink
                                    to={'/'}
                                    className="text-white bg-theme-color px-4 py-2 w-fit"
                                >
                                    Get Certificate
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
