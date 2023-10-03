import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Formik, Field } from 'formik';
// import { Checkbox } from '@material-tailwind/react';

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

const submitHandler = (values: any, onSubmitProps: any) => {
    console.log(values);
    onSubmitProps.setSubmitting(false);
};

const SearchAndFilter = () => {
    const [selectedOption, setSelectedOption] =
        useState<string>('Best Sellers');
    // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
                <div className="bg-white border border-theme-color/50 shadow-lg shadow-gray-300 rounded-lg divide-y divide-theme-color/50  text-font-color">
                    <div>
                        <div className="flex flex-row justify-between items-end w-full p-5 text-2xl font-semibold h-full">
                            <p>Filter by Category</p>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
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
                    <div>
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
                                    <form onSubmit={handleSubmit}>
                                        <div className="w-full flex flex-col gap-2 ">
                                            <label
                                                className={`flex flex-1 justify-start gap-x-4 items-center ${
                                                    values.categories.length ===
                                                    0
                                                        ? 'hover:cursor-not-allowed pointer-events-none'
                                                        : 'hover:cursor-pointer pointer-events-auto'
                                                }`}
                                            >
                                                <Field
                                                    className="h-5 w-5  checked:accent-theme-color"
                                                    type="checkbox"
                                                    name="allCategory"
                                                    onClick={() => {
                                                        values.categories = [];
                                                    }}
                                                />
                                                All Category
                                            </label>
                                            {/* <Checkbox
                                                crossOrigin
                                                name="allCategory"
                                                checked={values.allCategory}
                                                onClick={() => {
                                                    values.categories = [];
                                                    values.allCategory = true;
                                                }}
                                                disabled={
                                                    values.categories.length ===
                                                    0
                                                        ? true
                                                        : false
                                                }
                                                className=" bg-gray-900/10 transition-all  hover:before:opacity-0"
                                                ripple={false}
                                                color="theme-color"
                                                label={
                                                    <p className="text-theme-color font-normal">
                                                        All Category
                                                    </p>
                                                }
                                            /> */}

                                            {categories.map(
                                                (category, index) => (
                                                    <label
                                                        key={index}
                                                        className="flex flex-1 justify-start gap-x-4 items-center hover:cursor-pointer"
                                                    >
                                                        <Field
                                                            className="h-5 w-5 checked:accent-theme-color"
                                                            color="theme-color"
                                                            type="checkbox"
                                                            name="categories"
                                                            value={category}
                                                            onClick={() => {
                                                                values.allCategory =
                                                                    false;
                                                            }}
                                                        />
                                                        {category}
                                                    </label>
                                                ),
                                            )}
                                        </div>
                                        <div className="grid grid-cols-4 gap-4  px-2 mx-2 w-full font-normal text-base py-1">
                                            {/* TODO decide back button */}
                                            <button
                                                className="invisible col-start-1 col-span-1 flex flex-1 flex-wrap items-center justify-start gap-x-0.5 m-1 p-1 h-12"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                                        />
                                                    </svg>
                                                </span>
                                                <span className="text-xl">
                                                    <u>Back</u>
                                                </span>
                                            </button>

                                            <button
                                                className="col-start-4 col-span-1 flex flex-1 flex-wrap items-center justify-center gap-x-0.5 m-1 p-1 bg-theme-color text-white h-12"
                                                type="submit"
                                            >
                                                <span className="text-xl">
                                                    Next
                                                </span>
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchAndFilter;
