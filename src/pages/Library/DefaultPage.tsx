import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import LibraryLargeScreen from './LibraryLargeScreen';
import LibrarySmallScreen from './LibrarySmallScreen';
import axiosInstance from '../../config/Axios';

const DefaultPage = () => {
    const [filteredBooks, setFilteredBooks] = useState<any>([]);
    const { isTabScreen } = useScreenWidthAndHeight();
    const [searchParams, setSearchParams] = useSearchParams();
    // maintains the state of filter button for mobile screen
    const [isFilterClicked, setIsFilterClicked] = useState<boolean>(false);
    // maintains the search query of search bar
    const [searchQuery, setSearchQuery] = useState<string>(
        searchParams.get('query') || '',
    );
    const filterQuery = async () => {
        const res = await axiosInstance.post('/data/books/filter', {
            filters: {
                title: searchQuery,
                section: searchParams.get('section'),
                category: searchParams.get('categories')?.split(',') || [],
            },
        });
        console.log('res.data.data', res.data.data);
        setFilteredBooks(res.data.data);
    };
    useEffect(() => {
        setSearchQuery(searchParams.get('query') || '');
    }, [searchParams]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
        (async () => {
            await filterQuery();
        })();
    };

    // handle when user dis-selects a cateory or section in filter tab
    useEffect(() => {
        (async () => {
            await filterQuery();
        })();
    }, [searchParams]);

    // handles reset process of search bar only without filter options
    const resetForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSearchQuery('');
        setSearchParams((oldSearchParams) => {
            oldSearchParams.delete('query');
            return oldSearchParams;
        });
        (async () => {
            await filterQuery();
        })();
    };
    // handles submit process of search bar and filter options at once
    const submitHandler = (values: any, onSubmitProps: any) => {
        !isTabScreen && setIsFilterClicked(false);
        // console.log(values);
        setSearchParams((oldSearchParams) => {
            oldSearchParams.set('query', searchQuery);
            oldSearchParams.set('categories', values.categories);
            return oldSearchParams;
        });
        onSubmitProps.setSubmitting(true);
        // TODO: send request to backend to search for books
        (async () => {
            await filterQuery();
        })();
    };

    // handles reset process of search bar and filter options at once
    const resetHandler = (values: any) => {
        values.categories = [];
        values.allCategory = true;
        setSearchQuery('');
    };
    return (
        <>
            {isTabScreen ? (
                <LibraryLargeScreen
                    searchQuery={searchQuery}
                    filteredBooks={filteredBooks}
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
