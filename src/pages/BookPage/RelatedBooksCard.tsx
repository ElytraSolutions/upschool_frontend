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
            <div className="flex flex-col rounded-xl  text-sm lg:text-base bg-white text-theme-color  w-[100px] xss:w-[150px] xm:w-[175px] sm:w-[200px] h-full overflow-hidden">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="">
                            <img
                                className="w-full h-32 rounded-xl"
                                src={book.image}
                                alt="book"
                                loading="lazy"
                                width="10px"
                                height="10px"
                            />
                        </div>
                        <div className="font-bold ml-2 mt-2">{book.writer}</div>
                        <div className="text-xl font-black ml-2">
                            {book.title}
                        </div>
                    </div>
                    <div>
                        <div className="ml-2">
                            <div className="bg-gray-100 inline-block px-2 rounded-xl mt-1">
                                {book.country}
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center mx-2 mb-3">
                            <button
                                className="h-10 bg-[#BB3860] text-white text-sm hover:cursor-pointer w-full"
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
