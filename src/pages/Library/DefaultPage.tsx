import { useSearchParams } from 'react-router-dom';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import LibraryLargeScreen from './LibraryLargeScreen';
import LibrarySmallScreen from './LibrarySmallScreen';
import { useState } from 'react';

const DefaultPage = () => {
    const { isTabScreen } = useScreenWidthAndHeight();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isFilterClicked, setIsFilterClicked] = useState<boolean>(false);
    // maintains the search query of search bar
    const [searchQuery, setSearchQuery] = useState<string>(
        searchParams.get('query') || '',
    );

    // handles submit process of search bar only without filter options
    const submitSearchForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        !isTabScreen && setIsFilterClicked(false);
        // console.log(searchQuery);
        setSearchParams((oldSearchParams) => {
            oldSearchParams.set('query', searchQuery);
            return oldSearchParams;
        });
        // TODO: send request to backend to search for books
    };

    // handles reset process of search bar only without filter options
    const resetForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSearchQuery('');
        setSearchParams((oldSearchParams) => {
            oldSearchParams.delete('query');
            return oldSearchParams;
        });
    };
    // handles submit process of search bar and filter options at once
    const submitHandler = (values: any, onSubmitProps: any) => {
        !isTabScreen && setIsFilterClicked(false);
        // console.log(values);
        // const searchParameters = {
        //     query: searchQuery,
        //     categories: values.categories,
        // };
        // console.log(searchParameters);
        //
        setSearchParams((oldSearchParams) => {
            oldSearchParams.set('query', searchQuery);
            oldSearchParams.set('categories', values.categories);
            return oldSearchParams;
        });
        onSubmitProps.setSubmitting(true);
        // TODO: send request to backend to search for books
    };

    // handles reset process of search bar and filter options at once
    const resetHandler = (values: any) => {
        values.categories = [];
        values.allCategory = true;
        setSearchParams((oldSearchParams) => {
            oldSearchParams.delete('query');
            oldSearchParams.delete('categories');
            return oldSearchParams;
        });
    };
    return (
        <>
            {isTabScreen ? (
                <LibraryLargeScreen
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    submitHandler={submitHandler}
                    resetHandler={resetHandler}
                    resetForm={resetForm}
                    submitSearchForm={submitSearchForm}
                />
            ) : (
                <LibrarySmallScreen
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
