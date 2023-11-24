import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import cross from '../../assets/librarycross.png';
import axiosInstance from '../../config/Axios';

const FilterTabs = () => {
    const [searchParams, _setSearchParams] = useSearchParams();
    const [categoriesName, setCategoriesName] = useState<any[]>([]);
    // TODO Determine to show filter options or not by default
    useEffect(() => {
        (async () => {
            const res = await axiosInstance.get('/data/bookCategories');
            console.log('categories from backend', res.data.data);
            setCategoriesName(res.data.data);
        })();
    }, []);
    const selectCategories = searchParams.has('categories')
        ? searchParams.get('categories')
        : '';
    const categories = useMemo(() => {
        const array = selectCategories ? selectCategories.split(',') : [];
        const categoriesObject = categoriesName.filter((category) =>
            array.includes(category.id.toString()),
        );
        return categoriesObject;

        // return selectCategories ? selectCategories.split(',') : [];
    }, [selectCategories, categoriesName]);
    const selectQuery = searchParams.has('query')
        ? searchParams.get('query')
        : '';

    useEffect(() => {
        console.log('categories splitted', categories);
        // console.log('selectQuery', selectQuery);
    }, [categories, selectQuery]);

    const categoryHandler = (categoryID) => {
        return () => {
            const newCategories = categories.filter((c) => c.id != categoryID);
            console.log('newCategories', newCategories);
            _setSearchParams((oldSearchParams) => {
                oldSearchParams.set(
                    'categories',
                    newCategories.map((c) => c.id).join(','),
                );
                return oldSearchParams;
            });
            // _setSearchParams((oldSearchParams) => {
            //     oldSearchParams.set('categories', newCategories.id.join(','));
            //     return oldSearchParams;
            // });
        };
    };
    const queryHandler = () => {
        _setSearchParams((oldSearchParams) => {
            oldSearchParams.delete('query');
            return oldSearchParams;
        });
    };

    return (
        <div className="flex flex-col gap-2">
            <div className=" pl-2 lg:pl-6 flex items-center gap-4">
                {categories.length > 0 &&
                    categories?.map((category) => {
                        return (
                            <div
                                className={`border-2  rounded-3xl flex items-center justify-center bg-white p-2 px-4 gap-4`}
                            >
                                {category.name}
                                <div
                                    className=" cursor-pointer hover:brightness-[0%]"
                                    onClick={categoryHandler(category.id)}
                                >
                                    <img src={cross} alt="cross" />
                                </div>
                            </div>
                        );
                    })}
                {selectQuery && (
                    <div
                        className={`border-2 rounded-3xl flex items-center bg-white justify-center p-2 px-4 gap-4`}
                    >
                        {selectQuery}
                        <div
                            className=" cursor-pointer hover:brightness-[0%]"
                            onClick={queryHandler}
                        >
                            <img src={cross} alt="cross" />
                        </div>
                    </div>
                )}
            </div>
            {/* search in all books */}
            {searchParams.get('section') !== 'All Books' &&
                (categories.length > 0 || selectQuery) && (
                    <div
                        className={`w-fit flex items-center bg-white justify-start ml-8 p-2 gap-4 underline underline-offset-2 cursor-pointer text-theme-color hover:text-theme-color/50`}
                        onClick={() => {
                            _setSearchParams((oldSearchParams) => {
                                oldSearchParams.set('section', 'All Books');
                                return oldSearchParams;
                            });
                        }}
                    >
                        Search in All Books
                    </div>
                )}
        </div>
    );
};

export default FilterTabs;
