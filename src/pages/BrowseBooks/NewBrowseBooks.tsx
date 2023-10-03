import { NavLink } from 'react-router-dom';
import SectionBestSellers from '../../parts/PartsLibrary/Sections/SectionBestSellers';
import SectionFeatured from '../../parts/PartsLibrary/Sections/SectionFeatured';
import SectionAllBooks from '../../parts/PartsLibrary/Sections/SectionAllBooks';
import { books, BestSellers, FeaturedBooks } from '../../data/LibraryBooks';
import SearchAndFilter from '../../parts/PartsLibrary/SearchAndFilter/SearchAndFilter';

const NewBrowseBooks = () => {
    return (
        <>
            <div className="h-full w-full bg-white p-3 sm:py-6 xl:px-12">
                {/* Grid container */}
                <div className="grid grid-cols-3 w-full gap-3">
                    {/* First colum: search and filter options */}
                    <div className="col-span-1">
                        <div className="block pl-0 xl:pl-10 2xl:pl-0 2xl:grid 2xl:grid-cols-4">
                            <div className="flex flex-col gap-6 2xl:col-start-2 2xl:col-span-3 p-2 ">
                                <div className="flex flex-col gap-2 text-theme-color">
                                    <p className="font-semibold text-xl lg:text-2xl">
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
                                    <SearchAndFilter />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second and third column: Books categories with carousel for Best Sellers Section and Featured Books Section */}
                    <div className="col-span-2 justify-self-start flex flex-col gap-12 w-fit">
                        {/* Best Sellers Section */}
                        <SectionBestSellers
                            topic="Best Sellers"
                            books={BestSellers}
                        />
                        {/* Featured Books Section */}
                        <SectionFeatured
                            topic="Featured Books"
                            books={FeaturedBooks}
                        />
                        {/* All Books Section */}
                        <SectionAllBooks topic="All Books" books={books} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewBrowseBooks;
