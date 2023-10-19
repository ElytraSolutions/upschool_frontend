import { useSearchParams } from 'react-router-dom';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import LibraryLargeScreen from './LibraryLargeScreen';
import LibrarySmallScreen from './LibrarySmallScreen';
import { useState } from 'react';

const DefaultPage = () => {
    const { isTabScreen } = useScreenWidthAndHeight();
    const [searchParams, setSearchParams] = useSearchParams({
        section: 'Home',
    });
    const [isFilterClicked, setIsFilterClicked] = useState<boolean>(false);
    // maintains the search query of search bar
    const [searchQuery, setSearchQuery] = useState<string>('');
    // handles submit process of search bar only without filter options
    const submitSearchForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        !isTabScreen && setIsFilterClicked(false);
        // console.log(searchQuery);
        setSearchParams({ query: searchQuery });
        // TODO: send request to backend to search for books
    };

    const resetForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSearchQuery('');
        setSearchParams({ section: 'Home' });
    };
    // handles submit process of search bar and filter options at once
    const submitHandler = (values: any, onSubmitProps: any) => {
        !isTabScreen && setIsFilterClicked(false);
        // console.log(values);
        const searchParameters = {
            query: searchQuery,
            categories: values.categories,
        };
        // console.log(searchParameters);
        setSearchParams(searchParameters);
        onSubmitProps.setSubmitting(false);
        // TODO: send request to backend to search for books
    };

    const resetHandler = (values: any) => {
        values.categories = [];
        values.allCategory = true;
    };
    return (
        <>
            {isTabScreen ? (
                <LibraryLargeScreen
                    selectSection={searchParams.get('section') || ''}
                    setSearchParams={setSearchParams}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    submitHandler={submitHandler}
                    resetHandler={resetHandler}
                    resetForm={resetForm}
                    submitSearchForm={submitSearchForm}
                />
            ) : (
                <LibrarySmallScreen
                    selectSection={searchParams.get('section') || ''}
                    setSearchParams={setSearchParams}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    submitHandler={submitHandler}
                    resetHandler={resetHandler}
                    resetForm={resetForm}
                    submitSearchForm={submitSearchForm}
                    isFilterClicked={isFilterClicked}
                    setIsFilterClicked={setIsFilterClicked}
                />
            )}
        </>
    );
};
export default DefaultPage;
