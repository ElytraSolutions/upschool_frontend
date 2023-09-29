import { NavLink } from 'react-router-dom';
import Section from '../../parts/PartsLibrary/Section';
import { books, BestSellers, FeaturedBooks } from '../../data/LibraryBooks';
import NewBookCard from '../../components/Cards/NewBookCard';

const NewBrowseBooks = () => {
    return (
        <>
            <div className="h-full w-full bg-white p-3 sm:py-6 sm:px-12">
                {/* Grid container */}
                <div className="grid grid-cols-3 w-full gap-3">
                    {/* First colum: search and filter options */}
                    <div className="col-span-1 ">
                        <div className="block lg:grid lg:grid-cols-3">
                            <div className="flex flex-col gap-6 lg:col-start-2 lg:col-span-2 p-2 ">
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
                                <div></div>
                            </div>
                        </div>
                    </div>
                    {/* Second and third column: Books categories with carousel */}
                    <div className="col-span-2 justify-self-start flex flex-col gap-12">
                        {/* Best Sellers Section */}
                        <Section topic="Best Sellers" books={BestSellers} />
                        {/* Featured Books Section */}
                        <Section topic="Featured Books" books={FeaturedBooks} />
                        {/* All Books Section */}
                        <div className=" flex flex-col gap-2  md:pl-7 text-theme-color">
                            <div className="flex flex-row  items-center gap-4 w-fit font-semibold p-2">
                                <p className="text-2xl lg:text-3xl">
                                    Explore All Books
                                </p>
                            </div>
                            <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-5 w-fit p-2">
                                {books.map((book, index) => (
                                    <div key={index} className="">
                                        <NewBookCard book={book} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewBrowseBooks;
