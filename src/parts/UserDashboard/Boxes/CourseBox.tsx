import { ProgressBar } from '../../../utlis/ProgressBar/ProgressBar';
import resolveImgURL from '../../../utlis/resolveImgURL';
import { useNavigate } from 'react-router-dom';

// TODO change type as requrired variables

export default function CourseBox({ detail }) {
    console.log('Course Box Detail', detail);
    const navigate = useNavigate();
    return (
        <>
            <div>
                <div className="p-4 bg-white h-full w-full max-w-[26rem]">
                    <div className="flex flex-col h-full w-full gap-4 justify-between">
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex justify-center h-[10rem] sm:h-[15rem]">
                                <img
                                    className="w-full h-full object-cover"
                                    src={
                                        detail.thumbnail
                                            ? resolveImgURL(detail.thumbnail)
                                            : 'https://source.unsplash.com/random'
                                    }
                                    alt={detail.name}
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

                            <div
                                onClick={() =>
                                    navigate(`/course/${detail.slug}`)
                                }
                                className="text-white bg-theme-color px-4 py-2 w-fit cursor-pointer"
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
