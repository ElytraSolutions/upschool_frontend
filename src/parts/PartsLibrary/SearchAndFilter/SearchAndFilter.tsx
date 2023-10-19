import InformationSection from './InformationSection';
import FilterSection from './FilterSection';

type SearchAndFilterProps = {
    setSearchParams: (value: any) => void;
    selectSection: string;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    submitHandler: (values: any, onSubmitProps: any) => void;
    resetHandler: (values: any) => void;
    resetForm: (event: React.FormEvent<HTMLFormElement>) => void;
    submitSearchForm: (event: React.FormEvent<HTMLFormElement>) => void;
};

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
    setSearchParams,
    selectSection,
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
                    <form onSubmit={submitSearchForm} onReset={resetForm}>
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
                                    height="30"
                                    width="30"
                                />
                            </button>
                            <button
                                type="reset"
                                className={`p-2 w-fit ${
                                    searchQuery.length === 0 &&
                                    'pointer-events-none'
                                }`}
                            >
                                <img
                                    src="/images/CrossIcon.png"
                                    alt="reset"
                                    height="30"
                                    width="30"
                                />
                            </button>
                        </div>
                    </form>

                    {/* Information Section */}
                    <InformationSection
                        setSearchParams={setSearchParams}
                        selectSection={selectSection}
                    />
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
