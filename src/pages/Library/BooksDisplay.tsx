import React from 'react';
import { BestSellers, FeaturedBooks, books } from '../../data/LibraryBooks';
import SectionShowBooks from '../../parts/PartsLibrary/Sections/SectionAllBooks';
import SectionBestSellers from '../../parts/PartsLibrary/Sections/SectionBestSellers';
import SectionFeatured from '../../parts/PartsLibrary/Sections/SectionFeatured';

type BooksDisplayProps = {
    selectSection: string;
    setSearchParams: (value: string) => void;
};

const BooksDisplay: React.FC<BooksDisplayProps> = ({
    selectSection,
    setSearchParams,
}) => {
    return (
        <>
            <div className="w-fit tab:w-2/3  xl:w-[75%] 1450:w-2/3 ">
                {/* it displays all sections (Best Sellers , Featured Books and Explore ALL Books as deafault condition) */}
                {selectSection === 'Home' && (
                    <div className="flex flex-col gap-5 tab:gap-12 w-fit">
                        {/* Best Sellers Section */}
                        <SectionBestSellers
                            topic="Best Sellers"
                            books={BestSellers}
                            setSelectSection={setSearchParams}
                        />
                        {/* Featured Books Section */}
                        <SectionFeatured
                            topic="Featured Books"
                            books={FeaturedBooks}
                            setSelectSection={setSearchParams}
                        />
                        {/* All Books Section */}
                        {/* <SectionShowBooks topic="All Books" books={books} /> */}
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
                    <SectionShowBooks topic="Book Bundles" books={books} />
                )}
                {selectSection === 'Recently Viewed' && (
                    <SectionShowBooks topic="Recently Viewed" books={books} />
                )}
                {selectSection === 'All Books' && (
                    <SectionShowBooks topic="All Books" books={books} />
                )}
            </div>
        </>
    );
};

export default BooksDisplay;
