const CharitiesSubSection = ({ charity }) => {
    const { name, logo, url } = charity;

    return (
        <>
            <div className="flex flex-col mx-5 my-3 sm:m-5">
                <a
                    href={url}
                    // "w-24 h-24 xs:w-32 xs:h-32 md:w-36 md:h-36 xl:w-40 xl:h-40 overflow-hidden border border-gray-500 rounded-md hover:scale-105 transition duration-300"
                    className="overflow-hidden border border-gray-500 rounded-md hover:scale-105 transition duration-300"
                >
                    <img src={logo} />
                </a>
                {/* "w-20 xs:w-32 ml-3 sm:ml-4 mt-4 text-[0.5rem] xs:text-[0.6rem]" */}
                <div className="w-9/12 ml-3 sm:ml-4 mt-4 text-[0.4rem] sm:text-[0.5rem]">
                    {name}
                </div>
            </div>
        </>
    );
};

export default CharitiesSubSection;
