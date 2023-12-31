import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchAndFilter from '../../parts/PartsLibrary/SearchAndFilter/SearchAndFilter';
import BooksDisplay from './BooksDisplay';

type LibraryLargeScreenProps = {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    submitHandler: (values: any, onSubmitProps: any) => void;
    resetHandler: (values: any) => void;
    resetForm: (event: React.FormEvent<HTMLFormElement>) => void;
    submitSearchForm: (event: React.FormEvent<HTMLFormElement>) => void;
    filteredBooks?: any;
};

const LibraryLargeScreen: React.FC<LibraryLargeScreenProps> = ({
    searchQuery,
    setSearchQuery,
    submitHandler,
    resetHandler,
    resetForm,
    submitSearchForm,
    filteredBooks,
}) => {
    return (
        <>
            {/* "h-full w-full bg-white p-3 sm:py-6 xl:px-12" */}
            <div className="h-full w-full bg-white lg:px-8 xl:px-16 xxxl:px-24 py-14">
                {/* Grid container */}
                <div className="flex flex-row justify-between xl:justify-evenly xxlarge:justify-evenly w-full ">
                    {/* First colum: search and filter options */}
                    <div className="flex flex-row justify-end tab:w-1/3  xl:w-[25%] 1450:w-1/3 xxxl:w-fit">
                        <div className=" tab:max-w-xs  xl:max-w-md">
                            <div className="flex flex-col gap-6 p-2 w-full ">
                                <div className="flex flex-col gap-2 text-theme-color">
                                    <p className="font-semibold text-lg lg:text-xl font-lexend">
                                        Welcome to Upschool Library
                                    </p>
                                    <p className="font-light text-sm lg:text-base">
                                        Buy a book to empower a young author to
                                        have a voice and change the world!
                                    </p>
                                    <NavLink
                                        to="/"
                                        className="text-theme-color"
                                    >
                                        <p className=" underline underline-offset-4 font-light text-sm lg:text-base">
                                            Learn More {`>`}
                                        </p>
                                    </NavLink>
                                </div>
                                {/* Search and Filter Component */}
                                <div className="">
                                    <SearchAndFilter
                                        searchQuery={searchQuery}
                                        setSearchQuery={setSearchQuery}
                                        submitHandler={submitHandler}
                                        resetHandler={resetHandler}
                                        resetForm={resetForm}
                                        submitSearchForm={submitSearchForm}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second and third column: Books categories with carousel for Best Sellers Section and Featured Books Section */}
                    <BooksDisplay filteredBooks={filteredBooks} />
                </div>
            </div>
        </>
    );
};

export default LibraryLargeScreen;
