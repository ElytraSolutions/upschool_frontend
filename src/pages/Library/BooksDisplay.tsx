import { useEffect, useState } from 'react';
// import { books } from '../../data/LibraryBooks';
import SectionShowBooks from '../../parts/PartsLibrary/Sections/SectionAllBooks';
import SectionBestSellers from '../../parts/PartsLibrary/Sections/SectionBestSellers';
import SectionFeatured from '../../parts/PartsLibrary/Sections/SectionFeatured';
import { useSearchParams } from 'react-router-dom';
import axiosInstance from '../../config/Axios';

const BooksDisplay = () => {
    const [featuredBook, setFeaturedBook] = useState<any>([]);
    const [bestSeller, setBestSeller] = useState<any>([]);
    const [books, setBooks] = useState<any>([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            const res = await axiosInstance.get('/data/books/featured');
            // console.log('res.data.data', res.data.data);
            setFeaturedBook(res.data.data);
        })();
        (async () => {
            const res = await axiosInstance.get('/data/books/best-sellers');
            console.log('res.data.data', res.data.data);
            setBestSeller(res.data.data);
        })();
        (async () => {
            const res = await axiosInstance.get('/data/books/list');
            console.log('res.data.data', res.data.data);
            setBooks(res.data.data);
        })();
    }, []);
    useEffect(() => {
        console.log('featuredBook', featuredBook);
    }, [featuredBook]);
    const [searchParams, _setSearchParams] = useSearchParams();
    const selectSection = searchParams.has('section')
        ? searchParams.get('section')
        : 'Home';
    return (
        <>
            <div className="w-full xm:w-fit tab:w-2/3  xl:w-[75%] 1450:w-2/3 ">
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
                {selectSection === 'Best Sellers' && (
                    <SectionShowBooks topic="Best Sellers" books={bestSeller} />
                )}
                {selectSection === 'Featured Books' && (
                    <SectionShowBooks
                        topic="Featured Books"
                        books={featuredBook}
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
