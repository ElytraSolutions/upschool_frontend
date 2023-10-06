import { NavLink } from 'react-router-dom';
import SectionBestSellers from '../../parts/PartsLibrary/Sections/SectionBestSellers';
import SectionFeatured from '../../parts/PartsLibrary/Sections/SectionFeatured';
import SectionShowBooks from '../../parts/PartsLibrary/Sections/SectionAllBooks';
import { books, BestSellers, FeaturedBooks } from '../../data/LibraryBooks';
import SearchAndFilter from '../../parts/PartsLibrary/SearchAndFilter/SearchAndFilter';
import { useState } from 'react';

const LibraryLargeScreen = () => {
    // it maintains state for selected section (such as: Best Sellers , Featured Books, Book Bundles and Recently Viewed)
    const [selectSection, setSelectSection] = useState<string>('All Sections');
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
                    <div className=" tab:w-2/3  xl:w-[75%] 1450:w-2/3 ">
                        {/* it displays all sections (Best Sellers , Featured Books and Explore ALL Books as deafault condition) */}
                        {selectSection === 'All Sections' && (
                            <div className="flex flex-col gap-12 w-fit">
                                {/* Best Sellers Section */}
                                <SectionBestSellers
                                    topic="Best Sellers"
                                    books={BestSellers}
                                    setSelectSection={setSelectSection}
                                />
                                {/* Featured Books Section */}
                                <SectionFeatured
                                    topic="Featured Books"
                                    books={FeaturedBooks}
                                    setSelectSection={setSelectSection}
                                />
                                {/* All Books Section */}
                                <SectionShowBooks
                                    topic="All Books"
                                    books={books}
                                />
                            </div>
                        )}
                        {selectSection === 'Best Sellers' && (
                            <SectionShowBooks
                                topic="Best Sellers"
                                books={BestSellers}
                            />
                        )}
                        {selectSection === 'Featured Books' && (
                            <SectionShowBooks
                                topic="Featured Books"
                                books={FeaturedBooks}
                            />
                        )}
                        {selectSection === 'Book Bundles' && (
                            <SectionShowBooks
                                topic="Book Bundles"
                                books={books}
                            />
                        )}
                        {selectSection === 'Recently Viewed' && (
                            <SectionShowBooks
                                topic="Recently Viewed"
                                books={books}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LibraryLargeScreen;
