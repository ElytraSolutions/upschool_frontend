import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchAndFilter from '../../parts/PartsLibrary/SearchAndFilter/SearchAndFilter';
import BooksDisplay from './BooksDisplay';

type LibraryLargeScreenProps = {
    selectSection: string;
    setSelectSection: (value: string) => void;
};

const LibraryLargeScreen: React.FC<LibraryLargeScreenProps> = ({
    selectSection,
    setSelectSection,
}) => {
    return (
        <>
            {/* "h-full w-full bg-white p-3 sm:py-6 xl:px-12" */}
            <div className="h-full w-full bg-white px-2 py-6">
                {/* Grid container */}
                <div className="flex flex-row  w-full gap-1 lg:gap-5 xl:gap-3 2xl:gap-10 ">
                    {/* First colum: search and filter options */}
                    <div className="flex flex-row justify-end tab:w-1/3  xl:w-[25%] 1450:w-1/3">
                        <div className=" tab:max-w-xs  xl:max-w-md">
                            <div className="flex flex-col gap-6 p-2 w-full ">
                                <div className="flex flex-col gap-2 text-theme-color">
                                    <p className="font-semibold text-lg lg:text-xl">
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
                                        setSelectSection={setSelectSection}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second and third column: Books categories with carousel for Best Sellers Section and Featured Books Section */}
                    <BooksDisplay
                        selectSection={selectSection}
                        setSelectSection={setSelectSection}
                    />
                </div>
            </div>
        </>
    );
};

export default LibraryLargeScreen;