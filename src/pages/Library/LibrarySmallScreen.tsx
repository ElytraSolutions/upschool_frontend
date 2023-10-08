import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import InformationSection from '../../parts/PartsLibrary/SearchAndFilter/InformationSection';
import FilterSection from '../../parts/PartsLibrary/SearchAndFilter/FilterSection';
import BooksDisplay from './BooksDisplay';

type LibrarySmallScreenProps = {
    selectSection: string;
    setSelectSection: (value: string) => void;
};
const LibrarySmallScreen: React.FC<LibrarySmallScreenProps> = ({
    // selectSection,
    setSelectSection,
}) => {
    // maintains the search query of search bar
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(Array.from(searchParams.entries()));
    console.log(searchParams.get('query'));
    console.log(searchParams.getAll('categories'));

    const [isFilterClicked, setIsFilterClicked] = useState<boolean>(false);
    if (isFilterClicked) {
        // disables background scrolling when filterBox is opened
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    } else {
        // enables scrolling when filterBox is closed
        document.body.style.overflow = 'unset';
    }

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
            <div className="h-full w-full bg-gray-200 text-font-color ">
                <div className="relative flex flex-row justify-center px-2 py-4 h-full w-full ">
                    {/* search box and filter box */}
                    <div
                        className={`fixed z-10 flex flex-col items-center gap-3 overflow-auto ${
                            isFilterClicked &&
                            'bg-gray-200 shadow-lg shadow-theme-color rounded-md p-2'
                        } max-h-[85dvh] xs:w-11/12`}
                    >
                        {/* search box */}
                        <div
                            className={`h-fit w-full ${
                                isFilterClicked && 'bg-white rounded-lg'
                            } `}
                        >
                            <div className="flex flex-row gap-2 items-center w-full">
                                <form
                                    onSubmit={submitSearchForm}
                                    className={`flex flex-row rounded-lg ${
                                        isFilterClicked
                                            ? 'border border-theme-color/50'
                                            : 'bg-white'
                                    }   h-full w-full`}
                                >
                                    {/* Search Box */}
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
                                    {/* Search Button */}
                                    <button type="submit" className="p-2 w-fit">
                                        <img
                                            src="/images/Library/SearchIcon.png"
                                            alt="search"
                                            height="30px"
                                            width="30px"
                                        />
                                    </button>
                                </form>
                                {/* Filter Button */}
                                <div
                                    className={`${
                                        isFilterClicked ? 'hidden' : ''
                                    }`}
                                >
                                    <button
                                        className="h-fit w-fit p-3 bg-theme-color"
                                        onClick={() => {
                                            setIsFilterClicked(true);
                                        }}
                                    >
                                        <p className="text-white h-8 w-8">
                                            Filter
                                        </p>
                                    </button>
                                </div>
                            </div>
                            {isFilterClicked && (
                                <InformationSection
                                    setSelectSection={setSelectSection}
                                />
                            )}
                        </div>
                        {/* Filter box */}
                        {isFilterClicked && (
                            <FilterSection submitHandler={submitHandler} />
                        )}
                    </div>
                </div>
                {/* Books Display Section */}
                <div className="flex justify-center w-full mt-24">
                    <BooksDisplay
                        selectSection={'All Sections'}
                        setSelectSection={setSelectSection}
                    />
                </div>
            </div>
        </>
    );
};

export default LibrarySmallScreen;
