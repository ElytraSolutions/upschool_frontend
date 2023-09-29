import React, { useState } from 'react';
import NewBookCard from '../../components/Cards/NewBookCard';
import BookCardSlider from '../../components/Slider/BookCardSlider';

type SectionProps = {
    topic: string;
    books: {
        id: number;
        image: string;
        writer: string;
        title: string;
        country: string;
        categories: string[];
    }[];
};
const Section: React.FC<SectionProps> = ({ topic, books }) => {
    const [page, setPage] = useState(0);
    const currentIndex = page;
    return (
        <>
            <div className="flex flex-col gap-2 text-theme-color">
                {/* Header */}
                <div className="flex flex-row gap-2  items-center justify-between p-2 md:pl-7">
                    {/* Title */}
                    <div className="flex flex-row  items-center gap-4 w-fit font-semibold">
                        <p className="text-2xl lg:text-3xl">{topic}</p>
                        {/* TODO determine where it goes when pressed */}
                        <p className="underline underline-offset-4 text-sm lg:text-base ">
                            View All {`>`}
                        </p>
                    </div>
                    {/* Slider component */}
                    <BookCardSlider page={page} setPage={setPage} />
                </div>
                {/* Books */}
                <div className="grid grid-cols-3 lg:gap-3 xl:gap-6 2xl:gap-10 w-fit p-2 md:pl-7">
                    {/* it slices books array and get only three elements to display varying with currentIndex */}
                    {books
                        .slice(currentIndex, currentIndex + 3)
                        .map((book, index) => (
                            <div key={index} className="">
                                <NewBookCard book={book} />
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default Section;
