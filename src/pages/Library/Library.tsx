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
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setSearchParameters((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };
    console.log(searchParameters);
    const result = () => {
        if (searchParameters.category.length > 0) {
            const searchResultByCategory = (searchParameters.category &&
                books.filter(
                    (book) =>
                        book.categories?.includes(searchParameters.category),
                )) as Array<{
                id: number;
                image: string;
                writer: string;
                title: string;
                country: string;
                categories: string[];
            }>;
            if (searchParameters.search.length > 0) {
                return searchResultByCategory.filter((book) =>
                    book.title
                        .toLowerCase()
                        .includes(searchParameters.search.toLowerCase()),
                );
            } else {
                return searchResultByCategory;
            }
        } else {
            if (searchParameters.search.length > 0) {
                return books.filter((book) =>
                    book.title
                        .toLowerCase()
                        .includes(searchParameters.search.toLowerCase()),
                );
            }
            return books;
        }
    };

    const searchResult = result();
    console.log(searchResult);
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
                        <div className="flex flex-col  sm:flex-row border border-black items-center">
                            <input
                                id="search"
                                className=" focus:outline-none flex-1 p-4 md:pl-8  text-xs xs:text-sm md:text-base w-[95%] xs:w-fit sm:w-full "
                                type="text"
                                placeholder="Search book by tiltle..."
                                onChange={handleChange}
                                name="search"
                                value={searchParameters.search}
                            ></input>
                            <select
                                className=" focus:outline-none text-xs xs:text-sm  md:text-base w-[95%]  xs:w-fit sm:w-[40%] md:w-fit"
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
                            <button className="px-6 py-2 text-xs xs:text-sm  md:text-base">
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="grid w-full py-1 px-2 xs:px-5 sm:px-6 lg:px-7 gap-4 xs:grid-cols-2 xs:gap-3 justify-items-center sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
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
