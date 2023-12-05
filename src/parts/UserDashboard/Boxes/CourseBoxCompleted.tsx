import axiosInstance from '../../../config/Axios';
import resolveImgURL from '../../../utlis/resolveImgURL';
// import { ProgressBar } from '../../../utlis/ProgressBar/ProgressBar';
import { useNavigate } from 'react-router-dom';

// TODO change type as requrired variables
type CourseBoxCompletedProps = {
    detail: {
        id: string;
        name: string;
        thumbnail: string;
        slug: string;
        image: string;
    };
};
export default function CourseBoxCompleted({
    detail,
}: CourseBoxCompletedProps) {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <div className="p-4 bg-white h-full lg:w-[20rem] md:min-w-[15rem] md:w-[30%] sm:w-[18rem] xm:w-[17rem] w-[20rem]">
                    <div className="flex flex-col h-full w-full gap-4 justify-between">
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex justify-center  w-full h-[15rem]">
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
                        <div className="flex flex-col w-full gap-4 ">
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
                            <div className="flex flex-wrap gap-2 justify-end">
                                <div
                                    onClick={() =>
                                        navigate(`/course/${detail.slug}`)
                                    }
                                    className="text-white text-center bg-theme-color px-4 py-2 w-3/4 cursor-pointer"
                                >
                                    Revisit Course
                                </div>
                                <div
                                    className="text-white text-center bg-theme-color px-4 py-2 w-3/4 cursor-pointer"
                                    onClick={async () => {
                                        const res = await axiosInstance.post(
                                            `/data/courses/${detail.slug}/complete`,
                                        );
                                        console.log(
                                            'Certificate Response',
                                            res.data,
                                        );

                                        res.data.certificate_url.slice(0, 8) ===
                                        'https://'
                                            ? window.open(
                                                  `${res.data.certificate_url}`,
                                                  '_blank',
                                              )
                                            : window.open(
                                                  `https://${res.data.certificate_url}`,
                                                  '_blank',
                                              );

                                        // navigate(
                                        //     `/certificate?course=${encodeURIComponent(
                                        //         detail.name,
                                        //     )}`,
                                        // );
                                    }}
                                >
                                    Get Certificate
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
