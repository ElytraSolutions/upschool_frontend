import { NavLink } from 'react-router-dom';
import FileIcon from '../../assets/FileIcon.png';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from 'react';
import axiosInstance from '../../config/Axios';

type ISidebarProps = {
    courseSlug: string | undefined;
    chapter: {
        id: number;
        created_at: Date;
        updated_at: Date;
        name: string;
        slug: string;
        description: string;
        course_id: number;
        active: boolean;
    };
};

export default function SidebarContent({ courseSlug, chapter }: ISidebarProps) {
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    useEffect(() => {
        (async () => {
            const res = await axiosInstance.get(
                `/data/chapters/${chapter.slug}/checkCompletion`,
            );
            setIsCompleted(res.data.data);
        })();
    }, []);
    return (
        <div className="flex flex-col text-sm sm:text-sm md:text-base">
            <div className="flex flex-row justify-between bg-blue-950 text-white py-5 px-4">
                <span>{chapter.name}</span>
                <span>3/10</span> {/*TODO Logic Required */}
            </div>
            <ul className=" divide-y divide-slate-400 border-b mb-7 border-slate-400 bg-slate-200">
                {[chapter.name].map((title, index) => (
                    <li
                        key={index}
                        className="flex  justify-between items-center py-2 bg-slate-200 gap-7 w-full text-sm px-2"
                    >
                        <NavLink
                            to={`/course/${courseSlug}/chapter/${chapter.slug}`}
                        >
                            <div className="flex flex-row gap-1 lg:gap-2  2xl:gap-3 items-center justify-start p-2  ">
                                <span className="h-8 w-8 rounded-full bg-blue-950 flex justify-center items-center">
                                    <img
                                        src={FileIcon}
                                        alt="file"
                                        height="20"
                                        width="20"
                                        className="relative"
                                    />
                                </span>
                                <span>{title}</span>
                            </div>
                        </NavLink>

                        {/* TODO Logic for tick mark */}

                        <div className="bg-red-600 h-5 w-5 rounded-full ">
                            {/* TODO tick mark */}
                            {isCompleted && (
                                <DoneIcon
                                    className="text-white"
                                    fontSize="small"
                                />
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
