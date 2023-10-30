import { NavLink } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import IChapter from '../../types/IChapter';
import resolveImgURL from '../../utlis/resolveImgURL';

type ISidebarProps = {
    courseSlug: string | undefined;
    chapter: IChapter;
};

export default function SidebarContent({ courseSlug, chapter }: ISidebarProps) {
    return (
        <div className="flex flex-col text-sm sm:text-sm md:text-base">
            <div className="flex flex-row justify-between bg-[#1e3050] text-white py-5 px-4">
                <span>{chapter.name}</span>
                <span>
                    {chapter.completedLessons}/{chapter.totalLessons}
                </span>{' '}
                {/*TODO Logic Required */}
            </div>
            <ul className=" divide-y divide-slate-400 border-b mb-7 border-slate-400 bg-slate-200">
                {chapter.lessons &&
                    chapter.lessons.map((lesson, index) => (
                        <li
                            key={index}
                            className="flex  justify-between items-center py-2 bg-slate-200 gap-7 w-full text-sm px-2"
                        >
                            <NavLink
                                to={`/course/${courseSlug}/${chapter.slug}/${lesson.slug}`}
                            >
                                <div className="flex flex-row gap-1 lg:gap-2  2xl:gap-3 items-center justify-start p-2  ">
                                    <span className="h-8 w-8 rounded-full bg-[#242254] flex justify-center items-center">
                                        <img
                                            src={resolveImgURL(
                                                '/images/FileIcon.png',
                                            )}
                                            alt="file"
                                            height="20"
                                            width="20"
                                            className="relative"
                                        />
                                    </span>
                                    <span>{lesson.name}</span>
                                </div>
                            </NavLink>

                            {/* TODO Logic for tick mark */}

                            <div className="bg-red-600 h-5 w-5 rounded-full ">
                                {/* TODO tick mark */}
                                {lesson.isCompleted && (
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
