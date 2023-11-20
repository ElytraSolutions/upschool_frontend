import { useEffect, useState } from 'react';
// import { books } from '../../data/LibraryBooks';
import SectionShowBooks from '../../parts/PartsLibrary/Sections/SectionAllBooks';
import SectionBestSellers from '../../parts/PartsLibrary/Sections/SectionBestSellers';
import SectionFeatured from '../../parts/PartsLibrary/Sections/SectionFeatured';
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
            <div className="w-full xm:w-fit tab:w-2/3  xl:w-[75%] 1450:w-2/3 ">
                {/* Filter Tabs */}
                <FilterTabs />

                {/* it displays all sections (Best Sellers , Featured Books and Explore ALL Books as deafault condition) */}
                {selectSection === 'Home' && (
                    <div className="flex flex-col gap-5 tab:gap-12 w-full xm:w-fit">
                        {/* Best Sellers Section */}
                        <SectionBestSellers
                            topic="Best Sellers"
                            books={bestSeller}
                        />
                        {/* Featured Books Section */}
                        <SectionFeatured
                            topic="Featured Books"
                            books={featuredBook}
                        />
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
