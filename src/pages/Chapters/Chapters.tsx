import ChapterDetail from '../../parts/PartsChapters/ChapterDetail';
import Sidebar from '../../parts/PartsChapters/Sidebar';

export default function Chapters() {
    return (
        <div className="grid grid-cols-4 h-[90vh]">
            <div className="col-span-1 w-full">
                <Sidebar />
            </div>
            <div className="col-span-3 w-full relative">
                <ChapterDetail />
            </div>
        </div>
    );
}
