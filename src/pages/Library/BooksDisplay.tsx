import { useEffect, useState } from 'react';
// import { books } from '../../data/LibraryBooks';
import HomeSectionComponent from '../../parts/PartsLibrary/Sections/HomeSectionComponent';
import SectionShowBooks from '../../parts/PartsLibrary/Sections/SectionAllBooks';
// import SectionBestSellers from '../../parts/PartsLibrary/Sections/SectionBestSellers';
// import SectionFeatured from '../../parts/PartsLibrary/Sections/SectionFeatured';
import { useSearchParams } from 'react-router-dom';
import axiosInstance from '../../config/Axios';
import FilterTabs from '../../parts/PartsLibrary/FilterTabs';

type BooksDisplayProps = {
    filteredBooks?: any;
};

const BooksDisplay = ({ filteredBooks }: BooksDisplayProps) => {
    const [featuredBook, setFeaturedBook] = useState<any>([]);
    const [bestSeller, setBestSeller] = useState<any>([]);
    const [searchParams] = useSearchParams();

    //     const res = await axiosInstance.post('/data/books/filter', filter);
    //     console.log('res.data.data', res.data.data);
    //     setFilteredBooks(res.data.data);
    // }, [searchParams]);
    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            const res = await axiosInstance.get('/data/books/featured');
            // console.log('res.data.data', res.data.data);
            setFeaturedBook(res.data.data);
        })();
        (async () => {
            const res = await axiosInstance.get('/data/books/best-sellers');
            // console.log('res.data.data', res.data.data);
            setBestSeller(res.data.data);
        })();
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
        if (searchParams.get('section') === 'Home') {
            (async () => {
                const res = await axiosInstance.post('/data/books/filter', {
                    filters: {
                        title: searchParams.get('query'),
                        section: 'featured',
                        category: searchParams.get('categories')?.split(','),
                    },
                });
                setFeaturedBook(res.data.data);
            })();
            (async () => {
                const res = await axiosInstance.post('/data/books/filter', {
                    filters: {
                        title: searchParams.get('query'),
                        section: 'best_seller',
                        category: searchParams.get('categories')?.split(','),
                    },
                });
                setBestSeller(res.data.data);
            })();
        }
    }, [searchParams]);

    const selectSection = searchParams.has('section')
        ? searchParams.get('section')
        : 'Home';
    return (
        <>
            <div className="w-fit ">
                {/* Filter Tabs */}
                <FilterTabs />

                {/* it displays all sections (Best Sellers , Featured Books and Explore ALL Books as deafault condition) */}
                {selectSection === 'Home' && (
                    <div className="w-full flex items-center justify-center">
                        <div className=" w-fit xl:w-[850px] xlarge:w-[1200px]  xxlarge:w-[1500px] flex flex-col justify-center items-center gap-5 tab:gap-12 ">
                            {/* Best Sellers Section */}
                            <HomeSectionComponent
                                topic="Best Sellers"
                                value="best_seller"
                                books={bestSeller}
                            />
                            {/* Featured Books Section */}
                            <HomeSectionComponent
                                topic="Featured Books"
                                value="featured"
                                books={featuredBook}
                            />
                        </div>
                        {/* All Books Section */}
                        {/* <SectionShowBooks topic="All Books" books={books} /> */}
                    </div>
                )}
                {selectSection === 'best_seller' && (
                    <SectionShowBooks
                        topic="Best Sellers"
                        books={filteredBooks}
                    />
                )}
                {selectSection === 'featured' && (
                    <SectionShowBooks
                        topic="Featured Books"
                        books={filteredBooks}
                    />
                )}
                {selectSection === 'Book Bundles' && (
                    <SectionShowBooks
                        topic="Book Bundles"
                        books={filteredBooks}
                    />
                )}
                {selectSection === 'Recently Viewed' && (
                    <SectionShowBooks
                        topic="Recently Viewed"
                        books={filteredBooks}
                    />
                )}
                {selectSection === 'All Books' && (
                    <SectionShowBooks topic="All Books" books={filteredBooks} />
                )}
            </div>
        </>
    );
};

export default BooksDisplay;
