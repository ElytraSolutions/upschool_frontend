export const BookCard = () => {
    return (
        <div className=" rounded-lg text-sm lg:text-base grid  grid-rows-5 overflow-hidden bg-white max-h-fit border border-gray-300  w-80">
            <img
                className="row-span-3 w-full h-full"
                src="https://source.unsplash.com/WEv55byHNkk"
                alt="logo"
                loading="lazy"
            />

            <div className="row-span-2 flex flex-col gap-1 m-4">
                <div className="block text-gray-500  font-light">Susannah</div>
                <div className="block text-lg lg:text-xl">Imagine</div>
                <div className="block text-gray-500 font-light">Australia</div>
                <button
                    type="button"
                    className="p-3 my-1 bg-red-upschool text-white text-xs md:text-sm hover:cursor-pointer w-fit"
                >
                    Read More
                </button>
            </div>
        </div>
    );
};
