import React from 'react';
// import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import { useNavigate } from 'react-router-dom';
import resolveImgURL from '../../utlis/resolveImgURL';

type BookCardProps = {
    book: {
        id: number;
        thumbnail: string;
        slug: string;
        first_name: string;
        title: string;
        country: string;
        categories: {
            name: string;
            id: number;
        }[];
    };
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    // const { isTabWidth } = useScreenWidthAndHeight();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/library/${book.slug}`, { state: book });
    };

    return (
        <>
            <div className=" flex flex-col justify-between rounded-lg  text-sm lg:text-base bg-white border border-gray-300 text-theme-color  w-[97%] xm:w-[235px] sm:w-[270px] h-full ">
                <div className="">
                    {/* TODO imgage dimesion needs to be determined  */}
                    <img
                        className="rounded-t-lg h-60 xm:h-32 sm:h-44"
                        src={resolveImgURL(book.thumbnail || 'book')}
                        alt="book"
                        loading="lazy"
                        width="720"
                        height="405"
                    />
                    <div className="flex flex-col gap-1 px-4 py-2 sm:p-4  h-fit w-fit">
                        <p className="font-bold font-lexend">
                            {book.first_name}
                        </p>
                        <div className="flex flex-row items-center  bg-theme-color py-1  px-3 rounded-xl w-fit h-full ">
                            <p className=" text-white font-light text-center text-sm ">
                                {book.country}
                            </p>
                        </div>
                        <p className=" font-bold text-base font-lexend">
                            {book.title}
                        </p>

                        <div className="flex flex-row items-center text-theme-color text-sm h-full">
                            <p className="font-semibold">
                                Values this book explores:{' '}
                                {book.categories.map((category, index) => (
                                    <span key={index} className="font-normal">
                                        {category.name}{' '}
                                        {index < book.categories.length - 1 &&
                                            ','}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
                {/*  TODO link to read book */}
                <div className="px-4 py-1">
                    <button
                        type="button"
                        className="p-3 my-1 bg-red-upschool text-white text-sm hover:cursor-pointer w-full"
                        onClick={handleButtonClick}
                    >
                        View Book
                    </button>
                </div>
            </div>
        </>
    );
};

export default BookCard;
