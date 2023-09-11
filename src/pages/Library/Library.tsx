import { useState } from 'react';
import { BookCard } from '../../components/Cards/BookCard';
import { books } from '../../data/LibraryBooks';
import { categories } from '../../data/UploadBookCategories';

export default function Library() {
    const [searchParameters, setSearchParameters] = useState<{
        search: string;
        category: string;
    }>({
        search: '',
        category: '',
    });
    const [searchTitle, setSearchTitle] = useState<string>(
        searchParameters.search,
    );
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setSearchParameters((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };
    const result = () => {
        if (searchParameters.category.length > 0) {
            const searchResultByCategory = books.filter(
                (book) => book.categories?.includes(searchParameters.category),
            ) as Array<{
                id: number;
                image: string;
                writer: string;
                title: string;
                country: string;
                categories: string[];
            }>;
            if (searchTitle.length > 0) {
                return searchResultByCategory.filter((book) =>
                    book.title
                        .toLowerCase()
                        .includes(searchTitle.toLowerCase()),
                );
            } else {
                return searchResultByCategory;
            }
        } else {
            if (searchTitle.length > 0) {
                return books.filter((book) =>
                    book.title
                        .toLowerCase()
                        .includes(searchTitle.toLowerCase()),
                );
            }
            return books;
        }
    };
    const searchResult = result();
    const BookNotFound = () => {
        return (
            <div className=" text-theme-color font-normal text-xs xs:text-base sm:text-lg lg:text-xl">
                <span>
                    No books meet your search criteria at this time. Please
                    modify your search.
                </span>
            </div>
        );
    };

    return (
        <>
            <div className="flex flex-row justify-center">
                <div className="w-[95%] lg:w-5/6 xl:w-2/3 flex flex-col gap-6">
                    <div className=" w-full py-1 px-2 xs:px-5 sm:px-6 lg:px-7 ">
                        <div className="flex flex-col gap-4 py-2  sm:grid sm:grid-cols-7 border border-black items-center sm:gap-1">
                            <input
                                id="search"
                                className=" text-theme-color sm:col-span-4 md:col-span-3 focus:outline-none p-2  sm:p-4 md:pl-8  text-xs  xs:text-base sm:text-sm md:text-base w-[95%] xs:w-fit sm:w-full "
                                type="text"
                                placeholder="Search book by tiltle..."
                                onChange={handleChange}
                                name="search"
                                value={searchParameters.search}
                            ></input>
                            <select
                                className=" text-theme-color sm:col-span-2 md:col-span-3 focus:outline-none text-xs xs:text-base sm:text-sm tab:text-base w-[90%]  xs:w-fit sm:w-[80%] md:w-fit"
                                id="category"
                                value={searchParameters.category}
                                onChange={handleChange}
                                name="category"
                            >
                                <option value="">Filter by category</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <button
                                className="sm:col-span-1  sm:mr-2 px-4  sm:px-3 md:px-6  py-2 sm:py-1 lg:py-2 text-sm xs:text-base  sm:text-sm  lg:text-base w-fit justify-self-center  rounded-2xl bg-theme-color text-white"
                                onClick={() => {
                                    setSearchTitle(searchParameters.search);
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="grid w-full py-3 px-2 xs:px-5 sm:px-6 lg:px-7 gap-4 xs:grid-cols-2 xs:gap-3 justify-items-center sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
                        {searchResult.length > 0 ? (
                            searchResult.map((book, index) => (
                                <BookCard key={index} book={book} />
                            ))
                        ) : (
                            <div className="xs:col-span-full mt-10 mb-20 h-[40vh]">
                                <BookNotFound />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
