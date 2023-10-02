import { NavLink } from 'react-router-dom';
import { useState } from 'react';

// TODO Replace this data with data from the backend
const data = [
    {
        title: 'Best Sellers',
        number: 25,
        books: [
            { title: 'The Beach Clean-up', path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
            { title: 'The Beach Clean-up', path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
        ],
    },
    {
        title: 'Featured Books',
        number: 10,
        books: [
            { title: 'Imagine', path: '/library' },
            { title: 'The Somme', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
            { title: "Don't Play In The Toilet", path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
        ],
    },
    {
        title: 'Book Bundles',
        number: 17,
        books: [
            { title: 'The Beach Clean-up', path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
            { title: 'The Beach Clean-up', path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
        ],
    },
    {
        title: 'Recently Viewed',
        number: 21,
        books: [
            { title: 'Prof and Stan', path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
            { title: 'The Lively Sea', path: '/library' },
            { title: 'The Day People Stopped Polluting', path: '/library' },
            { title: 'The Jauglar and the Tortoise', path: '/library' },
            { title: 'So Much Rubbish!', path: '/library' },
        ],
    },
];

const SearchAndFilter = () => {
    const [selectedOption, setSelectedOption] =
        useState<string>('Best Sellers');
    return (
        <>
            <div className=" flex flex-col gap-4 text-theme-color">
                {/* Search Section */}
                <div className="bg-white border border-t-0 border-theme-color/50 shadow-lg shadow-gray-300 rounded-lg">
                    {/* Search Box */}
                    <div className="flex flex-row divide-x divide-theme-color/50 border border-theme-color/50  rounded-md text-sm 2xl:text-base w-full">
                        <div className=" flex items-center p-2 w-full ">
                            <input
                                type="text"
                                placeholder="search by title, author name or country"
                                className="focus:outline-none  w-full"
                            ></input>
                        </div>

                        <div className="p-2 w-fit">
                            <img
                                src="/images/Library/SearchIcon.png"
                                alt="search"
                                height="30px"
                                width="30px"
                            />
                        </div>
                    </div>
                    {/* Information Section */}
                    <div>
                        <ul className="p-4 pb-6">
                            {data.map((category, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col gap-2 pb-3"
                                >
                                    <div className="flex flex-row  items-center gap-1 font-semibold text-lg">
                                        <p
                                            className="hover:cursor-pointer text-xl pb-0.5"
                                            onClick={() => {
                                                setSelectedOption(
                                                    category.title,
                                                );
                                            }}
                                        >
                                            {selectedOption === category.title
                                                ? `-`
                                                : `+`}
                                        </p>{' '}
                                        <p>{category.title}</p>{' '}
                                        <p>{`(${category.number})`}</p>
                                    </div>

                                    <div
                                        className={`${
                                            selectedOption === category.title
                                                ? ''
                                                : 'hidden'
                                        } max-h-36 px-8  overflow-auto`}
                                    >
                                        <NavLink
                                            to="/"
                                            className="text-theme-color font-semibold"
                                        >
                                            <p className="underline underline-offset-4 text-sm lg:text-base py-1 ">
                                                View All {`>`}
                                            </p>
                                        </NavLink>
                                        <ul className="h-full">
                                            {category.books.map(
                                                (book, index) => (
                                                    <li
                                                        key={index}
                                                        className="py-1  font-light text-sm w-fit"
                                                    >
                                                        <NavLink to={book.path}>
                                                            <p className="">
                                                                {book.title}
                                                            </p>
                                                        </NavLink>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Filter Section */}
                <div></div>
            </div>
        </>
    );
};

export default SearchAndFilter;
