import { NavLink } from 'react-router-dom';

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
    // TODO implement better logic if possible
    const widthCalculate = () => {
        const calculate = Math.floor(
            (detail.completedLessons / detail.totalLessons) * 100,
        );
        if (calculate < 10) return 'w-[5%]';
        else if (calculate < 20) return 'w-[12%]';
        else if (calculate < 30) return 'w-[22%]';
        else if (calculate < 40) return 'w-[32%]';
        else if (calculate < 50) return 'w-[42%]';
        else if (calculate < 60) return 'w-[52%]';
        else if (calculate < 70) return 'w-[62%]';
        else if (calculate < 80) return 'w-[72%]';
        else if (calculate < 90) return 'w-[82%]';
        else if (calculate < 100) return 'w-[92%]';
        else if (calculate === 100) return 'w-[100%]';
        else return 'w-0';
    };
    const width = widthCalculate();
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
                        <div className="bg-slate-400 rounded-lg h-2">
                            <div
                                className={`bg-theme-color h-2 rounded-lg ${width}`}
                            ></div>
                        </div>
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
