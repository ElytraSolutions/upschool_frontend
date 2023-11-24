import { Formik, Field } from 'formik';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axiosInstance from '../../../config/Axios';

type FilterSectionProps = {
    submitHandler: (values: any, onSubmitProps: any) => void;
    resetHandler: (values: any) => void;
};

const FilterSection: React.FC<FilterSectionProps> = ({
    submitHandler,
    resetHandler,
}) => {
    const formikRef = React.useRef<any>();
    const [searchParams, setSearchParams] = useSearchParams();
    const [categories, setCategories] = useState<any[]>([]);
    // TODO Determine to show filter options or not by default
    const [showFilterOptions, setShowFilterOptions] = useState<boolean>(false);
    useEffect(() => {
        (async () => {
            const res = await axiosInstance.get('/data/bookCategories');
            // console.log('categories from backend', res.data.data);
            setCategories(res.data.data);
        })();
    }, []);
    useEffect(() => {
        formikRef.current?.setFieldValue(
            'categories',
            searchParams.has('categories') &&
                searchParams.get('categories') !== ''
                ? searchParams.get('categories')?.split(',')
                : [],
        );
        formikRef.current?.setFieldValue(
            'allCategory',
            searchParams.has('categories') &&
                searchParams.get('categories') !== ''
                ? false
                : true,
        );
    }, [searchParams]);
    return (
        <>
            <div className="w-full">
                <Formik
                    innerRef={formikRef}
                    onSubmit={submitHandler}
                    initialValues={{
                        categories:
                            searchParams.has('categories') &&
                            searchParams.get('categories') !== ''
                                ? searchParams.get('categories')?.split(',')
                                : [],
                        allCategory:
                            searchParams.has('categories') &&
                            searchParams.get('categories') !== ''
                                ? false
                                : true,
                    }}
                    onReset={resetHandler}
                >
                    {({
                        values,
                        // errors,
                        // touched,
                        // handleBlur,
                        // handleChange,
                        handleSubmit,
                        handleReset,
                    }) => (
                        <>
                            <form
                                onSubmit={handleSubmit}
                                onReset={() => {
                                    setSearchParams((oldSearchParams) => {
                                        oldSearchParams.delete('categories');
                                        oldSearchParams.delete('query');
                                        return oldSearchParams;
                                    });
                                    handleReset();
                                }}
                                className="w-full h-full"
                            >
                                <div>
                                    <div
                                        className={`bg-white border border-theme-color/50 shadow-lg shadow-gray-300 rounded-lg divide-y  ${
                                            showFilterOptions
                                                ? 'divide-theme-color/50'
                                                : 'divide-none'
                                        }    text-font-color  w-full`}
                                    >
                                        {/* Heading Section */}
                                        <div>
                                            <div
                                                className="flex flex-row justify-between items-end w-full hover:cursor-pointer p-1 md:p-3 px-2 md:px-5 text-sm lg:text-base font-semibold h-full"
                                                onClick={() => {
                                                    setShowFilterOptions(
                                                        (prevState) =>
                                                            !prevState,
                                                    );
                                                }}
                                            >
                                                <p className=" font-lexend">
                                                    Filter by Category
                                                </p>
                                                {/* Up Arrow */}
                                                <div className="">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className={`w-4 h-4  md:w-6 md:h-6 transition-transform duration-500 ease-in-out ${
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
                                        <div
                                            className={`transition-all duration-500 ease-in ${
                                                showFilterOptions
                                                    ? 'h-full p-2'
                                                    : 'h-0'
                                            } w-full`}
                                        >
                                            <div
                                                className={`transition-all duration-500 ease-in ${
                                                    showFilterOptions
                                                        ? 'h-32 sm:h-40 md:h-52 '
                                                        : 'h-0'
                                                } w-full overflow-auto`}
                                            >
                                                <div className="w-full flex flex-col gap-0.5 sm:gap-1 md:gap-2 p-4 text-sm lg:text-base ">
                                                    <label
                                                        className={`flex justify-start gap-x-4 items-center ${
                                                            values.categories
                                                                ?.length ===
                                                                0 &&
                                                            values.allCategory
                                                                ? 'pointer-events-none'
                                                                : 'hover:cursor-pointer pointer-events-auto'
                                                        }`}
                                                    >
                                                        <Field
                                                            className="h-3 w-3 md:h-5 md:w-5  checked:accent-theme-color"
                                                            type="checkbox"
                                                            name="allCategory"
                                                            onClick={() => {
                                                                values.categories =
                                                                    [];
                                                            }}
                                                        />
                                                        All Category
                                                    </label>
                                                    {categories?.map(
                                                        (category, index) => (
                                                            <label
                                                                key={index}
                                                                className="flex  justify-start gap-x-4 items-center hover:cursor-pointer"
                                                            >
                                                                <Field
                                                                    className="h-3 w-3 md:h-5 md:w-5 checked:accent-theme-color"
                                                                    color="theme-color"
                                                                    type="checkbox"
                                                                    name="categories"
                                                                    value={category.id.toString()}
                                                                    onClick={() => {
                                                                        values.allCategory =
                                                                            false;
                                                                    }}
                                                                />
                                                                {category?.name}
                                                            </label>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Buttons */}
                                    <div className="w-full h-full flex flex-col gap-1 md:gap-3 mt-1 md:mt-3">
                                        {/* Refine Search Button */}
                                        <button
                                            className=" flex flex-1 justify-center items-center h-full w-full bg-theme-color rounded-md p-0.5 md:p-2 px-4"
                                            type="submit"
                                        >
                                            <p className="text-sm md:text-base xl:text-lg text-white">
                                                Refine Search
                                            </p>
                                        </button>
                                        {/* Reset Filter Button */}
                                        <button
                                            className={`flex flex-1 justify-center items-center h-full w-full ${
                                                values.categories?.length === 0
                                                    ? 'bg-white text-gray-900/40 pointer-events-none'
                                                    : ' bg-red-upschool text-white'
                                            }   border border-gray-900/20 rounded-md p-0.5 md:p-2  px-4`}
                                            type="reset"
                                        >
                                            <p className="text-sm md:text-base xl:text-lg">
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
