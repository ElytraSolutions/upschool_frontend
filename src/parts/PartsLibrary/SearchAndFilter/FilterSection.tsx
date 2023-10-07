import { Formik, Field } from 'formik';
import { categories } from '../../../data/UploadBookCategories';
import React, { useState } from 'react';

type FilterSectionProps = {
    submitHandler: (values: any, onSubmitProps: any) => void;
};

const FilterSection: React.FC<FilterSectionProps> = ({ submitHandler }) => {
    // TODO Determine to show filter options or not by default
    const [showFilterOptions, setShowFilterOptions] = useState<boolean>(false);
    return (
        <>
            <div className="w-full">
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
                                                                    key={index}
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
                                                                    {category}
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
        </>
    );
};

export default FilterSection;
