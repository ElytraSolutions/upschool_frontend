const SearchAndFilter = () => {
    return (
        <>
            <div className=" flex flex-col gap-4 text-theme-color">
                {/* Search Section */}
                <div className="">
                    {/* Search Box */}
                    <div className="flex flex-row divide-x divide-theme-color/50 border border-theme-color/50  rounded-md text-sm 2xl:text-base w-full">
                        <div className=" flex items-center p-2 w-full ">
                            <input
                                type="text"
                                placeholder="search by title, author name or country"
                                className="focus:outline-none  w-full"
                            ></input>
                        </div>

                        <div className="p-2 w-fit">
                            <img
                                src="/images/Library/SearchIcon.png"
                                alt="search"
                                height="30px"
                                width="30px"
                                className=""
                            />
                        </div>
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
