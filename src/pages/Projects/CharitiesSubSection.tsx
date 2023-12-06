import resolveImgURL from '../../utlis/resolveImgURL';
const CharitiesSubSection = ({ charity }) => {
    return (
        <>
            <div className="flex flex-col mx-5 my-3 sm:m-5">
                <a
                    href={charity.website}
                    // "w-24 h-24 xs:w-32 xs:h-32 md:w-36 md:h-36 xl:w-40 xl:h-40 overflow-hidden border border-gray-500 rounded-md hover:scale-105 transition duration-300"
                    className="overflow-hidden border border-gray-500 rounded-md hover:scale-105 transition duration-300"
                >
                    <img src={resolveImgURL(charity.image)} />
                </a>
                {/* "w-20 xs:w-32 ml-3 sm:ml-4 mt-4 text-[0.5rem] xs:text-[0.6rem]" */}
                <div className="w-full mt-4 text-[0.5rem] md:text-[0.6rem] lg:text-[0.7rem] 2xl:text-[0.8rem] capitalize text-center">
                    {charity.name}
                </div>
            </div>
        </>
    );
};

export default CharitiesSubSection;
