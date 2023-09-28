const NewBookCard = () => {
    return (
        <>
            <div className=" rounded-lg text-sm lg:text-base overflow-hidden bg-white border border-gray-300  max-w-[270px] max-h-[450px] ">
                <img
                    className="w-full max-h-[190px] rounded-lg"
                    src="https://source.unsplash.com/NO00uszgx_0"
                    alt="logo"
                    loading="lazy"
                />

                <div className="flex flex-col gap-1 m-4 max-h-[164] w-full">
                    <div className="block text-gray-500  font-light">
                        {'Susannah'}
                    </div>
                    <div className="block text-base lg:text-lg">
                        {'Imagine'}
                    </div>
                    <div className="block text-gray-500 font-light">
                        {'Australia'}
                    </div>
                    {/*  TODO link to read book */}
                    <button
                        type="button"
                        className="p-3 my-1 bg-red-upschool text-white text-xs md:text-sm hover:cursor-pointer w-fit"
                    >
                        Read More
                    </button>
                </div>
            </div>
        </>
    );
};

export default NewBookCard;
