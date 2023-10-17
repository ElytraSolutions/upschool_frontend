type BookCardProps = {
    book: {
        id: number;
        image: string;
        writer: string;
        title: string;
        country: string;
    };
};
export const OldBookCard = ({ book }: BookCardProps) => {
    return (
        <div className=" rounded-lg text-sm lg:text-base overflow-hidden bg-white border border-gray-300  max-w-[270px] max-h-[355px] ">
            <img
                className="w-full max-h-[190px]"
                src={book.image}
                alt="logo"
                loading="lazy"
            />

            <div className="flex flex-col gap-1 m-4 max-h-[164] w-full">
                <div className="block text-gray-500  font-light">
                    {book.writer}
                </div>
                <div className="block text-base lg:text-lg">{book.title}</div>
                <div className="block text-gray-500 font-light">
                    {book.country}
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
    );
};
