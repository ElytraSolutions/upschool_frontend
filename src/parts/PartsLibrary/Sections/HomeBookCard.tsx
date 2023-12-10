import React from 'react';
// import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import { useNavigate } from 'react-router-dom';
import resolveImgURL from '../../../utlis/resolveImgURL';

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

const HomeBookCard: React.FC<BookCardProps> = ({ book }) => {
    // const { isTabWidth } = useScreenWidthAndHeight();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/library/${book.id}`, { state: book });
    };

    return (
        <div className="relative flex flex-col gap-2 rounded-lg  text-sm lg:text-base bg-white border border-gray-300 text-theme-color flex-shrink-0 flex-grow-0 w-[80%] sm:w-[40%]  xl:w-[32%] xlarge:w-[23%] h-[500px] ">
            <img
                className="rounded-t-lg h-[40%] object-cover"
                src={resolveImgURL(book.thumbnail || '/images/Books/book1.png')}
                alt="book"
                loading="lazy"
                width="720"
                height="405"
            />
            <div className="flex flex-col gap-1 lg:gap-2 px-4 py-2 sm:p-4  max-h-[40%]">
                <p className=" font-bold text-base font-lexend">{book.title}</p>

                <div className="flex flex-row items-center  bg-[#F0F0F0] py-1  px-3 rounded-xl w-fit h-full ">
                    <p className=" text-[#242254] font-bold text-center text-sm ">
                        {book.country.substring(0, 25)}{' '}
                        {book.country.length > 25 && '...'}
                    </p>
                </div>
                <p className="font-semibold font-lexend text-[0.8rem]">
                    {book.first_name}
                </p>

                <div className="flex flex-row items-center text-theme-color text-sm h-full">
                    <p className="font-semibold line-clamp-3">
                        Values this book explores:{' '}
                        {book.categories.map((category, index) => (
                            <span key={index} className="font-normal ">
                                {index <= 4 && category.name}
                                {index < 3 && ', '}
                            </span>
                        ))}
                        {book.categories.length > 4 && '...'}
                    </p>
                </div>
            </div>
            <div className="absolute bottom-3 w-full px-3 ">
                <button
                    type="button"
                    className="p-3 my-1 bg-red-upschool text-white text-sm hover:cursor-pointer w-full"
                    onClick={handleButtonClick}
                >
                    View Book
                </button>
            </div>
        </div>
    );
};

export default HomeBookCard;
