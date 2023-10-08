import { useSearchParams } from 'react-router-dom';
import React, { useState } from 'react';
import InformationSection from './InformationSection';
import FilterSection from './FilterSection';

type SearchAndFilterProps = {
    setSelectSection: (value: string) => void;
};

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
    setSelectSection,
}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(Array.from(searchParams.entries()));
    console.log(searchParams.get('query'));
    console.log(searchParams.getAll('categories'));
    // maintains the search query of search bar
    const [searchQuery, setSearchQuery] = useState<string>('');

    // handles submit process of search bar only without filter options
    const submitSearchForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(searchQuery);
        setSearchParams({ query: searchQuery });
        // TODO: send request to backend to search for books
    };
    // handles submit process of search bar and filter options at once
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
                    <InformationSection setSelectSection={setSelectSection} />
                </div>
                {/* Filter Section */}
                <FilterSection submitHandler={submitHandler} />
            </div>
        </>
    );
};

export default SearchAndFilter;
