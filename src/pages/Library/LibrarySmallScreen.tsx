import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik, Field } from 'formik';

import { categories } from '../../data/UploadBookCategories';

const LibrarySmallScreen = () => {
    // maintains the search query of search bar
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(Array.from(searchParams.entries()));
    console.log(searchParams.get('query'));
    console.log(searchParams.getAll('categories'));

    // TODO Determine to show filter options or not by default
    const [showFilterOptions, setShowFilterOptions] = useState<boolean>(false);

    const submitSearchForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(searchQuery);
        setSearchParams({ query: searchQuery });
        // TODO: send request to backend to search for books
    };
    const submitHandler = (values: any, onSubmitProps: any) => {
        console.log(values);
        const searchParameters = {
            query: searchQuery,
            categories: values.categories,
        };
        console.log(searchParameters);
        setSearchParams(searchParameters);
        onSubmitProps.setSubmitting(false);
        // TODO: send request to backend to search for books
    };
    return (
        <>
            <div className="flex flex-row justify-center px-2 py-4 h-full w-full bg-gray-950/10 ">
                <div className="flex flex-col items-center h-full xs:w-11/12">
                    {/* search box and filter box */}
                    <div className="h-full w-full">
                        {/* search box */}
                        <div className="h-full w-full">
                            <div className="flex flex-row gap-2 items-center w-full">
                                <form
                                    onSubmit={submitSearchForm}
                                    className="flex flex-row rounded-lg bg-white  h-full w-full"
                                >
                                    <div className=" flex items-center py-3 px-5  w-full ">
                                        <input
                                            type="text"
                                            placeholder="search by title, author name or country"
                                            className=" autofill:bg-white  focus:outline-none  w-full"
                                            value={searchQuery}
                                            onChange={(
                                                event: React.ChangeEvent<HTMLInputElement>,
                                            ) => {
                                                setSearchQuery(
                                                    event.target.value,
                                                );
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
                                </form>
                                <div>
                                    <button className="h-fit w-fit p-3 bg-theme-color">
                                        <p className="text-white h-8 w-8">
                                            Filter
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Filter box */}
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
                                                        <div className="flex flex-row justify-between items-end w-full p-3 px-5 text-lg font-semibold h-full">
                                                            <p>
                                                                Filter by
                                                                Category
                                                            </p>
                                                            {/* Up Arrow */}
                                                            <div
                                                                className="hover:cursor-pointer"
                                                                onClick={() => {
                                                                    setShowFilterOptions(
                                                                        (
                                                                            prevState,
                                                                        ) =>
                                                                            !prevState,
                                                                    );
                                                                }}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={
                                                                        1.5
                                                                    }
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
                                                                        All
                                                                        Category
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
                                                        <p className="text-lg text-white">
                                                            Refine Search
                                                        </p>
                                                    </button>
                                                    {/* Reset Filter Button */}
                                                    <button
                                                        className="flex flex-1 justify-center items-center h-full w-full bg-white border border-gray-900/20 rounded-md p-2 px-4"
                                                        type="reset"
                                                    >
                                                        <p className="text-lg text-gray-950/30">
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
                </div>
            </div>
        </>
    );
};

export default LibrarySmallScreen;
