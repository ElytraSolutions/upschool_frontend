import InformationSection from './InformationSection';
import FilterSection from './FilterSection';
import resolveImgURL from '../../../utlis/resolveImgURL';

type SearchAndFilterProps = {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    submitHandler: (values: any, onSubmitProps: any) => void;
    resetHandler: (values: any) => void;
    resetForm: (event: React.FormEvent<HTMLFormElement>) => void;
    submitSearchForm: (event: React.FormEvent<HTMLFormElement>) => void;
};

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
    searchQuery,
    setSearchQuery,
    submitHandler,
    resetHandler,
    resetForm,
    submitSearchForm,
}) => {
    return (
        <>
            <div className=" flex flex-col gap-4 text-theme-color">
                {/* Search Section */}
                <div className="bg-white border border-t-0 border-theme-color/50 shadow-lg shadow-gray-300 rounded-lg">
                    {/* Search Box */}
                    <form
                        onSubmit={submitSearchForm}
                        onReset={resetForm}
                        className=" h-12"
                    >
                        <div className="flex flex-row divide-x divide-theme-color/50 border border-theme-color/50 border-x-0  rounded-md  rounded-b-none text-sm 2xl:text-base w-full h-11">
                            <div className=" flex items-center p-2 w-full ">
                                <input
                                    type="text"
                                    placeholder="search by title, author name or country"
                                    className=" autofill:bg-white  focus:outline-none  w-full border-0"
                                    value={searchQuery}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        setSearchQuery(event.target.value);
                                    }}
                                />
                            </div>
                            {searchQuery.length > 0 && (
                                <button
                                    type="reset"
                                    className={`p-2 w-12 h-full ${
                                        searchQuery.length === 0 &&
                                        'pointer-events-none'
                                    }`}
                                >
                                    <img
                                        src={resolveImgURL(
                                            '/images/CrossIcon.png',
                                        )}
                                        alt="reset"
                                        height="30"
                                        width="30"
                                    />
                                </button>
                            )}

                            <button type="submit" className="p-2 w-12 h-full ">
                                <img
                                    src={resolveImgURL(
                                        '/images/Library/SearchIcon.png',
                                    )}
                                    alt="search"
                                    height="30"
                                    width="30"
                                />
                            </button>
                        </div>
                    </form>

                    {/* Information Section */}
                    <InformationSection />
                </div>
                {/* Filter Section */}
                <FilterSection
                    submitHandler={submitHandler}
                    resetHandler={resetHandler}
                />
            </div>
        </>
    );
};

export default SearchAndFilter;
