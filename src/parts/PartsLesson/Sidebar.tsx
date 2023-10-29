import IChapter from '../../types/IChapter';
import resolveImgURL from '../../utlis/resolveImgURL';
import SidebarContent from './SidebarContent';

type SidebarProps = {
    courseSlug: string | undefined;
    chapters: IChapter[] | null;
};
export default function Sidebar({ courseSlug, chapters }: SidebarProps) {
    return (
        <>
            <div className="flex flex-row justify-center items-center bg-[#b81342] w-full">
                <div className="flex flex-row items-center justify-center text-white w-fit gap-1  h-14">
                    <span className=" ">
                        <img
                            src={resolveImgURL('/OpenBook.png')}
                            width="25"
                            height="25"
                            alt="OpenBook"
                        />
                    </span>
                    <h3 className="text-sm sm:text-sm md:text-base">
                        Lesson List
                    </h3>
                </div>
            </div>
            <div className="overflow-auto h-fit">
                {chapters?.map((chapter) => (
                    <SidebarContent
                        key={chapter.id}
                        chapter={chapter}
                        courseSlug={courseSlug}
                    />
                ))}
            </div>
        </>
    );
}
