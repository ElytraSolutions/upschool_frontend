// import { NavLink } from 'react-router-dom';
import { ProgressBar } from '../../../utlis/ProgressBar/ProgressBar';
import resolveImgURL from '../../../utlis/resolveImgURL';
import { useNavigate } from 'react-router-dom';

// TODO change type as requrired variables
type CourseBoxEnrolledProps = {
    detail: {
        name: string;
        slug: string;
        thumbnail: string;
        image: string;
        CompletedLessons: number;
        TotalLessons: number;
    };
};
export default function CourseBoxEnrolled({ detail }: CourseBoxEnrolledProps) {
    console.log('Detail Enrolled', detail);
    const navigate = useNavigate();
    return (
        <>
            <div>
                <div className="p-4 bg-white h-full lg:w-[20rem] md:min-w-[15rem] md:w-[30%] sm:w-[18rem] xm:w-[17rem] w-[18rem]">
                    <div className="flex flex-col h-full w-full gap-4 justify-between">
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex justify-center w-full h-[15rem]">
                                <img
                                    src={
                                        detail.thumbnail
                                            ? detail.thumbnail.length > 0
                                                ? resolveImgURL(
                                                      `${detail.thumbnail}`,
                                                  )
                                                : 'https://source.unsplash.com/tloFnD-7EpI'
                                            : 'https://source.unsplash.com/tloFnD-7EpI'
                                    }
                                    alt={detail.name}
                                    width="350"
                                    height="250"
                                    className=" bg-stone-300 w-full h-full object-cover"
                                />
                            </div>

                            <h1 className=" text-base sm:text-lg md:text-xl font-bold font-lexend text-font-color">
                                {detail.name}
                            </h1>
                        </div>
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex flex-col w-full gap-1">
                                <div className="text-base sm:text-lg">
                                    {detail.CompletedLessons}/
                                    {detail.TotalLessons} Lessons
                                </div>
                                <ProgressBar
                                    completedLessons={detail.CompletedLessons}
                                    totalLessons={detail.TotalLessons}
                                />
                            </div>
                            {/* TODO link to 'Continue Learning' or 'Get Certificate' is nedded */}
                            <div
                                className="text-white bg-theme-color px-4 py-2 w-fit cursor-pointer"
                                onClick={() =>
                                    navigate(`/course/${detail.slug}`)
                                }
                            >
                                Continue Learning
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
