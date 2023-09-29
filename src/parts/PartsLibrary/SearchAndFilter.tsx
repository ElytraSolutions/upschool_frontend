const SearchAndFilter = () => {
    return (
        <>
            <div className=" flex flex-col gap-4">
                {/* Search Section */}
                <div>
                    {/* Search Box */}
                    <div className="flex flex-row  divide-x divide-theme-color/50 border border-theme-color/50 rounded-md w-full">
                        <input
                            type="text"
                            placeholder="search by title, author name or country"
                            className=" p-4 focus:outline-none"
                        ></input>
                        <img
                            src="/images/Library/SearchIcon.png"
                            alt="search"
                            height="30px"
                            width="30px"
                            className="p-4"
                        />
                    </div>
                    {/* Information Section */}
                    <div></div>
                </div>
                {/* Filter Section */}
                <div></div>
            </div>
        </>
    );
};

export default SearchAndFilter;
