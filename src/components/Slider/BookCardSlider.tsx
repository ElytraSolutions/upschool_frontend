import React from 'react';

type BookCardSliderProps = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    next: () => void;
    prev: () => void;
};
const BookCardSlider: React.FC<BookCardSliderProps> = ({
    page,
    setPage,
    next,
    prev,
}) => {
    return (
        <>
            <div className="flex flex-row items-center gap-4 w-fit">
                <div
                    className={`flex flex-row justify-center items-center h-7 w-7 rounded-full hover:cursor-pointer ${
                        page === 0
                            ? 'bg-gray-300 text-theme-color'
                            : 'bg-theme-color text-white '
                    } `}
                    onClick={() => {
                        page > 0 && setPage((page) => page - 1);
                        prev();
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </div>
                <div
                    className={`h-2 w-2 rounded-full ${
                        page === 0 ? 'bg-theme-color ' : 'bg-gray-300'
                    }`}
                ></div>
                <div
                    className={`h-2 w-2 rounded-full ${
                        page === 1 ? 'bg-theme-color ' : 'bg-gray-300'
                    }`}
                ></div>
                <div
                    className={`h-2 w-2 rounded-full ${
                        page === 2 ? 'bg-theme-color ' : 'bg-gray-300'
                    }`}
                ></div>
                <div
                    className={`h-2 w-2 rounded-full ${
                        page === 3 ? 'bg-theme-color ' : 'bg-gray-300'
                    }`}
                ></div>
                <div
                    className={`flex flex-row justify-center items-center h-7 w-7 rounded-full hover:cursor-pointer ${
                        page === 3
                            ? 'bg-gray-300 text-theme-color'
                            : 'bg-theme-color text-white '
                    } `}
                    onClick={() => {
                        page < 3 && setPage((page) => page + 1);
                        next();
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 "
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
