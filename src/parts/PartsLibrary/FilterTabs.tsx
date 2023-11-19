import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import cross from '../../assets/librarycross.png';

const FilterTabs = () => {
    const [searchParams, _setSearchParams] = useSearchParams();
    const selectCategories = searchParams.has('categories')
        ? searchParams.get('categories')
        : '';
    const categories = useMemo(() => {
        return selectCategories ? selectCategories.split(',') : [];
    }, [selectCategories]);
    const selectQuery = searchParams.has('query')
        ? searchParams.get('query')
        : '';

    useEffect(() => {
        console.log('categories splitted', categories);
        console.log('selectQuery', selectQuery);
    }, [categories, selectQuery]);

    const categoryHandler = (category) => {
        return () => {
            const newCategories = categories.filter((c) => c !== category);
            console.log('newCategories', newCategories);
            _setSearchParams((oldSearchParams) => {
                oldSearchParams.set('categories', newCategories.join(','));
                return oldSearchParams;
            });
        };
    };
    const queryHandler = () => {
        _setSearchParams((oldSearchParams) => {
            oldSearchParams.delete('query');
            return oldSearchParams;
        });
    };

    return (
        <div className=" pl-2 lg:pl-6 flex items-center gap-4">
            {categories.length > 0 &&
                categories?.map((category) => {
                    return (
                        <div
                            className={`border-2  rounded-3xl flex items-center justify-center bg-white p-2 px-4 gap-4`}
                        >
                            {category}
                            <div
                                className=" cursor-pointer hover:brightness-[0%]"
                                onClick={categoryHandler(category)}
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
    );
};

export default FilterTabs;
