import { NavLink } from 'react-router-dom';
import Section from '../../parts/PartsLibrary/Section';
import { books, BestSellers, FeaturedBooks } from '../../data/LibraryBooks';
import NewBookCard from '../../components/Cards/NewBookCard';
import SearchAndFilter from '../../parts/PartsLibrary/SearchAndFilter';
import MyCarousel from './MyCarousel';
import BookCardSlider from '../../components/Slider/BookCardSlider';
import { useState, useEffect } from 'react';

const NewBrowseBooks = () => {
    const [page, setPage] = useState(0);
    // const sliderContainer: HTMLElement | null =
    //     document.getElementById('sliderContainer');
    // const slider: HTMLElement | null = document.getElementById('Slider');
    // const cards = slider?.getElementsByTagName('li');
    // const elementsToShow = 3;
    // const sliderContainerWidth = sliderContainer?.offsetWidth || 0;
    // const cardWidth = sliderContainerWidth / elementsToShow;
    // slider.style.width = cardWidth * cards.length + 'px';
    // for (let i = 0; i < cards.length; i++) {
    //     cards[i].style.width = cardWidth + 'px';
    // }
    const [sliderContainer, setSliderContainer] = useState<HTMLElement | null>(
        null,
    );
    useEffect(() => {
        // This code will be executed after the DOM has fully loaded.

        setSliderContainer(document.getElementById('sliderContainer'));
        // Rest of your slider setup and manipulation code here

        // Cleanup code (if needed) when the component unmounts
        return () => {
            // Cleanup code here if necessary
        };
    }, []);
    const slider: HTMLElement | null | undefined =
        document.getElementById('Slider');
    const cards: HTMLCollectionOf<HTMLLIElement> | undefined =
        slider?.getElementsByTagName('li');
    const elementsToShow: number = 3;
    const sliderContainerWidth: number = sliderContainer?.clientWidth || 0;
    const cardWidth: number = sliderContainerWidth / elementsToShow;
    if (slider) {
        slider.style.width = cardWidth * (cards?.length || 0) + 'px';
        slider.style.transition = 'margin';
        slider.style.transitionDuration = '1s';
    }
    for (let i = 0; cards && i < cards.length; i++) {
        const card = cards[i];
        card.style.width = cardWidth + 'px';
    }

    const next = () => {
        if (
            slider &&
            -slider.style.marginLeft.slice(0, -2)! <=
                cardWidth * ((cards?.length || 0) - 1 - elementsToShow)
        ) {
            slider.style.marginLeft =
                (+slider.style.marginLeft.slice(0, -2) || 0) - cardWidth + 'px';
        }
    };

    const prev = () => {
        if (
            slider &&
            +slider.style.marginLeft.slice(0, -2) !== 0 &&
            -slider.style.marginLeft.slice(0, -2) >= 0
        ) {
            slider.style.marginLeft =
                (+slider.style.marginLeft.slice(0, -2) || 0) + cardWidth + 'px';
        }
    };
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
                                <div>
                                    <SearchAndFilter />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second and third column: Books categories with carousel */}
                    <div className="col-span-2 justify-self-start flex flex-col gap-12 w-fit">
                        {/* Best Sellers Section */}
                        <Section topic="Best Sellers" books={BestSellers} />
                        {/* <MyCarousel /> */}
                        <div>
                            <div className="flex flex-row items-center gap-4 w-fit">
                                <div
                                    className={`flex flex-row justify-center items-center h-7 w-7 rounded-full hover:cursor-pointer ${
                                        page === 0
                                            ? 'bg-gray-300 text-theme-color'
                                            : 'bg-theme-color text-white '
                                    } `}
                                    onClick={() => {
                                        page > 0 && setPage((page) => page - 1);
                                        prev();
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 19.5L8.25 12l7.5-7.5"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className={`h-2 w-2 rounded-full ${
                                        page === 0
                                            ? 'bg-theme-color '
                                            : 'bg-gray-300'
                                    }`}
                                ></div>
                                <div
                                    className={`h-2 w-2 rounded-full ${
                                        page === 1
                                            ? 'bg-theme-color '
                                            : 'bg-gray-300'
                                    }`}
                                ></div>
                                <div
                                    className={`h-2 w-2 rounded-full ${
                                        page === 2
                                            ? 'bg-theme-color '
                                            : 'bg-gray-300'
                                    }`}
                                ></div>
                                <div
                                    className={`h-2 w-2 rounded-full ${
                                        page === 3
                                            ? 'bg-theme-color '
                                            : 'bg-gray-300'
                                    }`}
                                ></div>
                                <div
                                    className={`flex flex-row justify-center items-center h-7 w-7 rounded-full hover:cursor-pointer ${
                                        page === 3
                                            ? 'bg-gray-300 text-theme-color'
                                            : 'bg-theme-color text-white '
                                    } `}
                                    onClick={() => {
                                        page < 3 && setPage((page) => page + 1);
                                        next();
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                id="sliderContainer"
                                className="w-[850px] overflow-hidden"
                            >
                                <ul
                                    id="Slider"
                                    className="flex  w-full  transition duration-700"
                                >
                                    {books.slice(0, 6).map((book, index) => (
                                        <li key={index} className="w-full">
                                            <NewBookCard book={book} />{' '}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Featured Books Section */}
                        <Section topic="Featured Books" books={FeaturedBooks} />
                        {/* All Books Section */}
                        <div className=" flex flex-col gap-2  md:pl-7 text-theme-color">
                            <div className="flex flex-row  items-center gap-4 w-fit font-semibold p-2">
                                <p className="text-2xl lg:text-3xl">
                                    Explore All Books
                                </p>
                            </div>
                            <div className="grid grid-cols-3 lg:gap-3 xl:gap-6 2xl:gap-10 w-fit p-2">
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
