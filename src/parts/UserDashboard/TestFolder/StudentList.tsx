import StudentDetails from './data.json';
import CrossMark from '../../../assets/CrossMark.png';
import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import stringAvatar from '../../../utlis/AvatarColor/avatar_color';
import { ProgressBar } from '../../../utlis/ProgressBar/ProgressBar';

interface StudentListType {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    recent_course: string;
    avatar: string;
    total_lessons: number;
    completed_lessons: number;
}

const StudentList: React.FC = () => {
    // takes Students data for display
    const [data, setData] = useState<StudentListType[]>([]);
    // stores page number for pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    // stores number of items to be displayed per page
    const itemsPerPage: number = 5;
    // stores seach queries
    const [searchQuery, setSearchQuery] = useState<string>('');
    // const [querry,setQuery]=useState<string>('')

    useEffect(() => {
        const fetchLocalData = () => {
            // Simulated filtering and pagination with local data (data.json)
            let filteredData = StudentDetails;

            if (searchQuery) {
                const lowerSearchQuery = searchQuery.toLowerCase();
                filteredData = StudentDetails.filter(
                    (post) =>
                        post.first_name
                            .toLowerCase()
                            .includes(lowerSearchQuery) ||
                        post.last_name
                            .toLowerCase()
                            .includes(lowerSearchQuery) ||
                        post.email.toString() === searchQuery,
                );
            }

            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const paginatedData = filteredData.slice(startIndex, endIndex);

            setData(paginatedData);
        };
        fetchLocalData();
    }, [currentPage, searchQuery]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        const totalPages = Math.ceil(StudentDetails.length / itemsPerPage);

        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to the first page when searching.
    };

    return (
        <div className="p-2 flex flex-col gap-6">
            {/* Search box */}
            <div className="w-full">
                <input
                    type="search"
                    placeholder="Search Students by name or email"
                    className=" focus:outline-none w-full px-2 py-1 text-sm lg:text-base bg-gray-200/80 border border-theme-color/50 rounded-lg"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            {/* Display students list */}
            <div className="flex flex-col gap-2 justify-center">
                {data.map((detail) => (
                    <div
                        key={detail.id}
                        className=" odd:bg-stone-200/50 py-2 flex flex-row items-center gap-4 md:gap-8"
                    >
                        <div className="w-6 h-6">
                            <img
                                src={CrossMark}
                                alt="crossmark"
                                width="24px"
                                height="24px"
                            />
                        </div>
                        <div className="grid grid-cols-3 justify-items-start items-center w-full">
                            <div className="col-span-1 flex flex-row gap-2 items-center w-fit ">
                                {/* Avatar image */}
                                <div className="cursor-pointer">
                                    <Avatar
                                        {...stringAvatar(
                                            `${detail.first_name} ${detail.last_name}`,
                                            50,
                                            50,
                                        )}
                                    />
                                    {/* Avatar for image if available */}
                                    {/* <Avatar
                                    alt="Apple Sharp"
                                    src="/static/images/avatar/1.jpg"
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        }}
                                /> */}
                                </div>
                                <div className="flex flex-col w-fit gap-0.5 justify-center">
                                    <span className="text-base font-semibold">
                                        {detail.first_name} {detail.last_name}
                                    </span>
                                    <span className="text-sm">
                                        {detail.email}
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col gap-1 justify-center">
                                <span className="text-base font-semibold">
                                    Recent Course
                                </span>
                                <span className="text-s max-w-[250px] overflow-hidden">
                                    {detail.recent_course}
                                </span>
                            </div>
                            <div className="col-span-1 flex flex-col w-fit gap-1 justify-center">
                                <ProgressBar
                                    completedLessons={detail.completed_lessons}
                                    totalLessons={detail.total_lessons}
                                />
                                <div className="text-lg">
                                    {detail.completed_lessons}/
                                    {detail.total_lessons} Lessons Completed
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={handlePrevPage}
                    className="px-4 py-2 mx-2"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    className="px-4 py-2 mx-2"
                    disabled={
                        currentPage * itemsPerPage >= StudentDetails.length
                    }
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default StudentList;
