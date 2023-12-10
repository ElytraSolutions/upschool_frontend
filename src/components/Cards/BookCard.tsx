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
            <div className=" relative flex flex-col rounded-lg  text-sm lg:text-base bg-white border border-gray-300 text-theme-color  mx-auto w-[90%] xm:w-[235px] sm:w-[270px] xs:h-[450px] h-[500px] xxlarge:h-[500px] ">
                <div className="">
                    {/* TODO imgage dimesion needs to be determined  */}
                    <img
                        className="rounded-t-lg h-60 xm:h-32 sm:h-44"
                        src={resolveImgURL(
                            book.thumbnail || '/images/Books/book1.png',
                        )}
                        alt="book"
                        loading="lazy"
                        width="720"
                        height="405"
                    />
                    <div className="flex flex-col gap-1 lg:gap-2 px-4 py-2 sm:p-4  h-fit w-fit">
                        <p className=" font-bold text-base font-lexend h-[3rem]">
                            {book.title}
                        </p>

                        <div className="flex flex-row items-center  bg-[#F0F0F0] py-1  px-3 rounded-xl w-fit h-full ">
                            <p className=" text-[#242254] font-bold text-center text-sm ">
                                {book.country.substring(0, 25)}{' '}
                                {book.country.length > 25 && '...'}
                            </p>
                        </div>
                        <p className="font-semibold font-lexend text-[0.8rem]">
                            {book.first_name}
                        </p>

                        <div className="flex flex-row items-center text-theme-color text-sm h-fit">
                            <p className="font-semibold line-clamp-3">
                                Values this book explores:{' '}
                                {book.categories.map((category, index) => (
                                    <span key={index} className="font-normal">
                                        {index <= 4 && category.name}
                                        {index < 3 && ', '}
                                    </span>
                                ))}
                                {book.categories.length > 4 && '...'}
                            </p>
                        </div>
                    </div>
                </div>
                {/*  TODO link to read book */}
                <div className="absolute bottom-3 w-full px-3">
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
