import InformationSection from '../../parts/PartsLibrary/SearchAndFilter/InformationSection';
import FilterSection from '../../parts/PartsLibrary/SearchAndFilter/FilterSection';
import BooksDisplay from './BooksDisplay';

type LibrarySmallScreenProps = {
    selectSection: string;
    setSearchParams: (value: any) => void;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    submitHandler: (values: any, onSubmitProps: any) => void;
    resetHandler: (values: any) => void;
    resetForm: (event: React.FormEvent<HTMLFormElement>) => void;
    submitSearchForm: (event: React.FormEvent<HTMLFormElement>) => void;
    isFilterClicked: boolean;
    setIsFilterClicked: (value: boolean) => void;
};
const LibrarySmallScreen: React.FC<LibrarySmallScreenProps> = ({
    selectSection,
    setSearchParams,
    searchQuery,
    setSearchQuery,
    submitHandler,
    resetHandler,
    resetForm,
    submitSearchForm,
    isFilterClicked,
    setIsFilterClicked,
}) => {
    if (isFilterClicked) {
        // disables background scrolling when filterBox is opened
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    } else {
        // enables scrolling when filterBox is closed
        document.body.style.overflow = 'unset';
    }
    return (
        <>
            <div className="h-full w-full bg-gray-200 text-font-color ">
                <div className="relative flex flex-row justify-center px-2 py-2 xs:py-4 h-full w-full ">
                    {/* search box and filter box */}
                    <div
                        className={`flex flex-col items-center gap-3 overflow-auto ${
                            isFilterClicked &&
                            'fixed z-10 bg-gray-200 shadow-lg shadow-theme-color rounded-md p-2 '
                        } max-h-[85dvh] w-[95%] xs:w-11/12`}
                    >
                        {/* search box */}
                        <div
                            className={`h-fit w-full ${
                                isFilterClicked && 'bg-white rounded-lg'
                            } `}
                        >
                            <div className="flex flex-row gap-2 items-center h-full w-full">
                                <form
                                    onReset={resetForm}
                                    onSubmit={submitSearchForm}
                                    className={`flex flex-row items-center rounded-lg ${
                                        isFilterClicked
                                            ? 'border border-theme-color/50'
                                            : 'bg-white'
                                    }   h-full w-full`}
                                >
                                    {/* Search Box */}
                                    <div className=" flex items-center py-1 sm:py-3 px-2 sm:px-5  w-full ">
                                        <input
                                            type="text"
                                            placeholder="search by title, author name or country"
                                            className=" autofill:bg-white  focus:outline-none  w-full text-sm sm:text-base"
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
                                    <button
                                        type="submit"
                                        className="flex  flex-row  items-center p-0.5 md:p-2 w-fit h-full"
                                    >
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
                                    } flex items-center h-full w-fit`}
                                >
                                    <button
                                        type="button"
                                        className="h-full w-full"
                                        onClick={() => {
                                            setIsFilterClicked(true);
                                        }}
                                    >
                                        <img
                                            src="/images/Library/btnFilter.png"
                                            alt="Filter"
                                            height="50px"
                                            width="50px"
                                            loading="lazy"
                                        />
                                    </button>
                                </div>
                            </div>
                            {isFilterClicked && (
                                <InformationSection
                                    setSearchParams={setSearchParams}
                                    setIsFilterClicked={setIsFilterClicked}
                                    selectSection={selectSection}
                                />
                            )}
                        </div>
                        {/* Filter box */}
                        {isFilterClicked && (
                            <FilterSection
                                submitHandler={submitHandler}
                                resetHandler={resetHandler}
                            />
                        )}
                    </div>
                </div>
                {/* Books Display Section */}
                <div className="flex justify-center w-full  py-2 sm:py-3 md:py-5">
                    <BooksDisplay
                        selectSection={selectSection}
                        setSearchParams={setSearchParams}
                    />
                </div>
            </div>
        </>
    );
};

export default LibrarySmallScreen;
