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
    // const searchResultByCategory = (searchParameters.category &&
    //     books.filter(
    //         (book) => book.categories?.includes(searchParameters.category),
    //     )) as Array<{
    //     id: number;
    //     image: string;
    //     writer: string;
    //     title: string;
    //     country: string;
    //     categories: string[];
    // }>;
    // console.log(searchResultByCategory);
    // const searchResult =
    //     searchResultByCategory.length > 0 &&
    //     searchParameters.search.length > 0 &&
    //     searchResultByCategory.filter((book) =>
    //         book.title
    //             .toLowerCase()
    //             .includes(searchParameters.search.toLowerCase()),
    //     );
    // console.log(searchResult);
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
            }
            return searchResultByCategory;
        } else {
            if (searchParameters.search.length > 0) {
                return books.filter((book) =>
                    book.title
                        .toLowerCase()
                        .includes(searchParameters.search.toLowerCase()),
                );
            }
            return [];
        }
    };

    const searchResult = result();
    console.log(searchResult);

    return (
        <>
            <div className="flex flex-row justify-center">
                <div className=" lg:w-5/6 xl:w-2/3 flex flex-col gap-6">
                    <div className=" w-full py-1 px-2 xs:px-5 sm:px-6 lg:px-7 ">
                        <div className="flex flex-row border border-black items-center">
                            <input
                                id="search"
                                className=" focus:outline-none flex-1 p-4 pl-8"
                                type="text"
                                placeholder="Search book by tiltle..."
                                onChange={handleChange}
                                name="search"
                                value={searchParameters.search}
                            ></input>
                            <select
                                className=" focus:outline-none w-fit"
                                id="category"
                                value={searchParameters.category}
                                onChange={handleChange}
                                name="category"
                            >
                                {' '}
                                <option value="">Filter by category</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <button>Search</button>
                        </div>
                    </div>
                    <div className="grid w-full py-1 px-2 xs:px-5 sm:px-6 lg:px-7 gap-4 xs:grid-cols-2 xs:gap-3 justify-items-center sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
                        {searchResult.length > 0
                            ? searchResult.map((book, index) => (
                                  <BookCard key={index} book={book} />
                              ))
                            : books.map((book, index) => (
                                  <BookCard key={index} book={book} />
                              ))}
                    </div>
                </div>
            </div>
        </>
    );
}
