import React from 'react';
import { useNavigate } from 'react-router-dom';

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

const RelatedBooksCard: React.FC<BookCardProps> = ({ book }) => {
    const navigate = useNavigate();

    const convertToSlug = (title: string) => {
        const words = title.toLowerCase().split(' ');
        const slugTitle = words.join('-');

        return slugTitle;
    };

    const handleButtonClick = () => {
        const slugTitle = convertToSlug(book.title);
        navigate(`/library/${slugTitle}`, { state: book });
    };

    return (
        <>
            {/*w-[100px] xss:w-[150px] xm:w-[175px] sm:w-[200px] */}
            <div className="flex flex-col rounded-xl  text-sm lg:text-base bg-white text-theme-color  w-[105px] xs:w-[137px] xm:w-[180px] sm:w-[160px] lg:w-[200px] xl:w-[169px] 1450:w-[200px] h-full overflow-hidden">
                <div className="flex flex-col justify-between md:h-full">
                    <div>
                        <div className="">
                            <img
                                className="w-full h-[80px] xm:h-32 sm:h-28 md:h-28 lg:h-32 rounded-xl"
                                src={book.image}
                                alt="book"
                                loading="lazy"
                                width="10px"
                                height="10px"
                            />
                        </div>
                        <div className=" font-semibold xm:font-bold ml-2 mb-[-3px] xs:mb:0 xm:mt-1 lg:mt-2 text-[0.4rem] xs:text-[0.6rem] xm:text-xs sm:text-[0.6rem] md:text-xs lg:text-sm xl:text-xs 1450:text-sm">
                            {book.writer}
                        </div>
                        <div className="font-bold xm:font-black mx-2 mt-[-3px] mb-[-3px] xs:mt-0 xs:mb-0 sm:mt-1 text-[0.6rem] xs:text-[0.8rem] xm:text-lg sm:text-sm lg:text-lg xl:text-md 1450:text-xl line-clamp-1 lg:line-clamp-none">
                            {book.title}
                        </div>
                    </div>
                    <div>
                        <div className="ml-2">
                            <div className="bg-gray-100 inline-block px-1 xs:px-2 rounded-xl xm:mt-1 lg:mt-3 xl:mt-2 1450:mt-3 text-[0.4rem] xs:text-[0.5rem] xm:text-[0.7rem] sm:text-[0.6rem] md:text-[0.6rem] lg:text-sm xl:text-xs 1450:text-sm ">
                                {book.country}
                            </div>
                        </div>
                        <div className=" flex justify-center mx-2 mb-2 md:mb-3 mt-1 xs:mt-2 xm:mt-3 sm:mt-2 md:mt-3 lg:mt-5 xl:mt-3 1450:mt-5 rounded overflow-hidden">
                            <button
                                className="bg-red-upschool text-white text-[0.5rem] xs:text-xs xm:text-sm hover:cursor-pointer w-full h-5 xs:h-6 xm:h-8 sm:h-10"
                                onClick={handleButtonClick}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RelatedBooksCard;
