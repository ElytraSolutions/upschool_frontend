import postData from './data.json';
import React, { useState, useEffect } from 'react';

interface Post {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    recent_course: string;
    avatar: string;
    total_lessons: number;
    completed_lessons: number;
}

const DataList: React.FC = () => {
    const [data, setData] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage: number = 5;
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        const fetchLocalData = () => {
            // Simulated filtering and pagination with local data (data.json)
            let filteredData: Post[] = postData;

            if (searchQuery) {
                const lowerSearchQuery = searchQuery.toLowerCase();
                filteredData = postData.filter(
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
        const totalPages = Math.ceil(postData.length / itemsPerPage);

        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to the first page when searching.
    };

    return (
        <div>
            {/* Search box */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by title or ID"
                    className="px-4 py-2 w-full border rounded"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            {/* Display your data */}
            <ul>
                {data.map((post) => (
                    <li
                        key={post.id}
                        className="border border-theme-color/50 m-3 p-4"
                    >
                        <h2 className="text-lg font-semibold">
                            {post.first_name} {post.last_name}
                        </h2>
                        <p>{post.email}</p>
                        <p>Recent course: {post.recent_course}</p>
                    </li>
                ))}
            </ul>

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
                    disabled={currentPage * itemsPerPage >= postData.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DataList;
