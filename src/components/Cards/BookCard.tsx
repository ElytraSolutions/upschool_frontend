import React from 'react';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';

type BookCardProps = {
    book: {
        id: number;
        image: string;
        writer: string;
        title: string;
        country: string;
        categories: string[];
    };
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    const { isTabWidth } = useScreenWidthAndHeight();
    return (
        <>
            <div className=" flex flex-col justify-between rounded-lg  text-sm lg:text-base bg-white border border-gray-300 text-theme-color  w-[195px] xss:w-[250px] xm:w-[235px] sm:w-[270px] h-full ">
                <div className="">
                    <img
                        className="rounded-t-lg w-full h-32 sm:h-44"
                        src={book.image}
                        alt="book"
                        loading="lazy"
                        width="270px"
                        height="180px"
                    />
                    <div className="flex flex-col gap-1 p-4 h-fit w-fit">
                        <p className="font-semibold">{book.writer}</p>
                        <div className="flex flex-row items-center  bg-theme-color py-1  px-3 rounded-xl w-fit h-full ">
                            <p className=" text-white font-light text-center text-sm ">
                                {book.country}
                            </p>
                        </div>
                        <p className=" font-bold text-sm lg:text-base font-lexend">
                            {book.title}
                        </p>
                        {!isTabWidth && (
                            <div className="flex flex-row items-center text-black text-sm h-full">
                                <p className="font-semibold">
                                    Values this book explores:{' '}
                                    {book.categories.map((category, index) => (
                                        <span
                                            key={index}
                                            className="font-normal"
                                        >
                                            {category}{' '}
                                            {index <
                                                book.categories.length - 1 &&
                                                ','}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                {/*  TODO link to read book */}
                <div className="px-4 py-1">
                    <button
                        type="button"
                        className="p-3 my-1 bg-[#BB3860] text-white text-sm hover:cursor-pointer w-full"
                    >
                        View Book
                    </button>
                </div>
            </div>
        </>
    );
};

export default BookCard;
