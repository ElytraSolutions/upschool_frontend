import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Formik, Field } from 'formik';

import { categories } from '../../../data/UploadBookCategories';

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
    // maintains the search query of search bar
    const [searchQuery, setSearchQuery] = useState<string>('');
    // maintains the state to show sections below search bar
    const [selectedOption, setSelectedOption] =
        useState<string>('Best Sellers');

    // TODO Determine to show filter options or not by default
    const [showFilterOptions, setShowFilterOptions] = useState<boolean>(false);

    const submitSearchForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(searchQuery);
        // TODO: send request to backend to search for books
    };

    const submitHandler = (values: any, onSubmitProps: any) => {
        console.log(values);
        const searchParameters = {
            query: searchQuery,
            categories: values.categories,
        };
        console.log(searchParameters);
        onSubmitProps.setSubmitting(false);
        // TODO: send request to backend to search for books
    };
    return (
        <>
            <div className=" flex flex-col gap-4 text-theme-color">
                {/* Search Section */}
                <div className="bg-white border border-t-0 border-theme-color/50 shadow-lg shadow-gray-300 rounded-lg">
                    {/* Search Box */}
                    <form onSubmit={submitSearchForm}>
                        <div className="flex flex-row divide-x divide-theme-color/50 border border-theme-color/50  rounded-md text-sm 2xl:text-base w-full">
                            <div className=" flex items-center p-2 w-full ">
                                <input
                                    type="text"
                                    placeholder="search by title, author name or country"
                                    className=" autofill:bg-white  focus:outline-none  w-full"
                                    value={searchQuery}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        setSearchQuery(event.target.value);
                                    }}
                                />
                            </div>

                            <button type="submit" className="p-2 w-fit">
                                <img
                                    src="/images/Library/SearchIcon.png"
                                    alt="search"
                                    height="30px"
                                    width="30px"
                                />
                            </button>
                        </div>
                    </form>

                    {/* Information Section */}
                    <div>
                        <ul className=" p-6">
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
                <div className="">
                    <Formik
                        onSubmit={submitHandler}
                        initialValues={{
                            categories: [],
                            allCategory: true,
                        }}
                    >
                        {({
                            values,
                            // errors,
                            // touched,
                            // handleBlur,
                            // handleChange,
                            handleSubmit,
                        }) => (
                            <>
                                <form
                                    onSubmit={handleSubmit}
                                    className="w-full h-full"
                                >
                                    <div>
                                        <div className="bg-white border border-theme-color/50 shadow-lg shadow-gray-300 rounded-lg divide-y divide-theme-color/50  text-font-color w-full">
                                            {/* Heading Section */}
                                            <div>
                                                <div className="flex flex-row justify-between items-end w-full p-3 px-5 text-2xl font-semibold h-full">
                                                    <p>Filter by Category</p>
                                                    {/* Up Arrow */}
                                                    <div
                                                        className="hover:cursor-pointer"
                                                        onClick={() => {
                                                            setShowFilterOptions(
                                                                (prevState) =>
                                                                    !prevState,
                                                            );
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className={`w-6 h-6 ${
                                                                showFilterOptions
                                                                    ? ''
                                                                    : 'transform rotate-180'
                                                            }`}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Filter list */}
                                            {showFilterOptions && (
                                                <div className="h-full w-full p-2">
                                                    <div className="w-full h-52  overflow-auto">
                                                        <div className="w-full flex flex-col gap-2 p-4 ">
                                                            <label
                                                                className={`flex justify-start gap-x-4 items-center ${
                                                                    values
                                                                        .categories
                                                                        .length ===
                                                                    0
                                                                        ? 'pointer-events-none'
                                                                        : 'hover:cursor-pointer pointer-events-auto'
                                                                }`}
                                                            >
                                                                <Field
                                                                    className="h-5 w-5  checked:accent-theme-color"
                                                                    type="checkbox"
                                                                    name="allCategory"
                                                                    onClick={() => {
                                                                        values.categories =
                                                                            [];
                                                                    }}
                                                                />
                                                                All Category
                                                            </label>
                                                            {categories.map(
                                                                (
                                                                    category,
                                                                    index,
                                                                ) => (
                                                                    <label
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="flex  justify-start gap-x-4 items-center hover:cursor-pointer"
                                                                    >
                                                                        <Field
                                                                            className="h-5 w-5 checked:accent-theme-color"
                                                                            color="theme-color"
                                                                            type="checkbox"
                                                                            name="categories"
                                                                            value={
                                                                                category
                                                                            }
                                                                            onClick={() => {
                                                                                values.allCategory =
                                                                                    false;
                                                                            }}
                                                                        />
                                                                        {
                                                                            category
                                                                        }
                                                                    </label>
                                                                ),
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        {/* Buttons */}
                                        <div className="w-full h-full flex flex-col gap-3 mt-3">
                                            {/* Refine Search Button */}
                                            <button
                                                className=" flex flex-1 justify-center items-center h-full w-full bg-theme-color rounded-md p-2 px-4"
                                                type="submit"
                                            >
                                                <p className="text-xl text-white">
                                                    Refine Search
                                                </p>
                                            </button>
                                            {/* Reset Filter Button */}
                                            <button
                                                className="flex flex-1 justify-center items-center h-full w-full bg-white border border-gray-900/20 rounded-md p-2 px-4"
                                                type="reset"
                                            >
                                                <p className="text-xl text-gray-950/30">
                                                    Reset Filter
                                                </p>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default SearchAndFilter;
