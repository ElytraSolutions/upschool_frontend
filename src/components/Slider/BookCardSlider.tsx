import React from 'react';

type BookCardSliderProps = {
    page: number;
    MaxPage: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
};
const BookCardSlider: React.FC<BookCardSliderProps> = ({
    page,
    MaxPage,
    setPage,
}) => {
    const pageArray = Array.from({ length: MaxPage + 1 }, () => '');
    return (
        <>
            <div className="flex flex-row items-center gap-2 xm:gap-4 w-fit">
                <div
                    className={`flex flex-row justify-center items-center h-5 xm:h-7 w-5 xm:w-7 rounded-full  ${
                        page === 0
                            ? 'bg-gray-300 text-theme-color'
                            : 'bg-theme-color text-white hover:cursor-pointer '
                    } `}
                    onClick={() => {
                        page > 0 && setPage((page) => page - 1);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 xm:w-5 xm:h-5 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </div>
                {/* Progress Dots */}
                {pageArray.map((_, index) => {
                    return (
                        <div
                            key={index}
                            className={`h-1 w-1 xm:h-2 xm:w-2 rounded-full ${
                                page === index
                                    ? 'bg-theme-color '
                                    : 'bg-gray-300'
                            }`}
                        ></div>
                    );
                })}

                <div
                    className={`flex flex-row justify-center items-center h-5 xm:h-7 w-5 xm:w-7 rounded-full ${
                        page === MaxPage
                            ? 'bg-gray-300 text-theme-color'
                            : 'bg-theme-color text-white hover:cursor-pointer '
                    } `}
                    onClick={() => {
                        page < MaxPage && setPage((page) => page + 1);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 xm:w-5 xm:h-5 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default BookCardSlider;
