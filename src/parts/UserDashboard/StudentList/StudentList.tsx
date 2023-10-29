import StudentDetails from './data.json'; // TODO fetch data from backend

import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import stringAvatar from '../../../utlis/AvatarColor/avatar_color';
import { ProgressBar } from '../../../utlis/ProgressBar/ProgressBar';
import useScreenWidthAndHeight from '../../../hooks/useScreenWidthAndHeight';
import resolveImgURL from '../../../utlis/resolveImgURL';

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
    const { isLargeScreen } = useScreenWidthAndHeight();
    const AvatarHeight = isLargeScreen ? 40 : 30;
    const AvatarWidth = isLargeScreen ? 40 : 30;
    // takes Students data for display
    const [data, setData] = useState<StudentListType[]>([]);
    // stores page number for pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    // stores number of items to be displayed per page
    const itemsPerPage: number = 5;
    // calculates total pages for display
    const [totalPages, setTotalPages] = useState<number>(0);
    // stores seach queries
    const [searchQuery, setSearchQuery] = useState<string>('');

    // runs for filtering and pagination
    useEffect(() => {
        const fetchLocalData = () => {
            // Simulated filtering and pagination with local data (data.json)
            let filteredData = StudentDetails;
            // process if search query is present
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
                // sets total pages for seacrched result data
                setTotalPages(Math.ceil(filteredData.length / itemsPerPage));
            } else {
                // sets total pages whole data
                setTotalPages(Math.ceil(StudentDetails.length / itemsPerPage));
            }

            // sets startIndex and endIndex for the data to be displayed per page from whole data
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
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to the first page when searching.
    };

    return (
        <div className="p-2 flex flex-col gap-6 w-full h-full">
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
            <div className="flex flex-col gap-2 justify-center w-full ">
                {/* Individual student detail */}
                {data.map((detail) => (
                    <div
                        key={detail.id}
                        className=" odd:bg-stone-200/50 py-2 px-1 flex flex-row items-center gap-2  md:gap-4 lg:gap-8 w-full"
                    >
                        {/* CrossMark image */}
                        {/* TODO it should delete the record of student in database and again fetch the updated list of student */}
                        <div className="w-6 h-6">
                            <img
                                src={resolveImgURL('/images/CrossMark.png')}
                                alt="crossmark"
                                width="24"
                                height="24"
                            />
                        </div>
                        {/* Inidividual detail in grid */}
                        <div
                            className={` ${
                                isLargeScreen
                                    ? 'grid grid-cols-3'
                                    : 'grid grid-cols-2'
                            }  w-full gap-1.5 md:gap-3 pr-0.5 md:pr-2 lg:pr-4`}
                        >
                            {/* Avatar , first name , last name and emial */}
                            <div className="col-span-1 flex flex-row gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 items-center w-full ">
                                {/* Avatar image */}
                                <div className="hidden sm:block cursor-pointer">
                                    <Avatar
                                        {...stringAvatar(
                                            `${detail.first_name} ${detail.last_name}`,
                                            AvatarHeight,
                                            AvatarWidth,
                                        )}
                                        style={{ fontSize: '15px' }}
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
                                {/* first name , last name and email */}
                                <div className="flex flex-col w-full gap-0.5 justify-center">
                                    <span className="text-sm md:text-base font-semibold w-full">
                                        {detail.first_name} {detail.last_name}
                                    </span>
                                    <p className="text-sm break-all w-full">
                                        {detail.email}
                                    </p>
                                </div>
                            </div>
                            {/* Name of recent course */}
                            <div className="col-span-1 flex flex-col gap-1 justify-center w-full">
                                <span className="text-sm  md:text-base font-semibold w-full">
                                    Recent Course
                                </span>
                                <span className="text-sm  w-full  ">
                                    {/* max-w-[250px] */}
                                    {detail.recent_course}
                                </span>
                            </div>
                            {/* Progress section of recent course */}
                            {/* is displayed in large screen only */}

                            {isLargeScreen && (
                                <div className="col-span-1 flex flex-col w-full gap-1 justify-center">
                                    <ProgressBar
                                        completedLessons={
                                            detail.completed_lessons
                                        }
                                        totalLessons={detail.total_lessons}
                                    />
                                    <div className=" text-base xl:text-lg w-full">
                                        {detail.completed_lessons}/
                                        {detail.total_lessons} Lessons Completed
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {/* TODO position of buttons needs to be determined */}
            <div className="flex justify-around gap-2">
                <button
                    onClick={handlePrevPage}
                    className="px-4 py-2 bg-theme-color text-white text-sm md:text-base disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    className="px-8 py-2 bg-theme-color text-white text-sm md:text-base disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
            {/* current page and total pages */}
            {/* TODO position and ui  of elements needs to be determined */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center p-1">
                <div className="flex flex-row gap-1 text-sm items-center">
                    <span>Current page</span>
                    <span className="border-theme-color border p-1">
                        {currentPage}
                    </span>
                </div>
                <div className="flex flex-row gap-1 text-sm items-center">
                    <span>Total page</span>
                    <span className="border-theme-color border p-1">
                        {totalPages}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default StudentList;
