import { useEffect, useState } from 'react';
import ChapterDetail from '../../parts/PartsChapters/ChapterDetail';
import Sidebar from '../../parts/PartsChapters/Sidebar';
import useScreenWidth from '../../hooks/useScreenWidth';

export default function Chapters() {
    const { isBigScreen } = useScreenWidth();
    const [isSidebarOpen, setIsSiderbarOpen] = useState<boolean>(true);
    useEffect(() => {
        if (isBigScreen) {
            setIsSiderbarOpen(true);
        } else {
            setIsSiderbarOpen(false);
        }
    }, [isBigScreen]);

    return (
        <div className="grid  grid-cols-2 xm:grid-cols-5 lg:grid-cols-4 h-[90vh] mb-6">
            {isSidebarOpen && (
                <div className=" grid-col-1 xm:col-span-2 lg:col-span-1 w-full pb-5 h-[90vh]">
                    <Sidebar />
                </div>
            )}
            <div
                className={`${
                    isSidebarOpen
                        ? ' col-span-1 xm:col-span-3'
                        : 'col-span-5 lg:col-span-4'
                } w-full relative h-[90vh]`}
            >
                <ChapterDetail
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSiderbarOpen}
                />
            </div>
        </div>
    );
}
