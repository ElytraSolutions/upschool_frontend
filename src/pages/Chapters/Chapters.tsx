import { useEffect, useState } from 'react';
import ChapterDetail from '../../parts/PartsChapters/ChapterDetail';
import Sidebar from '../../parts/PartsChapters/Sidebar';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';

export default function Chapters() {
    const { isBigScreen } = useScreenWidthAndHeight();
    const [isSidebarOpen, setIsSiderbarOpen] = useState<boolean>(true);
    useEffect(() => {
        if (isBigScreen) {
            setIsSiderbarOpen(true);
        } else {
            setIsSiderbarOpen(false);
        }
    }, [isBigScreen]);

    return (
        <div className="mb-6  grid h-[90vh] grid-cols-2 xm:grid-cols-5 lg:grid-cols-4">
            {isSidebarOpen && (
                <div className=" h-[90vh] w-full pb-5 xm:col-span-2 lg:col-span-1">
                    <Sidebar />
                </div>
            )}
            <div
                className={`${
                    isSidebarOpen
                        ? ' col-span-1 xm:col-span-3'
                        : 'col-span-5 lg:col-span-4'
                } relative h-[90vh] w-full`}
            >
                <ChapterDetail
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSiderbarOpen}
                />
            </div>
        </div>
    );
}
